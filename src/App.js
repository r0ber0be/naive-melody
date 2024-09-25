import { useState, useEffect } from "react";
import { initialLetters } from "./utils/data";
import { message } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import AddLetter from './pages/addLetter/AddLetter';
import NotFound from "./pages/NotFound/NotFound";

// Este componente cria rotas para as páginas da aplicação e fornece o estado de letters para os componentes filhos
function App() {
  useEffect(() => {
    getLetters()
  }, [])
  // Resgata valores do local storage com a chave "letters"
  const localLettersValue = localStorage.getItem('letters')
  /* Como os valores salvos no local storage são strings é necessário transformar essa string em um objeto JSON
     com o método parse, passando os valores encontrados no local storage (se houverem) */
  const localLettersParsed = JSON.parse(localLettersValue)
  /* Inicia o estado de letters com 'initialLetters' se localLettersParsed 
  for nulo, caso não seja, as letters iniciarão com os dados do local storage, garantindo que a aplicação funcione como esperado*/
  const [letters, setLetters] = useState()

  const getLetters = async() => {
    try {
      const response = await fetch('http://localhost:3005/letters')
      const data = await response.json();
      setLetters(data)
    } catch (error) {
      message.error('Não foi possível carregar os dados do servidor! Por favor, tente novamente mais tarde!')
    }
  }
  
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
