import React from 'react'
import { useState,useEffect } from 'react';
import {ModalTextDiv} from './StyledComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useWeb3React } from '@web3-react/core';
function ModalText({text,src,accountinfo,darkMode,setDarkMode}) {
    const [nightcheck,setNightCheck]=useState(true);
    const {deactivate,active } = useWeb3React();
    const [cnt,setCnt] = useState(1);
    // console.log(active);
    const toggleDarkMode = () => {
        setDarkMode((darkMode) => !darkMode);
      };
      useEffect(()=>{
        if(text==="Night Mode"){
          setNightCheck(false);
        }
      },[])

      const notConnectWallet = () =>{
        deactivate();
        setCnt(0)  
      }
      if(cnt===0){
        localStorage.setItem('user_id_check',active);
        setCnt(1)
        window.location.replace('http://localhost:3000');
      }
  return (
    <>
    <div>{accountinfo}</div>
    <ModalTextDiv>
        {(text ==="Logout" ) ? (
          <div>
            <img id='imgbox' src={src}/> 
            <h2 onClick={notConnectWallet} style={{cursor:"pointer"}}>{text} </h2>
          </div>
        ) : (
        nightcheck ? (
          <div>
              <img id='imgbox' src={src}/> {text} 
          </div>
          ) : (darkMode && text !=="Logout"? (
              <div><FontAwesomeIcon id='imgbox' onClick={toggleDarkMode} icon={faSun} /> {text} </div>
            ) : (
              <div><FontAwesomeIcon id='imgbox' onClick={toggleDarkMode} icon={faMoon} /> {text} </div>
            ))
          
        )}

        
    </ModalTextDiv>
    </>
  )
}

export default ModalText;