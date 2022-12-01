import React,{useState,useEffect}from 'react';
import axios from 'axios';
import { useParams,useNavigate} from "react-router-dom";
import { LectureTitle, LectureBack, LectureContent, LectureLeft, LectureRight, LectureLeftDiv, LectureRightDiv, RegisterButton,LectureRightForm } from './StyledComponent';
import LectureListCrad from './LectureListCrad'
import ColletionsSubTitle from './ColletionsSubTitle';
import LcetureRegisterfrom from './LcetureRegisterfrom';
import { LectureViewKeyApi } from './ApiState';
import Category from './data';
import MOON from './img/moon.jpg';
import NFT from './img/NFT.jpg'
function Lecture() {
  const [CollectionsList,setCollectionsList] =useState([]);
  const [LectureList,setLectureList]= useState([{}]);
  const [register,setRegister] = useState(false);
  const Params = useParams();
  const RegisterCheck = () => {
    setRegister(true);
  };  
  const RegisterNotCheck = () => {
    setRegister(false);
  };
  useEffect(()=>{
    setCollectionsList(Category.title);
  },[]);
  const newCollectionsList=[]
  for(let i=0;i<CollectionsList.length;i++){
      if(Params.title!==CollectionsList[i]){
          newCollectionsList.push(CollectionsList[i]);
      }
  }
  useEffect(() => {
    axios
    .get(
      LectureViewKeyApi
    )
    .then((response) => {
      console.log(response.data);
    setLectureList(response.data)
    });
  },[]);
  //무엇을 받을지 state에 미리 설정!
  return (
    
    <>
    <LectureBack className='main_div'>
      <LectureTitle>{Params.title}</LectureTitle>
      <RegisterButton onClick={RegisterCheck}>강의등록</RegisterButton>
      <img src={NFT}/>
    </LectureBack>
    
    <LectureContent>
      <LectureLeftDiv>
        <LectureLeft>
        {newCollectionsList.map((element,index) => (
                        <ColletionsSubTitle
                            key={index}
                            title={element}
                            RegisterNotCheck={RegisterNotCheck}
                        />
      ))}
        </LectureLeft>
        </LectureLeftDiv>

        <LectureRightDiv>

          {register ? (
            <LectureRightForm>
              <LcetureRegisterfrom></LcetureRegisterfrom>
            </LectureRightForm>
          ) : (
            <LectureRight>
              {LectureList
                .filter((element) => Params.title === element.category)
                .map((element, index) => (
                  <LectureListCrad
                    key={index}
                    category={element.category}
                    title={element.title}
                    teacher={element.teacher}
                    thumbnail = {element.thumbnail}
                    id = {element.id}
                  />
                )
                )
              }
            </LectureRight>
          )

          }
        

        </LectureRightDiv>
    </LectureContent>
    </>
  )
}
export default Lecture;