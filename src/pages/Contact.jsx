import React from 'react'
import { styled, keyframes} from 'styled-components'
import Header from '../components/Header';
import Background from '../components/Background';
import MainContainer from '../components/ContactPageComponents/MainContainer';

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
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: baseline;
`;

const Contact = () => {
  return (
    <Container>
        <Header name="Contact"/>
        <MainContainer />
        <Background />
    </Container>
  )
}

export default Contact