import React, { useContext, useEffect } from "react";
import WalletContext from "../context/Wallet/WalletContext";
import"./css/header.css"





const ConctWallet = () =>{
    const {connectWallet , currentAccount , chainId , chainName} = useContext(WalletContext)
    
    useEffect(() => {
        connectWallet();
    },[])

      if(currentAccount){ 
        return ( <div className="current-account"> Wallet {currentAccount} </div> );}
       { 
         return (<div>
           <button type="button" onClick={connectWallet}>Connect Wallet </button>
           </div>);}

      }
   export default ConctWallet;