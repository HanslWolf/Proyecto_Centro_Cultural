import "./App.css";
import Card from "./Componentes/Card";
import ShowHide from "./Componentes/ShowHide";
import Cabezal from "./headfoot/cabezal";
import Pie from "./headfoot/Pie";
import Inicio from "./Cuerpo/Inicio";
/*import Inicio from "./Cuerpo/Inicio";
import Registrate from "./Cuerpo/Registrate.jsx";
import Eventos from "./Cuerpo/Eventos.jsx";
import Contacto from "./Cuerpo/Contacto.jsx";
*/
function App(){

  return (
  <div className="App">
    <Cabezal />
    
    <Inicio />
   
    <Pie />

  </div>
  );
}
export default App;