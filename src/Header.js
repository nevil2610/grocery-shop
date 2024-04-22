import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container >
                    <Navbar.Brand href="#"><img src="./assets/images/logo-1643947805.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        />

                     <Form className="d-flex me-5">
                            <Form.Control
                                type="search"
                                placeholder="SEARCH OUR CATALOG..."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    <div className="my-cart-logo">
                        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                    </div>

                </Container>
            </Navbar>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="SHOP" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Fashion</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Jewellery
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Furniture</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Autoparts</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="ELECTRONICS" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Mobiles</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Cameras
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="SPORTS & BOOKS" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Books
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">SALE</Nav.Link>
                            <Nav.Link href="#link">CONTACT US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}
export default Header;