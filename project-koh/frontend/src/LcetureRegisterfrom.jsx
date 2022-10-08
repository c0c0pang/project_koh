import React, { useRef, useState } from 'react'
import {RegisterDiv,RegisterForm} from './StyledComponent'
import axios from 'axios'
function LcetureRegisterfrom() {
  const imgRef = useRef();
  const [imageUrl,setImageUrl] = useState(null);

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    console.log(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      console.log("이미지주소", reader.result);
    };
  };

  const onClickFileBtn = (e) => {
    imgRef.current.click();
  };

  return (
    <RegisterDiv>
        <RegisterForm>
          <input type="file" id="file" accept='image/*' ref={imgRef} onChange={onChangeImage} />
          <div className='imgbtn' onClick={(e) => {
            e.preventDefault();
            onClickFileBtn();
          }}>
            {imageUrl===null ? (
              <h2>이미지 업로드</h2>
            ):(
              <img src={imageUrl}/>) }
              
          </div>
          <select>
            {/* <option value="none">카테고리 선택</option> */}
            <option value="인문">인문</option>
            <option value="교육">교육</option>
            <option value="공학">공학</option>
            <option value="자연">자연</option>
            <option value="의약">의약</option>  
            <option value="예체능">예체능</option>
            <option value="IT">IT</option>
            <option value="기타">기타</option>
          </select>
          <input className='text' type="text" id="LcetureName" placeholder='강의명'required/>
          <input className='text' type="text" id="limitUser" placeholder='수강인원'required/>
          <input className='subbtn' type="submit" value="입력 완료" />
        </RegisterForm>

    </RegisterDiv>
  )
}
export default LcetureRegisterfrom