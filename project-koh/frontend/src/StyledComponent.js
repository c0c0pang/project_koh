import styled from "styled-components";
import './font.css'

export const HeaderNavdiv = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-around;
    align-items: center;

    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;

    .userimg{
        img{
            width: 30px;
        }
    }
    .walletimg{
        img{
            width: 30px;
        }
    }
`

export const Search = styled.div`
    display: flex;
    height: 40px;
    width: 500px;
    border-radius: 10px;
    background-color:#F8F8F8;
    input{
        border-top: none;
    border-left:none;
    border-right: none;
    border-bottom:none;
    width: 450px;
    background-color:transparent; 
    margin-left: 10px;
    text-align: center;
    }
    input:focus{
        outline:none;
    }
    img{
        width: 20px;
        margin-top:10px;
        margin-left: 3px;
    }
    #Id{
        display: none;
    }
    
    
`
export const MainTitle = styled.h2`
  font-family: 'NEXON Lv1 Gothic OTF';
  font-weight: bold;
  font-size: 35px;
`
export const MenuTitle = styled.h2`
font-family: 'GmarketSansLight';
  font-weight: lighter;
  font-size: 28px;
`
export const SearchText = styled.h2`
  font-family: 'NEXON Lv1 Gothic OTF Light';
`
export const Image = styled.image`

`

export const SearchForm=styled.form`
    display: flex;
`
export const ContentDiv=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CollectionsDiv=styled.div`
    display: grid;
    grid-template-columns: 270px 270px 270px;
    grid-template-rows: 230px 230px 230px;
    
`

export const CardList=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    box-shadow:  0 0 1rem 0 rgba(0,0,0,.1);
    border-radius: 10px;
    margin:20px;
    font-size: 23px;
    font-family: 'NEXON Lv1 Gothic OTF Light';
    font-weight: bolder;
    background: linear-gradient(#EBD5D5 100%, #C6BCBC 33%);
`
export const LectureBack = styled.div`
height: 200px;
/* border-bottom: solid 1px #CCCCCC; */
background-color: #CACBDB;
`
export const LectureTitle=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 80px;
    background-color: #CCBEBE;
    border-radius: 10px;
    position:relative;
    left:50px;
    top:160px;
`
export const LectureContent = styled.div`
    display: grid;
    
    grid-template-columns: 1fr 6fr;
`

export const LectureLeft = styled.div`
border-right: solid 1px #CCCCCC;
`

export const LectureRight = styled.div`

`
export const AllSub = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
`
export const SubTtile = styled.div`
    margin-bottom: 10px;
`
export const SubText = styled.h2`
    font-family: 'NEXON Lv1 Gothic OTF Light';
    font-size: 18px;
    cursor: pointer;
`