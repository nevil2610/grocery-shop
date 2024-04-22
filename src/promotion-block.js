import React from "react";
import Card from 'react-bootstrap/Card';


const Promotion = () => {
    return (
        <>
            <div className="promotion-block">
                <Card style={{ width: '33.33%' }} className="me-3">
                    <Card.Img variant="top" src="./assets/images/adv1.jpg" />
                    <Card.Body>
                        <Card.Title>Fresh Fruits</Card.Title>
                        <Card.Text>
                            There are many fruits.And Up to 30% Discount.(ex. Mangoes, Grapes, Apples, Apricots, Oranges.)
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '33.33%' }} className="me-3">
                    <Card.Img variant="top" src="./assets/images/adv2.jpg" />
                    <Card.Body>
                        <Card.Title>Pure Honey</Card.Title>
                        <Card.Text>
                            This is a Pure honey.And Up to 20% Discount.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '33.33%' }} >
                    <Card.Img variant="top" src="./assets/images/adv3.jpg" />
                    <Card.Body>
                        <Card.Title>Dry Fruits</Card.Title>
                        <Card.Text>
                            This is a Dry fruits.And Up to 25% Discount.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
export default Promotion;