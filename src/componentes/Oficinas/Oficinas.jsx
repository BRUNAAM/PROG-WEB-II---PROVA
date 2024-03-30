import "./Oficinas.css";
import arara from "../../assets/images/oficinas/arara.png"
import cachorro from "../../assets/images/oficinas/cachorro.jpg"



function Oficinas() {
    return (
        <div>
            <div className="titulo"><h2>Oficinas</h2></div>
            <div className="oficinas">
                <div className="oficina1">
                    <div className="conteudo"><p><h5></h5></p></div>
                    <br /><br />
                    <img src={arara} alt="arara" />
                </div>
                <div className="oficina2">
                    <div className="conteudo"><p><h5></h5></p></div>
                    <br /><br />
                    <img src={cachorro} alt="cachorro" />
                </div>
            </div>

        </div>)
}

export default Oficinas;