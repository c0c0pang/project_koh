import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useState } from 'react';
import {UserKeyApi,UserViewKeyApi} from './ApiState'
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
function UserFormPage() {
  const user = localStorage.getItem("user_id");
  const item = JSON.parse(user);
  useEffect(()=>{
    axios.get(UserViewKeyApi)
    .then((response)=>{
      setInputs({
        wallet_address: `${item.value}`,
        userName: `${response.data[0].userName}`,
        email: `${response.data[0].email}`
      })
    })
  },[])
  const [inputs, setInputs] = useState({
    wallet_address: `${item.value}`,
    userName: "",
    email: ""
  });
  const { userName,email } = inputs;

  
  const onChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
    console.log(inputs);
  };
  const onSubmit = async (e) => {
    console.log(inputs);
    e.preventDefault();
    await axios.post(UserKeyApi,inputs  ,{
      headers: { "Content-Type": `application/json`},
      withCredentials: true,
    }).then((err)=>{
      console.log(err);
    }
    )
  }
  return (
    <Div>
      <FormDiv>
        <Title>상세 정보 입력</Title>
        <UserDataForm method='post' encType='application/json'>
          <UserInput name='userName' value={userName} onChange={onChange} type='text' placeholder='이름' />
          <UserInput name='email' value={email} onChange={onChange} type='email' placeholder='이메일' />
          <UserInputDiv>
            <UserInput className='subbtn' type='submit' value='수정' />
            <UserInput className='subbtn' type='submit' value='입력완료' onClick={onSubmit} />
          </UserInputDiv>
        </UserDataForm>
      </FormDiv>
    </Div>
  )
}
export default UserFormPage;