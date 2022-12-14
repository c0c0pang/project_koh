import React,{useState,useEffect} from 'react'
import {MyColletionListCardDiv} from './StyledComponent'
import MyDibsCard from './MyDibsCard';
import axios from 'axios';
import {LectureGetKeyApi} from './ApiState';
import { useNavigate } from 'react-router-dom'
function MyDibsPage({data,userData}) {
  const MyDibs= [];
  console.log(data);
  return (
      <MyDibsCard
        id={MyDibs.id!==undefined ? (MyDibs.id) : (null) }
        title={MyDibs.category}
        Lecturename={MyDibs.title}
        userData={userData}
        MyDibs={MyDibs}
      />
    
  )
}

export default MyDibsPage;