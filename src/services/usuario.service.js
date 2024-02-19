import { useOutletContext } from "react-router-dom";


const logIn=async(email, password,setLector)=>{

 fetch("http://localhost:8080/api/usuarios/login",{
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
          email:data.usuarioDB.email,
          nombre:data.usuarioDB.nombre,
          apellidos:data.usuarioDB.apellidos
        }
        setLector(usuario)
        console.log(usuario);


      })
      }
  
const registro=async(email,password,nombre,apellidos)=>{
 fetch("http://localhost:8080/api/usuarios/registro",{
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
  localStorage.setItem("user", data.email)
  setLector(data.email)
})
}

export {logIn, registro}