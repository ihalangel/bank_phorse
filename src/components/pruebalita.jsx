import React, { useState,useContext } from "react";
import WalletContext from "../context/Wallet/WalletContext";





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
  

  

const Sell_P = ()=>{
  // Importamos Contexto
  const {Buy_Token_P} = useContext(WalletContext)  

  const [amount_buy_P, setAmount_buy_P] = useState( {amount :""});  

  const handleChange = (e, name) => {
    
    setAmount_buy_P((prevState) => ({ ...prevState, [name]: e.target.value }));
    console.log(amount_buy_P)
    console.log(amount_buy_P.amount) 
    console.log(amount)
  };
  /*
  function handleChange() {
    // Similar to this.setState({ fruit: 'orange' })
    setAmount_buy_P('1');
    console.log(amount_buy_P)
  }
*/
  const handleSubmit = (e) => {
    const { amount } = formData;

    e.preventDefault();

    if (!amount) return;

    Buy_Token_P(amount);
  };


    return(
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
         {false
          ? <Loader />
          : (
            <button
              type="button"
              onClick={handleSubmit}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
              Buy Token
            </button>
          )}
     
  
      </div>
  );

} 

export default Sell_P







/*/*import React from 'react'
import"./css/middle.css"

const Middle = () => {


import { SupportedAlgorithm } from "ethers/lib/utils";
import React, { useState } from "react";

  export function Middle(props) {
    const [name, setName] = useState("");
    
   const Sumada= () =>{
      console.log(name);
 
    }

    
    const handleSubmit = (evt) => {
      console.log("HAajhkaskjk")
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
        console.log(name)
        Sumada(name)
        return name;
            
  }

  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Frirst Name:
          <input
            type="number"
            value={name}
            step="0.0001"

            onChange={e => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  /*

  return (
    <div className='Middle'>
      <h1>Welcome to PH </h1>
      
    <p> buy somes tokens and make profits in the bank protocol</p></div>
  )
} 

export default Middle */