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
function HeaderNav({ darkMode, setDarkMode }) {
  const navigate=useNavigate();
  const { connector, library, chainId, account, active, error, activate, deactivate } = useWeb3React();
  const connectWallet = async () => {
		try {
			await activate(injected, (error) => {
				if ('/No Ethereum provider was found on window.ethereum/')
					throw new Error('Metamask 익스텐션을 설치해주세요');
			});
		} catch (err) {
			alert(err);
			window.open('https://metamask.io/download.html');
		}
  }
  console.log(active);
  const goHome=()=>{
    navigate('./');
  }

  const reload=()=>{
    window.location.replace('./');
  }
  const userinfo=[
    {text:"Profil",img:user},
    {text:"Favorited",img:love},
    {text:"Night Mode",img:wallet},
  ]
  return (
    <>
    <HeaderNavdiv>
      <MainTitle onClick={()=>{
        goHome()
        reload()
      }}>
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
      {/* {darkMode ? (
          <FontAwesomeIcon onClick={toggleDarkMode} icon={faSun} />
        ) : (
          <FontAwesomeIcon onClick={toggleDarkMode} icon={faMoon} />
        )} */}
        <div className="userimg">
          <div >
            <img src={user} />
          </div>
          <Modal userinfo={userinfo} darkMode={darkMode} setDarkMode={setDarkMode}>
           </Modal>
        </div>
        <div className="walletimg" onClick={connectWallet} style={{cursor:"pointer"}}>
          <img src={wallet} />
        </div>
        {account?.substr(0, 6)}...{account?.substr(account.length-4, account.length)}
    </HeaderNavdiv>
  
    </>
  );
}

export default HeaderNav;

