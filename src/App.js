import React from "react";
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import User from './pages/User';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Link to="/">Home</Link>
    <br/>
    <Link to="/users">User</Link>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/users' element={<User/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
