import React from 'react';
import AddressForm from './components/AddressForm';
import AddressList from './components/AddressList';
import './App.css';  // importa o CSS se existir

function App() {
  return (
    <div className="container">
      <h1>Consulta de CEP e Gerenciamento de Endereços</h1>
      <AddressForm />
      <hr />
      <AddressList />
    </div>
  );
}

export default App;
