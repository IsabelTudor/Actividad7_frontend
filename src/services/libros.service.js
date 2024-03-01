import { URL_SERVER } from "../variable/ip";

const paginas10=async(numPag,setLibrosDisponibles)=>{

    fetch(URL_SERVER+`libros/${numPag}`)

         .then((response)=>{
           if(response.ok){
             return response.json()
           }else{
             console.log("No se pudieron traer los libros");
           }
         }).then(data=>{
         
           setLibrosDisponibles(data)
         })
}
const prestar = async (user, ejemplar) => {
    fetch(URL_SERVER + "libros/"+ejemplar, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")  
        },
        body: JSON.stringify({ user }),
    })
        .then(response => {
            if (response.ok) {
                
                return response.json();
                
            } else {
                throw new Error("Error al prestar en front");
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
      
};


export {paginas10, prestar}