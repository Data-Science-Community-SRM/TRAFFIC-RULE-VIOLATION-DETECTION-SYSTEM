import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';


const ToggleContainer = styled.button`

position: fixed;
display:block;
right: 10px;
justify-content: space-between;
background: ${({ theme }) => theme.gradient};
width: 3.2rem;
height: 3.2rem;
margin: 0;
margin-top:-10px;
font-size: 0.5rem;
padding: 0.5rem;
overflow: hidden;
cursor: pointer;
outline: none;
border-radius:30px;
border: 2px solid ${({ theme }) => theme.toggleBorder};
z-index:2!important;
@media(max-width: 768px){
  width: 3rem;
  height: 3rem;
  margin-top:2px;
  margin-right:10px;
  }
  img {
    max-width: 2.5rem;
    height: auto;
    width:36px;
    height:36px;
    transition: all 0.3s linear;
    outline: none;
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-130px)' : 'translateY(-4px)'};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-50px)' : 'translateY(0px)'};
    }
    @media(max-width: 768px){
      width: 35px;
      height: 35px;
      transition: all 0.3s linear;
    outline: none;
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-130px)' : 'translateY(-5px)'};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-50px)' : 'translateY(0px)'};
      
  }
 
    }
`;


const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
  
    return (
      <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
        <img src="./images/moon.png"alt="moon"/>
        <img src="./images/sun.png" alt="sun"/>
      </ToggleContainer>
    );
  };

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;