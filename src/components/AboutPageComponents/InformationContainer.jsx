import React from 'react'
import styled from 'styled-components'
import Skills from './Skills';
import Tidbit from './Tidbit';
import Music from './Music';

const Container = styled.div`
    color: rgb(29, 29, 29);
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
    margin-top: 28px;
`;

const InformationContainer = () => {

    const visitSong = () => {
        const songUrl = 'https://open.spotify.com/album/34zREEtZQOmQbqFU4cIQuT';
        window.open(songUrl, '_blank');
    }

  return (
    <Container>
        <Background>
            From a young age, I always found myself pulled in by the world of <b><i>art.</i></b>
            &nbsp;I was drawn to the process of creating visual experiences that could captivate, inspire, 
            and connect with people. After I was introduced to the field of software development by 
            people around me, exploring front-end development became a natural extension of my passion
            since it allowed me to utilize technology as a canvas for artistic expression. 
        </Background>
        <Background>
            The more I explore this field, the more reasons I find to appreciate it. 
            Working in front-end devleopment allows me to have a <b><i>real-world impact</i></b>&nbsp;
            through accessible design, user experience, and much more. To have this <b><i>privilege</i></b>
            &nbsp;is a joy, regardless of how small or big my impact is.
        </Background>
        <SectionHeader>Skills</SectionHeader>
        <Skills></Skills>
        <SectionHeader>Outside of Work</SectionHeader>
        <OutsideOfWork>
            Outside of work, I enjoy:
        </OutsideOfWork>
        <List>
            <ListItem>Staying active</ListItem>
            <ListItem>Playing with my cats</ListItem>
            <ListItem>Casually sketching</ListItem>
            <ListItem>Cooking</ListItem>
            <ListItem>Eating with friends</ListItem>
            <ListItem>Listening to music</ListItem>
        </List>
        <TidbitContainer>
            <Music></Music>
            <Tidbit
                bgColor="rgb(212, 218, 200)"
                label="Favorite dish"
                description="Mala xiang guo"
                icon="dining"></Tidbit>
            <Tidbit
                bgColor="rgb(233, 226, 216)"
                label="Recent obsession"
                description="Skull Candy headphones"
                icon="life"></Tidbit>
        </TidbitContainer>
    </Container>
  )
}

export default InformationContainer