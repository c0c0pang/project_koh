import React,{useState,useEffect}from 'react';
import axios from 'axios';
import { useParams,useNavigate} from "react-router-dom";
import { LectureTitle, LectureBack, LectureContent, LectureLeft, LectureRight, LectureLeftDiv, LectureRightDiv, RegisterButton,LectureRightForm } from './StyledComponent';
import LectureListCrad from './LectureListCrad'
import ColletionsSubTitle from './ColletionsSubTitle';
import LcetureRegisterfrom from './LcetureRegisterfrom'
function Lecture() {
  const ColletionKeyApi="/get/category/?format=json";
<<<<<<< HEAD
<<<<<<< HEAD
  const LectureKeyApi="/api/test/?format=json";
=======
  const LectureKeyApi="/lecture/?format=json";
>>>>>>> a46d4209 (refactor: api 주소 변경)
=======
  const LectureKeyApi="/api/test/?format=json";
>>>>>>> 039a4455 (fix: api post 요청 충돌 해결)
  const [CollectionsList,setCollectionsList] =useState([]);
  const [LectureList,setLectureList]= useState([{}]);
  const [register,setRegister] = useState(false);
  // const [newLectureList,setnewLectureList]=useState([{}]);
  const Params = useParams();
  const RegisterCheck = () => {
    setRegister(true);
  };  
  const RegisterNotCheck = () => {
    setRegister(false);
  };
  useEffect(() => {
    axios
    .get(
      ColletionKeyApi
    )
    .then((response) => {
      setCollectionsList(response.data.title);
    });
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
    LectureKeyApi
    )
    .then((response) => {
    setLectureList(response.data)
    });
  },[]);
  //무엇을 받을지 state에 미리 설정!
  return (
    
    <>
    <LectureBack>
    <LectureTitle>{Params.title}</LectureTitle>
    <RegisterButton onClick={RegisterCheck}>강의등록</RegisterButton>
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
                .filter((element) => Params.title === element.title)
                .map((element, index) => (
                  <LectureListCrad
                    key={index}
                    title={element.title}
                    Lecturename={element.Lecturename}
                    teacher={element.teacher}
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