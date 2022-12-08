import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useState } from 'react';
import { UserKeyApi, UserViewKeyApi,UserPutKeyApi } from './ApiState'
const Title = styled.h1`
  display: flex;
  justify-content: center;
  color:black;
  font-size: 30px;
  margin-top:30px;
`
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
const FormDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: white;
`
const UserDataForm = styled.form`

  display: grid;
  place-content: center;
  place-items: center;

  margin-bottom:70px;
  gap: 20px;
  .subbtn{
    border: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    font-family: inherit;
    width: 90px;
    height: 40px;
    cursor: pointer;
    transition: all ease 0.5s 0s;
    font-size: 18px;
    border-radius: 5px;
    
 }
 .subbtn:hover{
    box-shadow: 0 0 5px 0 rgba(239, 239, 239, .5),
                0 0 5px 0 rgba(239, 239, 239, .5),
                0 0 5px 0 rgba(239, 239, 239, .5),
                0 0 5px 0 rgba(239, 239, 239, .5);
    color: white;
    background-color: black;
    transition: all ease 0.5s 0s;
 }
 #img{
    display: none;
 }
 .imgbtn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 130px;
    border-radius: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
 }
 img{
  width: 230px;
  height: 150px;
}
`
const UserInputDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
`
const UserInput = styled.input`
    width:200px;
    height: 20px;
    -webkit-appearance: none; 
    -moz-appearance: none;
    appearance: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    border: none;
    font-family: inherit;
    font-size: 15px;
    padding: 3px;
    border-radius: 5px;
`
const UserImgInput = styled.input`

`
function UserFormPage() {
  const user = localStorage.getItem("user_id");
  const item = JSON.parse(user);
  const imgRef = useRef();
  const [imageUrl, setImageUrl] = useState(null);
  const [inputs, setInputs] = useState({
    wallet_address: `${item.value}`,
    userName: "",
    email: "",
    profile: null
  });
  const { wallet_address, userName, email, profile } = inputs;

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
  const onClickImgBtn = (e) => {
    imgRef.current.click();
  };
  useEffect(() => {
    axios.get(UserViewKeyApi)
      .then((response) => {
        setInputs({
          wallet_address: `${item.value}`,
          userName: `${response.data[0].userName}`,
          email: `${response.data[0].email}`,
        })
        setImageUrl(response.data[0].profile)
      })
  }, [])

  const onChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
    console.log(inputs);
  };
  const onPostSubmit = async (e) => {
    console.log(inputs);
    const formData = new FormData();
    let data = {
      wallet_address: inputs.wallet_address,
      userName: inputs.userName,
      profile: inputs.profile,
      email: inputs.email
    };
    formData.append('wallet_address', data.wallet_address);
    formData.append('userName', data.userName);
    formData.append('profile', data.profile);
    formData.append('email', data.email);
    e.preventDefault();
    await axios.post(UserKeyApi, formData, {
      headers: { "Content-Type": `multipart/form-data` },
      withCredentials: true,
      transformRequest: (data, headers) => {
        return data;
      },
    }).then((err) => {
      console.log(err);
    }
    )
  };
  const onPutSubmit = async (e) => {
    console.log(inputs);
    const formData = new FormData();
    let data = {
      wallet_address: inputs.wallet_address,
      userName: inputs.userName,
      profile: inputs.profile,
      email: inputs.email
    };
    formData.append('wallet_address', data.wallet_address);
    formData.append('userName', data.userName);
    formData.append('profile', data.profile);
    formData.append('email', data.email);
    e.preventDefault();
    await axios.put(UserPutKeyApi(data.wallet_address), formData, {
      headers: { "Content-Type": `multipart/form-data` },
      withCredentials: true,
      transformRequest: (data, headers) => {
        return data;
      },
    }).then((err) => {
      console.log(err);
    }
    )
  };
  return (
    <Div>
      <FormDiv>
        <Title>상세 정보 입력</Title>
        <UserDataForm method='POST' encType='multipart/form-data' >
          <UserImgInput multiple="multiple" name='profile' type="file" id="img" accept='image/*' ref={imgRef} onChange={onChangeImage} />
          <div className='imgbtn' onClick={(e) => {
            e.preventDefault();
            onClickImgBtn();
          }}>
            {imageUrl === null ? (
              <h2>이미지 업로드</h2>
            ) : (
              <img src={imageUrl} />)}
          </div>
          <UserInput name='userName' value={userName} onChange={onChange} type='text' placeholder='이름' />
          <UserInput name='email' value={email} onChange={onChange} type='email' placeholder='이메일' />
          <UserInputDiv>
            <UserInput className='subbtn' type='submit' value='수정' onClick={onPutSubmit}/>
            <UserInput className='subbtn' type='submit' value='입력완료' onClick={onPostSubmit}/>
          </UserInputDiv>
        </UserDataForm>
      </FormDiv>
    </Div>
  )
}
export default UserFormPage;