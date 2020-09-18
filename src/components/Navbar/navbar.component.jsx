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
import {Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';




const Navbar = ({currentUser}) => {
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
                                <NavLinks to='/shop'>
                                    Collection
                                </NavLinks>
                            </NavItem>

                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='/signin'>
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
                            {
                                currentUser ?
                                <div className="option" onClick={() => auth.signOut()}>
                                SIGN OUT
                                </div>
                                :
                                <Link className="option" to="/signin">
                                SIGN IN
                                </Link>
                            }
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
    )
}

export default Navbar;
