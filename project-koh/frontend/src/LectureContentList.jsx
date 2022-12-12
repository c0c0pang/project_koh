import React, { useState, useEffect } from 'react'
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { DescriptionDiv, VideoDiv, LectureTextDiv, LectureMainDiv, LectureContentDiv, DeleteButton, LectureTitle, LectureBack, LectureContentListDiv, LectureLeft, LectureContentRight, LectureVideoDiv, RegisterButton, ReviseButton, LectureRightForm } from './StyledComponent';
import ColletionsSubTitle from './ColletionsSubTitle';
import { LectureDeleteKeyApi } from './ApiState'
import LectureUpdateFrom from './LectureUpdateFrom';
import NFT from './img/NFT.jpg'
function LectureContentList() {
  const Params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { id, lectureData, userData } = location.state;
  const RegisterCheck = () => {
    setRegister(true);
  };
  // const asd = 'https://gateway.pinata.cloud/ipfs/QmZidsvXUCqZe1w9fJ3LQX3iwrRHajxLTk4xUFdRvrVhNc';

  const useConfirm = (message = null, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }
    const confirmAction = async () => {
      if (window.confirm(message)) {
        await axios.delete(
          LectureDeleteKeyApi(id)
        ).then((response) => {
          navigate(`../lecture/${Params.title}`);
        })
        onConfirm();
      } else {
        onCancel();
      }
    };

    return confirmAction;
  };
  const deleteConfirm = () => console.log("삭제했습니다.");
  const cancelConfirm = () => console.log("취소했습니다.");
  const confirmDelete = useConfirm(
    "삭제하시겠습니까?",
    deleteConfirm,
    cancelConfirm
  );

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
      <LectureBack className='main_div'>
        <LectureTitle>
          강의
        </LectureTitle>
        <img src={NFT} />
        {userData.userName === lectureData.teacher ? (
          <>
            <ReviseButton onClick={RegisterCheck} >강의수정</ReviseButton>
            <DeleteButton onClick={confirmDelete}>강의삭제</DeleteButton>
          </>
        ) : (<>
          <ReviseButton>수강신청</ReviseButton>
        </>)
        }
      </LectureBack>

      <LectureContentListDiv>
        <LectureLeft>
          {newCollectionsList.map((element, index) => (
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
            <LectureUpdateFrom lectureData={lectureData}></LectureUpdateFrom>
          </LectureRightForm>
          ):(
            <LectureContentDiv>
            <LectureMainDiv>
              <img src={lectureData.thumbnail} />
              <LectureTextDiv>
                <h1>[ {lectureData.title} ]</h1>
                <h2>수강인원: {lectureData.count}</h2>
              </LectureTextDiv>
            </LectureMainDiv>

            <VideoDiv>
              <video controls muted name='media' width={700} height={600}>
                <source src={lectureData.video_url} type="video/mp4"></source>
              </video>
            </VideoDiv>
            <DescriptionDiv>
              <h1>{lectureData.content}</h1>
            </DescriptionDiv>
          </LectureContentDiv>
          ) }
          
        </LectureContentRight>
      </LectureContentListDiv>
    </>
  )
}
export default LectureContentList;