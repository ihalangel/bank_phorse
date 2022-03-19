import React from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from "../utils/constants";





const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};


const parsedAmount=10;
const MinarToken = async () =>{
    

       try {
          if (ethereum) {
           // const { addressTo, amount, keyword, message } = formData;
            const transactionsContract = createEthereumContract();
           // const parsedAmount = ethers.utils.parseEther(amount);
    
            await ethereum.request({
              method: "eth_Mint",
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
        }
      

return(
<button onClick={MinarToken}> Minar Token</button>
);

}

export default MinarToken