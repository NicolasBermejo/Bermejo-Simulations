import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check these out for more info!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='./img/tax-heaven.jpg'
                            text='La fiscalité de la SASU : bénéfices, TVA, autres impôts et taxes'
                            label='SASU'
                            href= 'https://www.lecoindesentrepreneurs.fr/fiscalite-de-la-sasu/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
