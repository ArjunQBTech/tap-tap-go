import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/common/Navbar/Navbar'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
    </>
  );
}

export default App;
