import React from 'react'
import styled from 'styled-components'
import { faPlay, faInfoCircle, faPlus} from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface BannerProps {
  imageUrl?: string | "https://via.placeholder.com/1000x300.png";
}


const MobileBanner = styled.div<Pick<BannerProps, "imageUrl">>`
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.imageUrl});
  box-shadow: inset 0px -90px 150px black;

  h1, h6 {
    color: white;
    margin: 0;
  }
`

const BannerText = styled.div`
  margin-top: auto;
  text-align: center;
  padding 1.5vw; 
`;

const BannerH1 = styled.h1`
  font-size: 3vw; 
`;

const BannerH6 = styled.h6`
  font-size: 1vw;
`;

const BannerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20vw;
`;



export default ({ imageUrl }: BannerProps) => (
  <MobileBanner imageUrl={imageUrl}>
    <BannerText>
      <BannerH1>Lorem Ipsum</BannerH1>
      <BannerH6>Integer faucibus ornare leo quis molestie</BannerH6>
    </BannerText>
    <BannerButtons>
      <FontAwesomeIcon icon={faPlus} color="white" />
      <Button text="Play" icon={faPlay} />
      <FontAwesomeIcon icon={faInfoCircle} color="white" />
    </BannerButtons>
  </MobileBanner>
);
