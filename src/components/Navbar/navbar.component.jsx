import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {CoolButton} from '../../globalStyles';
import {Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './navbar.elements';




const Navbar = () => {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo className="navigation-logo" to='/'>
                            <NavIcon/>
                            X-REBEL
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>{
                            click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services-2'>
                                    Services
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/products'>
                                    Products
                                </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='/sign-up'>
                                        <CoolButton primary>SIGN UP</CoolButton>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to=''>
                                        <CoolButton fontBig primary>
                                            SIGN UP
                                        </CoolButton>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
    )
}

export default Navbar;
