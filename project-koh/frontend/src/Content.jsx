import React, { useEffect } from 'react'
import axios from 'axios'
import { CollectionsDiv, ContentDiv } from './StyledComponent'
import ColletionsCard from './ColletionsCard'
import { useState } from 'react';
import Category from './data'
function Content() {
  const [CollectionsList, setCollectionsList] = useState([]);
  useEffect(()=>{
    setCollectionsList(Category.title);
  },[]);
  return (
    <ContentDiv>
      <CollectionsDiv>
        {CollectionsList.map((element) => (
          <ColletionsCard
            key={element}
            title={element}
          />
        ))}
      </CollectionsDiv>
    </ContentDiv>
  )
};
export default Content;
