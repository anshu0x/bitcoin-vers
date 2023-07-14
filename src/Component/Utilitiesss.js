import React from "react";
import "../Style/utiitiesss.css";
import coin from "../Assist/u1.png.png";
import music from "../Assist/nft4.png.png";
import qun from "../Assist/u5.png.png";
import box from "../Assist/nft2.png.png";
const Utilitiesss = () => {
  return (
    <>
      <div
        className="utility"
        style={{
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: "rgba(7, 29, 41, 1)",
        //  flexWrap:"wrap",
         display:"flex",
         justifyContent: "center",
         alignItems:"center"

        }}
      >
      <div className="uti"
      style={{
        maxHeight:"73%",
        // minWidth: "90%",
// background:"linearGradient(#04121a,#05141c,#02141e)",

            display: "flex",
            columnGap: "20px",
          backgroundColor:"blue",
            justifyContent: "center",

            flexWrap: "wrap",
      }}
      >
        <div
          className="utility1"
          style={{
            // height: "60vh",
            maxWidth: "100%",
            // backgroundColor: "#04121a",
            display: "flex",

            columnGap: "20px",

            justifyContent: "center",

            flexWrap: "wrap",
          }}
        >
          <div
            className="lb"
            style={{
              height: "20rem",
              width: "13rem",
              // backgroundColor:"#04121a",
              borderRadius: "10px",
              overflow: "hidden",
              // marginTop: "1rem",
            }}
          >
            <div
              className="pdiv"
              style={{ width: "9rem", margin: "auto", marginTop: "20px" }}
            >
              <p>
                BitcoinVerse Doodle NFTs is going to come up with a Marketplace
                for Bitcoin NFTs where people can trade their bitcoin NFTs at
                very less fee.
              </p>
            </div>
            <img src={coin} style={{ marginLeft: "90px", marginTop: "-34px" }} />
          </div>

          <div
            className="lb2"
            style={{
              height: "10rem",
              width: "22rem",
              backgroundColor:"#04121a",
              borderRadius: "10px",
              overflow: "hidden",
              // marginTop: "1rem",
            }}
          >
            <div
              className="pdiv"
              style={{
                width: "10rem",
                margin: "auto",
                marginTop: "20px",
                marginLeft: "2rem",
              }}
            >
              <p>
                Doodles will incorporate music from the biggest artists that can
                be unlocked and utilized.
              </p>
            </div>
            <img
              src={music}
              style={{ marginLeft: "14rem", marginTop: "-6rem" }}
            />
          </div>
          <div
            className="lb3"
            style={{
              height: "10rem",
              width: "22rem",
              backgroundColor:"#04121a",
              borderRadius: "10px",
              overflow: "hidden",
              // marginTop: "1rem",
            }}
          >
            <div
              className="pdiv"
              style={{
                width: "10rem",
                margin: "auto",
                marginTop: "20px",
                marginLeft: "2rem",
              }}
            >
              <p>
                Characters and wearables from Doodles  can easily be bought,
                traded, or sold.
              </p>
            </div>
            <img
              src={qun}
              style={{ marginLeft: "14rem", marginTop: "-5rem" }}
            />
          </div>
          <div
            className="lb4"
            style={{
              height: "9rem",
              width: "45rem",
              // backgroundColor:"#04121a",
              borderRadius: "10px",
              overflow: "hidden",
              marginTop: "-9rem",
              marginLeft:"14rem"
            }}
          >
            <div
              className="pdiv"
              style={{
                width: "30rem",
                margin: "auto",
                marginTop: "20px",
                marginLeft: "2rem",
                
              }}
            >
              <p>
                BitcoinVerse Doodle NFTs holders get a chance to win a mystery
                box on a monthly basis which contains a NFT with more rarity
              </p>
            </div>
            <img
              src={box}
              style={{ marginLeft: "37rem", marginTop: "-4rem" }}
            />
          </div>
          
          
        </div>

        <div className="utility2" style={{
          //  height: "40%",
            maxWidth: "100%",
            // backgroundColor: "green",
           display: "flex",

            columnGap: "20px",

            justifyContent: "center",

            flexWrap: "wrap",}}>

        <div
            className="lb5"
            style={{
              height: "12rem",
              width: "29rem",
backgroundColor:"#04121a",
              borderRadius: "10px",
              overflow: "hidden",
              marginTop: "1rem",
              marginLeft: "0rem",
            }}
          >
            <div
              className="pdiv"
              style={{
                width: "10rem",
                margin: "auto",
                marginTop: "20px",
                marginLeft: "2rem",
              }}
            >
              <p>
                Characters and wearables from Doodles  can easily be bought,
                traded, or sold.
              </p>
            </div>
            <img
              src={qun}
              style={{ marginLeft: "14rem", marginTop: "-3rem" }}
            />
          </div>
        <div
            className="lb6"
            style={{
                height: "12rem",
              width: "29rem",
backgroundColor:"#04121a",
              borderRadius: "10px",
              overflow: "hidden",
            
              marginTop: "1rem",
              marginLeft: "0rem",
            }}
          >
            <div
              className="pdiv"
              style={{
                width: "10rem",
                margin: "auto",
                marginTop: "20px",
                marginLeft: "2rem",
              }}
            >
              <p>
                Characters and wearables from Doodles  can easily be bought,
                traded, or sold.
              </p>
            </div>
            <img
              src={qun}
              style={{ marginLeft: "14rem", marginTop: "-3rem" }}
            />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Utilitiesss;
