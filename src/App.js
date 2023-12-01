import './App.css';
import BussinessList from './componentes/BussinessList';
import SearchBar from './componentes/SearchBar';

function App() {
  return (
    <div className='contenedor-principal'>
      <nav>
        <SearchBar />
      </nav>
      <main className='contenedor-componente '>
        <BussinessList className='contenedor-restaurante' />
        <BussinessList className='contenedor-restaurante' />
      </main>
    </div>
  );
} 

export default App;