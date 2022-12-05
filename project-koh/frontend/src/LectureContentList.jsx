import React, { useState, useEffect } from 'react'
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { DescriptionDiv,VideoDiv, LectureTextDiv, LectureMainDiv, LectureContentDiv, DeleteButton, LectureTitle, LectureBack, LectureContentListDiv, LectureLeft, LectureContentRight, LectureVideoDiv, RegisterButton, ReviseButton, LectureRightForm } from './StyledComponent';
import ColletionsSubTitle from './ColletionsSubTitle';
import { LectureDeleteKeyApi } from './ApiState'
import NFT from './img/NFT.jpg'
function LectureContentList() {
  const Params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { id, lectureData } = location.state;

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
  console.log(lectureData.video_url);
  return (
    <>
      <LectureBack className='main_div'>
        <LectureTitle>
          강의
        </LectureTitle>
        <ReviseButton>강의수정</ReviseButton>
        <img src={NFT} />
        <DeleteButton onClick={confirmDelete}>강의삭제</DeleteButton>

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
          <LectureContentDiv>
            <LectureMainDiv>
              <img src={lectureData.thumbnail} />
              <LectureTextDiv>
                <h1>[ {lectureData.title} ]</h1>
                <h2>수강인원: {lectureData.headcount}</h2>
              </LectureTextDiv>
            </LectureMainDiv>
            <DescriptionDiv>
              <h1>{lectureData.content}</h1>
            </DescriptionDiv>

            <VideoDiv>
              <video controls muted name='media' width={400} height={300}>
                <source src={lectureData.video_url} type="video/mp4"></source>
              </video>
            </VideoDiv>
          </LectureContentDiv>
        </LectureContentRight>
      </LectureContentListDiv>
    </>
  )
}
export default LectureContentList;