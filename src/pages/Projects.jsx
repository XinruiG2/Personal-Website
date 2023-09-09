import React, { useState, useEffect } from 'react'
import { styled, keyframes} from 'styled-components'
import Background from '../components/Background';
import Header from '../components/Header';
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
    animation: fadeIn 0.85s forwards;
`;

const Container = styled(FadeInContainer)`
    animation: ${fadeIn} 0.85s forwards;
    width: 100%;
    overflow-y: auto;
    height: 100%;

    &::-webkit-scrollbar {
      width: 0px;
      background-color: transparent;
    }
`;

const Projects = () => {

  const [showingDetails, setShowingDetails] = useState(false);

  useEffect(() => {
    const handlePopstate = () => {
      if (showingDetails) {
        setShowingDetails(false);
      }
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [showingDetails]); 

  return (
    <Container>
        <Header name="Projects"/>
        <ProjectCards 
          setShowingDetails={setShowingDetails} 
          showingDetails={showingDetails}/>
        {!showingDetails && <Background />}
    </Container>
  )
}

export default Projects