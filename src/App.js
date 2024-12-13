import React from 'react';
import Sidebar from './Components/Sidebar';
import TopNavBar from './Components/TopNavBarComponent';
import Novità from './Components/Novità'; // Importa il componente Novità
import './App.css'; // Se necessario, importa il file CSS

function App() {
  return (
    <div className="app-container">
      {/* Sidebar che occupa il 20% */}
      <Sidebar />

      {/* Contenuto principale che occupa l'80% */}
      <div className="main-content">
        {/* TopNavBar fissa nella parte superiore */}
        <TopNavBar />

        {/* Componente Novità */}
        <div className="content">
          <Novità /> {/* Inserisci qui il componente Novità */}
        </div>
      </div>
    </div>
  );
}

export default App;
