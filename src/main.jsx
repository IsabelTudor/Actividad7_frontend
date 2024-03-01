import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Registro from './components/Registro.jsx'
import Prestamos from './components/Prestamos.jsx'
import Catalogo from './components/Catalogo.jsx'

const  router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/registrarse", element:<Registro/>},
      {path:"/catalogo", element:<Catalogo/>},
      {path:"/prestamos", element:<Prestamos/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
