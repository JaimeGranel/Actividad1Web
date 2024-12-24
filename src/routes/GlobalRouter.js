import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "../views/Loader";
import Home from "../views/Home";
import "../styles/GlobalStyles.css";
import Product from "../views/Product";
import Header from "../Components/Header";
import { CartProvider } from "../hooks/useCart";

function GlobalRouter() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Loader />} />
                    <Route
                        path="/home"
                        element={
                            <Layout>
                                {(searchTerm, setSearchTerm) => (
                                    <Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                                )}
                            </Layout>
                        }
                    />
                    <Route
                        path="/book/:id"
                        element={
                            <Layout>
                                {() => <Product />}
                            </Layout>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

const Layout = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {children(searchTerm, setSearchTerm)}
        </>
    );
};

const NotFound = () => (
    <div>
        <h1>404 - Página no encontrada</h1>
    </div>
);

export default GlobalRouter;
