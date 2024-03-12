import React from 'react'
import styled from 'styled-components'
import githubIcon from '../../images/github-mark-white.png'
import linkedInIcon from '../../images/linkedIn-icon.png'
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    gap: 14px;
    grid-template-columns: 1fr;
    box-sizing: border-box;
    padding: 1.25rem 0 0.9rem 0;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
    grid-column: span 1;
    max-height: 100%;
    letter-spacing: 0.025rem;
`;

const HalfBubble = styled.div`
    background-color: rgb(176, 185, 205);
    font-size: 1.1rem;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 50px;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: rgb(151, 160, 180);
    }
`;

const Bubble = styled.div`
    background-color: rgb(130, 130, 130);
    color: white;
    font-size: 1.1rem;
    border-radius: 30px;
    box-sizing: border-box;
    padding: ${(props) => props.padding};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: rgb(105, 105, 105);
    }
`;

const IconWrapper = styled.div`
    margin-bottom: 0;
`;

const Icon = styled.img`
    width: 25px;
    height: auto;
`;

const Links = () => {

    function navigateToLinkedIn() {
        const newURL = 'https://www.linkedin.com/in/xinrui-ge-14b563262/';
        window.open(newURL, '_blank');
    }

    function navigateToGithub() {
        const newURL = 'https://github.com/XinruiG2';
        window.open(newURL, '_blank');
    }
      

  return (
    <Container>
        <Row>
            <Bubble padding="50px" onClick={navigateToLinkedIn}>
                <IconWrapper>
                    <Icon 
                        src={linkedInIcon}/>
                </IconWrapper>
            </Bubble>
        </Row>
        <Row>
            <HalfBubble
                onClick={() => {
                    window.location.href = 'mailto:ge.xinr@northeastern.edu';
                }}>
                <Link
                to='#'
                style={{textDecoration: 'none', color: "rgb(29, 29, 29)"}}>
                    ge.xinr@northeastern.edu
                </Link>
            </HalfBubble>
            <HalfBubble>{'('}718{')'} 791-5306</HalfBubble>
        </Row>
        <Row>
            <Bubble padding="52px 50px 48px 50px" onClick={navigateToGithub}>
                <IconWrapper margin="-2px">
                    <Icon 
                        src={githubIcon}/>
                </IconWrapper>
            </Bubble>
        </Row>
    </Container>
  )
}

export default Links