import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import background from "../images/background.JPG"
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='hero-container' style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",  
    }}>
        <h1>Jack Wall</h1>
        <p>Software Engineer</p>
        <div>
            <Button className="btn" buttonStyle='btn--outline'
            buttonSize='btn--large'><Link to='/blog' className='lnk-github'>
                Blog Posts
        </Link></Button>
            <Button className="btn-github" buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                <Link to='/github' className='lnk-github'>
                    GitHub <i class="fa-solid fa-laptop-code fa-xs"></i>
                </Link>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection