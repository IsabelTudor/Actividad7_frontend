
import { URL_SERVER } from "../variable/ip";

const prestar = async (user, ejemplar,setPintarLibros) => {
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
        setPintarLibros(true)
      
};

const verPrestados=async (setLibrosPrestamos,setPintarLibros)=>{
    fetch(URL_SERVER+"libros/",{
        method: "GET",
        headers: {

            "Authorization": "Bearer " + localStorage.getItem("token")  
        },
    })
    .then(response=>{
        if(response.ok){
            return response.json();
        }else throw new Error("No se pudo acceder")
    })
    .then(data=>{
        
        setLibrosPrestamos(data)
    })
    .catch(error => {
        console.error(error);
    });
    setPintarLibros(true)
}
const devolver=(prestadoid,setPintarLibros)=>{
    fetch(`${URL_SERVER}libros/${prestadoid}`,{
        method: "PUT",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")  
        }
    })
    .then(response=>{
        if(response.ok){
            
            return response.json()
        }else throw new Error ("No se pudo acceder")
    })
    .catch(error => {
        console.error(error);
    });
  setPintarLibros(true)
}
const getTotalPag = async (setTotalPaginas) =>{
    fetch(`${URL_SERVER}libros/paginas`)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .then(data=>{

           setTotalPaginas(data[0].numpags)
        })
        .catch(error=>{
            console.error(error);
        })
}
const getLibrosDisp =  async (numPag, setLibrosDisponibles, setPintarLibros) => {
    fetch(`${URL_SERVER}libros/${numPag}`)
        .then(response=>{
            if(response.ok){
                setPintarLibros(false);
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .then(libros=>{
            setLibrosDisponibles(libros);
        })
        .catch(error=>{
            console.error(error);
        })
}
const getTotalPagBuscada = async (filter, setTotalPaginas) =>{
    fetch(`${URL_SERVER}libros/${filter}/paginas`)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .then(data=>{
            setTotalPaginas(data[0].numpaginas);
        })
        .catch(error=>{
            console.error(error);
        })
}
const getLibrosBuscados = async (numPag, filter, setLibrosDisponibles, setPintarLibros) =>{
    fetch(`${URL_SERVER}libros/${filter}/${numPag}`)
        .then(response=>{
            if(response.ok){
                setPintarLibros(false);
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .then(libros=>{
            setLibrosDisponibles(libros);
        })
        .catch(error=>{
            console.error(error);
        })
}
export { prestar,verPrestados,devolver,getTotalPag,getLibrosDisp,getTotalPagBuscada,getLibrosBuscados}