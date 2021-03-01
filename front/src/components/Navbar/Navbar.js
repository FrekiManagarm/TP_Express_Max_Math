import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Links, ListWrapper, LogoLink, NavWrapper } from './Navbar.style'

const Navbar = () => {
    return (
        <NavWrapper>
                <span>
                    <FontAwesomeIcon icon={faBars} />
                </span>
                <LogoLink href="#">TP Express</LogoLink>
                <ListWrapper>
                    <li>
                        <Links href="">Tour du monde</Links>
                    </li>
                    <li>
                        <Links href="">301</Links>
                    </li>
                    <li>
                        <Links href="">Cricket</Links>
                    </li>
                </ListWrapper>
        </NavWrapper>
    )
}

export default Navbar
