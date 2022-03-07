import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {ConctWallet,SendTransaction, Header, Sell_P, Middle,Footer} from "./components"

import WalletState from './context/Wallet/WalletState'
//import Web3 from "web3";

function App() {


  return (
    <div className='app'>
    <WalletState>
     <Header/> 
     <Middle/>
     <Footer/>
     <Sell_P/>
     
   



   
    </WalletState>
    </div>
  );
}

export default App
