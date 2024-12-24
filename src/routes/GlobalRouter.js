import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "../views/Loader";
import Home from "../views/Home";
import "../styles/GlobalStyles.css";
import Product from "../views/Product";
import Header from "../Components/Header";
import { CartProvider } from "../hooks/useCart";
import {BookCatalogProvider} from "../hooks/useBookCatalog";

function GlobalRouter() {
    return (
        <BookCatalogProvider>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Loader />} />
                        <Route
                            path="/home"
                            element={<HomeWithSearch />}
                        />
                        <Route
                            path="/book/:id"
                            element={
                                <Layout>
                                    <Product />
                                </Layout>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </BookCatalogProvider>
    );
}

const Layout = ({ children, searchTerm, setSearchTerm }) => (
    <>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <main>{children}</main>
    </>
);

const HomeWithSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
            <Home searchTerm={searchTerm} />
        </Layout>
    );
};

const NotFound = () => (
    <div>
        <h1>404 - Página no encontrada</h1>
    </div>
);

export default GlobalRouter;
