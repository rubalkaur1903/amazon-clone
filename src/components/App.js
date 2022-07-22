import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../cssFiles/App.css';
import { Header, Home, Checkout } from '../components';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path='/' element={
          <div className='app'>
            <Home />
          </div >
        } />
        <Route exact path='/checkout' element={
          <div>
            <Checkout />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
