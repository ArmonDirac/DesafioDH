import React from 'react';
import TotalDeCanciones from './componentes/TotalDeCanciones';
import TotalDeGeneros from './componentes/TotalDeGeneros';
import ListadoDeGeneros from './componentes/ListadoDeGeneros';
import DetalleUltimaCancionCreada from './componentes/DetalleUltimaCancionCreada';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <TotalDeCanciones />
        <TotalDeGeneros />
        <ListadoDeGeneros />
        <DetalleUltimaCancionCreada />
      </main>
    </div>
  );
}

export default App;
