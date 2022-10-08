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
import menu from './img/menu.png'
import Logout from './img/logout.png'
function HeaderNav({ darkMode, setDarkMode }) {
  const navigate=useNavigate();
  const { connector, library, chainId, account, active, error, activate, deactivate } = useWeb3React();
  const [connectCheck,setConnectCheck]=useState(false);
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
  if(active===true){
    localStorage.setItem('user_id',account)
    localStorage.setItem('user_id_check',active)
  }
  const user_id=localStorage.getItem('user_id');
  const user_id_check=localStorage.getItem('user_id_check');

  
  const goHome=()=>{
    navigate('./');
  }
  const userinfo=[
    {text:"Profile",img:user},
    {text:"Favorited",img:love},
    {text:"Night Mode",img:wallet},
  ] 
   const userwallet=[
    {text:"Logout",img:Logout},
  ]
  return (
    <>
    <HeaderNavdiv>
      <MainTitle onClick={goHome}>
        KOH
      </MainTitle>
      <Search className="searchbox">
        <div className="searchimg">
          <img src={searchimg} />
        </div>
        <SearchList >
        </SearchList>
      </Search>
      <MenuTitle>강의실</MenuTitle>
      <MenuTitle>강의실</MenuTitle>
      <MenuTitle>강의실</MenuTitle>
        <div className="menuimg">
          <div >
            <img src={menu} />
          </div>
          <Modal userinfo={userinfo} darkMode={darkMode} setDarkMode={setDarkMode}>
           </Modal>
        </div>
        <div className="walletimg" >
          <img src={wallet} onClick={connectWallet} style={{cursor:"pointer"}}/>
          <Modal userinfo={userwallet} >
           </Modal>
        </div>
        { user_id_check==='true' ? (
            <div>{user_id?.substr(0, 6)}...{user_id?.substr(user_id.length-4, user_id.length)}</div>
          ) :(
            <div>...</div>
          )
      }
    </HeaderNavdiv>
    </>
  );
}

export default HeaderNav;

