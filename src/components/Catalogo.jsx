import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { getLibrosBuscados, getLibrosDisp, getTotalPag, getTotalPagBuscada, prestar } from "../services/libros.service";
import BarraBusqueda from "./BarraBusqueda";

export default function Catalogo(){
    const [lector,setLector]=useOutletContext()
    const [librosDisponibles,setLibrosDisponibles]=useState([]);
    const [pintarLibros,setPintarLibros]=useState(false)
    const [numPag,setNumPag]=useState(0)
    const [filter,setFilter]=useState("")
    const [totalPaginas, setTotalPaginas] = useState(0);
    
    useEffect(() => {
        if(filter===""){
            getTotalPag(setTotalPaginas);
            getLibrosDisp(numPag,setLibrosDisponibles,setPintarLibros)
        }else{
            getTotalPagBuscada(filter,setTotalPaginas)
            getLibrosBuscados(numPag,filter,setLibrosDisponibles,setPintarLibros)
        }
        
    }, [filter, pintarLibros, numPag ]);
  
   
    const prestarLibro = (libro) => {
        prestar(lector.email,libro,setPintarLibros)
      };
    return(
        <>
        <h2>Catalogo</h2>
        <BarraBusqueda filter={filter} setFilter={setFilter} setNumPag={setNumPag}/>
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
        {(numPag > 0) ? <button onClick={()=>{if(numPag > 0) setNumPag(numPag-1);}}>Anterior</button> : ""}
            <span>{numPag+1} de {totalPaginas+1}</span>
            {(numPag >= totalPaginas) ? "" : <button onClick={()=>{if(numPag < totalPaginas) setNumPag(numPag+1);}}>Siguiente</button>} 
        </>
    )
}