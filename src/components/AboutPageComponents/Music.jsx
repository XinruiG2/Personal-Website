import React from 'react'
import styled from 'styled-components'
import { Headphones } from '@mui/icons-material';

const Container = styled.div`
    background-color: rgb(233, 226, 216);
    border-radius: 45px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 20px 20px 22px 22px;
    margin-top: 18px;
    gap: 5px;

    &:hover {
        cursor: pointer;
    }
`;

const Headset = styled(Headphones)`
    fill: rgb(235, 228, 218) !important;
    background-color: rgb(85, 85, 85);
    border-radius: 50%;
    padding: 6px;
    font-size: 1.5rem !important;
    margin-bottom: -2.5px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 8px;
    gap: 3.5px;
    letter-spacing: 0.02rem;
    font-size: 0.88rem; 
`;

const OnRepeat = styled.div`
    color: rgb(85, 85, 85);
    font-weight: 500; 
`;

const Song = styled.div`
    color: rgb(85, 85, 85);
    font-weight: 700;
`;

const Music = () => {

    const visitSong = () => {
        const songUrl = 'https://open.spotify.com/album/34zREEtZQOmQbqFU4cIQuT';
        window.open(songUrl, '_blank');
    }

  return (
    <Container onClick={visitSong}>
        <Headset/>
        <TextContainer>
            <OnRepeat>On repeat</OnRepeat>
            <Song>Niki - High School in Jakarta</Song>
        </TextContainer>
    </Container>
  )
}

export default Music