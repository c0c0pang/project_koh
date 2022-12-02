import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RegisterDiv, RegisterForm, FileDiv } from './StyledComponent'
import { LectureKeyApi, UserViewKeyApi } from './ApiState';
import axios from 'axios'
import { useEffect } from 'react';
import {SendFileToIPFS} from './blockchain/MyLecture/upload-pinata'
import {useRecoilState, useSetRecoilState } from 'recoil';
import {VideoLinkAtom} from './atom';
function LcetureRegisterfrom() {
  const imgRef = useRef();
  const videoRef = useRef();
  const [imageUrl, setImageUrl] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoLink,setVideoLink] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    teacher: "",
    usernum: "",
    category: "인문",
    thumbnail: "",
    content: "",
    video: ""
  });
  const [userName, setUserName] = useState("")
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
  const { category, title, teacher, usernum, content, thumbnail,video } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
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
    };
  };

  const onChangeVideo = (e) => {
    const reader = new FileReader();
    const file = videoRef.current.files[0];
    
    const { name } = e.target;
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideoUrl(reader.result);
      setInputs({
        ...inputs,
        [name]: file
      });
    };
  };

  const onClickImgBtn = (e) => {
    imgRef.current.click();
  };
  const onClickVideoBtn = (e) => {
    videoRef.current.click();
  };
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(UserViewKeyApi)
      .then((response) => {
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
      content: inputs.content,
      video: inputs.video
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
        SendFileToIPFS(data.title,data.content,video); 
        console.log(videoLink);
        console.log(err);
      })
    // window.location.reload();
  }

  return (
    <RegisterDiv>
      <RegisterForm method='POST' encType='multipart/form-data' onSubmit={onSubmit}>
        <FileDiv>
          <input multiple="multiple" name='thumbnail' type="file" id="img" accept='image/*' ref={imgRef} onChange={onChangeImage} />
          <div className='imgbtn' onClick={(e) => {
            e.preventDefault();
            onClickImgBtn();
          }}>
            {imageUrl === null ? (
              <h2>이미지 업로드</h2>
            ) : (
              <img src={imageUrl} />)}
          </div>

          <input multiple="multiple" name='video' type="file" id="video" accept='video/mp4' ref={videoRef} onChange={onChangeVideo} />
          <div className='imgbtn' onClick={(e) => {
            e.preventDefault();
            onClickVideoBtn();
          }}>
            {videoUrl === null ? (
              <h2>동영상 업로드</h2>
            ) : (
              <video width="100%" height='100%' preload='metadata' src={videoUrl+'#t=0.5'}>
                <source src={videoUrl} type="video/mp4"></source>
              </video>
            )
            }
          </div>
        </FileDiv>
        <select onChange={onChange} name="category" value={category}>
          {selectbox.map((e) => (
            <option value={e.value}>{e.name}</option>
          ))}
        </select>
        <input name='title' value={title} className='text' type="text" id="LcetureName" placeholder='강의명' onChange={onChange} required />
        <textarea name='content' value={content} className='textarea' type="text" id="limitUser" placeholder='강의 설명' onChange={onChange} required />
        <input className='subbtn' type="submit" value="입력 완료" />
      </RegisterForm>

    </RegisterDiv>
  )
}
export default LcetureRegisterfrom