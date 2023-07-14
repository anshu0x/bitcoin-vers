import React from "react"
import styled from "styled-components";

import logo from "../assets/logo-dark.png.png";
import DownArrow from "../Icons/DownArrow";

const Navb = styled.nav`
width:100%;
height:80px;
// background-color:red;
display:flex;
padding:0 3.5rem;
align-items:center;
justify-content:space-between;
position:absolute;
top:0;
left:0;
@media (max-width:48em){
padding:0 1rem;
  
}
`
const Logo=styled.div`
width:15%;
height:100%;
// background-color:blue;
display:flex;
align-items:center;
justify-content:center;

img{
    width:150px;
}
@media (max-width:48em){

 img{
    width:140px;
    margin-left:4rem;
 } 
}
`
const Links =styled.div`
width:85%;
height:100%;
// backgroung-color:yellow;
display:flex;
align-items:center;
justify-content:flex-start;
padding:0 2rem;
// margin-left:2rem;

i{
    display:none;
}
@media (max-width:48em){
    justify-content:flex-end;
    i{
        display:flex;
        color:#fff;
        font-size:2rem;
    }
}
`
const Link=styled.a`
font-size:1rem;
color:#fff;
margin-left:3rem;
text-transform:uppercase;
border-bottom:1px solid #fff;
font-weight:999;

&:hover{
    transition:0.3s ease;
    border-bottom:1px solid yellow;
    color:gold;
    cursor:pointer;
}
@media (max-width:48em){
display:none;  
}
`
const Button =styled.button`
padding:0.6rem 2rem;
border-top-right-radius:20px;
border-bottom-left-radius:20px;
border:1px solid #fff;
background-color:transparent;
outline:none;
margin-left:4.5rem;
color:#fff;
cursor:pointer;
font-weight:999;

&:hover{
    background-color:gold;
    transition:0.3s ease;
color:${(props)=>props.theme.body};
cursor:pointer;

}
@media (max-width:48em){
display:none;  
}
`

function Navbar() {
  return (
    <>
    <Navb>
        <Logo>
            <img src={logo} alt="logo"/>
        </Logo>
<Links>
<Link>Home</Link>
<Link>Our Products</Link>
<Link>About us</Link>
<Link>Faqs</Link>
<Link>Inscriptions</Link>
<Button>LEARN APP <DownArrow/></Button>

< i class="ri-menu-line"></i>
</Links>
    </Navb>
    </>
  )
}

export default Navbar