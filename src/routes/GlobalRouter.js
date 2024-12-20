import React, {createContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from "../views/Loader";




function GlobalRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Loader/>}/>
                <Route path="/home" element={<Alert/>}/>
                <Route path="*" element={<Alert/>}/>
            </Routes>
        </BrowserRouter>
    );
}
const Alert = ()=>(
    <>
        <h1>Alertar</h1>
    </>
);
export default GlobalRouter;

