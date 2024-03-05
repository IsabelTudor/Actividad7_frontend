
import { Link } from "react-router-dom";
export default function LogIn({lector,setLector}){
  function cerrarSesion(){
    setLector(null)
    localStorage.removeItem("token")
  }

  return (
    <>
            <h2>Bienvenido/a {lector.nombre}</h2>
            <Link to="/prestamos">Prestamos</Link>
            <Link to="/catalogo">Catalogo</Link>
          
            <button onClick={()=>cerrarSesion()}>Cerrar Sesion</button>
        </>
  );
}