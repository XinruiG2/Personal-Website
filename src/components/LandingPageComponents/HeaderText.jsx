import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    color: rgb(29, 29, 29);
`;

const Name = styled.div`
    font-weight: 400;
    font-size: 3.75rem;
    margin: 0 0 -6px 0
`;

const Description = styled.div`
    font-style: italic;
    font-size: 0.9rem;
`;

const HeaderText = () => {
  return (
    <Container>
        <Name>Xinrui Ge</Name>
        <Description>Front-end enthusiast & Student</Description>
    </Container>
  )
}

export default HeaderText