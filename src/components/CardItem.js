import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <li className='cards__item'> 
                <a className='cards__item__link' href={props.href}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <div className='cards__item__imgdiv'>
                        <img src={props.src} alt='Image' className='cards__item__img'>
                        </img>
                        </div>
                        <div className='cards__item__info'>
                            <h5 className='cards__item__text'>{props.text}</h5>
                        </div>
                    </figure>
                </a>
            </li>
        </>
    )
}

export default CardItem
