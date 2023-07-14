import React from "react";
import "../Style/Wybtv.css";
import btni from "../Assist/LEARN MORE OVERLAP.png";
import logo1 from "../Assist/Group 9207.png";
const Wybtv = () => {
  return (
    <div className="containerr">
      <div className="container11">
        <div className="box1">
          <div className="wb1">
            <div className="wb">
              <h1>WHY $BTV</h1>
            </div>
            <div className="heading">
              <h1>OUR SYSTEM </h1>
              <h1>AND </h1>
              <h1>OUR PRODUCT</h1>
            </div>
            <div className="box"></div>
          </div>
          <div className="wb2">
            <div className="wbb">
              <h6>For User to Safely Store FIles</h6>
              <h1>BTV DRIVE</h1>
              <p>
                Users can earn Satoshis for free by staking their $BTV tokens at
                an annual percentage yield (APY), which they can then use to
                securely store and timestamp important memories such as photos
                and documents on the Bitcoin blockchain by inscribing them.
              </p>
              <img src={btni} alt="" />
            </div>
            <div className="wbb2">
              <h6>For OG DeFi Belivers</h6>
              <h1>BITCOIN DEFI</h1>
              <p>
                BitCoinVerse provides a secure, non-custodial, and
                permissionless platform for users to engage in trading,
                borrowing, lending, and liquidity provision of Bitcoin and other
                assets. There is no need for sign-up or approval processes.
              </p>
              <img src={btni} alt="" />
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="box11">
            <div className="b11">
              <div className="cir">
                <img src={logo1} alt="lo" />
              </div>
              <h2>BITCOIN DEX</h2>
            </div>
            <div className="p">
              <p>
                BitCoinVerse has created an innovative Automated Market Maker
                (AMM) Multichain DEX that includes Cross-chain and Hybrid
                Liquidity Features
              </p>
            </div>
            <div className="bi2">
              <img src={btni} alt="" />
            </div>
          </div>
          <div className="box22">
            <div className="b11">
              <div className="cir">
                <img src={logo1} alt="lo" />
              </div>

              <h2>BITCOINVERSE LAUNCHPAD</h2>
            </div>
            <div className="p">
              <p>
                BitCoinVerse has created an innovative Automated Market Maker
                (AMM) Multichain DEX that includes Cross-chain and Hybrid
                Liquidity Features
              </p>
            </div>

            <div className="bi2">
              <img src={btni} alt="" />
            </div>
          </div>
          <div className="box33">
            <div className="b11">
              <div className="cir">
                <img src={logo1} alt="lo" />
              </div>

              <h2>BITCOIN NFTS</h2>
            </div>
            <div className="p">
              <p>
                BitCoinVerse has created an innovative Automated Market Maker
                (AMM) Multichain DEX that includes Cross-chain and Hybrid
                Liquidity Features
              </p>
            </div>

            <div className="bi2">
              <img src={btni} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wybtv;
