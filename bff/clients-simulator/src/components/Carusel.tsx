import React from 'react'
import styled from 'styled-components'


interface CaruselItemProps {
    thumbnail: string
}

export const CaruselItem = styled.div<CaruselItemProps>`
    display: inline-block;
    background: tomato;
    padding: 5px;
    margin-right: 10px;
    width: 13vw;
    height: 7vw;
    color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${props => props.thumbnail});
    border-radius: 4px;
`;

const Carusel = styled.div`
    display: block;
    overflow: auto;
    white-space: nowrap;
`;

export default Carusel;

