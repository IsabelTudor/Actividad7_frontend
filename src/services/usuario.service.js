import { URL_SERVER } from "../variable/ip";

const logIn=async(email, password,setLector)=>{

 fetch(URL_SERVER+"usuarios/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      })
      .then((response)=>{
        if(response.ok){
          return response.json()
        }else{
          console.log("Log In incorrecto");
        }
        
      }).then(data=>{
      
        localStorage.setItem("token", data.token)
        
        const usuario={
          nombre:data.usuarioDB.nombre,
          email:data.usuarioDB.email
        }
        setLector(usuario)
      })
      }
  
const registro=async(email,password,nombre,apellidos)=>{
 fetch(URL_SERVER+"usuarios/registro",{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({email, password,nombre,apellidos}),
 })
 .then((response)=>{
  if(response.ok){
    return response.json();
  }else{
    console.log("Registro incorrecto");
  }
 })
 .then(data=>{
  const usuario={
    nombre:data.usuarioDB.nombre,
    email:data.usuarioDB.email

  }
  setLector(usuario)
})
}

export {logIn, registro}