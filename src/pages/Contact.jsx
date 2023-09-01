import React from 'react'
import { styled, keyframes} from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const FadeInContainer = styled.div`
    opacity: 0;
    animation: fadeIn 1s forwards;
`;

const Container = styled(FadeInContainer)`
    animation: ${fadeIn} 1s forwards;
`;

const Contact = () => {
  return (
    <Container>
        contact
    </Container>
  )
}

export default Contact