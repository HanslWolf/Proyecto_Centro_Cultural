import {Outlet,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
const Layout = () => {
    return (
      <div className="App">
        <section>
          <img
            src="public/images/descarga"
            alt=""
            className="imagen-galeria"
          />
        </section>
        <section>
          <nav>
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/Galeria">Galeria</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/Eventos">Eventos</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/Contacto">Contacto</NavLink>
              </li>
            </ul>
          </nav>
        </section>
        <hr />
        <Outlet />
      </div>
    );
  }
  