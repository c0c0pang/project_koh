import logo from './logo.svg';
import './App.css';
import HeaderNav from './HeaderNav'
import Content from './Content'
import {GlobalStyles} from './Style';
import { useState } from 'react';
import { Routes, Route ,BrowserRouter} from "react-router-dom";
import Lecture from './Lecture';
import LectureContentList from './LectureContentList'
import SearchViewPage from './SearchViewPage';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
    <HeaderNav />
    <Routes>
        <Route path="/" exact element={<Content />}></Route>
        <Route path="/Lecture/:title" element={<Lecture />}></Route>
        <Route path="/Lecture/:title/:Lecturename/" element={<LectureContentList />}></Route>
        <Route path="/Search/:name" exact element={<SearchViewPage />}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
