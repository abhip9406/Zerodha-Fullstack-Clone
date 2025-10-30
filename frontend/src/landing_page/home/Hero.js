import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' />
                <h1 className='mt-5'>
                    Invest in everything
                </h1>
                <p>
                    Online platform to invest in stocks, derivatives, mutual funds, and more
                </p>
                <button className='p-2 btn btn-primary mt-3 fs-5 mb-5' style={{width:"14%", margin:"0 auto"}}>
                    <Link to="./signup" style={{color:"white", textDecoration:"none"}}>Signup Now</Link>
                </button>
            </div>
        </div>
    );
}

export default Hero;