import React from 'react';
import HeroButton from './HeroButton';


function Hero(props) {
    return (
        <div style={{ backgroundColor: '#edf2fb' }} className='py-5'>
            <div className='container px-lg-5'>
                <div className='p-4 p-lg-5 bg-light rounded-3 text-center'>
                    <div className='m-4 m-lg-5'>
                        <h1 className='display-5 fw-bold'>{props.baslik}</h1>
                        <p className='fs-5'>{props.paragraf}</p>
                        <HeroButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
