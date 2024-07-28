import React, { useState } from "react";

import './styles.header.scss'

import Logo from '../../assets/img/logo.svg'
import TokenImg from '../../assets/img/drop.svg'
import NetworksImg from '../../assets/img/eth.svg'
import LangsImg from '../../assets/img/lang.svg'
import WalletConnectModal from "../walletConnectModal";

const Header = () => {
    const [isModal, setIsModal] = useState(false);

    const handleIsModal = (flag) => {
        setIsModal(flag);
    }

    return(
        <>
            <div className="header">
                <div className="left">
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div>
                        <div className="header-nav">Dual</div>
                        <div className="header-nav">Swap</div>
                        <div className="header-nav">Buy</div>
                    </div>
                </div>
                <div className="right">
                    <div className="token-value">
                        <img src={TokenImg} alt="token" width={40} />
                        <div>REDY</div>
                    </div>
                    <div className="networks">
                        <img src={NetworksImg} alt="networks" />
                    </div>
                    <div className="languages">
                        <img src={LangsImg} alt="langs" />
                    </div>
                    <div className="connect-wallet" onClick={() => setIsModal(true)}>Connect Wallet</div>
                </div>
            </div>
            {
                isModal?
                <div className="wallet-connect-modal">
                    <div className="opacity-bg"></div>
                    <WalletConnectModal sendIsModal={handleIsModal} />
                </div>:
                null
            }
        </>
    )
}

export default Header;