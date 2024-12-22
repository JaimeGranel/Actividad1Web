import React from 'react';
import {Link} from "react-router-dom";
import Redirection from "../hooks/Redirection";
import "../styles/GlobalStyles.css"
import "../styles/Loader.css"
function Loader(){

    Redirection("/home",3000);

    return (
        <div className="landing">
            <div className="landing__content">
                <h1 className="landing__title">¡Bienvenido a Relatos de Papel!</h1>
                <p className="landing__subtitle">Explora, descubre y disfruta de nuestra colección de libros.</p>
                <p className="landing__redirect">Serás redirigido a la página principal en unos segundos...</p>
            </div>
        </div>
    );

}

export default Loader;