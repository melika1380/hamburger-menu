import React from 'react';
import styled from 'styled-components'

const Ul = styled.ul`
 list-style:none;
 display:flex;
 justify-content:right;
 margin:20px 50px;
 z-index:15;
 li{
    padding:18px 30px;
 }
 @media(max-width:768px){
    margin:0;
    flex-direction:column;
    background:#1565df;
    position:fixed;
    top:0;
    right:0;
    height:100vh;
    width:300px;
    padding-top:3.5rem;
    transition:all 0.3s linear;
    transform: ${props=>props.open?'translateX(0)' : 'translateX(100%)'};
    li{
        color:#fff;
    }
 }
`

const Navbar = ({open}) => {
    return (
        <Ul open={open}>
            <li>Home</li>
            <li>Docs</li>
            <li>Buy me s coffe</li>
            <li>Github</li>
        </Ul>
    );
};

export default Navbar;