import {useState} from 'react';
import './App.css';

function App() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'reloj',
      descripcion: 'Reloj de mano pequeño de color azul digital con luces led.',
      imagen: 'https://i.postimg.cc/50tnFNqB/reloj.jpg',
      precio: '40.20',
      stock: '13'
    },
    {
      id: 2,
      nombre: 'cuadro',
      descripcion: 'Cuadro decorativo pequeño de colo gris para niños.',
      imagen: 'https://i.postimg.cc/43PWdht4/cuadro.jpg',
      precio: '50.70',
      stock: '15'
    },
  ])

  
  return (
    <div className="App">
      <h1>Productos</h1>
      <ul>
        {
          productos.map(productos =>{
            return(
              <li key={productos.id}>
                <img src={productos.imagen} alt={`Avatar for ${productos.nombre}` }/>
                <h4>{productos.nombre}</h4>
                <p>{productos.descripcion.substring(0,35)}...</p>
              </li>
            )
          })
        }
      </ul>            
    </div>
  );
}

export default App;
