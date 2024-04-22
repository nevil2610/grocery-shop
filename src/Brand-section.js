import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Brand = () => {
    return (
        <>
            <OwlCarousel className='owl-theme' loop margin={10} items={6} autoplay={true} dots={false} nav>
                <div class='item'>
                    <img src="./assets/images/brand-img.jpg" alt="" />
                </div>
                <div class='item'>
                    <img src="./assets/images/brand-img.jpg" alt="" />
                </div>
                <div class='item'>
                    <img src="./assets/images/brand-img.jpg" alt="" />
                </div>
                <div class='item'>
                    <img src="./assets/images/brand-img.jpg" alt="" />
                </div>
                <div class='item'>
                    <img src="./assets/images/brand-img.jpg" alt="" />
                </div>
                <div class='item'>
                    <img src="./assets/images/brand-img.jpg" alt="" />
                </div>
                <div class='item'>
                    <img src="./assets/images/brand-img.jpg" alt="" />
                </div>
                <div class='item'>
                    <img src="./assets/images/brand-img.jpg" alt="" />
                </div>
                <div class='item'>
                    <img src="./assets/images/brand-img.jpg" alt="" />
                </div>
                <div class='item'>
                    <img src="./assets/images/brand-img.jpg" alt="" />
                </div>
                <div class='item'>
                    <img src="./assets/images/brand-img.jpg" alt="" />
                </div>
                <div class='item'>
                    <img src="./assets/images/brand-img.jpg" alt="" />
                </div>
            </OwlCarousel>
        </>
    );
}
export default Brand;