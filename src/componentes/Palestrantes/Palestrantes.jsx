import "./Palestrantes.css";
import gato from "../../assets/images/gato.jpg"

function Palestrantes() {
    return (
        <div>
            <div className="titulo"><h2>Palestrantes</h2></div>
            <br />
            <div className="palestrantes">
                <div className="p1"><img src={gato} alt="gato" /></div>
            </div>
            <br /><br />
            <div className="cronograma">
                <h3><a href="#">Cronograma</a></h3>
            </div>
            <br /><br />

        </div>)
}

export default Palestrantes;