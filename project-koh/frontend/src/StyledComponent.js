import styled from "styled-components";
import './font.css'

export const MediaDiv = styled.div`
    margin: 0px auto;
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.bgColor};
    
`;

export const HeaderNavdiv = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-around;
    align-items: center;
    
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;

    .menuimg{
        img{
            width: 30px;
        }
        
    }
    .menuimg:hover .tool{
        visibility: visible;
    }
    
    .walletimg{
        img{
            width: 30px;
        }
    }
    .walletimg:hover .tool {
        visibility: visible;
        
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
export const MainTitle = styled.h1`
  font-family: 'NEXON Lv1 Gothic OTF';
  font-weight: bold;
  font-size: 35px;
  cursor: pointer;
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
    #box:hover{
    background: linear-gradient(180deg, #E4E3E3 0%, rgba(250, 114, 114, 0.33) 99.99%);
    color: #050801;
    box-shadow: 0 0 10px 0 rgba(107, 83, 83,.15),
                0 0 10px 0 rgba(107, 83, 83,.15),
                0 0 10px 0 rgba(107, 83, 83,.15),
                0 0 10px 0 rgba(107, 83, 83,.15);
     -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
     transition: all ease 0.7s 0s;
}
`

export const CardList=styled.div`

    display: flex;
    justify-content: center;
    align-items: center;    
    box-shadow:  0 0 1rem 0 rgba(0,0,0,.1);
    border-radius: 10px;
    margin:20px;
    font-size: 23px;
    font-family: 'NEXON Lv1 Gothic OTF';
    font-weight: bold;
    background: linear-gradient(180deg, #F8E5E5 0%, rgba(214, 204, 204, 0.33) 99.99%);
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    cursor: pointer;
`
export const LectureBack = styled.div`
height: 200px;
background: linear-gradient(180deg, #7483B9 0%, rgba(149, 147, 225, 0.33) 99.99%);
border-bottom: 1px solid #CCCCCC;
`
export const LectureTitle=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 80px;
    background-color: #fFF0F0;
    border: 3px solid black;
    border-radius: 10px;
    position:relative;
    left:45px;
    top:160px;
    font-family: 'NEXON Lv1 Gothic OTF Light';
    font-weight: bold;
`
export const LectureContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
`
export const LectureContentListDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
`
export const LectureLeftDiv=styled.div`

`
export const LectureLeft = styled.div`
width: 200px;
height: auto;
border-right: solid 1px #CCCCCC;

`

export const LectureRightDiv=styled.div`

`
export const LectureRight = styled.div`
    display: grid;
    max-height: 700px;
    overflow: scroll;
    grid-template-columns: repeat(4 ,300px);
`
export const LectureContentRight = styled.div`
    display: flex;
    justify-content: center;
    overflow: scroll;
`

export const LectureListDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    border-radius:10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    margin: 15px;
    cursor: pointer;    

    overflow: hidden;
`
export const LectureBox = styled.div`

    position:relative;
    width: 260px;
    h2{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        margin-top: 5px;
    }
    .box{
    border-top: solid 1px #CCCCCC; 
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    font-family: 'NEXON Lv1 Gothic OTF Light';
    }
    img{
        padding-top: 10px;
        width: 260px;
        height: 140px;
    }
`
export const AllSub = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    /* margin-top: 50px; */
`
export const SubTtile = styled.div`
    margin-top: 60px;           
    margin-bottom: 10px;
`
export const SubText = styled.h2`
    font-family: 'NEXON Lv1 Gothic OTF Light';
    font-size: 18px;
    cursor: pointer;
`
export const LectureVideoDiv = styled.div`
    display: grid;
    grid-template-rows: repeat(${({num})=>num},130px);
`
export const LectureContainer = styled.div`
    display: grid;
    grid-template-columns: 150px 500px;
    height: 100px;
    margin-top: 30px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius:10px;
`
export const LectureContainerLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: solid 1px #CCCCCC;
`
export const LectureContainerRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right:50px ;
    margin-left:50px ;
`
export const LectureContainerRightView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 30px;
    background-color: #CCCBEE;
    border-radius: 5px;
`
export const SearchDiv=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ModalDiv=styled.div`   
    position: absolute;
    right: 2%;
    margin-top: 10px;
    visibility: hidden;
    border-radius: 12px 12px 0px 0px;
    

`
export const Modalbox=styled.div`
    display: grid;
    place-content: center;
    width: 200px;
    border-radius: 12px 12px 0px 0px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    background-color: white;
    transition: all 0.2s;
    
`
export const ModalTextDiv=styled.div`
    font-size: 20px;
    width: 200px;
    font-family: 'NEXON Lv1 Gothic OTF';
    font-weight: bold;
    border-bottom: solid 1px #CCCCCC;
    
    div{
        display: flex;
        align-items: center;
        padding: 15px;
        #imgbox{
            width: 20px;
            margin-right: 20px;
        }
    }

`
export const RegisterButton=styled.div`
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 69px;
    height: 26px;
    position: relative;
    left:94%;
    top: 43%;
    font-family: 'NEXON Lv1 Gothic OTF';
    background: linear-gradient(180deg, #EBD5D5 0%, rgba(198, 188, 188, 0.33) 99.99%);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`
export const ReviseButton=styled.div`
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 69px;
    height: 26px;
    position: relative;
    left:88%;
    top: 30%;
    font-family: 'NEXON Lv1 Gothic OTF';
    background: linear-gradient(180deg, #EBD5D5 0%, rgba(198, 188, 188, 0.33) 99.99%);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`
export const DeleteButton=styled.div`
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 69px;
    height: 26px;
    position: relative;
    left:82%;
    top: 17%;
    font-family: 'NEXON Lv1 Gothic OTF';
    background: linear-gradient(180deg, #EBD5D5 0%, rgba(198, 188, 188, 0.33) 99.99%);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`
export const LectureRightForm = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const RegisterDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 500px;
height: 500px;
/* background-color: blue; */
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
margin-top: 80px;

`
export const RegisterForm = styled.form`
display: grid;
/* grid-template-columns: repeat(1 ,300px); */
font-family: 'GmarketSansLight';
place-content: center;
place-items: center;
grid-gap: 30px;

/* background-color: blue; */
 .text{
    width: 140px;
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
}
 #file{
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
 select{
    width: 150px; 
    padding:10px;
    background: url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg) no-repeat 95% 50%;
    font-family: inherit;
    border: 1px solid #999; 
    border-radius: 5px; 
    -webkit-appearance: none; 
    -moz-appearance: none;
    appearance: none;
 }
 img{
    width: 230px;
    height: 150px;
 }
`

export const ProfileBack = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E7E7E7;
    height: 260px;
    transition: all ease 0.3s 0s;
    overflow: hidden;
    :hover{
        background-color: rgba(33, 33, 33, 0.56);
        transition: all ease 0.3s 0s;
        visibility: visible;
    }
    :hover #edit{
        visibility: visible;
    }
    #edit{
        position: relative;
        width: 40px;
        left: 50%;
        visibility: hidden;
    }
    #imgurl{    
        width: 100%;
    }
    .backfile{
        display: none;
    }
`
export const ProfileImg = styled.div`
    position: relative;
    bottom: 70px;
    left: 60px;
    box-sizing: border-box;
    width: 180px;
    height: 180px;
    border: 4px solid white;
    border-radius: 150px;
    background-color: #A161D4;
`
export const ProfileimgDiv = styled.div`

    /* background-color: red; */
    width: 300px;
    /* height: ; */
`
export const ProfileInfoDiv = styled.div`

    font-family: 'NEXON Lv1 Gothic OTF';
    font-weight: bold;
    #etheimg{
        width: 23px;
        margin-right: 2px;
    }
    #useridtext{
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: blue; */
    }
    position: relative;
    bottom: 65px;
    width: 300px;
    
`
export const ProfileContentDiv = styled.div`
    display: flex;
`
export const ProfileListDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
export const MyColletionsDiv = styled.div`
margin :0 ;
padding: 0;
`
export const MyColletionText =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;
    font-family: 'NEXON Lv1 Gothic OTF Light';
    font-weight: bold;
    margin-top: 30px;
    width: 150px;
    cursor: pointer;
    border-bottom: 1px solid ${({isBorder})=> isBorder===1 ? 'black' : '#CCCCCC'};
    transition: ease 0.4s;
    position: relative;
    top: 1px;
`
export const MyColletionsTextDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 1000px;
    border-bottom: 1px solid #CCCCCC;
    height: 60px;
    /* background-color: red; */

`
export const MyColletionListDiv = styled.div`
    height: 600px;
    
    /* background-color: blue; */
`
export const MyColletionList = styled.div`
    display: grid;
    grid-template-columns: repeat(4,200px);
    place-content: center;
    grid-gap: 20px;
    
`
export const MyColletionListCardDiv = styled.div`
    
`
export const MyColletionCardList= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 100px;
    border-radius: 5px;
    margin-top: 10px;
    background-color: #5DC7FD;
    font-family: 'NEXON Lv1 Gothic OTF';

`