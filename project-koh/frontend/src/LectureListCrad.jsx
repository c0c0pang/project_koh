import React from 'react'
import { LectureListDiv, LectureBox } from './StyledComponent'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import {LectureGetKeyApi} from './ApiState';
import axios from 'axios';
import { useState } from 'react';
function LectureListCrad({ id,category, title, teacher, thumbnail }) {
  const navigate = useNavigate();
  const [lectureData,setLectureData] = useState(Object);
  const GetApi =  LectureGetKeyApi(id);
  useEffect(()=>{
    axios.get(
      GetApi
    ).then((response)=>{
      console.log(response.data);
      setLectureData(response.data);
    })
  
},[])
  const goPost = () => {
    var url = "/lecture/" + category + "/" + title + "/";
    navigate(url,{state: {id:id,lectureData:lectureData}});
  };
  return (
    <LectureListDiv onClick={goPost}>
      <LectureBox >
        <img src={thumbnail} />
        <div className='box'>
          <h2>강의명: {title}</h2>
          <h2>교수명: {teacher}</h2>
        </div>
      </LectureBox>
    </LectureListDiv>
  )
}
export default LectureListCrad;