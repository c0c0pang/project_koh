import React, { useRef, useState } from 'react';
import { ProfileBack, ProfileImg, ProfileInfoDiv, ProfileimgDiv, ProfileContentDiv, ProfileListDiv, MyColletionsDiv, MyColletionText, MyColletionsTextDiv, MyColletionListDiv, MyColletionList } from './StyledComponent';
import edit from './img/edit.png';
import ethereum from './img/ethereum.png';
import { useEffect } from 'react';
import MyColletionCard from './MyColletionCard';
import axios from 'axios';
import { LectureSearchApi, UserViewKeyApi } from './ApiState';
import { useLocation } from 'react-router-dom';
function ProfilePage() {
  const MyDibsKeyApi = "http://localhost:4000/MyDibs";
  const imgRef = useRef();
  const [imageUrl, setImageUrl] = useState(null);
  const [user_id, setUser_id] = useState();
  const [MyColletion, setMyColletion] = useState([{}]);
  const [MyDibs, setMyDibs] = useState([{}]);
  const [McCheck, setMcCheck] = useState(1);
  const [MdCheck, setMdCheck] = useState(0);
  const location = useLocation();
  const { userData } = location.state;
  useEffect(() => {
    axios
      .get(
        LectureSearchApi(userData.userName)
      )
      .then((response) => {
        setMyColletion(response.data)
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        MyDibsKeyApi
      )
      .then((response) => {
        setMyDibs(response.data)
      });
  }, []);

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      console.log("이미지주소", reader.result);
    };
  };
  const getWithExpiry = (key) => {
    const itemstr = localStorage.getItem(key);
    if (!itemstr) {
      return undefined
    }
    const item = JSON.parse(itemstr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return undefined
    }
    return item.value
  }
  const user = getWithExpiry("user_id");
  const user_check = getWithExpiry("user_id_check");
  useEffect(() => {
    setUser_id(user)
  }, [user])
  const onClickFileBtn = (e) => {
    imgRef.current.click();
  };
  const MC = () => {
    setMcCheck(1)
    setMdCheck(0)
  }
  const MD = () => {
    setMcCheck(0)
    setMdCheck(1)
  }
  return (
    <>
      <ProfileBack onClick={onClickFileBtn}>
        <form>
          <input type="file" className='backfile' accept='image/*' ref={imgRef} onChange={onChangeImage} />
        </form>
        <img id='edit' src={edit} />
        <img id='imgurl' src={imageUrl} />
      </ProfileBack>
      <ProfileContentDiv>
        <ProfileimgDiv>
          <ProfileImg src={userData.profile} ></ProfileImg>
          <ProfileInfoDiv>
            <h2 id="useridtext">
              <img id="etheimg" src={ethereum} />
              {user_check ? (
                <div>{user_id?.substr(0, 6)}...{user_id?.substr(user_id.length - 4, user_id.length)}</div>
              ) : (
                <div>...</div>
              )}
            </h2>
            <h2 id="userName">이름: {userData.userName}</h2>
          </ProfileInfoDiv>
        </ProfileimgDiv>
        <ProfileListDiv>
          <MyColletionsDiv>
            <MyColletionsTextDiv>
              <MyColletionText id='MyColl' isBorder={McCheck} onClick={() => { MC(); }}>등록한 컬렉션</MyColletionText>
              <MyColletionText id='MyDi' isBorder={MdCheck} onClick={() => { MD(); }}>나의 찜목록</MyColletionText>
            </MyColletionsTextDiv>
            <MyColletionListDiv>
              <MyColletionList>
                {McCheck > MdCheck ? (
                  MyColletion.map((element, index) => (
                    <MyColletionCard
                      key={index}
                      id={element.id}
                      title={element.category}
                      Lecturename={element.title}
                      teacher={element.teacher}
                    />
                  ))) : (
                  MyDibs.map((element, index) => (
                    <MyColletionCard
                      key={index}
                      title={element.title}
                      Lecturename={element.Lecturename}
                      teacher={element.teacher}
                    />
                  ))
                )}
              </MyColletionList>
              <MyColletionList></MyColletionList>
            </MyColletionListDiv>
          </MyColletionsDiv>
        </ProfileListDiv>
      </ProfileContentDiv>
    </>
  )
}
export default ProfilePage;