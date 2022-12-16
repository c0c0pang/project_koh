import React,{useState} from "react";
import {HeaderNavdiv,Search,MainTitle,MenuTitle} from './StyledComponent'
import { useNavigate } from "react-router-dom";
import searchimg from './img/searchimg.png'
import user from './img/user.png'
import wallet from './img/wallet.png'
import love from './img/love.png'
import { useWeb3React } from '@web3-react/core';
import { injected } from './lib/connectors';
import SearchList from "./SearchList";
import Modal from "./Modal";
import menu from './img/menu.png';
import Logout from './img/logout.png';
import Setting from './img/settings.png';
import { useEffect } from "react";
import {UserKeyApi,UserWalletCheck} from "./ApiState";
import axios from "axios";
function HeaderNav({ darkMode, setDarkMode }) {
  const navigate=useNavigate();
  const { connector, library, chainId, account, active, error, activate, deactivate } = useWeb3React();
  const connectWallet =   async () => {
        try {
          await activate(injected, (error) => {
            if ('/No Ethereum provider was found on window.ethereum/' && localStorage.getItem('user_id')===undefined)
            throw new Error('Metamask 익스텐션을 설치해주세요');
          });
        } catch (err) {
          alert(err);
          window.open('https://metamask.io/download.html');
        } 
  };
  const setWithExpiry = (key,value,ttl)=>{
    const now = new Date();
    const item = {
      value:value,
      expiry:now.getTime()+ttl
    };
    localStorage.setItem(key,JSON.stringify(item));
  }
  const getId = (key) => {
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
  const user_id=getId('user_id');
  const user_id_check=localStorage.getItem('user_id_check');

  useEffect(()=>{
    axios.get(UserWalletCheck(user_id)).then((response)=>{
      if(response.data === 'no user'){
        console.log(user_id)
        const formData = new FormData();
        formData.append('wallet_address', user_id);
        formData.append('userName', '미정');
        formData.append('tokens', 23);
        
        axios.post(UserKeyApi, formData, {
          headers: { "Content-Type": `multipart/form-data` },
          withCredentials: true,
          transformRequest: (data, headers) => {
            return data;
          },
        }).then((err) => {
          console.log(err);
        }
        )
      }
      else{
        console.log(response.data);
      }
    })

  },[])

  if(active){
    setWithExpiry("user_id",account,72000000)
    setWithExpiry("user_id_check",active,72000000)
  }
  // 72000000 -> 120분

  const item = JSON.parse(user_id_check);
  const goHome=()=>{
    navigate('./');
  }
  const goProfile=()=>{
    if(!item.value){
      // window.location.reload();
      // navigate('/Profile');
      // window.location.replace('http://localhost:3000');
      navigate('./');
    }
  }
  const userinfo=[
    {text:"Profile",img:user},
    {text:"Favorited",img:love},
    {text:"Setting",img:Setting},
  ] 
   const userwallet=[
    {text:"Logout",img:Logout},
  ]
  return (
    <>
    <HeaderNavdiv>
      <MainTitle onClick={goHome}>
        Lecture KOH
      </MainTitle>
      <Search className="searchbox">
        <div className="searchimg">
          <img src={searchimg} />
        </div>
        <SearchList >
        </SearchList>
      </Search>
      <MenuTitle>강의실</MenuTitle>
        <div className="menuimg">
          <div >
            <img src={menu} />
          </div>
          <Modal userinfo={userinfo} darkMode={darkMode} setDarkMode={setDarkMode}>
           </Modal>
        </div>
        <div className="walletimg" >
          <img src={wallet} onClick={()=>{
            connectWallet()
            goProfile()
            }} style={{cursor:"pointer"}}/>
          <Modal userinfo={userwallet} >
           </Modal>
        </div>
    </HeaderNavdiv>
    </>
  );
}

export default HeaderNav;