import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 17px;
    margin-bottom: 51px;
    padding-bottom: 50px;
    border-bottom: 1.5px solid rgb(135, 135, 135);
`;

const SkillsContainer = styled.div`
    display: flex;
    gap: 6px;
    justify-content: start;
    align-items: center;
`;

const Skill = styled.div`
    padding: 5px 9px;
    background-color: rgb(120, 120, 120, 0.88);
    color: white;
    border-radius: 5px;
    font-size: 0.88rem;
    letter-spacing: 0.025rem;
    font-weight: 500;
`;

const DownloadCV = styled.div`
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.025rem;
    margin-top: 20px;
    padding-bottom: 3px;
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
        background-color: rgb(29, 29, 29);
        transition: width 0.25s ease-in-out;
    }

    &:hover::before {
        width: 0;
    }
`;

const Skills = () => {
  return (
    <Container>
        <SkillsContainer>
            <Skill>HTML</Skill>
            <Skill>CSS</Skill>
            <Skill>JavaScript</Skill>
            <Skill>Java</Skill>
            <Skill>Python</Skill>
        </SkillsContainer>
        <DownloadCV>
            Download my CV &gt;
        </DownloadCV>
    </Container>
  )
}

export default Skills