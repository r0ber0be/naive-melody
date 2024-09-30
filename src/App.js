import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import AddLetter from './pages/addLetter/AddLetter';
import NotFound from "./pages/NotFound/NotFound";
import { getLetters } from "./services/api";
import { NavHeader } from "./components/navHeader/NavHeader";
import Profile from "./pages/profile/Profile";
import './App.css';

// Este componente cria rotas para as páginas da aplicação e fornece o estado de letters para os componentes filhos
function App() {
  /* Inicia o estado de letters com 'initialLetters' se localLettersParsed 
  for nulo, caso não seja, as letters iniciarão com os dados do local storage, garantindo que a aplicação funcione como esperado*/
  const [letters, setLetters] = useState()

  useEffect(() => {
    getLetters(setLetters)
  }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavHeader />
        <Routes>
          <Route 
            exact 
            path='/' 
            element={<Home letters={letters} setLetters={setLetters}/>
          } 
          />
          <Route 
            exact 
            path='/letter/add' 
            element={<AddLetter setLetters={setLetters}/>} 
          />
          <Route
            exact
            path="/profile"
            element={<Profile />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
