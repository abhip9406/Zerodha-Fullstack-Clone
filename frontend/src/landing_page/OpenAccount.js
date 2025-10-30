import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 mb-4 fs-4'>
                    Open a Zerodha account
                </h1>
                
                <p className='text-muted'>
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>

                <button className='p-2 btn btn-primary mt-3 fs-5 mb-5' style={{ width: "14%", margin: "0 auto" }}>
                   <Link to="./signup" style={{color:"white", textDecoration:"none"}}>Sign up for free</Link>
                </button>
            </div>
        </div>
    );
}

export default OpenAccount;