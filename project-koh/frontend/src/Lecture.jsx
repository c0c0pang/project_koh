import React,{useState,useEffect}from 'react';
import axios from 'axios';
import { useParams} from "react-router-dom";
import{LectureTitle,LectureBack,LectureContent,LectureLeft,LectureRight} from './StyledComponent';
import LectureListCrad from './LectureListCrad'
import ColletionsSubTitle from './ColletionsSubTitle';
import { useCallback } from 'react';
function Lecture() {
  const ColletionKeyApi="http://localhost:4000/title";
  const LectureKeyApi="http://localhost:4000/Lecture";
  const [CollectionsList,setCollectionsList] =useState([]);
  // const [humanitiesLectureList,sethumanitiesLectureList]= useState([]);
  // const [SocialLectureList,setSocialLectureList]= useState([]);
  const [LectureList,setLectureList]= useState([{}]);
  const [newLectureList,setnewLectureList]=useState([{}]);
  const Params = useParams();
  useEffect(() => {
    axios
    .get(
      ColletionKeyApi
    )
    .then((response) => {
      setCollectionsList(response.data)
    });
  },[]);
  const newCollectionsList=[]
  for(let i=0;i<CollectionsList.length;i++){
      if(Params.title!==CollectionsList[i]){
          newCollectionsList.push(CollectionsList[i]);
      }
  }
  useEffect(() => {
    axios
    .get(
    LectureKeyApi
    )
    .then((response) => {
    // console.log(response.data)
    setLectureList(response.data)
    });
  },[]);
  // console.log(LectureList.filter((element)=> Params.title===element.title))
  // console.log(LectureList);
    // useEffect(()=>{
    //   setnewLectureList(
    //     LectureList.filter(
    //       (item)=>Params.title===item.title
    //     )
    //   )
    // },[LectureList])
  //무엇을 받을지 state에 미리 설정!
  return (
    
    <>
    <LectureBack>

    <LectureTitle>{Params.title}</LectureTitle>
    </LectureBack>
    
    <LectureContent>
        <LectureLeft>
        {newCollectionsList.map((element,index) => (
                        <ColletionsSubTitle
                            // getLecture={getLecture}
                            key={index}
                            title={element}
                        />
      ))}
        </LectureLeft>
        <LectureRight>
        {LectureList
        .filter((element)=> Params.title===element.title)
        .map((element,index) => (
                        <LectureListCrad
                            key={index}
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