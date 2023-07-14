import React, { useState, useEffect, useRef } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/GlobalStyle";
import ScrollTriggers from "./Sections/ScrollTriggers";
import { light } from "./Styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import About from "./Component/About";
import Wybtv from "./Component/Wybtv";
import Doddles from "./Component/Doddles";
import Utilitiesss from "./Component/Utilitiesss";
import Circle from "./Component/Circle";
import Home from "./Component/Home";
import Trending from "./Sections/Components/Trending";
import Faq from "./Sections/Components/Faq";
import Footer from "./Sections/Footer";
import Loading from "./Sections/Loading";
import { AnimatePresence } from "framer-motion";

function App() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
    return () => {};
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={light}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>{loaded ? null : <Loading />}</AnimatePresence>
          <ScrollTriggers />
          <main className="App" data-scroll-container ref={containerRef}>
            <Home />
            <Circle />
            <About />
            <Wybtv />
            <Doddles />
            <Utilitiesss />
            <Trending />
            <Faq />
            <Footer />
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
