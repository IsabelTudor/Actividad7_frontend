import { Link } from "react-router-dom";
import LogIn from "./LogIn"
import NoLogIn from "./NoLogIn"; 

export default function Nav({lector,setLector}){
   
    return(
        <>
        {lector ? <LogIn lector={lector} setLector={setLector} /> 
        :<NoLogIn setLector={setLector} />}
        </>
    )
}