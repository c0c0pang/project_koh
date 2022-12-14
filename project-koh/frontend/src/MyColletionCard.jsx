import React,{useState,useEffect} from 'react'
import {MyColletionListCardDiv,MyColletionCardList} from './StyledComponent'
import axios from 'axios';
import {LectureGetKeyApi} from './ApiState';
import { useNavigate } from 'react-router-dom'
function MyColletionCard({id,title,Lecturename,userData}) {
  const navigate = useNavigate();
  const [lectureData,setLectureData] = useState(Object);
  useEffect(()=>{
    if(id !==null){
      axios.get(
        LectureGetKeyApi(id)
      ).then((response)=>{
        console.log(response.data);
        setLectureData(response.data);
      })
    }
    
},[])
  const goPost = () => {
    var url = "/lecture/" + title + "/" + Lecturename + "/";
    navigate(url,{state: {id:id,lectureData:lectureData,userData:userData}});
  };
  
  return (
    <MyColletionListCardDiv>
        <MyColletionCardList onClick={goPost}>
          <h1>카테고리: {title}</h1> 
          <h1>제목: {Lecturename}</h1>
          </MyColletionCardList>
    </MyColletionListCardDiv>
  )
}

export default MyColletionCard;