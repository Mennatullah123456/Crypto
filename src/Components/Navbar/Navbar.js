import React, { useState , useEffect} from 'react';
import "./Navbar.css";
import {FaBars , FaTimes} from 'react-icons/fa';

const Navbar = () => {

  // Connect-Wallte-MataMask

  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };


  // Click-menu

   const [click , setClick] =useState(false);
   const handleClick =() => setClick(!click);
  return (
   <div className='header'>
   <div className='container'>
       <h1 className='logo'>Cry<span className='primary'>Fi</span></h1>
       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           <li>
               <a href='/'>Home</a>
           </li>
           <li>
               <a href='/'>Featured</a>
           </li>
           <li>
               <a href='/'>Earn</a>
           </li>
           <li>
               <a href='/'>Contact</a>
           </li>
       </ul>
       <div className='btn-group'>
       <button
                className="btn"
                onClick={connectWallet}
              >
                <span>
                  {walletAddress && walletAddress.length > 0
                    ? `Connected: ${walletAddress.substring(
                        0,
                        6
                      )}...${walletAddress.substring(38)}`
                    : "Connect Wallet"}
                </span>
              </button>
           {/* <button className='btn'>Connect Wallet</button> */}
       </div>
       <div className='hamburger' onClick={handleClick}>
           {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
           
       </div>
   </div>
</div>
  );
}

export default Navbar;
