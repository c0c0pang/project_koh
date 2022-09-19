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
import Lecture from './Lecture';
import LectureContentList from './LectureContentList'

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
    <HeaderNav />
    <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/Lecture/:title" element={<Lecture />}></Route>
        <Route path="/Lecture/:title/:Lecturename" element={<LectureContentList />}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
