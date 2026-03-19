import React, { useState } from 'react'
import { styled, keyframes} from 'styled-components'
import Background from '../components/Background';
import ProjectCards from '../components/ProjectPageComponents/ProjectCards';
import ProjectHeader from '../components/ProjectPageComponents/ProjectHeader';

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

  return (
    <Container>
        <ProjectHeader name="Projects" setDetails={setShowingDetails}/>
        <ProjectCards 
          setShowingDetails={setShowingDetails} 
          showingDetails={showingDetails}/>
        {!showingDetails && <Background />}
    </Container>
  )
}

export default Projects