import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const NavbarWrap=styled.div`
width:60%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
display:flex;
gap:20px;
margin:auto;
justify-content:space-around;
padding:10px;
margin-top:20px;
`;

const LinkStyle=styled(Link)`
text-decoration:none;`

function Navbar()
{
    return(

<NavbarWrap>
  

      <LinkStyle to="/">Home</LinkStyle>
      <LinkStyle to="/allProducts">All Products</LinkStyle>
      <LinkStyle to="/productDetails">Product Details</LinkStyle>

</NavbarWrap>    
    )    
    
}

export default Navbar
