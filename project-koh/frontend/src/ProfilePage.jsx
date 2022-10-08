import React, { useRef, useState } from 'react'
import {ProfileBack,ProfileImg} from './StyledComponent'
import edit from './img/edit.png'
function ProfilePage() {
  const imgRef = useRef();
  const [imageUrl,setImageUrl] = useState(null);

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    console.log(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      console.log("이미지주소", reader.result);
    };
  };

  const onClickFileBtn = (e) => {
    imgRef.current.click();
  };
  return (
    <>
      <ProfileBack onClick={onClickFileBtn}>
        
        <form>
          <input type="file" className='backfile' accept='image/*' ref={imgRef} onChange={onChangeImage}/>
        </form>
              <img id='edit' src={edit}/>
              <img id='imgurl' src={imageUrl}/>
      </ProfileBack>
      <ProfileImg></ProfileImg>
    </>
  )
}
export default ProfilePage;