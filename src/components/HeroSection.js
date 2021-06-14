import { Button } from './Button.js'
import React from 'react'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>YOUR KEY TO A BETTER RETURN</h1>
            <p>Done fast. Done right</p>
            <div className="hero-btn">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
