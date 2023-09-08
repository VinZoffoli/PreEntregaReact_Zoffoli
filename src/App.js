import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './App.css';

function App() {
  const [mensaje, setMensaje] = useState('');
  const [showItemList, setShowItemList] = useState(false);

  const carritoClick = () => {
    setMensaje('Lista de Productos disponible:');
    toast.success('¡Producto agregado al carrito!', {
      position: toast.POSITION.TOP_RIGHT, 
    });
    setShowItemList(true);
  };

  return (
    <div>
      <NavBar onCartClick={carritoClick} />
      {showItemList && <ItemListContainer greeting={mensaje} />}
      <ToastContainer /> 
    </div>
  );
}

export default App;
