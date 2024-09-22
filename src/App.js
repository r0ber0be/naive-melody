import { useState } from "react";
import { initialLetters } from "./utils/data";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import AddLetter from './pages/addLetter/AddLetter';
import NotFound from './pages/notFound/NotFound'

function App() {
  // Procura chaves com o nome letters no local storage, caso tenha, os valores serão salvos na constante
  const localLettersValue = localStorage.getItem('letters')
  /* Como os valores salvos no local storage são strings é necessário transformar essa string em um objeto JSON
     com o método parse, passando os valores encontrados no local storage (se houverem) */
  const localLettersParsed = JSON.parse(localLettersValue)
  /* Inicia o estado de letters com as cartas pré escritas na aplicação, mas somente caso localLettersParsed 
  seja nulo ou undefined, caso não seja, as cartas serão carregadas com base no que está salvo no seu local storage*/
  const [letters, setLetters] = useState(() => localLettersParsed || initialLetters)

  return (
    <div className="App">
      <BrowserRouter>
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
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
