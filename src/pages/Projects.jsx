import React from 'react'
import { styled, keyframes} from 'styled-components'
import Background from '../components/Background';
import Header from '../components/ProjectPageComponents/Header';
import ProjectCards from '../components/ProjectPageComponents/ProjectCards';

const fadeIn = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const FadeInContainer = styled.div`
    opacity: 0;
    animation: fadeIn 1s forwards;
`;

const Container = styled(FadeInContainer)`
    animation: ${fadeIn} 1s forwards;
    width: 100%;
    overflow-y: auto;
    height: 100%;

    &::-webkit-scrollbar {
      width: 0px;
      background-color: transparent;
    }
`;

const Projects = () => {
  return (
    <Container>
        <Header />
        <ProjectCards />
        <Background />
    </Container>
  )
}

export default Projects