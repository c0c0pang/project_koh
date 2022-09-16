import React from 'react'
import {CardList} from './StyledComponent'
function ColletionsCard({title}) {
  return (

    <CardList><div className='box'>{title}</div></CardList>

  )
};
export default ColletionsCard;