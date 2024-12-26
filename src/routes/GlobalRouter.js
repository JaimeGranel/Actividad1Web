import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "../views/Loader";
import Home from "../views/Home";
import Product from "../views/Product";
import Checkout from "../views/Checkout";
import Header from "../Components/Header";
import { CartProvider } from "../hooks/useCart";
import { BookCatalogProvider } from "../hooks/useBookCatalog";
import "../styles/GlobalStyles.css";

function GlobalRouter() {
    return (
        <BookCatalogProvider>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Loader />} />
                        <Route path="/home" element={<HomeWithSearch />} />
                        <Route path="/book/:id" element={<ProductLayout />} />
                        <Route path="/checkout" element={<CheckoutLayout />} />
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

const ProductLayout = () => (
    <Layout>
        <Product />
    </Layout>
);

const CheckoutLayout = () => (
    <Layout>
        <Checkout />
    </Layout>
);

const NotFound = () => (
    <div>
        <h1>404 - Página no encontrada</h1>
    </div>
);

export default GlobalRouter;
