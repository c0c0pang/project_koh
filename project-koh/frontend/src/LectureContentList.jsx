import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { LectureTitle, LectureBack, LectureContentListDiv, LectureLeft, LectureContentRight, LectureVideoDiv, RegisterButton, ReviseButton, LectureRightForm } from './StyledComponent';
import ColletionsSubTitle from './ColletionsSubTitle';
import LcetureListRegisterfrom from './LcetureListRegisterfrom';
import LectureVideoCard from './LectureVideoCard'
function LectureContentList() {
  const Params = useParams();
  const LectureVideoKeyApi = "http://localhost:4000/Lecture_Video";
  const [LectureVideo, setLectureVideo] = useState([]);
  useEffect(() => {
    axios
      .get(
        LectureVideoKeyApi
      )
      .then((response) => {
        setLectureVideo(response.data)
      });
  }, []);
  const videocheck = []

    for (let i = 0; i < LectureVideo.length; i++) {
      if (Params.Lecturename === LectureVideo[i].Lecturename) {
        videocheck.push(LectureVideo[i])
      }
    }

  const CollectionsList = [
    { title: "인문" }
    , { title: "사회" },
    { title: "교육" }
    , { title: "공학" }
    , { title: "자연" },
    { title: "의약" }
    , { title: "예체능" }
    , { title: "IT" }
    , { title: "기타" }
  ];
  const [register, setRegister] = useState(false);
  const RegisterCheck = () => {
    setRegister(true);
  };
  const RegisterNotCheck = () => {
    setRegister(false);
  };
  const newCollectionsList = []
  const RegiCollections = [];
   for (let i = 0; i < CollectionsList.length; i++) {
    if (Params.title !== CollectionsList[i].title) {
      newCollectionsList.push(CollectionsList[i]);
    }
    else {
      RegiCollections.push(CollectionsList[i]);
    }
  }
  return (
    <>
      <LectureBack>
        <LectureTitle>
          {Params.Lecturename}
        </LectureTitle>
        <RegisterButton onClick={RegisterCheck}>영상등록</RegisterButton>
        <ReviseButton>영상수정</ReviseButton>
      </LectureBack>

      <LectureContentListDiv>
        <LectureLeft>
          {newCollectionsList.map((element,index) => (
            <ColletionsSubTitle
              key={index}
              title={element.title}
              RegisterNotCheck={RegisterNotCheck}
            />
          ))}
        </LectureLeft>
        <LectureContentRight>
          {register ? (
            <LectureRightForm>
              <LcetureListRegisterfrom RegiCollections={RegiCollections[0].title}></LcetureListRegisterfrom>
            </LectureRightForm>
          ) : (
            <LectureVideoDiv num={videocheck.length}>
              {videocheck.map((element,index)=>(
                <LectureVideoCard
                  key={index}
                  Introduce={element.Introduce}
                  titlename={element.titlename}
                />
              ))}
            </LectureVideoDiv>
          )}

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