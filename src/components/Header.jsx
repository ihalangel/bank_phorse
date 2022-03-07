import React, { useContext, useEffect } from "react";
import WalletContext from "../context/Wallet/WalletContext";
import"./css/header.css"
import plogo from '../assets/header/logopoblanco.png'


const Header = () => {
//traigo algunas variables de contexto

const {connectWallet , currentAccount , chainId , chainName,balance_p, symbol_P} = useContext(WalletContext)

/*useEffect(() => {
    connectWallet();
},[])

*/


if(currentAccount){ 
  return (
    
   <header>
   <img src={plogo}  alt="" />
  
        <div className="current-account">
         <h5> {chainName} </h5>
         <h5>{currentAccount}</h5>
        </div>
      
      
      <div className="cnt-wallet-balance">
       <div className="wallet-balance">Balance</div>
       <div className="wallet-balance"> {symbol_P} {balance_p} </div>

      </div>
    </header> 
  );}
 { 
   return (    
   <header>
     <img src={plogo}  alt="" />
     <div className="divbtn">
     <button type="button" onClick={connectWallet}>Connect Wallet </button>
     </div>
     </header>);}

}



export default Header
