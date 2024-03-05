export default function BarraBusqueda({filter,setFilter}){
    return(
        <>
        <input type="text" placeholder="Busca . . ." value={filter} onChange={(e)=>setFilter(e.target.value)}></input>
        </>
    )
}