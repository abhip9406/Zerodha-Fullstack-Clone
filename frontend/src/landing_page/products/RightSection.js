import React from 'react';

function RightSection({
    imageURL, 
    productName, 
    productDescription, 
    learnMore
}) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-5 p-5 mt-5'>
                    <h2 style={{marginTop:"25%",fontSize:"1.5rem"}}>{productName}</h2>
                    <p>{productDescription}</p>

                    <div>
                        <a href={learnMore} style={{textDecoration: "none" }}>
                            Learn More {" "}
                            <i className="fa fa-long-arrow-right" arial-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className='col-5'>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;