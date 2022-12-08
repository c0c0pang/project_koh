import React from "react";
import styled from 'styled-components';
import BEAN from './img/Bean.gif';
const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 200%;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
    font-family: 'LeferiPoint-WhiteObliqueA';
  text-align: center;
`;
export default () =>{
    return (
        <Background>
      <LoadingText>토큰이 발행중이니 잠시만 기다려주세요.</LoadingText>
      <img src={BEAN} alt="로딩중" width="5%" />
    </Background>
    );
};