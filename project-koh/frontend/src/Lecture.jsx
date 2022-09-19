import React,{useState}from 'react';

import { useParams} from "react-router-dom";
import{LectureTitle,LectureBack,LectureContent,LectureLeft,LectureRight} from './StyledComponent';
import LectureListCrad from './LectureListCrad'
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
    const LectureList=[
      {title:"인문",Lecturename:"인문 세미나1",teacher:"최원석"},
      {title:"인문",Lecturename:"인문 세미나2",teacher:"최원석"},
      {title:"인문",Lecturename:"인문 세미나3",teacher:"최원석"},
      {title:"인문",Lecturename:"인문 세미나4",teacher:"최원석"},
      {title:"인문",Lecturename:"인문 세미나5",teacher:"최원석"},
      {title:"인문",Lecturename:"인문 세미나6",teacher:"최원석"},
      {title:"인문",Lecturename:"인문 세미나7",teacher:"최원석"},
      {title:"인문",Lecturename:"인문 세미나8",teacher:"최원석"},
      {title:"인문",Lecturename:"인문 세미나9",teacher:"최원석"},
      {title:"인문",Lecturename:"인문 세미나10",teacher:"최원석"},
      {title:"인문",Lecturename:"인문 세미나11",teacher:"최원석"},
      {title:"인문",Lecturename:"인문 세미나12",teacher:"최원석"},
      // ,{title:"사회",Lecturename:"사회 세미나",teacher:"최원석"},
      // {title:"교육",Lecturename:"교육 세미나",teacher:"최원석"}
      // ,{title:"공학",Lecturename:"공학 세미나",teacher:"최원석"}
      // ,{title:"자연",Lecturename:"자연 세미나",teacher:"최원석"},
      // {title:"의약",Lecturename:"의약 세미나",teacher:"최원석"}
      // ,{title:"예체능",Lecturename:"예체능 세미나",teacher:"최원석"}
      // ,{title:"IT",Lecturename:"IT 세미나",teacher:"최원석"}
      // ,{title:"기타",Lecturename:"기타 세미나",teacher:"최원석"}
      ];
const newCollectionsList=[]
    for(let i=0;i<CollectionsList.length;i++){
        if(Params.title!==CollectionsList[i].title){
            newCollectionsList.push(CollectionsList[i]);
        }
    }

const newLectureList=[]
    for(let i=0;i<LectureList.length;i++){
      if(Params.title===LectureList[i].title){
          newLectureList.push(LectureList[i]);
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
        <LectureRight>
        {newLectureList.map((element) => (
                        <LectureListCrad
                            key={element.title}
                            title={element.title}
                            Lecturename={element.Lecturename}
                            teacher = {element.teacher}

                        />
      ))}
        </LectureRight>
    </LectureContent>
    </>
  )
}
export default Lecture;