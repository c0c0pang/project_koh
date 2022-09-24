import React,{useState,useEffect} from 'react'
import {SearchForm} from './StyledComponent'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function SearchList({props}) {
  const [LectureList,setLectureList]= useState([{}]);
  const [search,setSearch]=useState("");
  const [check,setCheck] = useState("");
  const LectureKeyApi="http://localhost:4000/Lecture";
  const navigate = useNavigate();
  const goPost = () => {
    if(search==="" || check===""){
      return navigate(`${"/Search/"+"Not"}`);
    }
    navigate(`${"/Search/"+check}`);
  };
  useEffect(() => {
    axios
    .get(
    LectureKeyApi
    )
    .then((response) => {
    // console.log(response.data)
    setLectureList(response.data)
    });
  },[]);

  const onSearch=(e)=>{
    e.preventDefault();
    const filterData = LectureList.filter((props)=>{
      if(props.Lecturename.includes(search)===true){
        setCheck(search);
        return props.Lecturename.includes(search);
      }
      else if(props.teacher.includes(search)===true){
        setCheck(search);
        return props.teacher.includes(search);
      }
    })
    setSearch("");
  }

  const onChangeSearch = (e)=>{
    e.preventDefault();
    setSearch(e.target.value);
  }
  return (
    <SearchForm onSubmit={e => onSearch(e)}>
          <input type="text" value={search} onChange={onChangeSearch}/>
          <input type="submit" id="Id" onClick={goPost}/>
    </SearchForm>
  )
}

export default SearchList;