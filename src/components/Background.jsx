import React from 'react'
import { styled, keyframes } from 'styled-components'
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
`;

const Circle = styled.div`
    width: 83vh;
    height: 140vh; 
    background-color: rgb(29, 29, 29); 
    border-radius: 50%; 
    position: absolute;
    top: 31%;
    transform: translateY(-50%);
    left: -25vh;
    box-shadow: rgb(26, 26, 26) 10px 10px 22px 30px;
    overflow: hidden;
    transform: skew(62deg, -20deg) scaleX(2) scaleY(1);
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
            rgba(29, 29, 29, 0.4) 70%,
            rgba(0, 0, 0) 100%
        );
        border-radius: inherit;
        z-index: -1;
    }
`;

const ImageOverlay = styled.div`
    position: absolute;
    top: 20vh;
    left: -20vh;
    width: 100%;
    height: 100%;
    background-image: url(${grainy});
    background-size: 138%;
    opacity: 0.25;
    padding: 200px;
    z-index: 1;
    border-radius: inherit;
    transform: rotate(-15deg);

    &:before {
        content: '';
        position: absolute;
        top: 10vh;
        left: 0vh;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            ellipse at center,
            rgba(19, 19, 19, 0) 10%,
            rgba(29, 29, 29, 1) 50%
        );
        opacity: 0.9;
        z-index: -1;
    }
`;

const Background = () => {
  return (
    <Container>
        <Circle>
            <ImageOverlay></ImageOverlay>
        </Circle>
    </Container>
  )
}

export default Background