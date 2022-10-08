import React,{ useState,useEffect } from 'react'

import {ModalTextDiv} from './StyledComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useWeb3React } from '@web3-react/core';
import { useNavigate } from 'react-router-dom';
function ModalText({text,src,accountinfo,darkMode,setDarkMode}) {
    const [nightcheck,setNightCheck]=useState(true);
    const {deactivate,active,account} = useWeb3React();
    const navigate = useNavigate();
    var url = `${text}`;
    const goProfile = () => {
      navigate(url);
    };
    // console.log(active);
    const toggleDarkMode = () => {
        setDarkMode((darkMode) => !darkMode);
      };
      useEffect(()=>{
        if(text==="Night Mode"){
          setNightCheck(false);
        }
      },[])
      
      const [cnt,setCnt] = useState(null);
      const notConnectWallet = () =>{
        deactivate();
        setCnt(0)  
      }
      const logoutCheck = localStorage.getItem('user_id_check');
      if(cnt===0){
        localStorage.setItem('user_id',account);
        localStorage.setItem('user_id_check',active);
        setCnt(1)
        window.location.replace('http://localhost:3000');
      }

  return (
    <>
    <div>{accountinfo}</div>

        {(text ==="Logout" ) ? (
          logoutCheck === 'true' ? (
            <ModalTextDiv>
          <div>
            <img id='imgbox' src={src}/> 
            <h2 onClick={notConnectWallet} style={{cursor:"pointer"}}>{text} </h2>
          </div>
          </ModalTextDiv>
          ):(<div></div>)
        ) : (
        nightcheck ? (
          <ModalTextDiv>
          <div onClick={goProfile} style={{cursor:"pointer"}}>
              <img id='imgbox' src={src}/> {text} 
          </div>
          </ModalTextDiv>
          ) : (darkMode && text !=="Logout"? (

          <ModalTextDiv>
              <div style={{cursor:"pointer"}}><FontAwesomeIcon id='imgbox' onClick={toggleDarkMode} icon={faSun} /> {text} </div>  
          </ModalTextDiv>
            ) : (
          <ModalTextDiv>
              <div style={{cursor:"pointer"}}><FontAwesomeIcon id='imgbox' onClick={toggleDarkMode} icon={faMoon} /> {text} </div>
          </ModalTextDiv>
            ))
        )}
    </>
  )
}

export default ModalText;