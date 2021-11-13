import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'


interface ButtonProps {
  text: string,
  icon?: IconProp,
  color?: string,
  backgroundColor?: string,
  activeColor?: string
}

const StyledButton = styled.button<Pick<ButtonProps, "color" | "backgroundColor" | "activeColor">>`
  cursor: pointer;
  color: ${props => props.color || "black"};
  border: none;
  padding: 0.5vw 2vw;
  text-decoration: none;
  border-radius: 3px;
  align-items: center;
  font-size: 1vw;
  background-color: ${props => props.backgroundColor || "rgb(255, 255, 255)"};
  :hover {
    background-color: ${props => props.activeColor || "rgba(255, 255, 255, 0.75)"};
  }
`;


const ButtonText = styled.span`
  margin-left: 1vw;
  font-weight: bold;
`;


export default ({ icon, text, color, backgroundColor, activeColor }: ButtonProps) => (
  <StyledButton color={color} backgroundColor={backgroundColor} activeColor={activeColor}>
    {icon && <FontAwesomeIcon icon={icon} color={color} />}
    <ButtonText>{text}</ButtonText>
  </StyledButton>
);