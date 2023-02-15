import React from "react";



const NavBar =() => {
    return <nav class="navbar navbar-expand-lg bg-body-tertiary p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 bs-primary-fgb">
        <div class="container-fluid">
      <a class="navbar-brand" href="#">Light-Vel S.A.</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">INICIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PRODUCTOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SOBRE NOSOTROS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">FORMAS DE PAGO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTACTO</a>
          </li>
        </ul>
        <div class="">
        <img src="./NavBar/Cartwidget.jpg" class="" alt="..."></img>  
          
        </div>
      </div>
    </div>
  </nav>

};

export default NavBar;
