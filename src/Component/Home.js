import React, { lazy, Suspense, useEffect, useRef } from "react";
import bitcoin from "../Assist/Bitcoin-3.png";
import btn from "../Assist/BUTTON (1).png";
import Navbar from "./Navbar";
import styled from "styled-components";
import sec from "../Assist/image1358(1).png";
import TypeWriter from "typewriter-effect";
const Section = styled.div`
  height: 100vh;
  width: 100vw;
  ${
    "" /* // background-image:url("");
// background-position: center;
// background-repeat: no-repeat; */
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;

  #sec {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #bitcoin {
    position: absolute;
    top: 3%;
    left: 49.5%;
    transform: translate(-50%, -50%);
    height: 370px;
    width: 370px;
  }

  @media (min-width: 48em) {
    #bitcoin {
      position: absolute;
      top: 32.5%;
      left: 49.5%;
      transform: translate(-50%, -50%);
      height: 400px;
      width: 400px;
    }
  }
  @media (max-width: 1300px) {
    #bitcoin {
      position: absolute;
      top: 36.5%;
      left: 49.5%;
      transform: translate(-50%, -50%);
      height: 330px;
      width: 330px;
    }
  }
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;
const MainHeading = styled.h1`
  font-size: 4rem;
  color: #fff;
  text-transform: uppercase;
  margin-left: 3rem;
  ${"" /* margin-top:3rem */}
  position:absolute;
  font-weight: 800;
  font-family: "Space Grotesk Variable";
  background-colour: "red";

  @media (max-width: 48em) {
    font-size: 3rem;
    margin-top: 22rem;
    margin-left: 2rem;
  }

  span {
    color: yellow;
  }
`;
const Button = styled.div`
  position: absolute;
  right: 2%;
  margin-bottom: -8rem;

  img {
    width: 80%;
  }

  @media (max-width: 48em) {
    ${"" /* right:-15%; */}
    left:0;
    margin-bottom: -16rem;
    width: 400px;
  }
`;

const Home = () => {

  return (
    <>
      <Section>
        <img src={sec} alt="sec" id="sec" />
        <img className="heart" src={bitcoin} alt="bitcoin" id="bitcoin" />
        <Overlay/>
        <Navbar />
        <MainHeading style={{ marginTop: "22rem" }}>
          Build The <br /> Future With <br />
          <TypeWriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(" <span>Bitcoinverse</span>")
                .pauseFor(2000)
                .deleteAll()
                .typeString(" <span>Bitcoin</span>")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </MainHeading>
        <Button style={{ marginTop: "25rem" }}>
          <img src={btn} alt="btn" />
        </Button>
      </Section>
    </>
  );
};

export default Home;
