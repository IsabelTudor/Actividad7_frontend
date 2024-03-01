import {useState} from "react"

export default function Prestamos({lector}){
    const [librosPrestamos,setLibrosPrestamos]=useState([]);
    const [pintarLibros,setPintarLibros]=useState(false)
    const [numPag,setNumPag]=useState(0)

   
    return(
        <>
        <h1>Prestamos</h1>
        <table>
        <thead>
            <tr>
                <td>Titulo</td>
                <td>Autor</td>
                <td>Disponibles</td>
            </tr>
        </thead>
        <tbody>
            {librosPrestamos.map(libro=>(
                <tr key={libro.id}>
                    <td>{libro.titulo}</td>
                    <td>{libro.autor}</td>
                    <td>{libro.fechaprestamo}</td>
                    {lector?
                    <td><button onClick={()=>devolverLibro(libro.id)}>Devolver libro</button></td>:
                    ""}
                </tr>
            ))}
        </tbody>
       
        </table>
        </>
    )
}