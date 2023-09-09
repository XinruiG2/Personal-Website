import React from 'react'
import styled from 'styled-components'
import cooking from '../../images/cooking.jpeg'
import dinner from '../../images/dinner.jpeg'
import lunch from '../../images/lunch.jpeg'
import pfp from '../../images/pfp.jpeg'
import smiski from '../../images/smiski.jpeg'
import wolfie from '../../images/wolfie.jpeg'

const Container = styled.div`
    width: 100%;
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    margin-bottom: 12px;
`;

const ImageContainer = styled.div`
    width: 100%;
    border-radius: 21.5px 21px 0 0;
    border: 1.5px solid gray;
    background-color: rgb(220, 220, 220);
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 20px 20px 0 0;
    border-bottom: 1.5px solid gray;
`;

const ImageDescription = styled.div`
    font-size: 0.88rem;
    letter-spacing: 0.025rem;
    padding: 8.5px 0 16px 0;
    text-align: center;
`;

const Images = () => {
  return (
    <Container>
        <Row>
            <ImageContainer>
                <Image src={pfp} />
                <ImageDescription>A picture of me :{')'}</ImageDescription>
            </ImageContainer>
            <ImageContainer>
                <Image src={smiski} />
                <ImageDescription>My exercise smiski {'('}ง •̀_•́{')'}ง</ImageDescription>
            </ImageContainer>
        </Row>
        <Row>
            <ImageContainer>
                <Image src={cooking} />
                <ImageDescription>College meals ✩‧₊˚</ImageDescription>
            </ImageContainer>
            <ImageContainer>
                <Image src={wolfie} />
                <ImageDescription>My cat, wolfie ᨐฅ</ImageDescription>
            </ImageContainer>
        </Row>
        <Row>
            <ImageContainer>
                <Image src={lunch} />
                <ImageDescription>Lunch with friends ♡</ImageDescription>
            </ImageContainer>
            <ImageContainer>
                <Image src={dinner} />
                <ImageDescription>Family dinner nights!</ImageDescription>
            </ImageContainer>
        </Row>
    </Container>
  )
}

export default Images