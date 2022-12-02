import React from 'react'
import styled from 'styled-components'
import './font.css'
import Logo from './img/열려라참빛 로고.jpg'
const FooterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    height: 140px;
    /* background: linear-gradient(180deg, #FFFFFF 28.13%, rgba(214, 250, 255, 0.33) 100%); */
    margin-top: 60px;
    img{
        width: 110px;
    }
`;
const TextDiv = styled.h1`
    display: grid;
    align-content: center;
    gap: 30px;
    /* width: 800px; */
    height: 140px;
`;
const Text = styled.h1`
    font-size: 15px;
    color: gray;
    font-family: 'GmarketSansBold';
`;
function Footer() {
    return (
        <FooterDiv>
            <img src={Logo} />
            <TextDiv>
                <Text>
                    만든이: 김영욱,김태훈,최원석
                </Text>
                <Text>
                    참빛 프로젝트 - 열려라 참빛
                </Text>
                <Text>
                    사용 스택: React, Django, Solidity
                </Text>

            </TextDiv>
        </FooterDiv>
    )
}
export default Footer