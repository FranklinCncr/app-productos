import {useState, useEffect} from 'react';
import './App.css';
import ListaProductos from './components/ListaProductos'
import Formulario from './components/Formulario'

interface Productos{
  id: number
  nombre: string
  descripcion: string
  imagen: string
  precio: number
  stock: number
}
interface AppEstado{
  productos: Array<Productos>
  nuevoProductosNumber: number

}

const estadoInicial = [
  {
    id: 1,
    nombre: 'reloj',
    descripcion: 'Reloj de mano pequeño de color azul digital con luces led.',
    imagen: 'https://i.postimg.cc/50tnFNqB/reloj.jpg',
    precio: 40.20,
    stock: 13
  },
  {
    id: 2,
    nombre: 'cuadro',
    descripcion: 'Cuadro decorativo pequeño de colo gris para niños.',
    imagen: 'https://i.postimg.cc/43PWdht4/cuadro.jpg',
    precio: 50.70,
    stock: 15
  },
]

function App() {
  const [productos, setProductos] = useState<AppEstado["productos"]>([])
  const [nuevosProductos, setNuevosProductos] = useState<AppEstado["nuevoProductosNumber"]>(0)
  
  useEffect(()=>{
    setProductos(estadoInicial)
  },[])

  return (
    <div className="App">
      <h1>Productos</h1>
      <ListaProductos productos={productos}/>
      <Formulario/>
    </div>
  );
}

export default App;
