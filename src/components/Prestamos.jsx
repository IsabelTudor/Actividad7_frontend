import {useEffect, useState} from "react"
import { devolver, verPrestados } from "../services/libros.service";
import { useOutletContext } from "react-router-dom";
export default function Prestamos(){
    const [librosPrestamos,setLibrosPrestamos]=useState([]);
    const [pintarLibros,setPintarLibros]=useState(false)
    const [lector,setLector]=useOutletContext()
    //TODO tienes que ver como hacer para que al devolver el libro no te aparezca otra vez en la tabla
    useEffect(()=>{
        verPrestados(setLibrosPrestamos,setPintarLibros)
    },[librosPrestamos,pintarLibros])
   const devolverLibro=(prestadoid)=>{
    devolver(lector,prestadoid)
   }
   
    return(
        <>
        <h1>Prestamos</h1>
        <table>
        <thead>
            <tr>
                <td>Titulo</td>
                <td>Autor</td>
                <td>Fecha de prestamo</td>
            </tr>
        </thead>
        <tbody>
            {librosPrestamos.map(prestado=>(
                <tr key={prestado.ejemplar.id}>
                    <td>{prestado.ejemplar.libro.titulo}</td>
                    <td>{prestado.ejemplar.libro.autor}</td>
                    <td>{new Date(prestado.fechaprestamo).toLocaleDateString()}</td>
                    <td><button onClick={()=>devolverLibro(prestado.ejemplar.id)}>Devolver libro</button></td>
                    
                </tr>
            ))}
        </tbody>
       
        </table>
        </>
    )
}