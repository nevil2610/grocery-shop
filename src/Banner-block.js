import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Banner = () => {
    return (
        <>
            <OwlCarousel className='owl-theme' loop margin={10} items={1} autoplay={true} dots={false} nav>
                <div class='item'>
                    <img src="./assets/images/sample-1.jpg" alt="" />
                    <strong className="banner-1-text">Delicious Juice</strong>
                    <p className="discount-text">Get Upto 20% OFF</p>
                    <a href="#" className="shop-button">SHOP NOW</a>
                </div>

                <div class='item'>
                    <img src="./assets/images/sample-2.jpg" alt="" />
                    <strong className="banner-1-text">Seasonal Vegetables</strong>
                    <p className="discount-text">Get Upto 20% OFF</p>
                    <a href="#" className="shop-button">SHOP NOW</a>
                </div>


            </OwlCarousel>
        </>
    );
}
export default Banner;