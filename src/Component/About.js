import React from "react";
import "../Style/About.css";
import img2 from "../Assist/2nd.png";
import img1 from "../Assist/ENTER APP.png";

const About = () => {
  return (
    <div>
      <div className="containerr">
        <h1 id="about" style={{color:"gold" ,fontSize:"3rem",marginTop:"8rem",zIndex:"999",borderBottom:"2px solid yellow"}}>
          ABOUT US
        </h1>
        <div className="container1" style={{marginTop:"-4rem"}}>

          <div className="cont1">
            <div className="p1"  style={{}}>
              <p>
                $BTV token is a governance and utility token used within the
                BitCoinVerse ecosystem to empower a decentralized community
                building at the forefront of web3.
              </p>
            </div>

            <div className="p2">
              <p>
                As the open-source protocol layer of the ecosystem, $BTV token
                serves several purposes
              </p>
            </div>

            <div className="img">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="cont2" style={{marginTop:"100px"}}>
          
            <img src={img2} alt="" id="aboutimg" style={{marginLeft:"60px",height:""}} ></img>
             
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
