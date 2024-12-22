import React, {createContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from "../views/Loader";
import Home from "../views/Home";
import "../styles/GlobalStyles.css"



function GlobalRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Loader/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="*" element={<Alert/>}/>
            </Routes>
        </BrowserRouter>
    );
}
const Alert = ()=>(
    <>
        <body>
        <h1>Alertar</h1>
        </body>
    </>
);
export default GlobalRouter;

