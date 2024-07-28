import React from "react";

import './styles.walletButton.scss'


const WalletButton = ({img, name}) => {
    return(
        <div className="wallet-button">
            <div className="wallet-icon">
                <img src={img} alt="wallet" />
            </div>
            <div className="wallet-name">{name}</div>
        </div>
    )
}

export default WalletButton;