import React, { useState, useEffect } from "react";

import WalletConnectModal from "../walletConnectModal";
import './styles.promotCard.scss'

import PromoteImg_1 from '../../assets/img/promote.gif'
import PromoteImg_2 from '../../assets/img/promote.jpg'
import Logo from '../../assets/img/logo.png'
import CloseButton from '../../assets/img/close.svg'

const PromoteImgs = [PromoteImg_1, PromoteImg_2];

const PromotCard = () => {
    const [isOpen, setIsopen] = useState(true);
    const [isModal, setIsModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = () => {
        setIsopen(!isOpen)
    }

    const handleIsModal = (flag) => {
        setIsModal(flag);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % PromoteImgs.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return(
        <div>
            {isOpen?
                <div className="promot-card">
                    <div className="video-section">
                        <img src={PromoteImgs[currentIndex]} alt="img" />
                    </div>
                    <div className="contents">Get 100 $REDY - swap $10!</div>
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