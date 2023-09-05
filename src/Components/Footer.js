import React from 'react'
import '../App.css'
import './Footer.css'
import './HeroSection.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
        {/* <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Contact</h2>
                    <p>LinkedIn: <a href='https://www.linkedin.com/in/jack-wall-2ab4b6158/'>Jack Wall</a></p>
                    <p>Twitter: _____________</p>
                </div>
            </div>
        </div> */}
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className="social-logo">JW <i className="fa-solid fa-layer-group"/></Link>
                </div>
                <div className="social-icons">
                <Link className="social-icon-link Github"
                    to="https://github.com/xJWzZ/react-personal-website-1"
                    target='_blank'
                    area-label='Github'>
                        <i class="fa-brands fa-github"></i>
                    </Link>
                    <Link className="social-icon-link LinkedIn"
                    to="https://www.linkedin.com/in/jack-wall-2ab4b6158/"
                    target='_blank'
                    area-label='LinkedIn'>
                        <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link className="social-icon-link twitter"
                    to="https://twitter.com/JackWSoftware"
                    target='_blank'
                    area-label='twitter'>
                        <i className="fab fa-twitter"></i>
                    </Link>
                    {/* <Link className="social-icon-link facebook"
                    to="https://www.facebook.com/jack.wall.7731/"
                    target='_blank'
                    area-label='Facebook'>
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="social-icon-link instagram"
                    to="https://www.instagram.com/jackwally97/"
                    target='_blank'
                    area-label='Instagram'>
                        <i className="fab fa-instagram"></i>
                    </Link> */}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer