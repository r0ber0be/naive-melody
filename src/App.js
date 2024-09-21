import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddLetter from './pages/AddLetter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/letter/add' element={<AddLetter/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
