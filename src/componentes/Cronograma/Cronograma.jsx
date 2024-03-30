import "./Cronograma.css";
import cronograma from "../../assets/images/cronograma.png"


function Cronograma() {
  return (
    <div>
      <div className="titulo"><h2>Cronograma</h2></div>
      <div className="cronograma"> <img src={cronograma} alt="cronograma" /></div>
    </div>)
}

export default Cronograma;