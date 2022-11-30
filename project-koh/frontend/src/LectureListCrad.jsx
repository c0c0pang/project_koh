import React from 'react'
import { LectureListDiv, LectureBox } from './StyledComponent'
import { useNavigate } from 'react-router-dom'
function LectureListCrad({ id,category, title, teacher, thumbnail }) {
  const navigate = useNavigate();
  const goPost = () => {
    var url = "/lecture/" + category + "/" + title + "/";
    navigate(url,{state: {id:id}});
  };
  return (
    <LectureListDiv onClick={goPost}>
      <LectureBox >

        <img src={thumbnail} />
        <div className='box'>
          <h2>강의명: {title}</h2>
          <h2>교수명: {teacher}</h2>
        </div>
      </LectureBox>
    </LectureListDiv>
  )
}
export default LectureListCrad;