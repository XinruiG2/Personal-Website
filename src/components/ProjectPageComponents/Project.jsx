import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    border-radius: 20px;
    background-color: ${(props) => props.color};
    color: ${(props) => props.textColor};
    padding: 40px 35px 39px 35px;
    box-sizing: border-box;
    width: 50%;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 3px 0px;
`;

const Name = styled.div`
    font-weight: 600;
    font-size: 1.55rem;
    letter-spacing: 0.025rem;
    margin-bottom: 5px;
`;

const SubTopics = styled.div`
    font-weight: 500;
    font-size: 0.95rem;
    letter-spacing: 0.025rem;
    line-height: 1.4;
`;

const ProjectDetails = styled.div`
    font-weight: 500;
    font-size: 0.95rem;
    letter-spacing: 0.025rem;
    margin-top: 50px;
    padding-bottom: 2px;
    position: relative;
    width: fit-content;
    transition: all 0.25s ease-in-out;

    &:hover {
        cursor: pointer;
    }

    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 0.5px;
        background-color: ${(props) => props.color};
        transition: width 0.25s ease-in-out;
    }

    &:hover::before {
        width: 0;
    }
`;

const Project = ({ bgColor, fontColor, name, languages, date, handleClick }) => {

    const projectLanguages = languages.join(", ");

  return (
    <Container color={bgColor} textColor={fontColor}>
        <Name>{name}</Name>
        <SubTopics>Languages: {projectLanguages}</SubTopics>
        <SubTopics>{date}</SubTopics>
        <ProjectDetails color={fontColor} onClick={handleClick}>
            View full details &gt;
        </ProjectDetails>
    </Container>
  )
}

export default Project