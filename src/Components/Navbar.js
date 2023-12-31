import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { Button } from "./Button";
import '../Styles/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    const emailAddress = "jack.wall.business@gmail.com"
    const subject = "Inquiry"

    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        JW <i className="fa-solid fa-layer-group"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/workexperience" className='nav-links' onClick={closeMobileMenu}>
                                Work Experience
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/hobbies" className='nav-links' onClick={closeMobileMenu}>
                                Hobbies
                            </Link>
                        </li>
                    </ul>
                        {button && <Button buttonStyle='btn--outline' >
                            <Link to="/email" className="removeLink">
                                Contact
                            </Link>
                        </Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar