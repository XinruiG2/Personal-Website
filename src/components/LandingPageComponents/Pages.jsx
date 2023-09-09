import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    margin-bottom: 10px;
    z-index: 100;
`;

const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
`;

const ExperienceBubble = styled.div`
    width: 250px;
    height: 150px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 25px 30px;
    color: rgb(241, 241, 241);
    font-weight: 600;
    font-size: 1.5rem;
    transition: all 0.25s ease-in-out;
    background: linear-gradient(to left, rgb(45, 45, 45) 50%, rgb(75, 75, 75) 50%) right;
    background-size: 200% 100%;

    &:hover {
        background-position: left;
        cursor: pointer
    }
`;

const ContactBubble = styled.div`
    background-color: rgb(141, 150, 170);
    width: 506px;
    height: 150px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 25px 30px;
    color: rgb(241, 241, 241);
    font-weight: 600;
    font-size: 1.5rem;
    font-style: italic;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer
    }
`;

const TextContainer = styled.span`
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
`;

const ProjectsBubble = styled.div`
    background-color: rgb(210, 203, 193);
    width: 250px;
    height: 150px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 25px 30px;
    font-weight: 600;
    font-size: 1.5rem;
    font-style: italic;
    transition: all 0.25s ease-in-out;

    &:hover {
        letter-spacing: 0.25rem;
        cursor: pointer;
    }
`;

const Pages = () => {

    const[contactText, setContactText] = useState('Contact');
    const [textVisible, setTextVisible] = useState(true);
    const navigate = useNavigate();

    const navigateToProjects = () => {
    navigate("/projects");
    }

    const navigateToExperience = () => {
    navigate("/about-me");
    }

    const navigateToContact = () => {
    navigate("/contact");
    }

    const handleContactHover = () => {
        setTextVisible(false);
        setTimeout(() => {
            setContactText("LinkedIn & E-mail");
            setTextVisible(true);
        }, 175);
    }

    const handleContactLeave = () => {
        setTextVisible(false);
        setTimeout(() => {
            setContactText("Contact");
            setTextVisible(true);
        }, 175);
    }

  return (
    <Container>
        <TopRow>
            <ProjectsBubble onClick={navigateToProjects}>Projects</ProjectsBubble>
            <ExperienceBubble onClick={navigateToExperience}>About Me</ExperienceBubble>
        </TopRow>
        <ContactBubble
            onMouseEnter={handleContactHover}
            onMouseLeave={handleContactLeave}
            onClick={navigateToContact}>
            <TextContainer visible={textVisible}>{contactText}</TextContainer>
        </ContactBubble>
    </Container>
  )
}

export default Pages