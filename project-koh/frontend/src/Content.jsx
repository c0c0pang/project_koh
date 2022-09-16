import React from 'react'
import axios from 'axios'
import {CollectionsDiv,ContentDiv} from './StyledComponent'
import ColletionsCard from './ColletionsCard'
function Content() {
    const CollectionsList =[
        {title:"인문"}
        ,{title:"사회"},
        {title:"교육"}
        ,{title:"공학"}
        ,{title:"자연"},
        {title:"의약"}
        ,{title:"예체능"}
        ,{title:"IT"}
        ,{title:"기타"}
    ]
    console.log(CollectionsList);
  return (
    <ContentDiv>
    <CollectionsDiv>
    {CollectionsList.map((element) => (
                        <ColletionsCard
                            key={element.title}
                            title={element.title}
                        />
      ))}
    </CollectionsDiv>
    </ContentDiv>
  )
};
export default Content;