import React from "react";
import Banner from "./Banner-block";
import Promotion from "./promotion-block";
import FeaturedProduct from "./Featured-product-block";
import Offer from "./Offer-block";
import Testimonial from "./Testimonial-block";
import Brand from "./Brand-section";


const Body = () => {
    return(
        <>
            <Banner/>
            <Promotion/>
            <FeaturedProduct/>
            <Offer/>
            <Testimonial/>
            <Brand/>
        </>
    );
}
export default Body;