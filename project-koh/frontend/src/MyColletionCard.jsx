import React,{useState,useEffect} from 'react'
import {MyColletionListCardDiv,MyColletionCardList} from './StyledComponent'
import axios from 'axios';
function MyColletionCard({title,Lecturename,teacher}) {
  return (
    <MyColletionListCardDiv >
        <MyColletionCardList>{Lecturename} {teacher}</MyColletionCardList>
    </MyColletionListCardDiv>
  )
}

export default MyColletionCard;