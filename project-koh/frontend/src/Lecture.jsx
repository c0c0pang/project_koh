import React,{useState}from 'react';

import { useParams} from "react-router-dom";
import{LectureTitle,LectureBack,LectureContent,LectureLeft,LectureRight} from './StyledComponent';
import ColletionsSubTitle from './ColletionsSubTitle';
function Lecture() {

  const Params = useParams();
  const CollectionsList=[
    {title:"인문"}
    ,{title:"사회"},
    {title:"교육"}
    ,{title:"공학"}
    ,{title:"자연"},
    {title:"의약"}
    ,{title:"예체능"}
    ,{title:"IT"}
    ,{title:"기타"}
    ];
const newCollectionsList=[]
    for(let i=0;i<CollectionsList.length;i++){
        if(Params.title!=CollectionsList[i].title){
            newCollectionsList.push(CollectionsList[i]);
        }
    }
  return (
    
    <>
    <LectureBack>

    <LectureTitle>{Params.title}</LectureTitle>
    </LectureBack>
    
    <LectureContent>
        <LectureLeft>
        {newCollectionsList.map((element) => (
                        <ColletionsSubTitle
                            key={element.title}
                            title={element.title}
                        />
      ))}
        </LectureLeft>
        <LectureRight></LectureRight>
    </LectureContent>
    </>
  )
}
export default Lecture;