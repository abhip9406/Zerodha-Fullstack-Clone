import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductsPage() {
    return (
        <>
            <Hero />
            <LeftSection
                imageURL="media/images/kite.png"
                productName="Kite"
                productDescription={
                    <>
                        Our ultra-fast flagship trading platform with <br />
                        streaming market data, advanced charts, an <br />
                        elegant UI, and more. Enjoy the Kite <br />
                        experience seamlessly on your Android and <br />
                        iOS devices.
                    </>
                }
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <RightSection
                imageURL="media/images/console.png"
                productName="Console"
                productDescription={
                    <>
                    The central dashboard for your Zerodha <br />
                    account. Gain insights into your trades and <br />
                    investments with in-depth reports and <br />
                    visualisations.
                    </>
                }
                learnMore=""
            />

            <LeftSection
                imageURL="media/images/coin.png"
                productName="Coin"
                productDescription={
                    <>
                    Buy direct mutual funds online, commission- <br />
                    free, delivered directly to your Demat <br />
                    account. Enjoy the investment experience <br />
                    on your Android and iOS devices.
                    </>
                }
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <RightSection
                imageURL="media/images/kiteconnect.png"
                productName="Kite Connect API"
                productDescription={
                    <>
                    Build powerful trading platforms and <br />
                    experiences with our super simple <br />
                    HTTP/JSON APIs. If you are a startup, build <br />
                    your investment app and showcase it to our <br />
                    clientbase.
                    </>
                }
                learnMore=""
            />

            <LeftSection
                imageURL="media/images/varsity.png"
                productName="Varsity mobile"
                productDescription={
                    <>
                    An easy to grasp, collection of stock market <br />
                    lessons with in-depth coverage and <br />
                    illustrations. Content is broken down into <br />
                    bite-size cards to help you learn on the go.
                    </>
                }
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <p className='text-center' style={{ fontSize: "1.25rem", fontWeight: "400", marginTop: "10" }}>
                Want to know more about our technology stack? Check out the <a href='' style={{ textDecoration: "none" }}>Zerodha.tech</a> blog.
            </p>
            <Universe />
        </>
    );
}

export default ProductsPage;