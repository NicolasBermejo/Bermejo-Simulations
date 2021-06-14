import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>What you need to know</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/tax-heaven.jpg'
                            text='La fiscalité de la SASU : bénéfices, TVA, autres impôts et taxes'
                            label='Fiscalité'
                            href= 'https://www.lecoindesentrepreneurs.fr/fiscalite-de-la-sasu/'
                        />
                        <CardItem 
                            src='images/yellow-coins.jpg'
                            text='Distribution de dividendes en SASU'
                            label='Dividendes'
                            href='https://agence-juridique.com/articles/comment-fonctionne-la-distribution-de-dividendes-en-sas'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
