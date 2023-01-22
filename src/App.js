import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import ContentMe from './Pages/ContactMe';

function App() {

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<AboutMe />} />
      <Route exact path='/projects' element={<Projects />} />
      <Route exact path='/contacts' element={<ContentMe />} />
    </Routes>
  );
}

export default App;
