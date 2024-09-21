import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import AddLetter from './pages/AddLetter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="App"><Home /></div>,
  },
  {
    path: '/letters/add',
    element: <div className="App"><AddLetter /></div>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
