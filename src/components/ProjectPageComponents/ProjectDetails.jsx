import React from 'react'
import { styled, keyframes } from 'styled-components'

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

const BackButton = styled.div`
    font-weight: 500;
    font-size: 0.87rem;
    color: rgb(29, 29, 29);
    margin-top: 29px;
    letter-spacing: 0.025rem;
    width: fit-content;
    transition: all 0.25s ease-in-out;
    padding-bottom: 1px;

    &:hover {
        cursor: pointer;
    }
`;

const Container = styled(FadeInContainer)`
    animation: ${fadeIn} 0.85s forwards;
    margin-top: 10.5px;
    border-top: 1.5px solid rgb(29, 29, 29);
    border-bottom: 1.5px solid rgb(29, 29, 29);
    padding: 25px 0 23px 0;
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
    z-index: 100;
`;

const InformationContainer = styled.div`
    border-right: 1.5px solid rgb(29, 29, 29);
    padding-right: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;

const ImageContainer = styled.div`
    padding-left: 19px;
`;

const Image = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 11px;
`;

const Name = styled.div`
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 0.025rem;
    margin-bottom: 0px;
    color: rgb(29, 29, 29);
    margin-top: -0.5rem;
`;

const Languages = styled.div`
    font-weight: 500;
    font-size: 0.95rem;
    letter-spacing: 0.025rem;
    line-height: 1.4;
    color: rgb(55, 55, 55);
`;

const SubText = styled.div`
    font-weight: 400;
    font-size: 0.87rem;
    line-height: 1.4;
    letter-spacing: 0.025rem;
    color: rgb(29, 29, 29);
    margin-top: 27px;
    padding-right: 10px;
`;

const CodeRedirect = styled.div`
    font-weight: 500;
    font-size: 0.92rem;
    letter-spacing: 0.025rem;
    margin-top: 47px;
    margin-bottom: 5px;
    padding-bottom: 2.5px;
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

const ProjectDetails = ({ name, languages, projectImage, redirectLink, 
                            setDetails, description, meaning }) => {

    const redirectToCode = () => {
        window.open(redirectLink, '_blank');
    }

    const handleBackClick = () => {
        setDetails(false);
    }

  return (
    <div>
        <BackButton onClick={handleBackClick}>
            &lt; Back to projects
        </BackButton>
        <Container>
            <InformationContainer>
                <div>
                    <Name>{name}</Name>
                    <Languages>{languages}</Languages>
                    <SubText>
                        {description}
                    </SubText>
                    <SubText>
                        {meaning}
                    </SubText>
                </div>
                <CodeRedirect onClick={redirectToCode}>
                    View full code &gt;
                </CodeRedirect>
            </InformationContainer>
            <ImageContainer>
                <Image src={projectImage}/>
            </ImageContainer>
        </Container>
    </div>
  )
}

export default ProjectDetails