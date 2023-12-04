// Componente App.js
import React from 'react';
import './App.scss';
import LandingJuega from './components/LandingJuega';
import LandingJuegav2 from './components/LandingJuegav2';
import Catalogo from './components/Catalogo';

function App() {
  const styleContainer = {
    backgroundColor: 'transparent', 
    color: 'white', 
    width: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
  }
  return (
    <div className="App" style={styleContainer}>
      <div className="App">
        <LandingJuegav2 />
      </div>
    </div>
  );
}
//<LandingJuega />
export default App;
