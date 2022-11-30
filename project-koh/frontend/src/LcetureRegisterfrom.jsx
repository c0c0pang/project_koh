import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RegisterDiv, RegisterForm } from './StyledComponent'
import { LectureKeyApi, UserViewKeyApi } from './ApiState';
import axios from 'axios'
import { useEffect } from 'react';
function LcetureRegisterfrom() {
  const imgRef = useRef();
  const [imageUrl, setImageUrl] = useState(null);
  const [inputs, setInputs] = useState({
    img: "",
    title: "",
    Lecturename: "",
    teacher: "",
    usernum: "",
    category: "인문",
    thumbnail: "",
    content: ""
  });
  const [userName,setUserName] = useState("")
  const selectbox = [
    { value: "인문", name: "인문" },
    { value: "교육", name: "교육" },
    { value: "공학", name: "공학" },
    { value: "자연", name: "자연" },
    { value: "의약", name: "의약" },
    { value: "예체능", name: "예체능" },
    { value: "IT", name: "IT" },
    { value: "기타", name: "기타" },
  ];
  const { category, img, title, Lecturename, teacher, usernum, content, thumbnail } = inputs;

  const onChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
    console.log(inputs);
  };
  const onChangeImage = (e) => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    const { name } = e.target;
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      setInputs({
        ...inputs,
        [name]: file
      });
      // console.log("이미지주소", reader.result);
    };

  };
  const onClickFileBtn = (e) => {
    imgRef.current.click();
  };
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(UserViewKeyApi)
      .then((response)=>{
        setUserName(response.data[0].userName);
      })
  }, [])

  const onSubmit = async (e) => {
    let data = {
      category: inputs.category,
      title: inputs.title,
      thumbnail: inputs.thumbnail,
      teacher: userName,
      //inputs.le_contents,
      content: inputs.content
    };
    const formData = new FormData();
    formData.append("thumbnail", data.thumbnail);
    formData.append("category", data.category);
    formData.append("title", data.title);
    formData.append("teacher", data.teacher);
    formData.append("content", data.content);
    e.preventDefault();
    await axios.
      post(LectureKeyApi, formData, {
        headers: { "Content-Type": 'multipart/form-data' },
        withCredentials: true,
        transformRequest: (data, headers) => {
          return data;
        },
      }).then((err) => {
        console.log(err);
      })
    window.location.reload();
  }

  return (
    <RegisterDiv>
      <RegisterForm method='POST' encType='multipart/form-data' onSubmit={onSubmit}>
        <input multiple="multiple" name='thumbnail' type="file" id="file" accept='image/*' ref={imgRef} onChange={onChangeImage} />

        <div className='imgbtn' onClick={(e) => {
          e.preventDefault();
          onClickFileBtn();
        }}>
          {imageUrl === null ? (
            <h2>이미지 업로드</h2>
          ) : (
            <img src={imageUrl} />)}

        </div>
        <select onChange={onChange} name="category" value={category}>
          {selectbox.map((e) => (
            <option value={e.value}>{e.name}</option>
          ))}
        </select>
        <input name='title' value={title} className='text' type="text" id="LcetureName" placeholder='강의명' onChange={onChange} required />
        <input name='content' value={content} className='text' type="text" id="limitUser" placeholder='수강인원' onChange={onChange} required />
        <input className='subbtn' type="submit" value="입력 완료" />
      </RegisterForm>

    </RegisterDiv>
  )
}
export default LcetureRegisterfrom