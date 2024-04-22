import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Testimonial = () => {
    return (
        <>
            <div className="teastimonial-title">
                <strong>Testimonials</strong>
            </div>
            <OwlCarousel className='owl-theme' loop margin={10} items={1} autoplay={true} dots={false} nav>
                <div class='item'>
                    <img src="./assets/images/testimonial-img1.png" style={{ width: "100px", height: "100px" }} alt="" className="testimonial-img" /> <br />
                    <div className="testimonial-content">
                        <strong className="employee-name">Ray Sin</strong><strong className="field-name">Project Manager</strong>
                        <p className="employee-content">
                            Donec ultrices eros erat, non mattis risus vestibulum vel. Donec mauris sem, rutrum consequat rutum vel, consequat bibendum ex At vero accusamus et iusto odio dignissimos ducimus Sed perspiciatis unde omnis adipisicing natus error eiusmod voluptatem
                        </p>
                    </div>
                </div>
                <div class='item'>
                    <img src="./assets/images/testimonial-img2.png" style={{ width: "100px", height: "100px" }} alt="" className="testimonial-img" />
                    <div className="testimonial-content">
                        <strong className="employee-name">David Saba</strong><strong className="field-name">Team Lead</strong>
                        <p className="employee-content">
                            Donec ultrices eros erat, non mattis risus vestibulum vel. Donec mauris sem, rutrum consequat rutum vel, consequat bibendum ex At vero accusamus et iusto odio dignissimos ducimus Sed perspiciatis unde omnis adipisicing natus error eiusmod voluptatem
                        </p>
                    </div>
                </div>
            </OwlCarousel>
        </>
    );
}
export default Testimonial;