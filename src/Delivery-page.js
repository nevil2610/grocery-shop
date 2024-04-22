import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from 'react-bootstrap/Container';


const Delivery = () => {
    return (
        <>
            <Container>
                <Header />
                <div className="delivery-main">
                    <div className="delivery-inner">
                        <div className="delivery-header">
                            <h2>DELIVERY</h2>
                        </div>
                        <div className="delivery-middle">
                            <h3>Shipments and returns</h3>
                        </div>
                        <div className="delivery-lower">
                            <h4>Your pack shipment</h4>
                        </div>
                        <div className="delivery-detail">
                            <p className="delivery-detail-para">Packages are generally dispatched within 2 days after receipt of payment and are shipped via UPS with tracking and drop-off without signature. If you prefer delivery by UPS Extra with required signature, an additional cost will be applied, so please contact us before choosing this method. Whichever shipment choice you make, we will provide you with a link to track your package online.</p>
                            <p className="delivery-detail-para">Shipping fees include handling and packing fees as well as postage costs. Handling fees are fixed, whereas transport fees vary according to total weight of the shipment. We advise you to group your items in one order. We cannot group two distinct orders placed separately, and shipping fees will apply to each of them. Your package will be dispatched at your own risk, but special care is taken to protect fragile objects.</p>
                            <p className="delivery-detail-para">Boxes are amply sized and your items are well-protected.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </Container>
        </>
    );
}
export default Delivery;