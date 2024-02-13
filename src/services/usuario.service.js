import { useOutletContext } from "react-router-dom";


const logIn=async(email, password)=>{
  const [lector, setLector]=useOutletContext()
 fetch("http://44.221.16.151:3000/usuarios",{
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
        //Falta conocer como sacar datos
        localStorage.setItem("token", data.token)
        setLector(data.usuarios)

      })
      }
  

export {logIn}