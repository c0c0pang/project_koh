import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Nav from './Nav'
import Article from './Article'
import { useState } from 'react';
function App() {
  // const _mode = useState("WELCOME");
  // const mode = _mode[0];
  // const setMode= _mode[1];

  //useState를 사용하면 즉각적인 변화에 반응할 수 있음.
  //useState는 사용시 크기가 2인 배열로 나타나며 첫번째 인덱스엔 정보, 두번째 인덱스엔 함수를 수정할 수 있는 정보가 담겨져 있음.
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ]
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  }
  else if (mode === "READ") {
    for(let i=0;i<topics.length;i++){ 
      if(id===topics[i].id){
        content = <Article title={topics[i].title} body={topics[i].body}></Article>
      }
    }
  }
  return (
    <>
      <Header title="WEB" onChangMode={
        () => {
          //mode의 값을 바꿀려면 setMode를 사용하면 됨
          setMode("WELCOME");
        }
      } />
      <Nav topics={topics} onChangMode={
        (_id) => {
          setMode('READ');
          setId(_id);
        }
      } />
      {content} 
    </>
  );
}

export default App;
