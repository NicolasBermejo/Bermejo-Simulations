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
                        {/* keep text within 30 chars */}
                        <CardItem 
                            src='images/tax-files.jpg'
                            text='La fiscalité de la SASU'
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
                    <ul className='cards__items'>
                        {/* keep text within 30 chars */}
                        <CardItem 
                            src='images/company.jpg'
                            text='SAS ou SASU?'
                            label='Entreprise'
                            href= 'https://www.shine.fr/blog/sas-ou-sasu/'
                        />
                        <CardItem 
                            src='images/pyramid.jpg'
                            text='Se mettre a son compte'
                            label='Entreprise'
                            href='https://www.lecoindesentrepreneurs.fr/se-mettre-a-son-compte/'
                        />
                        <CardItem 
                            src='images/tax-machine.jpg'
                            text='Impôt sur le Revenue ou la Société?'
                            label='Fiscalité'
                            href='https://www.legalplace.fr/guides/sas-ir/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
