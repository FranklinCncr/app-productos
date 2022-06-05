import {useState, useRef, useEffect} from 'react';
import './App.css';
import ListaProductos from './components/ListaProductos'
import estadoInicial from './states/states';
import Formulario from './components/Formulario'
import {Productos} from './types/types'

interface AppEstado{
  productos: Array<Productos>
  nuevoProductosNumber: number
}

function App() {
  const [productos, setProductos] = useState<AppEstado["productos"]>([])

  const divRef = useRef<HTMLDivElement>(null)
  
  useEffect(()=>{
    setProductos(estadoInicial)
  },[])

  const handleNewProductos = (newProductos: Productos): void => {
    setProductos(productos => [...productos, newProductos])
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Nuevo Producto</h1>
      <Formulario onNewProductos={handleNewProductos}/>
      <h1>Productos</h1>
      <ListaProductos productos={productos}/>      
    </div>
  );
}

export default App;
