import React, {useReducer , useState}  from "react";
import WalletContext from "./WalletContext";
import WalletReduce from "./WalletReduce";
import { ethers,BigNumber } from "ethers";
import { contractABI, contractAddress, BanK_P_Address, BanK_P_abi  } from "../../utils/constants";



const WalletState = (props) => {

const initialState = {
    currentAccount: null,
    signer: {},
    chainId: null,
    chainName: null ,
    TokenTotalSupply : null,
    balance_p : null,
    symbol_P: null,
    balance_2 : null
}
const [state, dispatch] = useReducer(WalletReduce, initialState)

//const [CToKen, setCToken] = useState({})

//const [formData, setformData] = useState({ amount: "" }); 
//var amount = useState('amount'); 

const CreaEthContra_Tk_P = () => {
    console.log("Contrato Token return (Token)")
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const Token = new ethers.Contract(contractAddress, contractABI, signer);
    
    return  Token;    
    };

     const  Wallet_signer = () => {
      console.log("DE BANK CONTRACT");
      const provider = new ethers.providers.Web3Provider(ethereum);
      const W_signer = provider.getSigner();
      //const Dbank_C = new ethers.Contract(dBank_contractAddress, dBank_contractABI, signer);
      //console.log (Dbank_C);
       return  W_signer;
      }; 


      const  Bank_P_creaContract_signer = () => {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const Dbank_C = new ethers.Contract(BanK_P_Address, BanK_P_abi, signer);
       return  Dbank_C;
      }; 





   /*   const Deposit_dBnak = async () => {
        try {
      
const ethers = require('ethers')
let network = 'Ganache'
// provider: Infura or Etherscan will be automatically chosen
let provider = ethers.getDefaultProvider(network)
// Sender private key: 
// correspondence address 0xb985d345c4bb8121cE2d18583b2a28e98D56d04b
let privateKey = '0x49723865a8ab41e5e8081839e33dff15ab6b0125ba3acc82c25df64e8a8668f5'
// Create a wallet instance
let wallet = new ethers.Wallet(privateKey, provider)
// Receiver Address which receives Ether
let receiverAddress = '0xF02c1c8e6114b1Dbe8937a39260b5b0a374432bB'
// Ether amount to send
let amountInEther = '0.01'
// Create a transaction object

// Send a transaction
wallet.sendTransaction(tx)
.then((txObj) => {
    console.log('txHash', txObj.hash)
    // => 0x9c172314a693b94853b49dc057cf1cb8e529f29ce0272f451eea8f5741aa9b58
    // A transaction result can be checked in a etherscan with a transaction hash which can be obtained here.
})
*/ /*
      const Deposit_dBnak = async () => {
        try {
          if (!ethereum) 
            throw new error("No hay conexion a Metamask")
          
           console.log("Depositando en BanK")
           const amount= '0.001';
           const parsedAmount = ethers.utils.parseEther(amount);
           
           const provider = new ethers.providers.Web3Provider(ethereum);
           //console.log(provider)
           const signer = provider.getSigner();
           const Dbank = new ethers.Contract( dBank_contractAddress, dBank_contractABI, signer);
           console.log(Dbank)
           //const tx = await  Dbank.etherBalanceOf(state.currentAccount);
           const tx = await  Dbank.deposit({value: parsedAmount});
            console.log("tx",tx)
            
           /* await window.ethereum.request("eth_requestAccounts")
           const provider = new ethers.providers.Web3Provider(window.ethereum)
           const signer = provider.getSigner()
           const tx = await signer.deposit({
           to: dBank_contractAddress,
           value: parsedAmount
           });


           
           console.log(tx)
          
            *//*
          W_signer = Wallet_signer()
          let tx = {
            to: dBank_contractAddress,
            // Convert currency unit from ether to wei
            value: ethers.utils.parseEther(amountInEther)
        }
       const trx = await  W_signer.deposit(tx)
       console.log("Trx", trx)*/
           /* const provider = new ethers.providers.Web3Provider(windows.ethereum);
            const signer = provider.getSigner();
            const Dbank_C = new ethers.Contract(dBank_contractAddress, dBank_contractABI, signer);
            //console (signer);
            const amount= '0.001';
            const parsedAmount = ethers.utils.parseEther(amount);
            console.log(amount)
            //const signer = Dbank_C.getSigner()
            //console.log(signer)
            const transfer =  await signer.Dbank_C.deposit(parsedAmount);
            console.log(transfer)
            //const txtresponse = await contrato.setData(2);
            const txtrecipie= await transfer.wait();
            console.log(txtrecipie);

     
                        
        

        } catch (error) {
        //  console.log(error);
        }
    
      }
     */ 

      
/*  NUM 1 DBANK GET NETWORK
  const getNetwork = async () => {
    try {
      if (ethereum) {
        console.log("EL TOKEN CONTRATO");
        const Token = CreaEthContra_Tk_P();
        //tn= await Token.Network();
        //console.log(Token)
        Deposit_dBnak() 
           } else {
        console.log("Error network");
      }
    } catch (error) {
    //  console.log(error);
    }

  }
*/

  const getTotalsuply = async () => {
    try {
      if (ethereum) {
        console.log("Obteniendo TotalSupply")
        const Token = CreaEthContra_Tk_P();
        const tokenTotalSuppl = await Token.totalSupply();
        const tokenTotalSupply = ethers.utils.formatEther(tokenTotalSuppl)
       
        console.log(tokenTotalSupply) ;
        
        getsymbol(); 
       
        dispatch({
            type: 'GET_TOKEN_TOTALSUPLY',
            payload: tokenTotalSupply 
              }) 
            
      } else {
        console.log("Erroe al buscar Total Suply");
      }
    } catch (error) {
    //  console.log(error);
    }
  };

  const getsymbol = async () => {
    try {
      if (ethereum) {

         console.log("Obtengo Symbol")
        const Token = CreaEthContra_Tk_P();
        const symbol = await Token.symbol();
        //const BalanceUser = ethers.utils.formatEther(Balance)
        console.log(symbol) ;
        getBalance();
        
        dispatch({
          type: 'GET_SYMBOL_P',
          payload: symbol 
            }) 
           
        
      } else {
        console.log("Erroe al buscar Total Suply");
      }
    } catch (error) {
    //  console.log(error);
    }
  };


  const getBalance = async () => {
    try {
      if (ethereum) {
        console.log("Obteniendo Balance")
        const Token = CreaEthContra_Tk_P();
        const balanceOf = await Token.balanceOf("0xB0dC14489C39d0a9219835BD9A1090445Fc3927B");
        const BalanceUser = ethers.utils.formatEther(balanceOf)
        console.log(Token)
        console.log(BalanceUser);

        dispatch({
          type: 'GET_BALANCE_P_USER',
          payload: BalanceUser
            }) 
        Minter();
      } else {
        console.log("Erroe al buscar Total Suply");
      }
    } catch (error) {
    //  console.log(error);
    }
  };


  /* BUSCANDO MINTER
 const Minter = async () => {
    try {
      if (ethereum) {
        console.log("Direccion del Minter Contrarto?")
        const Token = CreaEthContra_Tk_P();
        const minter = await Token.minter();
        console.log(minter);
      
       getNetwork()
      } else {
        console.log("Erroe al buscar Total Suply");
      }
    } catch (error) {
    //  console.log(error);
    }
  };


*/
  





    const connectWallet = async () => {
        var newNetwork="";
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        provider.on("network", (newNetwork, oldNetwork) => {
            
            dispatch({
                type: 'CONNECT_CHAIN',
                payload:{ 
                chainId:newNetwork.chainId,
                chainName:newNetwork.name,
                signer: provider.getSigner()
            }})
            
        
          if (oldNetwork) {
                window.location.reload();
                            }
        });
        
         console.log("Conectando Wallet")
        
        try {
            if (!ethereum) return alert("Please install MetaMask.");
              const accounts = await ethereum.request({ method: "eth_requestAccounts", });

              state.currentAccount= accounts[0];
              dispatch({
                type: 'CONNECT_WALLET',
                payload: accounts[0]
            })
            //setCurrentAccount(accounts[0]);
        getTotalsuply();
            
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    }


//REFERENTE A LA COMPRA Y VENTA DE TOKEN  ----------TOKEN_PRINCIPAL:::
const Buy_Token_P= async () => {
  var amount = useState('amount_buy_P');
console.log(amount)
//console.log(formData.amount)
/*const CreaEthContra_Tk_P = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
  console.log(transactionsContract);
  return transactionsContract;
 
};  
  
    try {
        
      if (ethereum) {
            const { amount } = formData;
            const transactionsContract = CreaEthContra_Tk_P();
            const parsedAmount = ethers.utils.parseEther(amount);

          /*  await ethereum.request({
                method: "transfer",
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: "0x5208",
                    value: parsedAmount._hex,
                }],
            }); */

//            const transactionHash = await transactionsContract.transfer(addressTo, parsedAmount);

            //setIsLoading(true);
            //console.log(`Loading - ${transactionHash.hash}`);
           // await transactionHash.wait();
            //console.log(`Success - ${transactionHash.hash}`);
            //setIsLoading(false);

           // const transactionsCount = await transactionsContract.getTransactionCount();

           // setTransactionCount(transactionsCount.toNumber());
        }  /* else {
            console.log("No ethereum object");
        }
  } catch (error) {
        console.log(error);

        throw new Error("No ethereum object");
    }

  */

















  return ( 
    <WalletContext.Provider value = {
        {
           currentAccount : state.currentAccount,
           chainId: state.chainId,
           chainName: state.chainName,
           TokenTotalSupply: state.TokenTotalSupply,
           balance_p: state.balance_p,
           symbol_P: state.symbol_P,
           connectWallet,
           CreaEthContra_Tk_P,
           Buy_Token_P,
           Bank_P_creaContract_signer 


        }}>
    { props.children } 
    </WalletContext.Provider>

    );



}

export default WalletState;