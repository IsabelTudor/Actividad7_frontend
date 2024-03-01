import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { paginas10, prestar } from "../services/libros.service";

export default function Catalogo(){
    const [lector,setLector]=useOutletContext()
    const [librosDisponibles,setLibrosDisponibles]=useState([]);
    const [pintarLibros,setPintarLibros]=useState(false)
    const [numPag,setNumPag]=useState(0)
    
    useEffect(() => {
        paginas10(numPag, setLibrosDisponibles);
    }, [lector, pintarLibros, numPag]);
    
    function anteriorPag(){
        setNumPag(numPag-1)
    }

    function siguientePag(){
        setNumPag(numPag+1)
    }

    const prestarLibro = (libro) => {
        prestar(lector.email,libro)
      };
    return(
        <>
        <h1>Catalogo</h1>
        <table>
        <thead>
            <tr>
                <td>Titulo</td>
                <td>Autor</td>
                <td>Disponibles</td>
            </tr>
        </thead>
        <tbody>
            {librosDisponibles.map(libro=>(
                <tr key={libro.id}>
                    <td>{libro.titulo}</td>
                    <td>{libro.autor}</td>
                    <td>{libro.disponibles}</td>
                    {lector?
                    <td><button onClick={()=>prestarLibro(libro.id)}>Comprar</button></td>:
                    ""}
                </tr>
            ))}
        </tbody>
       
        </table>
        
        <button onClick={()=>anteriorPag()}>Anteriores libros</button>
        <button onClick={()=>siguientePag()}>Siguientes libros</button>
        </>
    )
}