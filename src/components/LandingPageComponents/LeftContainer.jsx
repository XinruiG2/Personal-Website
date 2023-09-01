import React from 'react'
import { styled } from 'styled-components'
import HeaderText from './HeaderText';
import Pages from './Pages';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 100px);
    z-index: 100;
`;

const LeftContainer = () => {
  return (
    <Container>
        <HeaderText></HeaderText>
        <Pages />
    </Container>
  )
}

export default LeftContainer