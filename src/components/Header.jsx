import React from 'react'
import { styled } from 'styled-components'
import Menu from './Menu';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const PageHeader = styled.div`
    color: rgb(29, 29, 29);
    font-weight: 400;
    font-size: 3.75rem;
    margin: 0 0 -6px 0
`;

const Header = ({ name }) => {
  return (
    <Container>
        <PageHeader>{name}</PageHeader>
        <Menu />
    </Container>
  )
}

export default Header