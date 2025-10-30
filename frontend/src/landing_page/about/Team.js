import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row p-3 mt-5'>
                <h2 className='text-center'>People</h2>
            </div>

            <div 
               className='row p-3 text-muted' 
               style={{fontSize:"1rem", lineHight:"1.8"}}
            >
                <div className='col-6 p-3 text-center'>
                    <img src='media/images/nithinkamath.jpg' 
                        style={{borderRadius:"100%", width:"50%"}} 
                    />

                    <h5 className='mt-3' style={{fontSize:"1rem", fontWeight:"400px"}}>Nithin Kamath</h5>
                    <p className='text-gray'>Founder, CEO</p>
                </div>

                <div className='col-6 p-3'>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br />
                        hurdles he faced during his decade long stint as a trader. Today, <br />
                        Zerodha has changed the landscape of the Indian broking industry. <br />
                    </p>

                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee <br />
                        (SMAC) and the Market Data Advisory Committee (MDAC). <br />
                    </p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a href='' style={{textDecoration:"none"}}>Homepage</a> 
                        / <a href='' style={{textDecoration:"none"}}>TradingQnA</a>
                        / <a href='' style={{textDecoration:"none"}}>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;