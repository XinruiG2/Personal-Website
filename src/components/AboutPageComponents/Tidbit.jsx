import React from 'react'
import styled from 'styled-components'
import { Headphones, LocalDining, AutoAwesome } from '@mui/icons-material';

const Container = styled.div`
    background-color: ${(props) => props.color};
    border-radius: 45px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 20px 20px 22px 22px;
    margin-top: 18px;
    gap: 5px;
`;

const Headset = styled(Headphones)`
    fill: rgb(235, 228, 218) !important;
    background-color: rgb(85, 85, 85);
    border-radius: 50%;
    padding: 6px;
    font-size: 1.5rem !important;
    margin-bottom: -2.5px;
`;

const Food = styled(LocalDining)`
    fill: rgb(235, 228, 218) !important;
    background-color: rgb(85, 85, 85);
    border-radius: 50%;
    padding: 6px;
    font-size: 1.5rem !important;
    margin-bottom: -3px;
`;

const Stars = styled(AutoAwesome)`
    fill: rgb(235, 228, 218) !important;
    background-color: rgb(85, 85, 85);
    border-radius: 50%;
    padding: 6px 7px 6px 5px;
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

const Label = styled.div`
    color: rgb(85, 85, 85);
    font-weight: 500; 
`;

const Description = styled.div`
    color: rgb(85, 85, 85);
    font-weight: 700;
`;

const Music = ({bgColor, label, description, icon}) => {

    const visitSong = () => {
        const songUrl = 'https://open.spotify.com/album/34zREEtZQOmQbqFU4cIQuT';
        window.open(songUrl, '_blank');
    }

  return (
    <Container color={bgColor} onClick={visitSong}>
        {(icon === "dining") && <Food />}
        {(icon === "life") && <Stars />}
        <TextContainer>
            <Label>{label}</Label>
            <Description>{description}</Description>
        </TextContainer>
    </Container>
  )
}

export default Music