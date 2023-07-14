import React from "react";
import "../Style/About.css";
import img2 from "../Assist/image 1356 .png";
import img1 from "../Assist/ENTER APP.png";

const Doddles = () => {
  return (
    <div>
      <div className="containerr" >
        <div className="container1" >
        
          <div className="cont1" style={{marginTop:"0px"}}>
            <div className="p1">
              <h1><span>1,000</span> Doodles inscribed forever on the <br/> Bitcoin blockchain</h1>
            </div>

            <div className="p2"style={{marginTop:"0px"}}>
              <p>
                BitCoinVerse Doodle NFTs are the first ever highly byte-perfect
                uploads of the original doodles onto the Bitcoin Blockchain
                using Ordinals.
              </p>
            </div>

            <div className="img" style={{marginTop:"-30px"}}>
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="cont2"style={{height:"27rem",marginTop:"-4rem"}} >
            <img src={img2} alt=""  style={{}}>
            </img>
                 
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doddles;
