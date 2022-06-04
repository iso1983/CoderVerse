import React from "react";
import styled from 'styled-components'
import About from "../../pages/about/about.component";
import Home from "../../pages/home/home.component";
import { Link } from "react-router-dom";

const AppHeader=styled.div`
    display:flex;
    width:100%;
    height:50px;
    margin:30px;
    flex-direction:row;
    color:white;
`;

const LinkElements=styled.div`
    margin:10px;
`


export default function Header(){
    return(
        <AppHeader>
           <LinkElements>
                <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>      
            </LinkElements>
           
           <LinkElements>
                <Link style={{ textDecoration: 'none' }} to='/about'>About</Link>
            </LinkElements>
       
        </AppHeader>
    )
}