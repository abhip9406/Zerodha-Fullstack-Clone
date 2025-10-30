import React from 'react';

function LeftSection({
    imageURL, 
    productName, 
    productDescription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore
}) {
    return (
        <div className='container mt-3'>
            <div className='row p-5'>
                <div className='col-5 p-5'>
                    <img src={imageURL} />
                </div>
                <div className='col'></div>

                <div className='col-5 p-5 mt-5'>
                    <h2 style={{fontSize:"1.5rem"}}>{productName}</h2>
                    <p>{productDescription}</p>

                    <div>
                        <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo {" "}
                            <i className="fa fa-long-arrow-right" arial-hidden="true"></i>
                        </a>
                        <a href={learnMore} style={{ marginLeft: "50px", textDecoration: "none" }}>Learn More {" "}
                            <i className="fa fa-long-arrow-right" arial-hidden="true"></i>
                        </a>
                    </div>

                    <div className='mt-4'>
                        <a href={googlePlay}>
                            <img src='media/images/googlePlayBadge.svg' />
                        </a>
                        <a href={appStore} style={{marginLeft:"20px"}}>
                            <img src='media/images/appstoreBadge.svg' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;