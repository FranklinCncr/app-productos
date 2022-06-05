interface Props{
    productos: Array<{
        id: number
        nombre: string
        descripcion: string
        imagen: string
        precio: number
        stock: number
    }>
}
const ListaProductos = ({productos}: Props) => {
    const RenderListaProductos = (): JSX.Element[] =>{
        return productos.map(productos=>{            
                return(
                <li key={productos.id}>
                    <img src={productos.imagen} alt={`Avatar for ${productos.nombre}` }/>
                    <h4>{productos.nombre}</h4>
                    <p>{productos.descripcion.substring(0,35)}...</p>
                </li>
                )
        })
    }
    return(
        <ul>
            {RenderListaProductos()}
        </ul>
    )        
}

export default ListaProductos;