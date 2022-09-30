import React from 'react'
import { useParams} from "react-router-dom";

import{LectureTitle,LectureBack,LectureContentListDiv,LectureLeft,LectureContentRight,LectureContainer, LectureContainerRight,LectureContainerLeft,LectureContainerRightView} from './StyledComponent';
import ColletionsSubTitle from './ColletionsSubTitle';

 function LectureContentList() {
  const Params=useParams();
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
        if(Params.title!==CollectionsList[i].title){
            newCollectionsList.push(CollectionsList[i]);
        }
    }
    
  return (
    <>
    <LectureBack>

    <LectureTitle>
          {Params.Lecturename}
          </LectureTitle>
    </LectureBack>
    
    <LectureContentListDiv>
        <LectureLeft>
        {newCollectionsList.map((element) => (
                        <ColletionsSubTitle
                            key={element.title}
                            title={element.title}
                        />
      ))}
        </LectureLeft>
        <LectureContentRight>
          <LectureContainer>
            <LectureContainerLeft>asd</LectureContainerLeft>
            <LectureContainerRight>
              <h2>아무내용이나 막 적어</h2>
              <LectureContainerRightView>보기</LectureContainerRightView>
              </LectureContainerRight>
          </LectureContainer>
        </LectureContentRight>
    </LectureContentListDiv>
    </>
    
  //   <LectureListDiv>
  //   <LectureBox >

  //   <div>{Param.Lecturename}</div>
  //     </LectureBox>
  // </LectureListDiv>
  )
}
export default LectureContentList;