export default function LogIn({lector, setLector}){
    const [alias, setAlias] = useState("");
    const [password, setPassword] = useState("");
  setLector(alias,password)
  const doLogin = (e) => {
    e.preventDefault();
   
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={doLogin}>
        <input
          name="alias"
          type="text"
          placeholder="Alias"
          value={alias}
          onChange={(e) => {
            setAlias(e.target.value);
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}