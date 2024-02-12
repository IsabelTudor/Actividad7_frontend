import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"
export default function App() {
  return (
    <>
    <h1>Biblioteca de Hasbulla</h1>
    <Nav/>
    <Outlet/>
    </>
  )
}

