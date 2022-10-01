import React from 'react'
import {CardList} from './StyledComponent'
import { useNavigate } from 'react-router-dom';
function ColletionsCard({title}) {
  const navigate = useNavigate();

  var url = `${"/Lecture/" + title}`;
  const goPost = () => {
    navigate(url);
  };

  return (

    <CardList id='box' onClick={goPost}>  
      <div>{title}</div>
    </CardList>

  )
};
export default ColletionsCard;

