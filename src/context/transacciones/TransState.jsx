import React from "react";
import { useState,useContext } from 'react';
import { ethers } from "ethers";
import TransContext from './TransContext'
import { contractABI, contractAddress } from "../utils/constants";
import TransReduce from "./TransReduce";




const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const TransState = (props) => {
    const [state, dispatch] = useReducer(WalletReduce, initialState)

const SendTransaction = () => {

  const {currentAccount, signer } = useContext(WalletContext)
    

const { ethereum } = window;
const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};
  
  const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
  
  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    SendEthers();
  };

 



  

 
  
  const SendEthers = async() => { 
    try {
        
      if (ethereum) {
            const { addressTo, amount, keyword, message } = formData;
            const transactionsContract = createEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: "0x5208",
                    value: parsedAmount._hex,
                }],
            });

            const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            setIsLoading(false);

            const transactionsCount = await transactionsContract.getTransactionCount();

            setTransactionCount(transactionsCount.toNumber());
        } else {
            console.log("No ethereum object");
        }
    } catch (error) {
        console.log(error);

        throw new Error("No ethereum object");
    }}
  
  
    return(
      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
      <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
      <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
      <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
      <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

      <div className="h-[1px] w-full bg-gray-400 my-2" />

      {false
        ? <Loader />
        : (
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Send now
          </button>
        )}
    </div>
);


return ( 
    <TransContext.Provider value = {
        {
           currentAccount : state.currentAccount,
           chainId: state.chainId,
           chainName: state.chainName,
           connectWallet


        }}>
    { props.children } 
    </TransContext.Provider> )
}}

export default TransState;