
import { Link } from "react-router-dom";
export default function LogIn({lector,setLector}){
  function cerrarSesion(){
    setLector(null)
    localStorage.removeItem("token")
  }

  return (
    <>
            <h1>Bienvenido/a {lector.nombre}</h1>
            <Link to="/prestamos">Prestamos</Link>
            <Link to="/catalogo">Catalogo</Link>
          
            <button onClick={()=>cerrarSesion()}>Cerrar Sesion</button>
        </>
  );
}