const foto_vaquinha_1 = require("../assets/images/vaquinha.png");
const foto_vaquinha_2 = require("../assets/images/vaquinha_2.jpg");
const foto_vaquinha_3 = require("../assets/images/vaquinha_3.jpg");

function Home() {
    return (
        <main>
            <style global jsx>{`
                * {
                    margin: 0;
                    padding: 0;
                }

                html {
                    width: 100dvw:
                    height: 100dvh;
                }

                h1 {
                    text-align: center;
                    margin-bottom: 2rem;
                }

                section {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: auto;
                }

                img {
                    width: 200px;
                    height: 300px;
                    object-fit: contain;

                    transition: all .5s ease;
                }

                img:hover {
                    scale: 1.025;
                }
            `}</style>
            <h1>Compra um petisco para vaquinha</h1>
            <section>
                <div>
                    <img src={foto_vaquinha_2.default.src} alt="Vaquinha"/>
                </div>
                <div>
                    <img src={foto_vaquinha_1.default.src} alt="Vaquinha"/>
                </div>
                <div>
                    <img src={foto_vaquinha_3.default.src} alt="Vaquinha"/>
                </div>
            </section>
            <section>
                <h2>Ele gosta de:</h2>
                <img src="https://www.pedigree.com.br/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2401/files/2024-07/PEDIGREE%20ADULTO%20CARNE%20100g.png" />
            </section>
        </main>
    );
}

export default Home;