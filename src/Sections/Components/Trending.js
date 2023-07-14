import React ,{useRef, lazy, Suspense } from 'react'
import styled, {keyframes} from 'styled-components';
import Loading from '../Loading';

import img1 from "../../assets/1909.png.png"
import img2 from "../../assets/1910.png.png"
import img3 from "../../assets/1901.png.png"
import img4 from "../../assets/1911.png.png"
import img5 from "../../assets/1912.png.png"
import Butn from "../../assets/BUTTON.png";

const ConfettiComponent = lazy(() => import("../Confetti"));

const Section = styled.section`
min-height: 100vh;
// height: auto;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
color: ${(props) => props.theme.text};
overflow: hidden;
border-top: 1px solid transparent;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 30em){
    animation-duration: 15s;

  }
}
&>*:last-child{
  animation-duration: 15s;
  @media (max-width: 30em){
    animation-duration: 10s;

  }
}
`
const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`
const Row = styled.div`
/* background-color: lightblue; */
white-space: nowrap;
box-sizing:content-box;
margin: 2rem 0;
display: flex;

animation: ${move} linear infinite ${props => props.direction};
`
const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  color: yellow;
  border-bottom:2px solid yellow;
  
//   margin: 0rem auto;
margin-bottom:3rem;
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;
const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
padding-top:6px;
padding-left:6px;
padding-right:6px;
border: 1px solid ${props => `rgba(${props.theme.bodyRgba},0.8)`};
background-color:${props => props.theme.body};

border-radius: 10px;
cursor: pointer;

@media (max-width: 48em){
  width: 15rem;
  }
  @media (max-width: 30em){
  width: 10rem;
  }

img{
  width: 100%;
  height: auto;
}

`
const Details = styled.div`
display: flex;
justify-content: space-between;
flex-direction:column;
padding: 0.4rem 1rem;
background-color: ${props => props.theme.body};
// border: 1px solid ${props => `rgba(${props.theme.bodyRgba},0.8)`};

border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;

span{
  font-size: ${props => props.theme.fontsm};
  color:${props => props.theme.text};
  font-weight:600;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.text};
  font-weight:600;

  @media (max-width: 30em){
    font-size: ${props => props.theme.fontsm};

  }

}

`
const Button=styled.div`
padding:0.4rem 3rem;
background-color:yellow;
color:${props=> props.theme.body};
border-radius:50px;
display:flex;
align-items:center;
margin-top:1rem;
justify-content:center;
`

const NftItem = ({img, number=0, passRef}) => {

let play = (e) => {
  passRef.current.style.animationPlayState = 'running';
}
let pause = (e) => {
  passRef.current.style.animationPlayState = 'paused';
}
  return(
    <ImgContainer onMouseOver={e => pause(e) }  onMouseOut={e => play(e) }  >
      <img width={500} height={400} src={img} alt="Doodles" />
      <Details>
        <div className="d-flex">
          <span>Inscriptions</span> <br />
          <h1 className="mx-2">#{number}</h1>
        </div>
        <Button>Collect Now</Button>
      </Details>
    </ImgContainer>
  )
} 



function Trending() {

   const Row1Ref = useRef(null);
  return (
    <>
<Section>
<Suspense fallback={<Loading />}>
  <ConfettiComponent  /> </Suspense>
<Title>Trending Doodles</Title>
<Row direction="none" ref={Row1Ref}>
      <NftItem img={img1}  number={32}   passRef = {Row1Ref} />
      <NftItem img={img2}  number={32}   passRef = {Row1Ref} />
      <NftItem img={img3}  number={22}   passRef = {Row1Ref} />
      <NftItem img={img4}  number={23}  passRef = {Row1Ref} />
      <NftItem img={img5}  number={24}  passRef = {Row1Ref} />
    </Row>
<div>
  <img src={Butn} alt="btn" className="btn mt-4" width={350}/>
  </div>    
</Section>
    </>
  )
}

export default Trending