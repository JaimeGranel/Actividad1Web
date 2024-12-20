import React from 'react';
import {Link} from "react-router-dom";
import Redirection from "../hooks/Redirection";

function Loader(){

    Redirection("/home",3000);

    return(
        <div className="load">
            <Link to="/home">
            <h1>Bienvenido, esta siendo redirigido redirigido</h1>
            </Link>
        </div>
    );

}
export default Loader;