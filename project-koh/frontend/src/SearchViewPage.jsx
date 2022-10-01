import React,{useEffect,useState}from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import{LectureRight,SearchDiv} from'./StyledComponent';
import LectureListCrad from './LectureListCrad';
function SearchViewPage() {
  const Params = useParams();
  const LectureKeyApi="http://localhost:4000/Lecture";
  const [LectureList,setLectureList]= useState([{}]);
  const [searchview,setSearchview]=useState([]);
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
  function getSearchView(){
    const filterData = LectureList.filter(
      props=>{
        if(Params.name===props.Lecturename){
         return props;
        }
        else if(Params.name===props.teacher){
          return props;
        }
      }
    )
    return filterData;
  };
  useEffect(()=>{
    setSearchview(getSearchView());
  },[LectureList]);
  return (
    <SearchDiv>
    <LectureRight>
    {searchview.map((element,index) => (
                    <LectureListCrad
                        key={index}
                        title={element.title}
                        Lecturename={element.Lecturename}
                        teacher = {element.teacher}

                    />
  ))}
    </LectureRight>
    </SearchDiv>
  );
}
export default SearchViewPage;