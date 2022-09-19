import React from 'react'
import {LectureListDiv,LectureBox} from './StyledComponent'
import {useNavigate} from 'react-router-dom'
function LectureListCrad({title,Lecturename,teacher}) {
  const navigate = useNavigate();
  const goPost = () => {
    navigate(`${"/Lecture/" +title+"/"+ Lecturename}`);
  };
  return (
    <LectureListDiv onClick={goPost}>
      <LectureBox >
        <div className='box'>
        <h2>강의명: {Lecturename}</h2>
        <h2>교수명: {teacher}</h2>
        </div>
        </LectureBox>
    </LectureListDiv>
  )
}
export default LectureListCrad;