import React from 'react'
import { LectureListDiv, LectureBox } from './StyledComponent'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import {LectureGetKeyApi,UserViewKeyApi} from './ApiState';
import axios from 'axios';
import { useState } from 'react';
function LectureListCrad({ id,category, title, teacher, thumbnail }) {
  const navigate = useNavigate();
  const [lectureData,setLectureData] = useState(Object);
  const [userData,setUserData] = useState(Object);

  useEffect(()=>{
    if(id !== undefined){
      axios.get(
        LectureGetKeyApi(id)
      ).then((response)=>{
        setLectureData(response.data);
      })
    }
},[]);
useEffect(()=>{
  axios.get(
    UserViewKeyApi
  ).then((response)=>{
    console.log(response.data[0]);
    setUserData(response.data[0]);
  })
},[]);

  const goPost = () => {
    var url = "/lecture/" + category + "/" + title + "/";
    navigate(url,{state: {id:id,lectureData:lectureData,userData:userData}});
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