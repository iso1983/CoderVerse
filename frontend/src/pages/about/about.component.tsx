import React from "react"
import styled from "styled-components";

const AboutDiv=styled.div`
    margin:0;
    color:white;
    font-weight:700;
    font-size:35px
`;


export default function About(){
    return(
        <AboutDiv>
            <p>One man army</p>
        </AboutDiv>
    )
}