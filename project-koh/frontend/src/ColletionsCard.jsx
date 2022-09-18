import React from 'react'
import {CardList} from './StyledComponent'
import { useNavigate } from 'react-router-dom';
function ColletionsCard({title}) {
  const navigate = useNavigate();
  const goPost = () => {
    navigate(`${"/Lecture/" + title}`);
  };
  return (

    <CardList onClick={goPost}>  
      <div className='box'>{title}</div>  
    </CardList>

  )
};
export default ColletionsCard;