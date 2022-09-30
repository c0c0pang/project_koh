import React from 'react'
import {ModalDiv,Modalbox} from './StyledComponent'
import ModalText from './ModalText'
function Modal({userinfo,darkMode,setDarkMode}) {

  return (
        <ModalDiv className='tool'>
          <Modalbox > 
            {userinfo.map((element,index)=>(
                <ModalText 
                key={index}
                text={element.text}
                src={element.img}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                />
            ))}
          </Modalbox>
        </ModalDiv>
    );
}


export default Modal;