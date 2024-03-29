import { useState } from "react"
import { registro } from "../services/usuario.service";
import { useNavigate } from "react-router-dom";

export default function Registro(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const navigate = useNavigate();
    
      const doRegistro = (e) => {
      e.preventDefault();
      if(password===repassword){
        registro(email,password,nombre,apellidos)
        alert("Su registro se completo con exito")
        setEmail("")
        setPassword("")
        setRePassword("")
        setNombre("")
        setApellidos("")
        navigate('/catalogo')
      }else alert("Las constraseñas no coinciden")
      
  };
    
  return (
    <div>
    <h2>Registro</h2>
    <form onSubmit={doRegistro}>
      <input
      id="email"
        name="email"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
      id="password"
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
      id="repassword"
        name="repassword"
        type="password"
        placeholder="Repetir Password"
        value={repassword}
        onChange={(e) => {
          setRePassword(e.target.value);
        }}
      />
      <input
      id="nombre"
        name="nombre"
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
        }}
      />
      <input
      id="apellidos"
        name="apellidos"
        type="text"
        placeholder="Apellidos"
        value={apellidos}
        onChange={(e) => {
          setApellidos(e.target.value);
        }}
      />
      <button type="submit">Registro</button>
    </form>
  </div>
  
   
 
  );
}