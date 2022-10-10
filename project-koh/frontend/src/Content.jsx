import React,{useEffect} from 'react'
import axios from 'axios'
import {CollectionsDiv,ContentDiv} from './StyledComponent'
import ColletionsCard from './ColletionsCard'
import { useState } from 'react';
function Content() {
  const ColletionKeyApi="http://localhost:4000/title";
  useEffect(() => {
    axios.get(
      ColletionKeyApi
    )
    .then((response) => {
      setCollectionsList(response.data)
    });
  },[]);

  const [CollectionsList,setCollectionsList] =useState([]);
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


