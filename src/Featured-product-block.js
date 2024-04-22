import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FeaturedProduct = () => {
    return (
        <>
            {/* <Container> */}
                {/* <div className="featured-product-title">
                    <strong className="featured-text">Featured Products</strong>
                </div>
                    <div className="row">
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src="./assets/images/itemes-1.jpg" />
                                <Card.Body>
                                    <Card.Title><a href="#" className="featured-anchor">Fresh Organic Dragon Fruits</a></Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        $224.25
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src="./assets/images/itemes-6.jpg" />
                                <Card.Body>
                                    <Card.Title><a href="#" className="featured-anchor">Farmer Vegetable Capsicum...</a></Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        $224.25
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src="./assets/images/itemes-7.jpg" />
                                <Card.Body>
                                    <Card.Title><a href="#" className="featured-anchor">Light Loose Green Tea Classic</a></Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        $224.25
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src="./assets/images/itemes-4.jpg" />
                                <Card.Body>
                                    <Card.Title><a href="#" className="featured-anchor">Garden Vegetable Cabbage Seeds</a></Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        $224.25
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src="./assets/images/itemes-5.jpg" />
                                <Card.Body>
                                    <Card.Title><a href="#" className="featured-anchor">Delight Nuts California...</a></Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        $224.25
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src="./assets/images/itemes-2.jpg" />
                                <Card.Body>
                                    <Card.Title><a href="#" className="featured-anchor">Raw Lemon Fruits...</a></Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        $224.25
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src="./assets/images/itemes-3.jpg" />
                                <Card.Body>
                                    <Card.Title><a href="#" className="featured-anchor">Fresh Natural Mango...</a></Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        $224.25
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src="./assets/images/itemes-8.jpg" />
                                <Card.Body>
                                    <Card.Title><a href="#" className="featured-anchor">Fresh Natural Fruits</a></Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        $224.25
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div> */}
                <section>
                    <div className="inner-section">
                        <div className="best-flower-block">
                            <div className="container">
                                <div className="inner-best-flower">
                                    <div className="heading">
                                        <span>Best Flowers</span>
                                    </div>
                                    <div className="best-flower-items">
                                        <div className="best-flower-img">
                                            <a href="#"><img src="./assets/images/itemes-1.jpg" alt="" /></a>
                                            <span className="sub-text">NEW</span>
                                            <span className="sub-text2">ON SALE</span>
                                            <div className="best-description">
                                                <a href="#">Fresh Organic Dragon Fruits</a>
                                                <p className="price">$99.00</p>
                                                <a href="#" className="action-primary">ADD TO CART</a>
                                            </div>
                                        </div>
                                        <div className="best-flower-img">
                                            <a href="#"><img src="./assets/images/itemes-2.jpg" alt="" /></a>
                                            <span className="sub-text">NEW</span>
                                            <div className="best-description">
                                                <a href="#">Raw Lemon Fruits...</a>
                                                <p className="price">$199.00</p>
                                                <a href="#" className="action-primary">ADD TO CART</a>
                                            </div>
                                        </div>
                                        <div className="best-flower-img">
                                            <a href="#"><img src="./assets/images/itemes-3.jpg" alt="" /></a>
                                            <span className="sub-text">NEW</span>
                                            <span className="sub-text2">ON SALE</span>
                                            <div className="best-description">
                                                <a href="#">Fresh Natural Mango...</a>
                                                <p className="price">$249.00</p>
                                                <a href="#" className="action-primary">ADD TO CART</a>
                                            </div>
                                        </div>
                                        <div className="best-flower-img">
                                            <a href="#"><img src="./assets/images/itemes-4.jpg" alt="" /></a>
                                            <span className="sub-text">NEW</span>
                                            <div className="best-description">
                                                <a href="#">Garden Vegetable Cabbage Seeds</a>
                                                <p className="price">$299.00</p>
                                                <a href="#" className="action-primary">ADD TO CART</a>
                                            </div>
                                        </div>
                                        <div className="best-flower-img">
                                            <a href="#"><img src="./assets/images/itemes-5.jpg" alt="" /></a>
                                            <span className="sub-text">NEW</span>
                                            <span className="sub-text2">ON SALE</span>
                                            <div className="best-description">
                                                <a href="#">Delight Nuts California...</a>
                                                <p className="price">$289.00</p>
                                                <a href="#" className="action-primary">ADD TO CART</a>
                                            </div>
                                        </div>
                                        <div className="best-flower-img">
                                            <a href="#"><img src="./assets/images/itemes-6.jpg" alt="" /></a>
                                            <span className="sub-text">NEW</span>
                                            <div className="best-description">
                                                <a href="#">Farmer Vegetable Capsicum...</a>
                                                <p className="price">$279.00</p>
                                                <a href="#" className="action-primary">ADD TO CART</a>
                                            </div>
                                        </div>
                                        <div className="best-flower-img">
                                            <a href="#"><img src="./assets/images/itemes-7.jpg" alt="" /></a>
                                            <span className="sub-text">NEW</span>
                                            <div className="best-description">
                                                <a href="#">Light Loose Green Tea Classic</a>
                                                <p className="price">$349.00</p>
                                                <a href="#" className="action-primary">ADD TO CART</a>
                                            </div>
                                        </div>
                                        <div className="best-flower-img">
                                            <a href="#"><img src="./assets/images/itemes-8.jpg" alt="" /></a>
                                            <span className="sub-text">NEW</span>
                                            <span className="sub-text2">ON SALE</span>
                                            <div className="best-description">
                                                <a href="#">Fresh Natural Fruits</a>
                                                <p className="price">$399.00</p>
                                                <a href="#" className="action-primary">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* </Container> */}
        </>
    );
}
export default FeaturedProduct;