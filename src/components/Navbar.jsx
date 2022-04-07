import React from 'react'
import { StyledContainerNavbar} from './../styles/Navbar.styles';
import Logo from '../assets/CatwikiLogo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <StyledContainerNavbar>
            <Link to = '/'>
                <img src={Logo} alt="logo"/>
            </Link>
        </StyledContainerNavbar>
        
        </>
    )
}

export default Navbar