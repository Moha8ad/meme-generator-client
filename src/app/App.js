import { Container } from '@material-ui/core';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 

import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';

import './styles.css';

const App = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Navigate to="/meme" replace={true} />}></Route>
        <Route path="/meme" exact element={<Home />}></Route>
      </Routes> 
    </Container>   
  ); 
};

export default App;