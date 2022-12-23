import React from "react";
import logoAvalu from '../logoAvalu.png';

const CompNavbar =() =>{
    return (
        <div>
            <header className="container">
        
            <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom ">

            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src="https://misiontic2022.mintic.gov.co/mt2022/assets/assets/images/logo-mision.png" style={{ height: 32 }} alt='logo' />
            <span className="fs-4">Website</span>
            </a>

            <ul className="nav nav-pills">
            <li className="nav-item"><a href="/" className="nav-link ">Inicio</a></li>
            <li className="nav-item"><a href="/infobasica" className="nav-link">Información Básica</a></li>
            <li className="nav-item"><a href="/usuarios" className="nav-link ">Usuarios</a></li>
            <li className="nav-item"><a href="/proveedores" className="nav-link">Proveedores</a></li>
            </ul>
            </nav>
            <img src={logoAvalu} className="App-logo rounded mx-auto d-block" alt="logo" />
                
        </header>
        </div>
    )
}

export default CompNavbar;
