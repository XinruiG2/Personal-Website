import React from 'react'
import styled from 'styled-components'
import Images from './Images';
import InformationContainer from './InformationContainer';

const Container = styled.div`
    display: grid;
    grid-template-columns: 0.48fr 0.52fr;
    margin-top: 37px;
    gap: 45px;
    z-index: 100;
`;

const MainContainer = () => {
  return (
    <Container>
        <Images />
        <InformationContainer></InformationContainer>
    </Container>
  )
}

export default MainContainer