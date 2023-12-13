import "./header.css";
/*import Inicio from "./Cuerpo/Inicio";
import Registrate from "./Cuerpo/Registrate.jsx";
import Eventos from "./Cuerpo/Eventos.jsx";
import Contacto from "./Cuerpo/Contacto.jsx";
import {Link} from "react-router-dom"*/
function Cabezal(){
    return(
        <div className="cabezal">
            <div>
                <img src="/imagenes/logo_umsa.jpg" alt="" />
            </div>
            <div>
            <h1>Centro Cultural UMSA</h1>

            </div>      
            <div>
                 <ul class="nav nav-tabs">
                
                <li class="nav-item">
                    
                    <a class="nav-link active" aria-current="page" href="#">Registrate</a>
                    
                </li>
                <li class="nav-item">
                    
                    <a class="nav-link active" aria-current="page" href="#">Eventos</a>
                    
                </li>
                <li class="nav-item">
            
                    <a class="nav-link" href="#">Galeria</a>
                    
                </li>
                <li class="nav-item">
                    
                    <a class="nav-link" href="#">contacto</a>
                    
                </li>
                <li class="nav-item">
                    
                    <a class="nav-link disabled" aria-disabled="true">Enlaces</a>
                
                </li>
               
                </ul>
            </div>
        </div>
    );

}
export default Cabezal;