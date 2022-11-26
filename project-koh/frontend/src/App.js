import './App.css';
import HeaderNav from './HeaderNav'
import Content from './Content'
import {darkTheme, GlobalStyles, lightTheme} from './Style';
import { Routes, Route ,BrowserRouter} from "react-router-dom";
import Lecture from './Lecture';
import LectureContentList from './LectureContentList'
import SearchViewPage from './SearchViewPage';
import ProfilePage from './ProfilePage'
import UserFormPage from './UserFormPage';
import { ThemeProvider } from "styled-components";
import {useState} from 'react';
import {MediaDiv} from './StyledComponent'
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <BrowserRouter>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <GlobalStyles/>
    <MediaDiv>
    <HeaderNav darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/lecture/:title" element={<Lecture />}></Route>
        <Route path="/lecture/:title/:Lecturename/" element={<LectureContentList />}></Route>
        <Route path="/Search/:name" element={<SearchViewPage />}></Route>
        <Route path="/Profile" element={<ProfilePage/>}></Route>
        <Route path="/Setting" element={<UserFormPage/>}></Route>
    </Routes>
    </MediaDiv>
    </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;


