import React from 'react'
import { StyledBlackContainerFooter, StyledContainerFooter } from '../styles/Footer.styles';
import { Styledp } from './../globalStyles';
import WhiteLogo from '../assets/WhiteLogo.svg'

const Footer = () => {
  return (

    <StyledContainerFooter>
      <StyledBlackContainerFooter>
        <img src={WhiteLogo} alt="Logo" />
        <Styledp wht>&copy; created by Gabriel1085 - devChallenge.io 2021</Styledp>
      </StyledBlackContainerFooter>

    </StyledContainerFooter>
  )
}

export default Footer