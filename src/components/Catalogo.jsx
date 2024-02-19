import { useOutletContext } from "react-router-dom"

export default function Catalogo(){
    const [lector,setLector]=useOutletContext()
    return(
        <>
        <h1>Catalogo</h1>
        </>
    )
}