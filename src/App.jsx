
import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import StarshipList from './pages/StarshipList/StarshipList';
import Starships from './pages/Starships/Starships';



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/' 
          element={<StarshipList />}
        
        />
        <Route
          path='/starship' 
          element={<Starships />}
        
        />
      </Routes>
    </>
  );
}

export default App;
