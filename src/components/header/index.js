import React, { useState } from "react";

import './styles.header.scss'

import WalletConnectModal from "../walletConnectModal";
import Logo from '../../assets/img/logo.svg'
import TokenImg from '../../assets/img/drop.svg'
import NetworksImg from '../../assets/img/eth.svg'
import LangsImg from '../../assets/img/lang.svg'
import TickIcon from '../../assets/img/selected.svg'

import Bsc from '../../assets/img/bsc.svg'
import Arbitrum from '../../assets/img/arb.svg'
import Polygon from '../../assets/img/matic.svg'
import Opimism from '../../assets/img/op.svg'
import Avalanche from '../../assets/img/avax.svg'
import Base from '../../assets/img/base.svg'
import Linea from '../../assets/img/linea.svg'
import Manta from '../../assets/img/manta.svg'
import Rootstock from '../../assets/img/rootstock.svg'

const Networks = [
    {icon: NetworksImg, name: "Ethereum"},
    {icon: Bsc, name: "BNB Chain"},
    {icon: Arbitrum, name: "Arbitrum"},
    {icon: Polygon, name: "Polygon"},
    {icon: Opimism, name: "Opimism"},
    {icon: Avalanche, name: "Avalanche"},
    {icon: Base, name: "Base"},
    {icon: Linea, name: "Linea"},
    {icon: Manta, name: "Manta"},
    {icon: Rootstock, name: "Rootstock"},
]

const Langs = ["Deutsch", "English", "Español", "Français", "Bahasa", "Italiano", "日本語", "한국어", "Português", "Русский", "Tiếng Việt", "简体中文", "繁體中文"]

const Header = () => {
    const [isModal, setIsModal] = useState(false);
    const [chainFlag, setChainFlag] = useState(false);
    const [langFlag, setLangFlag] = useState(false);

    const handleIsModal = (flag) => {
        setIsModal(flag);
    }

    const handleChainFlag = () => {
        setChainFlag(!chainFlag);
    }

    const handleLangFlag = () => {
        setLangFlag(!langFlag);
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
                    <div className="networks" onClick={handleChainFlag}>
                        <img src={NetworksImg} alt="networks" />
                        <div className="select-network">
                            {
                                Networks.map((item, index) => (
                                    <div key={index} className="network-item">
                                        <div><img src={item.icon} alt="icon" /></div>
                                        <div>{item.name}</div>
                                        {index === 0?<img src={TickIcon} alt="selected" />:null}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="languages">
                        <img src={LangsImg} alt="langs" />
                        <div className="select-language">
                            {
                                Langs.map((item, index) => (
                                    <div key={index} className="network-item">
                                        <div>{item}</div>
                                        {index === 1?<img src={TickIcon} alt="selected" />:null}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="connect-wallet" onClick={() => setIsModal(true)}>Connect</div>
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