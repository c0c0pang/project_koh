import React from 'react'
import {LectureContainerRight, LectureContainerLeft, LectureContainerRightView,LectureContainer} from './StyledComponent'
function LectureVideoCard({Introduce,titlename}) {
  return (
      <LectureContainer>
          <LectureContainerLeft>{titlename}</LectureContainerLeft>
          <LectureContainerRight>
              <h2>{Introduce}</h2>
              <LectureContainerRightView>보기</LectureContainerRightView>
          </LectureContainerRight>
      </LectureContainer>
  )
}


export default LectureVideoCard;