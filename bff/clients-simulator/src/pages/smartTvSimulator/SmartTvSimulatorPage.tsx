import React from 'react';
import styled from 'styled-components'
import ScreenBox from '../../components/ScreenBox'
import Banner from '../../components/Banner'
import Carusel, { CaruselItem } from '../../components/Carusel'
import movies from '../../api/movies'
import { faHome, faSearch, faFilm, faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ScreenBoxWeb = styled(ScreenBox)`
    max-width: 90%;
    aspect-ratio: 16/9;
    // background: rgb(20, 20, 20);
    background: black;
`;


const Row = styled.div`
    h3 {
        font-size: 1.8vw;
        color: rgb(229, 229, 229);
    }
`;

const Column = styled.div`
    height: 100%;
    overflow: auto;
`;

const NavigationMenu = styled(Column)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 7vw;
`;

const NavItem = styled.div`
    margin: 2vw auto;
    color: rgba(255,255,255,0.55);
    font-size: 1.5vw;
`;


export default () => (
    <ScreenBoxWeb>
        <NavigationMenu>
            <NavItem>
                <FontAwesomeIcon icon={faSearch} />
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faHome} />
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faTv} />
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faFilm} />
            </NavItem>
        </NavigationMenu>
        <Column>
            <Banner imageUrl="https://deadline.com/wp-content/uploads/2021/10/squid-game-netflix-.jpeg" />
            <Row>
                <h3>My watchlist</h3>
                <Carusel>
                    {movies.map(movie => <CaruselItem key={movie.id} thumbnail={movie.thumbnail} />)}
                </Carusel>
            </Row>
            <Row>
                <h3>Recommended</h3>
                <Carusel>
                    {movies.map(movie => <CaruselItem key={movie.id} thumbnail={movie.thumbnail} />)}
                </Carusel>
            </Row>
            <Row>
                <h3>Popular</h3>
                <Carusel>
                    {movies.map(movie => <CaruselItem key={movie.id} thumbnail={movie.thumbnail} />)}
                </Carusel>
            </Row>
        </Column>
    </ScreenBoxWeb>
);
