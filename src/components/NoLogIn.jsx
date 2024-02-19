import { useOutletContext } from "react-router-dom";
import { logIn } from "../services/usuario.service";
import { useState} from "react";
export default function NoLogIn({}){
    const [lector,setLector]=useOutletContext()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

  const doLogin = (e) => {
    e.preventDefault();
    logIn(email,password,setLector)
    
    
  };

  return (
    <div>
      <h1>Login</h1>
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