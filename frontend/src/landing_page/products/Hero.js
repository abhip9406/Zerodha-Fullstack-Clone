import React from 'react';

function Hero() {
    return (
        <div className='container mb-5 border-bottom'>
            <div className='text-center p-3'>
                <h1 className='fs-3 mt-5'>Zerodha Products</h1>
                <h3 className='text-muted mt-3 fs-5'>
                    Sleek, modern, and intuitive trading platforms
                </h3>
                <p className='mt-4 mb-5'>
                    Check out our{" "}
                    <a href='' style={{ textDecoration: "none" }}>investment offerings {" "}
                        <i className="fa fa-long-arrow-right" arial-hidden="true"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Hero;