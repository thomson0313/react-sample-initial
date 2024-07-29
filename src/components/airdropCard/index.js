import React, {useState} from "react";
import { Tabs, Tab } from '@material-ui/core';

import './styles.airdropcard.scss'

import TokenImg from '../../assets/img/drop.svg'
import WalletConnectModal from "../walletConnectModal";
import TokenImg_S from '../../assets/img/drop_s.svg'
import StepImg_1 from '../../assets/img/step_1.svg'
import RewardImg from '../../assets/img/reward.svg'

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div>
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Address</th>
                        <th>Earned</th>
                        <th>Reward</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="ranking-1">1</div>
                        </td>
                        <td>
                            <div className="address">0x0c5...1fb</div>
                        </td>
                        <td>
                            <div className="earned">
                                <img src={TokenImg_S} alt="token" />
                                <div>134,700</div>
                            </div>
                        </td>
                        <td>
                            <div className="reward">
                                <img src={RewardImg} alt="reward" />
                                <div>100,000</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
        )}
      </div>
    );
};

const AirdropCard = () => {
    const [isModal, setIsModal] = useState(false);

    const handleIsModal = (flag) => {
        setIsModal(flag);
    }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                        <button className="button" onClick={() => setIsModal(true)} disabled>Claim</button>
                    </div>
                    <div className="connect-button" onClick={() => setIsModal(true)}>Connect Wallet</div>
                    <div className="invite-title">
                        <span>
                            Invite friends and get 
                            <span> 30%</span> of their REDY
                        </span>
                    </div>
                    <div className="invite-how">
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
                                        <div className="button-x">Open Dual</div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="icon">
                                        <img src={StepImg_1} alt="step_icon" />
                                    </div>
                                    <div className="description">
                                        <div className="title">Swap</div>
                                        <div className="badge">10 REDY = $1</div>
                                        <div className="content">Each USD in Swap equals 10 REDY. You can use cheap blockchains to farm REDY effectively.</div>
                                        <div className="button-x">Swap</div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="icon">
                                        <img src={StepImg_1} alt="step_icon" />
                                    </div>
                                    <div className="description">
                                        <div className="title">Galxe</div>
                                        <div className="badge">1 REDY = 1 XP</div>
                                        <div className="content">8,000$ prize pool in our new campaign on Galxe in partnership with CoinStats. 1,000 $REDY guaranteed to every participant.</div>
                                        <div className="button-y">Learn more</div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="icon">
                                        <img src={StepImg_1} alt="step_icon" />
                                    </div>
                                    <div className="description">
                                        <div className="title">Nomis Score</div>
                                        <div className="badge">REDY x2</div>
                                        <div className="content">Nomis Score holders get x2 multiplier for REDY. Every 2 weeks your earned REDY for the period will be doubled.</div>
                                        <div className="button-y">Learn more</div>
                                    </div>
                                </div>
                            </div>
                            <div className="step">
                                <div className="icon">
                                    <img src={StepImg_1} alt="step_icon" />
                                </div>
                                <div className="description">
                                    <div className="title">Referral Program</div>
                                    <div className="badge">30% REDY</div>
                                    <div className="content">5-level referral program allows you to get 30% REDY from your friends and their friends for each Trade, Dual Investment, Swap, and Daily Quest.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="leaderboard">
                        <div className="top">
                            <div className="title">Leaderboard</div>
                            <div className="description">The top 25 users weekly and the top 100 all-time will be shown on the leaderboard.</div>
                        </div>
                        <div className="range-toggle">
                            <Tabs value={value} onChange={handleChange} className="custom-tabs" indicatorColor="none">
                                <Tab label="Weekly" className={`custom-tab ${value === 0 ? 'custom-tab-selected' : ''}`} />
                                <Tab label="All-time" className={`custom-tab ${value === 1 ? 'custom-tab-selected' : ''}`} />
                            </Tabs>
                            <TabPanel value={value} index={0}>
                                tyiouytioytupiouypoiuy
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Item Two Content
                            </TabPanel>
                        </div>
                    </div>
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