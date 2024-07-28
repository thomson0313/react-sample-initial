import React from "react";

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
                <WalletButton img={MetamaskImg} name="MetaMask" />
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