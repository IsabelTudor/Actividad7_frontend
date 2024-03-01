import { useOutletContext } from "react-router-dom";
import { logIn } from "../services/usuario.service";
import { useState} from "react";
import { Link } from "react-router-dom";
export default function NoLogIn({setLector}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

  const doLogin = (e) => {
    e.preventDefault();
    logIn(email,password,setLector)
    
    
  };

  return (
    <div>
      <h1>Login</h1>
      <Link to="/registrarse">Registrarse</Link>
      <Link to="/catalogo">Catalogo</Link>
      <form onSubmit={doLogin}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Inicia Sesion</button>
      </form>
    </div>
  );
}