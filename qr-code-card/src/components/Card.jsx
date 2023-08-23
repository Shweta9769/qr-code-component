import React from 'react';
import code from '../assets/image-qr-code.png';

const Card = () => {
    return <>
        <div className='card__container'>
            <section>
                <img className='card__image' src={code}/>
            </section>
            <section className='card__heading'>
                <span>Improve your front-end</span>
                <span>skills by building projects</span>
            </section>
            <section className='card__description'>
                <span>Scan the QR code to visit Frontend</span>
                <span>Mentor and take your coding skills to</span>
                <span>the next level</span>
            </section>
        </div>
    </>
}

export default Card;