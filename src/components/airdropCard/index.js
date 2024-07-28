import React, {useState} from "react";

import './styles.airdropcard.scss'

import TokenImg from '../../assets/img/drop.svg'
import WalletConnectModal from "../walletConnectModal";
import TokenImg_S from '../../assets/img/drop_s.svg'
// import StepImg_1 from '../../assets/img/step_1.svg'

const AirdropCard = () => {
    const [isModal, setIsModal] = useState(false);

    const handleIsModal = (flag) => {
        setIsModal(flag);
    }

    return(
        <>
            <div className="airdrop-card">
                <div>Airdrop</div>
                <div>
                    <div className="airdrop-info">
                        <div className="left">
                            <div className="key">Total Earned</div>
                            <div className="value">
                                <div className="icon">
                                    <img src={TokenImg} alt="token" />
                                </div>
                                <div className="content">0 REDY</div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="item">
                                <div className="key">Duals</div>
                                <div className="value">0</div>
                            </div>
                            <div className="item">
                                <div className="key">Swaps</div>
                                <div className="value">0</div>
                            </div>
                            <div className="item">
                                <div className="key">Referrals</div>
                                <div className="value">0</div>
                            </div>
                        </div>
                    </div>
                    <div className="claim-panel">
                        <div className="amount">
                            <div className="key">Daily Quest</div>
                            <div className="value">
                                <div>
                                    <img src={TokenImg_S} alt="token" />
                                </div>
                                <div className="content">200 REDY</div>
                            </div>
                        </div>
                        <div className="button" onClick={() => setIsModal(true)}>Claim</div>
                    </div>
                    <div className="connect-button" onClick={() => setIsModal(true)}>Connect Wallet</div>
                    <div className="invite-title">
                        <span>
                            Invite friends and get 
                            <span> 30%</span> of their REDY
                        </span>
                    </div>
                    {/* <div className="invite-how">
                        <div className="title">How it works</div>
                        <div className="steps">
                            <div>
                                <div className="step">
                                    <div className="icon">
                                        <img src={StepImg_1} alt="step_icon" />
                                    </div>
                                    <div className="description">
                                        <div className="title">Welcome Bonus</div>
                                        <div className="badge">100 REDY</div>
                                        <div className="content">Bonus will be applied after first earning for those who joined ReHold using a referral link.</div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="icon">
                                        <img src={StepImg_1} alt="step_icon" />
                                    </div>
                                    <div className="description">
                                        <div className="title">Dual Investment</div>
                                        <div className="badge">20 REDY = $1</div>
                                        <div className="content">Each USD in Dual Investment equals 20 REDY. You can turn Auto-Replay to farm REDY gas-free.</div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div> */}
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

export default AirdropCard;