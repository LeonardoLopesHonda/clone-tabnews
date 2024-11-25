const foto_vaquinha = require("../images/vaquinha.png");

function Home() {
    return (
        <div>
            <img src={foto_vaquinha.default.src} alt="Vaquinha"/>
            <h1>Compra um petisco para vaquinha</h1>
        </div>
    );
}

export default Home;