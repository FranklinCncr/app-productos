import {Productos} from './../types/types'

interface Props{
    productos: Array<Productos>
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