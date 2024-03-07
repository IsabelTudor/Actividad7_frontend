export default function BarraBusqueda({filter,setFilter,setNumPag}){
    return(
        <>
        <input type="text" placeholder="Busca . . ." value={filter} onChange={(e)=>{setFilter(e.target.value); setNumPag(0)}} ></input>
        </>
    )
}