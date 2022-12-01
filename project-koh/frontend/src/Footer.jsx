import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 140px;
    background: linear-gradient(180deg, #FFFFFF 28.13%, rgba(214, 250, 255, 0.33) 100%);
`
const TextDiv = styled.h1`
    display: grid;
    /* justify-content: center; */
    align-content: center;
    gap: 30px;
    width: 1200px;
    /* background: red; */
    height: 140px;
`
const Text = styled.h1`
    font-size: 15px;
    color: gray;
`
function Footer() {
    return (
        <FooterDiv>
            <TextDiv>
                <Text>
                    만든이: 김영욱,김태훈,최원석
                </Text>
                <Text>
                    참빛 프로젝트 - 열려라 참빛
                </Text>
                <Text>
                    사용 스택: react, django
                </Text>
                
            </TextDiv>
        </FooterDiv>
    )
}
export default Footer