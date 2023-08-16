import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import background from "../images/img29.jpg"

function HeroSection() {
  return (
    <div className='hero-container' style={{
        backgroundImage: `url(${background})`
    }}>
        <h1>Jack Wall</h1>
        <p>Software Engineer</p>
        <div>
            <Button className="btn" buttonStyle='btn--outline'
            buttonSize='btn--large'>Blog Posts</Button>
            <Button className="btn" buttonStyle='btn--primary'
            buttonSize='btn--large'>GitHub <i class="fa-solid fa-laptop-code fa-xs"></i></Button>
        </div>
    </div>
  )
}

export default HeroSection