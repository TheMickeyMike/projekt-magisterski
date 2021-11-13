import React from 'react';
import styled from 'styled-components'
import ScreenBox from '../../components/ScreenBox'
import Banner from '../../components/Banner'
import Carusel, { CaruselItem } from '../../components/Carusel'
import movies from '../../api/movies'
import {  faSearch,  faVideo, faBell, faUser, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledHeader, Brand, Menu  } from '../../components/Header'
const ScreenBoxWeb = styled(ScreenBox)`
    flex-direction: column;
    max-width: 90%;
    aspect-ratio: 16/9;
    background: black;
    display: flex;
    overflow: auto;
`;


const Row = styled.div`
    h3 {
        font-size: 1.8vw;
        color: rgb(229, 229, 229);
    }
`;

const Content = styled.div`
    overflow: auto;
`;

const NavigationMenu = styled(StyledHeader)`
    // max-width: 100vw;
    margin: auto 1vw;
`;
const MenuLink = styled.li`
    white-space: nowrap;
    margin-left: 2vw;
    text-decoration: none;
    list-style-type: none;
    color: white;
    // font-weight: 700;
 
`;

const MenuLinkActive = styled(MenuLink)`
    font-weight: 700;
`;

const LeftNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // width: auto;
`;

const StyledDropDown = styled(FontAwesomeIcon)`
    margin-left: 0.3vw;
`;

const StyledCounter = styled.span`
        // font-weight: 700;
        font-size: 1.5vw;
`;


export default () => (
    <ScreenBoxWeb>
        <NavigationMenu>
            <LeftNav>
                <Brand>
                    <FontAwesomeIcon icon={faVideo} size="2x" color="white" />
                </Brand>
                <MenuLinkActive>
                    <a>Home page</a>
                </MenuLinkActive>
                <MenuLink>
                    <a>Movies</a>
                </MenuLink>
                <MenuLink>
                    <a>TV shows</a>
                </MenuLink>
                <MenuLink>
                    <a>Trending</a>
                </MenuLink>
                <MenuLink>
                    <a>My list</a>
                </MenuLink>
            </LeftNav>
            <Menu>
                <MenuLink>
                    <FontAwesomeIcon icon={faSearch} />
                </MenuLink>
                <MenuLink>
                    <span className="fa-layers">
                        <FontAwesomeIcon icon={faBell}/>
                        <StyledCounter className="fa-layers-counter">5</StyledCounter>
                    </span>
                </MenuLink>
                <MenuLink>
                    <FontAwesomeIcon icon={faUser}  />
                    <StyledDropDown icon={faCaretDown}  />
                </MenuLink>
            </Menu>
        </NavigationMenu>

        <Content>
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
        </Content>
    </ScreenBoxWeb>
);
