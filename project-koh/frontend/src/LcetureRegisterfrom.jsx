import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {RegisterDiv,RegisterForm} from './StyledComponent'
import axios from 'axios'
function LcetureRegisterfrom() {
  const imgRef = useRef();
  const [imageUrl,setImageUrl] = useState(null);
  const LectureKeyApi="http://localhost:4000/Lecture";
  const [inputs,setInputs]=useState({
    img:"",
    title:"",
    Lecturename:"",
    teacher:"",
    usernum:"",
});
  /*
              <option value="인문">인문</option>
            <option value="교육">교육</option>
            <option value="공학">공학</option>
            <option value="자연">자연</option>
            <option value="의약">의약</option>  
            <option value="예체능">예체능</option>
            <option value="IT">IT</option>
            <option value="기타">기타</option>
            */
  const selectbox = [
    {value:"인문",name:"인문"},
    {value:"교육",name:"교육"},
    {value:"공학",name:"공학"},
    {value:"자연",name:"자연"},
    {value:"의약",name:"의약"},
    {value:"예체능",name:"예체능"},
    {value:"IT",name:"IT"},
    {value:"기타",name:"기타"},
  ];
  const {img,title,Lecturename,teacher,usernum}= inputs;
  const onChange = (e)=>{
    const {value,name} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };
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
  const navigate = useNavigate();
  const onSubmit=()=>{
    axios.
    post(LectureKeyApi,{
      // img:inputs.img,
      title:inputs.title,
      Lecturename:inputs.Lecturename,
      teacher:inputs.teacher,
      usernum:inputs.usernum
    }).then(()=>{
      navigate('./');
    })
  }
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
            {selectbox.map((e)=>(
              <option onChange={onChange} value={e.value} name="title">{e.name}</option>
            ))}
          </select>
          <input name='Lecturename' value={Lecturename} className='text' type="text" id="LcetureName" placeholder='강의명' onChange={onChange} required/>
          <input name='usernum' value={usernum} className='text' type="text" id="limitUser" placeholder='수강인원' onChange={onChange} required/>
          <input onClick={onSubmit} className='subbtn' type="submit" value="입력 완료" />
        </RegisterForm>

    </RegisterDiv>
  )
}
export default LcetureRegisterfrom