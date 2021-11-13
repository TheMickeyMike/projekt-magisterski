import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
interface BannerProps {
  imageUrl?: string | "https://via.placeholder.com/1000x300.png";
}


const Banner = styled.div<Pick<BannerProps, "imageUrl">>`
  height: 45%;
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.imageUrl});
  box-shadow: inset 250px -60px 150px black;

  h1, h3, h6 {
    text-align: left;
    color: white;
    margin: 0;
  }
`

const BannerText = styled.div`
  align-self: flex-end;
  padding 1vw 0;
`;

const BannerH1 = styled.h1`
  font-size: 3vw; 
`;

const BannerH3 = styled.h3`
  font-size: 2vw;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.4vw;
`;
const BannerH6 = styled.h6`
  font-size: 1vw;
`;

const BannerButtons = styled.div`
  display: flex;
  padding-top: 1vw;
  gap: 2vw;
`;


export default ({ imageUrl }: BannerProps) => (
  <Banner imageUrl={imageUrl}>
    <BannerText>
      <BannerH1>Lorem Ipsum</BannerH1>
      <BannerH3>Duis congue</BannerH3>
      <BannerH6>Integer faucibus ornare leo quis molestie</BannerH6>
      <BannerButtons>
        <Button text="Play" icon={faPlay} />
        <Button
          text="More info"
          icon={faInfoCircle}
          color="white"
          backgroundColor="rgba(109,109,110,0.7)"
          activeColor="rgba(109, 109, 110, 0.4)" />
      </BannerButtons>
    </BannerText>
  </Banner>
);
