import React from 'react'
import { styled, keyframes} from 'styled-components'
import Header from '../components/Header';

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
`;

const Contact = () => {
  return (
    <Container>
        <Header name="Contact"/>
    </Container>
  )
}

export default Contact