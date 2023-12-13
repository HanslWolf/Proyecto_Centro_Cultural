import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from 'react';

/*import './Galeria.css';*/
function Galeria(){
  return(
    <div>
     <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/imagenes/banner.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="imagenes/coro.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="danza.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>

  )
    
  }
  export default Galeria;
