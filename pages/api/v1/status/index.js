import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const databaseName = process.env.POSTGRES_DB;
  console.log(`Banco de dados selecionado: ${databaseName}`);
  const result = [
    (await database.query("SHOW server_version;")).rows[0].server_version,
    (await database.query("SHOW max_connections;")).rows[0].max_connections,
    (
      await database.query({
        text: "SELECT COUNT(*)::int as opened_connections FROM pg_stat_activity WHERE datname = $1",
        values: [databaseName],
      })
    ).rows[0].opened_connections,
  ];

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: result[0],
        max_connections: parseInt(result[1]),
        opened_connections: result[2],
      },
    },
  });
}

export default status;
