import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../cssFiles/App.css';
import { Header, Home } from '../components'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
          <>
            <Header />
            <Home />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
