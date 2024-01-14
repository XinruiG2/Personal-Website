import React from 'react'
import { styled } from 'styled-components'
import grainy from '../images/grainy4.jpg'

const Container = styled.div`
`;

const Circle = styled.div`
    width: 140vh;
    height: 140vh; 
    background-color: rgb(90, 90, 90); 
    border-radius: 50%; 
    position: absolute;
    top: 95%;
    transform: translateY(-50%);
    right: -17vw;
    box-shadow: rgb(93, 93, 93) 10px 10px 22px 30px;
    overflow: hidden;
    transform: skew(35deg, -20deg) scaleX(2.075) scaleY(1);
    z-index: 1;

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
            rgba(93, 93, 93, 0.4) 70%,
            rgba(0, 0, 0) 100%
        );
        border-radius: inherit;
        z-index: -1;
    }
`;

const ImageOverlay = styled.div`
    position: absolute;
    top: -6%;
    right: -10%;
    width: 100%;
    height: 100%;
    background-image: url(${grainy});
    background-size: 100% 100%;
    background-position: center center;
    padding: 50px;
    opacity: 0.18;
    z-index: 1;
    border-radius: inherit;

    &:before {
        content: '';
        position: absolute;
        top: 50vh;
        left: 0vh;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            ellipse at center,
            rgba(78, 78, 78, 0) 10%,
            rgba(92, 92, 92, 1) 15%
        );
        opacity: 0.85;
        z-index: -1;
    }
`;

const BackgroundTwo = () => {
  return (
    <Container>
        <Circle>
            <ImageOverlay></ImageOverlay>
        </Circle>
    </Container>
  )
}

export default BackgroundTwo