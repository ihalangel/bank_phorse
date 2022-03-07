import React from "react";
import { useState,useContext } from 'react';
import { ethers } from "ethers";
import WalletContext from "../context/Wallet/WalletContext";
import"./css/middle.css"




const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="input"
  />
);



const SendTransaction = () => {

const {Bank_P_creaContract_signer, currentAccount, CreaEthContra_Tk_P} = useContext(WalletContext)



  
const [Amount_eth_p, setAmount_eth_p] = useState('');
const[Amount_mtk_p ,setAmount_mtk_p] = useState('');

  const handle_P_buy = (e) => {

    e.preventDefault();
 console.log(Amount_eth_p)

    Buy_TP()
  };


  const handle_P_sell = (e) => {

    e.preventDefault();
 console.log(Amount_mtk_p)

    Sell_TP()
  };

 
const Buy_TP = async() => { 
    let banco = Bank_P_creaContract_signer();
    console.log(banco)
  try {
          //Sender eth to contract
        if (ethereum) {
    const transaction = await banco.buyTokens({ value: ethers.utils.parseEther(Amount_eth_p) })
              await transaction.wait()
             // window.location.reload();
              
    
          } else {
              console.log("No ethereum object");
          }
      } catch (error) {
          console.log(error);
  
          throw new Error("No ethereum object");
      }}  
   
 const Sell_TP = async() => { 
  let banco = Bank_P_creaContract_signer();
  let token_c = CreaEthContra_Tk_P();
  //console.log(banco)
  console.log(token_c)
  
    try {
        //GETING BACK TP
      if (ethereum) {
            const allowanc = await token_c.approve("0xB0dC14489C39d0a9219835BD9A1090445Fc3927B",ethers.utils.parseEther(Amount_mtk_p) )
            await allowanc.wait()
            const transaction = await banco.sellTokens(ethers.utils.parseEther(Amount_mtk_p) )
                  //sends 0.1 eth
            await transaction.wait()
            // const transactionHash = await transactionsContract.minter(addressTo, parsedAmount);
            //setIsLoading(true);
            //console.log(`Loading - ${transactionHash.hash}`);
            // await transactionHash.wait();
            //console.log(`Success - ${transactionHash.hash}`);
            //setIsLoading(false);
            // const transactionsCount = await transactionsContract.getTransactionCount();
     } else {
            console.log("No ethereum object");
        }
    } catch (error) {
        console.log(error);

        throw new Error("No ethereum object");
    }}
    
      return(
     // <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
      <div className="exchange-base">
      <p className="txt-trade"> Trade Tokens</p>
       
      
      {false
        ? <Loader />
        : (
      <div className="buy-campo">
       <input  placeholder="Amount (ETH)" name="amount"
            type="number"
            value={Amount_eth_p}
            step="0.0001"
            className="input"
            onChange={e => setAmount_eth_p(e.target.value)}
          />
      <button type="button" onClick={handle_P_buy} className="buy-button">
        Buy 
      </button>
     
      <input  placeholder="Amount (MKT)" name="amount_mkt"
            type="number"
            value={Amount_mtk_p}
            step="0.0001"
            className="input"
            onChange={e => setAmount_mtk_p(e.target.value)}
          />
      
      <button
            type="button"
            onClick={handle_P_sell}
            className="sell-button"
            //className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Sell 
      </button>
          </div>
          
          





          
        )}
     
    </div>
);
}

export default SendTransaction;