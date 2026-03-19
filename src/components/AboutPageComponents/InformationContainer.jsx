import React from 'react'
import styled from 'styled-components'
import Skills from './Skills';
import Tidbit from './Tidbit';
import Music from './Music';

const Container = styled.div`
    color: rgb(29, 29, 29);
    z-index: 100;
`;

const Background = styled.div`
    font-weight: 500;
    font-size: 0.95rem;
    letter-spacing: 0.015rem;
    line-height: 1.7;
    margin-bottom: 18px;
`;

const SectionHeader = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 45px;
`;

const OutsideOfWork = styled.div`
    font-weight: 500;
    font-size: 0.95rem;
    letter-spacing: 0.015rem;
    line-height: 1.7;
    margin-top: 12px;
`;

const List = styled.ul`
    margin-top: 7px;
`;

const ListItem = styled.li`
    margin-bottom: 7px;
    font-weight: 500;
    font-size: 0.95rem;
    letter-spacing: 0.015rem;
`;

const TidbitContainer = styled.div`
    margin-top: 30px;
`;

const InformationContainer = () => {

  return (
    <Container>
        <Background>
            From a young age, I always found myself pulled in by the world of art.
            I was drawn to the process of creating visual experiences that could captivate, inspire, 
            and connect with people and explored that passion in my moodboard, sketching, and makeup-focused social media accounts.
            Thus, during my time at university, exploring full-stack development became a natural extension of my passion since it allowed me 
            to combine my love for programming from high school with my love for artistic expression. 
        </Background>
        <Background>
            Working in software development allows me to have a real-world impact
            through accessible and usable design, and that is an opportunity I hope to 
            fully take advantage of in all the work I do.
        </Background>
        <SectionHeader>Skills</SectionHeader>
        <Skills></Skills>
        <SectionHeader>After Hours</SectionHeader>
        <OutsideOfWork>
            Outside of work, I enjoy:
        </OutsideOfWork>
        <List>
            <ListItem>Staying active</ListItem>
            <ListItem>Doing makeup</ListItem>
            <ListItem>Casually sketching</ListItem>
            <ListItem>Cooking</ListItem>
            <ListItem>Eating with friends</ListItem>
        </List>
        <TidbitContainer>
            <Music></Music>
            <Tidbit
                bgColor="rgb(196, 205, 225)"
                label="Favorite dish"
                description="Any noodle dish"
                icon="dining"></Tidbit>
            <Tidbit
                bgColor="rgb(233, 226, 216)"
                label="Recent obsession"
                description="Polka dots"
                icon="life"></Tidbit>
        </TidbitContainer>
    </Container>
  )
}

export default InformationContainer