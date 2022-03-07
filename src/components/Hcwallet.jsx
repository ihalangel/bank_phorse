import React, { useContext, useEffect } from "react";
import WalletContext from "../context/Wallet/WalletContext";





const ConctWallet = () =>{
    const {connectWallet , currentAccount , chainId , chainName} = useContext(WalletContext)
    
    useEffect(() => {
        connectWallet();
    },[])


    return (
      <div>
            <button type="button" onClick={connectWallet}>
              Connect Wallet {currentAccount}
            </button>
          
          <button type="button" onClick={connectWallet}>
              Disconnect Wallet {chainId} {chainName}
            </button>
           </div>
        );
  }
   export default ConctWallet;