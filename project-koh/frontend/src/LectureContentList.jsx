import React, { useState, useEffect } from 'react'
import { useLocation, useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
import { DeleteButton, LectureTitle, LectureBack, LectureContentListDiv, LectureLeft, LectureContentRight, LectureVideoDiv, RegisterButton, ReviseButton, LectureRightForm } from './StyledComponent';
import ColletionsSubTitle from './ColletionsSubTitle';
import LcetureListRegisterfrom from './LcetureListRegisterfrom';
import LectureVideoCard from './LectureVideoCard'
import { LectureDeleteKeyApi } from './ApiState'
function LectureContentList() {
  const Params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state;
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
          console.log(response);
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
          강의
        </LectureTitle>
        <ReviseButton>강의수정</ReviseButton>
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
          
        </LectureContentRight>
      </LectureContentListDiv>
    </>
  )
}
export default LectureContentList;