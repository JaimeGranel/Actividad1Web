import {createContext, useContext, useEffect, useState} from "react";
import LibroEje from "../Imagenes/LibroEje.png";

const BookCatalogContext = createContext();

export const BookCatalogProvider = ({ children }) => {
    const [bookCatalog, setBookCatalog] = useState([
        {id:0,name:"Manual de cocina",description:"Explora los secretos del mar.", precio:45.64,stock:89,image:LibroEje},
        {id:1,name:"Descubriendo la mente",description:"Todo sobre organismos vivos.", precio:26.75,stock:187,image:LibroEje},
        {id:2,name:"Cultura milenaria",description:"Cómo funciona el cerebro humano.", precio:38.06,stock:187,image:LibroEje},
        {id:3,name:"El arte de escribir",description:"Aprende ciencia de forma sencilla.", precio:42.36,stock:73,image:LibroEje},
        {id:4,name:"Historia y verdad",description:"Una guía para combinar colores.", precio:44.47,stock:65,image:LibroEje},
        {id:5,name:"Ficción épica",description:"Recetas para principiantes y expertos.", precio:45.44,stock:22,image:LibroEje},
        {id:6,name:"Ciencia divertida",description:"Una guía para combinar colores.", precio:28.89,stock:146,image:LibroEje},
        {id:7,name:"Mundos distantes",description:"Innovaciones tecnológicas explicadas.", precio:8.74,stock:127,image:LibroEje},
        {id:8,name:"Misterios del océano",description:"Diseños e ideas arquitectónicas.", precio:46.01,stock:51,image:LibroEje},
        {id:9,name:"Manual de cocina",description:"Aprende ciencia de forma sencilla.", precio:33.32,stock:135,image:LibroEje},
        {id:10,name:"Arquitectura moderna",description:"Todo sobre organismos vivos.", precio:41.24,stock:149,image:LibroEje},
        {id:11,name:"El arte de escribir",description:"Una aventura inolvidable.", precio:32.18,stock:123,image:LibroEje},
        {id:12,name:"Manual de cocina",description:"Innovaciones tecnológicas explicadas.", precio:8.23,stock:42,image:LibroEje},
        {id:13,name:"Tecnología hoy",description:"Los hechos detrás de la historia.", precio:11.11,stock:149,image:LibroEje},
        {id:14,name:"Ciencia divertida",description:"Cómo funciona el cerebro humano.", precio:44.07,stock:162,image:LibroEje},
        {id:15,name:"Poesía para todos",description:"Todo sobre organismos vivos.", precio:28.56,stock:48,image:LibroEje},
        {id:16,name:"Descubriendo la mente",description:"Historia y tradiciones de culturas antiguas.", precio:12.69,stock:142,image:LibroEje},
        {id:17,name:"La magia del color",description:"Cómo funciona el cerebro humano.", precio:29.21,stock:103,image:LibroEje},
        {id:18,name:"El arte de escribir",description:"Los hechos detrás de la historia.", precio:7.21,stock:99,image:LibroEje},
        {id:19,name:"Historia y verdad",description:"Historia y tradiciones de culturas antiguas.", precio:11.86,stock:101,image:LibroEje},
        {id:20,name:"Tecnología hoy",description:"Una aventura inolvidable.", precio:15.35,stock:114,image:LibroEje},
        {id:21,name:"Historia y verdad",description:"Todo sobre organismos vivos.", precio:12.51,stock:39,image:LibroEje},
        {id:22,name:"Mundos distantes",description:"Innovaciones tecnológicas explicadas.", precio:28.11,stock:185,image:LibroEje},
        {id:23,name:"Arquitectura moderna",description:"Los hechos detrás de la historia.", precio:40.79,stock:77,image:LibroEje},
        {id:24,name:"Misterios del océano",description:"Todo sobre organismos vivos.", precio:49.53,stock:195,image:LibroEje},
        {id:25,name:"Ficción épica",description:"Una colección de poemas para reflexionar.", precio:11.83,stock:142,image:LibroEje},
        {id:26,name:"Viajes al pasado",description:"Una guía para combinar colores.", precio:44.94,stock:57,image:LibroEje},
        {id:27,name:"Arquitectura moderna",description:"Recetas para principiantes y expertos.", precio:45.13,stock:36,image:LibroEje},
        {id:28,name:"Mundos distantes",description:"Una colección de poemas para reflexionar.", precio:33.09,stock:37,image:LibroEje},
        {id:29,name:"Cultura milenaria",description:"Cómo funciona el cerebro humano.", precio:33.13,stock:163,image:LibroEje}

    ]);

    const updateBookById = (id, updates) => {
        setBookCatalog((prevCatalog) =>
            prevCatalog.map((book) =>
                book.id === id
                    ? { ...book, ...updates }
                    : book
            )
        );
    };

    return (
        <BookCatalogContext.Provider value={{ bookCatalog, updateBookById }}>
            {children}
        </BookCatalogContext.Provider>
    );
};


export const useBookCatalog = () => {
    return useContext(BookCatalogContext);
};