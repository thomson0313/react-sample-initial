import React, { useState } from "react";

import './styles.walletButton.scss'


const WalletButton = ({img, name, action}) => {

    return(
        <div className="wallet-button" onClick={action}>
            <div className="wallet-icon">
                <img src={img} alt="wallet" />
            </div>
            <div className="wallet-name">{name}</div>
        </div>
    )
}

export default WalletButton;