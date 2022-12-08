import React,{useEffect,useState}from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import{LectureSearchRight,SearchDiv} from'./StyledComponent';
import LectureListCrad from './LectureListCrad';
import {LectureSearchApi} from './ApiState';
function SearchViewPage() {
  const Params = useParams();
  const [LectureList,setLectureList]= useState([{}]);
  const [searchview,setSearchview]=useState([]);
  useEffect(() => {
    axios
    .get(
      LectureSearchApi(Params.name)
    )
    .then((response) => {
    if(response.data.length>0){
      setLectureList(response.data)
    }
    else{
      setLectureList([{
        title:'검색 대상 없음',
        Lecturename:'..',
        teacher :'다시 검색하세요',
        thumbnail:'',
      }])
    }
    });
  },[]);

  
  return (
    <SearchDiv>
    <LectureSearchRight>
    {LectureList.map((element,index) => (
                    <LectureListCrad
                        key={index}
                        title={element.title}
                        Lecturename={element.content}
                        teacher = {element.teacher}
                        thumbnail = {element.thumbnail}
                    />
  ))}
    </LectureSearchRight>
    </SearchDiv>
  );
}
export default SearchViewPage;