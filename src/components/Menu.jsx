import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    width: 27%;
    justify-content: space-between;
    margin-right: 0.32rem;
    gap: 8px;
`;

const MenuOption = styled.div`
    color: rgb(29, 29, 29);
    font-size: 0.9rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      color: rgb(141, 150, 170);
    }
`;

const Menu = () => {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  }

  const navigateToProjects = () => {
    navigate("/projects");
  }

  const navigateToExperience = () => {
    navigate("/experience");
  }

  const navigateToContact = () => {
    navigate("/contact-me");
  }

  return (
    <Container>
        <MenuOption onClick={navigateToHome}>Home</MenuOption>
        <MenuOption onClick={navigateToProjects}>Projects</MenuOption>
        <MenuOption onClick={navigateToExperience}>Experience</MenuOption>
        <MenuOption onClick={navigateToContact}>Contact</MenuOption>
    </Container>
  )
}

export default Menu