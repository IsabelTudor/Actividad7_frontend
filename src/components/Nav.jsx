import { Link, useOutletContext } from "react-router-dom";
import LogIn from "./LogIn"
import NoLogIn from "./NoLogIn"; 

export default function Nav({lector,setLector}){
   
    return(
        <>
        {lector ? <LogIn lector={lector}/>:<NoLogIn setLector={setLector}/>}
        <ul>
            <li>
                <Link to="/registrarse">Registrarse</Link>
            </li>
            <li>
                <Link to="/catalogo">Catalogo</Link>
            </li>
            <li>
                <Link to="/perfil">Perfil </Link>
            </li>
            <li>
                <Link to="/prestamos">Prestamos</Link>
            </li>
        </ul>
        </>
    )
}