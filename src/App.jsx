import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import { useState } from "react";


export default function App() {
  const [lector,setLector] = useState(null);

  return (
    <>
    <h1>Biblioteca de Hasbulla</h1>
    <Nav lector={lector} setLector={setLector}/>
    <Outlet context={[lector,setLector]}></Outlet>

    </>
  )
}

