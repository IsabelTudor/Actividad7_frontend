import { Link } from "react-router-dom";
import LogIn from "./LogIn"
import NoLogIn from "./NoLogIn"; 

export default function Nav({lector,setLector}){
   
    return(
        <>
        {lector ? <LogIn lector={lector} setLector={setLector} /> 
        :<NoLogIn setLector={setLector} />}
        <Link to="/registrarse">Registrarse</Link>
        <Link to="/catalogo">Catalogo</Link>
        <Link to="/perfil">Perfil </Link>
        <Link to="/prestamos">Prestamos</Link>
        </>
    )
}