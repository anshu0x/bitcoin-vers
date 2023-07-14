import React from 'react'
import styled from "styled-components";
import oneimg from "../assets/1.png";
import twoimg from "../assets/2.png";
import line from "../assets/Line 82.png"
import btn from "../assets/BUTTON (2).png"
import logo from "../assets/logo-dark.png.png"
import Twitter from '../Icons/Twitter'
import { Telegram } from '../Icons/Telegram'
import { Dribble } from '../Icons/Dribble'
import Downarrow from '../Icons/DownArrow'


const Section = styled.section`
min-height: 100vh;
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
`
const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  color: yellow;
  border-bottom:2px solid yellow;

  
  margin: 2rem auto;
  // margin-bottom:3rem;
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;
const Box =styled.div`
width:80%;
min-height:50vh;
border-top-right-radius:50px;
border-bottom-left-radius:50px;
background:linear-gradient(#04121a,#03131b,#02141e);
color:${(props)=> props.theme.text};
display:flex;
justify-content:space-between;
padding: 4rem 2rem;
align-items:center;
margin-bottom:2rem;

@media (max-width:48em){
flex-direction:column-reverse;
padding: 2rem 1rem;

}
`
const Left= styled.div`
width:45%;
padding-top:1.5rem;
display:flex;
flex-direction:column;

.socials{
  
}
@media (max-width:48em){
width:100%;
.socials{
  flex-direction:column;
}
 .reserved{
    width: 100%;
    font-size:10px;
}


}
img{
  width:25%;
}
p{
  font-size:12px;
  margin-top:1.5rem;
  width:75%;
  margin-bottom:2rem;
}
h6{
  text-transfoem:uppercase;
  font-size:1.5rem;
}


`
const Middle= styled.div`
width:10%;

img{
  height:250px;
  margin-left:1.5rem;

}
@media (max-width:48em){
  width:0;
  img{
  height:0;
  }
}

`
const Right= styled.div`
width:45%;

@media (max-width:48em){
  width:100%;
}
img{
  width:60%;
  margin-bottom:2rem;
}
p{
  font-size:12px;
}
`
const Icons=styled.div`
width:130px;
height:60px;
display:flex;
align-items:center;
justify-content:space-between;
`
const Button =styled.div`
padding:0 1.5rem;
height:50px;
border:2px solid #fff;
margin-left:8rem;
border-bottom-left-radius:10px;
border-top-right-radius:10px;
margin-top:1.6rem;
display:flex;
align-items:center;
justify-content:center;

@media (max-width:48em){
  margin-left:0;
padding:0 0.5rem;

}
`
const  ImgBox= styled.div`
margin-bottom:3rem;
display:flex;
margin-top:2rem;

@media (max-width: 48em){
flex-direction:column;

img:nth-child(2){
margin-top:2rem;
}
img:nth-child(3){
  margin-top:2rem;
  }
  }
  
`

function Footer() {
  return (
    <>
<Section>
  <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-5">
<Title>
  Our Partners
</Title>
<ImgBox>
  <img src={oneimg} className="mx-5" alt="one" width={250}  />
  <img src={twoimg} className="mx-5" alt="two"  width={250}/>
  <img src={oneimg} className="mx-5" alt="two"  width={250}/>
</ImgBox>
</div>
<Box>
<Left>
<img src={logo} alt="logo"/>
<p>$BTV is an opensource protocol layer of the ecosystem, a highly secure and useful utility that enables to users participate in BitCoinVerse ecosystem.</p>
<div className="d-flex socials">
  <div className='d-flex flex-column'>
  <h6 className="text-warning">Our Socials</h6>
<Icons className="d-flex justify-content-space-between">
<Twitter/>
<Telegram/>
<Dribble/>
</Icons>
</div>
<Button>Whitepaper <Downarrow/></Button>
  </div>
  <p className="mx-5 text-white reserved">2021 RESERVED BY BITCOINVERSE INC</p>
</Left>
<Middle>
<img src={line} className="m" alt="one" />
</Middle>
<Right className="d-flex flex-column">
  <img src={btn} alt="btn" />
  <div className="d-flex flex-row justify-content-space-between">
  <div className="d-flex flex-column">
<h4 className="fs-5 mb-2 text-warning">ABOUT US</h4>
<p>Whitepaper</p>
<p>Blog</p>
<p>Activity</p>
<p>Contact</p>
</div>
<div className="d-flex flex-column mx-5">
<h4 className="fs-5 mb-2 text-warning">SUPPORT</h4>
<p>Help & Support</p>
<p>Brand Assets</p>
<p>Docs</p>
<p>Privacy</p>

</div>
  </div>

</Right>
</Box>
  </Section>
    </>
  )
}

export default Footer