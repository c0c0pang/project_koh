import logo from './logo.svg';
import './App.css';
import HeaderNav from './HeaderNav'
import Content from './Content'
import Article from './Article'
import Create from './Create';
import Update from './Update';
import {GlobalStyles} from './Style';
import { useState } from 'react';
import { Routes, Route ,BrowserRouter} from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
    <GlobalStyles />
    <HeaderNav />
    <Routes>
        <Route path="/" element={<Content />}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
