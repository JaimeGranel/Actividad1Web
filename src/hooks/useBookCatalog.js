import {useEffect, useState} from "react";
import LibroEje from "../Imagenes/LibroEje.png";
export const useBookCatalog = () => {
    const [bookCatalog, setBookCatalog] = useState([]);

    useEffect(() => {
        setTimeout(()=>{
            setBookCatalog([
                {id:0,name:"Libro1",description:"Libro 1", precio:9.5,stock:100,image:LibroEje},
                {id:1,name:"Libro2",description:"Libro 2", precio:5,stock:0,image:LibroEje},
                {id:2,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:3,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:4,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:5,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:6,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:7,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:8,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:9,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:10,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:11,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:12,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:13,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:14,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:15,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:16,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:17,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:18,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:19,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:20,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:21,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:22,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:23,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:24,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:25,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:26,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:27,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:28,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:29,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:30,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:31,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:32,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:32,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:34,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:35,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:36,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:37,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:38,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:39,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:40,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:41,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:42,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:43,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:44,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
                {id:45,name:"Libro2",description:"Libro 2", precio:5,stock:100,image:LibroEje},
            ]);
        }, 0);
    }, []);

    return bookCatalog;
}