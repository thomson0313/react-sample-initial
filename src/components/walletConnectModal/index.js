import React, { useState, useEffect } from "react";
import Web3 from 'web3';

import './styles.walletConnectModal.scss'

import WalletButton from "../walletButton";

import CloseImg from '../../assets/img/close.svg'
import MetamaskImg from '../../assets/img/metamask.svg'
import Coinbase from '../../assets/img/coinbase.svg'
import WalletConnect from '../../assets/img/walletconnect.svg'
import Trust from '../../assets/img/trust.svg'
import Cryptocom from '../../assets/img/cryptocom.svg'
import Bitget from '../../assets/img/bitkeep.svg'
import SafePal from '../../assets/img/safePal.svg'
import OKX from '../../assets/img/okxwallet.svg'
import Zerion from '../../assets/img/zerion.svg'
import Phantom from '../../assets/img/phantom.svg'
import Google from '../../assets/img/google.svg'
import Others from '../../assets/img/injected.svg'


const WalletConnectModal = ({sendIsModal}) => {

    const [account, setAccount] = useState(null);
    const [web3, setWeb3] = useState(null);

    useEffect(() => {
    if (web3) {
        window.ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts[0]);
        });

        window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload();
        });

        return () => {
        window.ethereum.removeListener('accountsChanged');
        window.ethereum.removeListener('chainChanged');
        };
    }
    }, [web3]);

    const connectMetaMask = async () => {
        if (window.ethereum) {
        // Request account access if needed
        console.log("metamask exist================")
        try {
            console.log("open metamask----------------------")
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3Instance = new Web3(window.ethereum);

            // Set the state with the first account and web3 instance
            setAccount(accounts[0]);
            setWeb3(web3Instance);
            window.localStorage.setItem("isWallet", true);
            window.localStorage.setItem("address", accounts[0]);
            handleClose();
        } catch (error) {
            console.error('Error connecting to MetaMask', error);
        }
        } else {
        console.error('MetaMask is not installed');
        }
    };    

    const handleClose = () => {
        sendIsModal(false);
    }
    return(
        <div className="connect-modal">
            <div className="top">
                <div>Connect Wallet</div>
                <div onClick={handleClose}>
                    <img src={CloseImg} alt="close" />
                </div>
            </div>
            <div className="wallets">
                <WalletButton img={MetamaskImg} name="MetaMask" action={connectMetaMask} />
                <WalletButton img={Coinbase} name="Coinbase" />
                <WalletButton img={WalletConnect} name="WalletConnect" />
                <WalletButton img={Trust} name="Trust" />
                <WalletButton img={Cryptocom} name="Crypto.com" />
                <WalletButton img={Bitget} name="Bitget" />
                <WalletButton img={SafePal} name="SafePal" />
                <WalletButton img={OKX} name="OKX" />
                <WalletButton img={Zerion} name="Zerion" />
                <WalletButton img={Phantom} name="Phantom" />
                <WalletButton img={Google} name="Google" />
                <WalletButton img={Others} name="Other Wallets" />
            </div>
        </div>
    )
}

export default WalletConnectModal;