import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Sample Text</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Take a Survey"
                        label='Click Me'
                        path='/survey'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
