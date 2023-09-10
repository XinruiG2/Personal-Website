import React from 'react'
import styled from 'styled-components'
import Links from './Links';

const Container = styled.div`
    display: grid;
    grid-template-columns: 0.45fr 0.55fr;
    z-index: 100;
    height: 100%;
    width: 100%;
`;

const LeftContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: start;
`;

const GetInTouch = styled.div`
    font-size: 5.25rem;
    z-index: 100;
    color: rgb(250, 250, 250);
    line-height: 1.15;
    letter-spacing: 0.035rem;
    margin-bottom: 0.15rem;
`;

const MainContainer = () => {
  return (
    <Container>
        <LeftContainer>
            <GetInTouch>Get in<br />Touch</GetInTouch>
        </LeftContainer>
        <Links />
    </Container>
  )
}

export default MainContainer