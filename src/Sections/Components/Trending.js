import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import Loading from "../Loading";
import img1 from "../../assets/1909.png.png";
import img2 from "../../assets/1910.png.png";
import img3 from "../../assets/1901.png.png";
import img4 from "../../assets/1911.png.png";
import img5 from "../../assets/1912.png.png";
import Butn from "../../assets/BUTTON.png";
import { Swiper, SwiperSlide } from "swiper/react";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};
  overflow: hidden;
  border-top: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 15s;
    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  padding-top: 6px;
  padding-left: 6px;
  padding-right: 6px;
  border: 1px solid ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  background-color: ${(props) => props.theme.body};
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateX(-10px);
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0.4rem 1rem;
  background-color: ${(props) => props.theme.body};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => props.theme.text};
    font-weight: 600;
  }

  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.text};
    font-weight: 600;
  }
`;

const Button = styled.div`
  padding: 0.4rem 3rem;
  background-color: yellow;
  color: ${(props) => props.theme.body};
  border-radius: 50px;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: center;
`;

const NftItem = ({ img, number = 0 }) => {
  return (
    <ImgContainer>
      <img width={500} height={400} src={img} alt="Doodles" />
      <Details>
        <div className="d-flex">
          <span>Inscriptions</span> <br />
          <h1 className="mx-2">#{number}</h1>
        </div>
        <Button>Collect Now</Button>
      </Details>
    </ImgContainer>
  );
};

function Trending() {
  return (
    <Section>
      <Row>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
           <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Row>
    </Section>
  );
}

export default Trending;
