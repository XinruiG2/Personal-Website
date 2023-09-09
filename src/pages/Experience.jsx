import React from 'react'
import { styled, keyframes} from 'styled-components'
import Header from '../components/Header';
import MainContainer from '../components/AboutPageComponents/MainContainer';

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
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0px;
        background-color: transparent;
    }
`;

const Experience = () => {
  return (
    <Container>
        <Header name="About Me"/>
        <MainContainer></MainContainer>
    </Container>
  )
}

export default Experience