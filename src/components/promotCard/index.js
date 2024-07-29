import React, { useState } from "react";

import WalletConnectModal from "../walletConnectModal";
import './styles.promotCard.scss'

import PromoteImg from '../../assets/img/promote.jpg'
import Logo from '../../assets/img/logo.png'
import CloseButton from '../../assets/img/close.svg'

const PromotCard = () => {
    const [isOpen, setIsopen] = useState(true);
    const [isModal, setIsModal] = useState(false);

    const handleClick = () => {
        setIsopen(!isOpen)
    }

    const handleIsModal = (flag) => {
        setIsModal(flag);
    }
    
    return(
        <div>
            {isOpen?
                <div className="promot-card">
                    <div className="video-section">
                        <img src={PromoteImg} alt="img" />
                    </div>
                    <div className="contents">Get free $REDY points!</div>
                    <div className="claim-button" onClick={() => setIsModal(true)}>Claim now</div>
                    <div className="close-button" onClick={handleClick}>
                        <img src={CloseButton} alt="close" />
                    </div>
                </div>:null}
            <div className="flag-logo" onClick={handleClick}>
                <img src={Logo} alt="logo" />
            </div>
            {
                isModal?
                <div className="wallet-connect-modal">
                    <div className="opacity-bg"></div>
                    <WalletConnectModal sendIsModal={handleIsModal} />
                </div>:
                null
            }
        </div>
    )
}

export default PromotCard;