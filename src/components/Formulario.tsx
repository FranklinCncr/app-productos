import {useState} from 'react'

const Formulario = () =>{

    const [ingresoDatos, setIngresoDatos] = useState({
        id: 0,
        nombre: '',
        descripcion:'',
        imagen:'',
        precio: 0,
        stock: 0,
    })

    const handleSubmit = () => {}

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setIngresoDatos({
            ...ingresoDatos,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={ingresoDatos.id} type='number' name='id' placeholder="id"/>
                <input onChange={handleChange} value={ingresoDatos.nombre} type='text' name='nombre' placeholder="nombre"/>
                <input onChange={handleChange} value={ingresoDatos.descripcion} type='text' name='descripcion' placeholder="descripción"/>
                <input onChange={handleChange} value={ingresoDatos.imagen} type='text' name='imagen' placeholder="imagen"/>
                <input onChange={handleChange} value={ingresoDatos.precio} type='number' name='precio' placeholder="precio"/>
                <input onChange={handleChange} value={ingresoDatos.stock} type='number' name='stock' placeholder="stock"/>
                <button>Agregar</button>
            </form>       
        </div>
    )
}
export default Formulario