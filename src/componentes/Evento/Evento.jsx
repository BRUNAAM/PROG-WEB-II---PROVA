import "./Evento.css";
import foto1 from "../../assets/images/foto1.jpg"
import parcerias from "../../assets/images/parcerias.png"
function Evento() {
    return (
        <div>
            <div className="titulo"><h2>Evento</h2></div>
            <br /><br />
            <h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint saepe hic a error eaque autem quibusdam! Sapiente, consectetur obcaecati tempore quae repellat iusto, harum, ut hic ullam veniam exercitationem!</p></h5>
            <div className="evento">
                <div className="quadro1"> <img src={foto1} alt="foto1" /></div>
                <div className="quadro2">
                    <p>
                        <h2>CONTEUDO 1
                            <br /><br /><br />
                            CONTEUDO 2
                            <br /><br /><br />
                            CONTEUDO 3
                        </h2>
                        <br /><br />
                        <h3><a href="#">Inscreva-se</a></h3>
                    </p>
                </div>
            </div>
            <div className="titulo2"><h2>Nossas Parcerias</h2></div>
            <br />
            <div className="parcerias">
                <div className="parcerias"> <img src={parcerias} alt="parcerias" /></div>
            </div>
            <br /><br />
        </div>

    )
}

export default Evento;