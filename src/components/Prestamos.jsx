import {useEffect, useState} from "react"
import { devolver, verPrestados } from "../services/libros.service";
import { useOutletContext } from "react-router-dom";
export default function Prestamos(){
    const [librosPrestamos,setLibrosPrestamos]=useState([]);
    const [pintarLibros,setPintarLibros]=useState(false)
    const [lector,setLector]=useOutletContext()
    useEffect(()=>{
        verPrestados(setLibrosPrestamos,setPintarLibros)
    },[pintarLibros])
  function devolverLibro(prestadoid){
    devolver(prestadoid,setPintarLibros)
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
                <td>Fecha de devolucion</td>
            </tr>
        </thead>
        <tbody>
            {librosPrestamos.map(prestado=>(
                <tr key={prestado.ejemplar.id}>
                    <td>{prestado.ejemplar.libro.titulo}</td>
                    <td>{prestado.ejemplar.libro.autor}</td>
                    <td>{new Date(prestado.fechaprestamo).toLocaleDateString()}</td>
                    {prestado.fechadevolucion==null?(
                    <td><button onClick={()=>devolverLibro(prestado.ejemplar.id)}>Devolver libro</button></td>):(
                    <td>{new Date(prestado.fechadevolucion).toLocaleDateString()}</td>)}
                </tr>
            ))}
        </tbody>
       
        </table>
        </>
    )
}