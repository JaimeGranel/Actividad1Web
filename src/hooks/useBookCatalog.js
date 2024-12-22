import {useEffect, useState} from "react";
import LibroEje from "../Imagenes/LibroEje.png";
export const useBookCatalog = () => {
    const [bookCatalog, setBookCatalog] = useState([]);

    useEffect(() => {
        setTimeout(()=>{
            setBookCatalog([
                {id:0,name:"Libro1",description:"Libro 1", precio:9.5,stock:100,image:LibroEje},
                {id:2,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:2,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:2,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:2,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:2,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:2,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:2,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:2,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:2,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:2,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:2,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
            ]);
        }, 0);
    }, []);

    return bookCatalog;
}