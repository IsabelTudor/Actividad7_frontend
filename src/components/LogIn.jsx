

export default function LogIn({lector,setLector}){
  function cerrarSesion(){
    setLector(null)
    localStorage.removeItem("token")
  }

  return (
    <>
            <h1>Bienvenido/a {lector.nombre}</h1>

            <button onClick={()=>cerrarSesion()}>Cerrar Sesion</button>
        </>
  );
}