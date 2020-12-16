import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import MastHead from './components/MasterHead/Masthead';
import Feature from './components/Features/Feature';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse.js';
import 'bootstrap/js/dist/dropdown.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MastHead/>
      <Feature/>
      <Footer/>
    </div>
  );
}

export default App;
