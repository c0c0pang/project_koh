import React, { useEffect } from 'react'
import axios from 'axios'
import { CollectionsDiv, ContentDiv } from './StyledComponent'
import ColletionsCard from './ColletionsCard'
import { useState } from 'react';
function Content() {
  const ColletionKeyApi = "/get/title/?format=json";
  useEffect(() => {
    axios.get(
      ColletionKeyApi
    )
      .then((response) => {
        setCollectionsList(response.data.title);
      });
  }, []);
  const [CollectionsList, setCollectionsList] = useState([]);
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
