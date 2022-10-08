import React from 'react';
import {SubTtile,AllSub,SubText} from './StyledComponent';
import {useNavigate} from 'react-router-dom'

function ColletionsSubTitle({title,RegisterNotCheck}) {
    const navigate = useNavigate();
    const goPost = () => {
      navigate(`${"/Lecture/" + title}`);
    };
  return (
    <AllSub>
        <SubTtile>
            <SubText onClick={()=>{goPost(); RegisterNotCheck()}}>{title}</SubText>
        </SubTtile>
    </AllSub>
  )
}

export default ColletionsSubTitle