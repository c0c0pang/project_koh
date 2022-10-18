import React, { useState, useEffect } from 'react'

import { ModalTextDiv } from './StyledComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useWeb3React } from '@web3-react/core';
import { useNavigate } from 'react-router-dom';
function ModalText({ text, src, accountinfo, darkMode, setDarkMode }) {
  const [nightcheck, setNightCheck] = useState(true);
  const { deactivate, active, account } = useWeb3React();
  const navigate = useNavigate();
  var url = `${text}`;
  const goProfile = () => {
    navigate(url);
  };
  // console.log(active);
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };
  useEffect(() => {
    if (text === "Night Mode") {
      setNightCheck(false);
    }
  }, [])

  const [cnt, setCnt] = useState(null);
  const notConnectWallet = () => {
    deactivate();
    setCnt(0)
  }
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
  const logoutCheck = getWithExpiry("user_id_check");
  // const logoutCheck = localStorage.getItem('user_id_check');
  if (cnt === 0) {
    const setWithExpiry = (key, value, ttl) => {
      const now = new Date();
      const item = {
        value: value,
        expiry: now.getTime() + ttl
      };
      localStorage.setItem(key, JSON.stringify(item));
    }
    setWithExpiry("user_id", account, 72000000);
    setWithExpiry("user_id_check", active, 72000000);
    
    // localStorage.setItem('user_id',account);
    // localStorage.setItem('user_id_check',active);
    setCnt(1)
    window.location.replace('http://localhost:3000');
  }

  return (
    <>
      <div>{accountinfo}</div>

      {(text === "Logout") ? (
        logoutCheck ? (
          <ModalTextDiv>
            <div>
              <img id='imgbox' src={src} />
              <h2 onClick={notConnectWallet} style={{ cursor: "pointer" }}>{text} </h2>
            </div>
          </ModalTextDiv>
        ) : (<div></div>)
      ) : (
        nightcheck ? (
          <ModalTextDiv>
            <div onClick={goProfile} style={{ cursor: "pointer" }}>
              <img id='imgbox' src={src} /> {text}
            </div>
          </ModalTextDiv>
        ) : (darkMode && text !== "Logout" ? (

          <ModalTextDiv>
            <div style={{ cursor: "pointer" }}><FontAwesomeIcon id='imgbox' onClick={toggleDarkMode} icon={faSun} /> {text} </div>
          </ModalTextDiv>
        ) : (
          <ModalTextDiv>
            <div style={{ cursor: "pointer" }}><FontAwesomeIcon id='imgbox' onClick={toggleDarkMode} icon={faMoon} /> {text} </div>
          </ModalTextDiv>
        ))
      )}
    </>
  )
}

export default ModalText;