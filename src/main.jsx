import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Registro from './components/Registro.jsx'
import Catalogo from './components/Catalogo.jsx'
import Perfil from './components/Perfil.jsx'
import Prestamos from './components/Prestamos.jsx'
import LogIn from './components/LogIn.jsx'

const  router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/registrarse", element:<Registro/>},
      {path:"/catalogo", element:<Catalogo/>},
      {path:"/perfil", element:<Perfil/>},
      {path:"/prestamos", element:<Prestamos/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
