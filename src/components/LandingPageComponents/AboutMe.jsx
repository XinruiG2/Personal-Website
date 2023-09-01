import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    z-index: 100;
    color: rgb(241, 241, 241);
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: end;
    max-width: 180px;
`;

const Text = styled.div`
    margin-bottom: 10px;
    font-size: 0.9rem;
    text-align: right;
    line-height: 1.85;
    font-weight: 500;
`;

const Attribution = styled.div`
    color: rgb(169, 169, 169);
    font-size: 0.72rem;
    transition: all 0.2s ease-in-out;
    margin-bottom: 25px;

    &:hover {
        cursor: pointer;
        color: rgb(200, 200, 200);
    }
`;

const AboutMe = () => {

    const imageUrl = "https://www.freepik.com/free-vector/realistic-grainy-texture_21846595.htm#page=2&query=grainy%20texture&position=0&from_view=keyword&track=ais";

    const handleAttributionClick = () => {
        window.open(imageUrl, '_blank');
    }

  return (
    <Container>
        <Text>
            <b><i>Hello!</i></b> I am a second-year Computer Science student
            at Northeastern who is passionate about web design.
            I seek to create great user experiences through clean and 
            straightforward, but also unique designs.
        </Text>
        <Attribution onClick={handleAttributionClick}>
            Overlay image by Freepik
        </Attribution>
    </Container>
  )
}

export default AboutMe