import { useState } from "react"
import { registro } from "../services/usuario.service";
import { useNavigate } from "react-router-dom";

export default function Registro(){
    const [alias, setAlias] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
 

  const doRegistro = (e) => {
    e.preventDefault();
    registro(alias,password,nombre,apellidos)
  };

  return (
    <div>
    <h1>Registro</h1>
    <form onSubmit={doRegistro}>
      <input
      id="alias"
        name="alias"
        type="text"
        placeholder="Alias"
        value={alias}
        onChange={(e) => {
          setAlias(e.target.value);
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