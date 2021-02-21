import React from 'react'
import '../App.css';
import { Button } from './Button'
import './VaccineSection.css';

function VaccineSection() {
    return (
        <div className='vaccine-container'>
            <h1>WANT TO GET YOUR VACCINE?</h1>
            <p>You're in the right place.</p>
            <div className="vaccine-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    NOT SURE IF NEEDED
                </Button>
            </div>
        </div>
    )
}

export default VaccineSection
