import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';
import "../../index.css"

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
`
const Title = styled.h1`
  font-size:3rem;
  text-transform: uppercase;
  color: yellow;
  border-bottom:2px solid yellow;
  
  margin: 0rem auto;
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content:space-between;
align-content: center;
position:relative;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;


@media (max-width: 64em){
  width: 90%;
  align-self: center;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.revert();       

  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>FAQS</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="Alright, but what exactly do you do?" >
  As a creative agency we work with you to develop solutions to address your brand needs. That includes various 
  aspects of brand planning and strategy, marketing and design.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="Lorem Ipsum" >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugit laborum accusamus quis sequi neque rem eius dolorem perspiciatis corporis!
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="Are your rates competitive?" >
  The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests.
  </Accordion>
  </Box>
  <Box>
<Accordion ScrollTrigger={ScrollTrigger} title="Why do you have a monthly project cap?" >
You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs.
  </Accordion>
<Accordion ScrollTrigger={ScrollTrigger} title="Why do you have a monthly project cap?" >
You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs.
  </Accordion>
<Accordion ScrollTrigger={ScrollTrigger} title="Why do you have a monthly project cap?" >
You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs.
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq