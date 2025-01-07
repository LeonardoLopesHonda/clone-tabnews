test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
});

test("GET to /api/v1/status should have connections and version data", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  const database = responseBody.dependencies.database;

  // console.log([
  //   database.version,
  //   database.max_connections,
  //   database.opened_connections,
  // ]);

  // Version should always be a string and the value used in the container
  expect(database.version).toBeDefined();
  expect(typeof database.version).toBe("string");
  expect(database.version).toBe("16.0"); // version provided in the docker container

  expect(database.max_connections).toBeDefined();
  expect(typeof database.max_connections).toBe("number");
  expect(database.max_connections).toBeGreaterThan(0);

  expect(database.opened_connections).toBeDefined();
  expect(typeof database.opened_connections).toBe("number");
  expect(database.opened_connections).toEqual(1);
  expect(database.opened_connections).toBeLessThanOrEqual(
    database.max_connections,
  );
});
