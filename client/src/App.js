import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Main from './components/views/Main';
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/home"/>
        <Route element={<Detail/>} path="/products/:id"/>
      </Routes>
    </div>
  );
}

export default App;
