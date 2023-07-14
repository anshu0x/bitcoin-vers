import React from "react";
import "../Style/Circle.css";
import c1 from "../Assist/Ellipse 19.png";
import btni from "../Assist/LEARN MORE OVERLAP.png";
import lo from "../Assist/logo-dark.png.png";

const Circle = () => {
  return (
    <>
      <div className="main1">
        <div className="main">
          <div className="circle1">
            <img src={c1} alt="" />
          </div>
          <div className="circle2">
            <img src={c1} alt="" />
          </div>
          <div className="circle3">
            <img src={c1} alt="" />
          </div>
          <div className="circle4" style={{}}>
            <img src={c1} alt="" />
          </div>
          <div className="circle5" style={{}}>
            <img src={lo} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="box111">
            <div className="b11">
              <h2 style={{ marginLeft: "23px" }}> Bitcoin Protocol</h2>
            </div>
            <div className="p">
              <p>
                Every cryptocurrency has its own dedicated blockchain that
                exclusively excepts transactions in specific tokens. Coverting
                BTC to ETH or viceversa is not a simple process, as it typically
                involves converting to that currency first,followed by
                purchasing the desired cryptocurrency.
              </p>
            </div>

            <div
              className="bi"
              style={{ marginTop: "10px", marginLeft: "40px" }}
            >
              <img src={btni} alt="btn" />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box112">
            <div className="b11">
              <h2 style={{ marginLeft: "23px" }}> BTC Swap</h2>
            </div>
            <div className="p">
              <p>
                Every cryptocurrency has its own dedicated blockchain that
                exclusively excepts transactions in specific tokens. Coverting
                BTC to ETH or viceversa is not a simple process, as it typically
                involves converting to that currency first,followed by
                purchasing the desired cryptocurrency.
              </p>
            </div>

            <div className="bi2">
              <img src={btni} alt="btn" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Circle;
