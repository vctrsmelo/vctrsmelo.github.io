import React from 'react';
import NavBarComponent from './components/Navbar/NavBarComponent';
import Home from './pages/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  return (
    <>
      <NavBarComponent/>
      <BrowserRouter>
          <Routes>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
