import React from 'react';
import styled from 'styled-components'
import ScreenBox from '../../components/ScreenBox'
import MobileBanner from '../../components/MobileBanner'
import Carusel, { CaruselItem } from '../../components/Carusel'
import { MoviesMobile as movies } from '../../api/movies'
import games from '../../api/games'
import { faHome, faSearch, faGamepad, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ScreenBoxMobile = styled(ScreenBox)`
  display: flex;
  max-width: 30%;
  flex-direction: column;
  aspect-ratio: 9/16;
  overflow: auto;
  background: black;
`;

const Row = styled.div`
    margin-left: 1.5vw;
    h3 {
        font-size: 1.6vw;
        color: rgb(229, 229, 229);
    }
`;

const CaruselItemPosters = styled(CaruselItem)`
  width: 6.5vw;
  height: 10vw;
`;


const CaruselItemInteractive = styled(CaruselItem)`
  width: 5vw;
  height: 5vw;
  span {
    font-size: 0.8vw;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const Column = styled.div`
    height: 100%;
    overflow: auto;
`;

const NavigationMenu = styled(Column)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 3.5vw;
`;

const NavItem = styled.div`
    color: rgba(255,255,255,0.55);
    font-size: 1.5vw;
`;

export default () => (
  <ScreenBoxMobile>
    <Column>
      <MobileBanner imageUrl="https://deadline.com/wp-content/uploads/2021/10/squid-game-netflix-.jpeg" />
      <Row>
        <h3>My watchlist</h3>
        <Carusel>
          {movies.map(movie => <CaruselItemPosters key={movie.id} thumbnail={movie.thumbnail} />)}
        </Carusel>
      </Row>
      <Row>
        <h3>Interactive show</h3>
        <Carusel>
          {games.map(game => <CaruselItemInteractive key={game.id} thumbnail={game.thumbnail} />)}
        </Carusel>
      </Row>
      <Row>
        <h3>Trending</h3>
        <Carusel>
          {movies.map(movie => <CaruselItemPosters key={movie.id} thumbnail={movie.thumbnail} />)}
        </Carusel>
      </Row>
    </Column>
    <NavigationMenu >
      <NavItem>
        <FontAwesomeIcon icon={faHome} />
      </NavItem>
      <NavItem>
        <FontAwesomeIcon icon={faSearch} />
      </NavItem>
      <NavItem>
        <FontAwesomeIcon icon={faGamepad} />
      </NavItem>
      <NavItem>
        <span className="fa-layers">
          <FontAwesomeIcon icon={faBell} />
          <span className="fa-layers-counter">5</span>
        </span>
      </NavItem>
    </NavigationMenu>
  </ScreenBoxMobile>
);
