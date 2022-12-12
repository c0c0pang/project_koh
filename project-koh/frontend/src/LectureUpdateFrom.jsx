import React, { useState } from 'react'
import { RegisterDiv, RegisterForm } from './StyledComponent'
import { LecturePutKeyApi } from './ApiState';
import axios from 'axios'
function LcetureUpdateFrom({lectureData}) {
  console.log(lectureData.teacher)
  // const [videoLink,setVideoLink] = useRecoilState(VideoLinkAtom);
  const [inputs, setInputs] = useState({
    title: `${lectureData.title}`,
    category: `${lectureData.category}`,
    content: `${lectureData.content}`,

  });
  const {title,category,content} = inputs
  const selectbox = [
    { value: "인문", name: "인문" },
    { value: "사회", name: "사회" },
    { value: "교육", name: "교육" },
    { value: "공학", name: "공학" },
    { value: "자연", name: "자연" },
    { value: "의약", name: "의약" },
    { value: "예체능", name: "예체능" },
    { value: "IT", name: "IT" },
    { value: "기타", name: "기타" },
  ];
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const onSubmit = async (e) => {

    let data = {
        category: inputs.category,
        title: inputs.title,
        content: inputs.content,
    };
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("content", data.content);
    e.preventDefault();
    await axios.
      put(LecturePutKeyApi(lectureData.id), formData, {
        headers: { "Content-Type": 'multipart/form-data' },
        withCredentials: true,
        transformRequest: (data, headers) => {
          return data;
        },
      }).then((err) => {
        window.location.replace("/")
        console.log(err);
      })
  }

  return (
    <RegisterDiv>
      <RegisterForm method='POST' encType='multipart/form-data' onSubmit={onSubmit}>
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
export default LcetureUpdateFrom