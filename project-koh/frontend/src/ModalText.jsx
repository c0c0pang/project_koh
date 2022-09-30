import React from 'react'
import { useState,useEffect } from 'react';
import {ModalTextDiv} from './StyledComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
function ModalText({text,src,darkMode,setDarkMode}) {
    const [check,setCheck]=useState(true);
    const toggleDarkMode = () => {
        setDarkMode((darkMode) => !darkMode);
      };
      useEffect(()=>{
        if(text==="Night Mode"){
            setCheck(false);
        }
      },[])

  return (
    <ModalTextDiv>
        {check ? (
        <div>
            <img id='imgbox' src={src}/> {text} 
        </div>
        
        ) : (darkMode ? (
            <div><FontAwesomeIcon id='imgbox' onClick={toggleDarkMode} icon={faSun} /> {text} </div>
          ) : (
            <div><FontAwesomeIcon id='imgbox' onClick={toggleDarkMode} icon={faMoon} /> {text} </div>
          ))
        }
        
    </ModalTextDiv>
  )
}

export default ModalText;