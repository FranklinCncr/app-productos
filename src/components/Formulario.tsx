import useNewProductosForm from '../hooks/useNewProductosForm'
import {Productos} from './../types/types'

interface FormularioProps{
    onNewProductos: (newProductos: Productos) => void 
}

const Formulario = ({onNewProductos}:FormularioProps) =>{

    //const [ingresoDatos, setIngresoDatos] = useState<FormularioEstado["ingresoDatos"]>(ESTADO_INICIAL)

    const [ingresoDatos, dispatch] =  useNewProductosForm()

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onNewProductos(ingresoDatos)        
        dispatch({type: "clear"})
    }
 
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = evt.target
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })        
    }
    const handleClear =() => {
        dispatch({type: "clear"})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={ingresoDatos.id} type='number' name='id' placeholder="id"/>
                <input onChange={handleChange} value={ingresoDatos.nombre} type='text' name='nombre' placeholder="nombre"/>
                <input onChange={handleChange} value={ingresoDatos.descripcion} type='text' name='descripcion' placeholder="descripción"/>
                <input onChange={handleChange} value={ingresoDatos.imagen} type='text' name='imagen' placeholder="url imagen"/>
                <input onChange={handleChange} value={ingresoDatos.precio} type='number' name='precio' placeholder="precio"/>
                <input onChange={handleChange} value={ingresoDatos.stock} type='number' name='stock' placeholder="stock"/>
                
                <button type='submit'>Agregar</button>
            </form>       
        </div>
    )
}
export default Formulario