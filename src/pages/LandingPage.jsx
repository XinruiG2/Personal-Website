import React, { useState } from 'react'
import { styled, keyframes } from 'styled-components'
import LeftContainer from '../components/LandingPageComponents/LeftContainer';
import AboutMe from '../components/LandingPageComponents/AboutMe';
import grainy from '../images/grainy4.jpg'

const fadeIn = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const FadeInContainer = styled.div`
    opacity: 0;
    animation: fadeIn 0.85s forwards;
`;

const Container = styled(FadeInContainer)`
    animation: ${fadeIn} 0.85s forwards;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Circle = styled.div`
    width: 135vh;
    height: 150vh; 
    background-color: rgb(29, 29, 29); 
    border-radius: 50%; 
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -25vh;
    box-shadow: rgb(33, 33, 33) -10px 10px 30px 30px;
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            ellipse at center,
            rgba(241, 241, 241, 0.7) 0%,
            rgba(29, 29, 29, 0.4) 70%,
            rgba(0, 0, 0) 100%
        );
        border-radius: inherit;
        z-index: -1;
    }
`;

const ImageOverlay = styled.div`
    position: absolute;
    top: 8vh;
    left: -20vh;
    width: 100%;
    height: 100%;
    background-image: url(${grainy});
    background-size: 135%;
    opacity: 0.25;
    padding: 70px;
    z-index: 1;
    border-radius: inherit;

    &:before {
        content: '';
        position: absolute;
        top: 10vh;
        left: 0vh;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            ellipse at center,
            rgba(29, 29, 29, 0) 37%,
            rgba(29, 29, 29, 1) 60%
        );
        opacity: 0.9;
        z-index: -1;
    }
`;

const LandingPage = () => {

  return (
    <Container>
        <LeftContainer></LeftContainer>
        <AboutMe></AboutMe>
        <Circle>
            <ImageOverlay></ImageOverlay>
        </Circle>
    </Container>
  )
}

export default LandingPage