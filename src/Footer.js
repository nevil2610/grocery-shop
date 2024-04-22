import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn,
    MDBInput
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <MDBFooter bgColor='light' className='text-center text-lg-left'>
                <MDBContainer className='p-4 pb-0'>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size='auto' className='mb-4 mb-md-0'>
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </MDBCol>

                            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                                <MDBInput type='text' id='form5Example2' />
                            </MDBCol>

                            <MDBCol size='auto' className='mb-4 mb-md-0'>
                                <MDBBtn>Subscribe</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </MDBContainer>

                <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                        <div className='me-5 d-none d-lg-block'>
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon color='secondary' fab icon='facebook-f' />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon color='secondary' fab icon='twitter' />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon color='secondary' fab icon='google' />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon color='secondary' fab icon='instagram' />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon color='secondary' fab icon='linkedin' />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon color='secondary' fab icon='github' />
                            </a>
                        </div>
                    </section>

                    <section className=''>
                        <MDBContainer className='text-center text-md-start mt-5'>
                            <MDBRow className='mt-3'>
                                <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>
                                        <MDBIcon color='secondary' icon='gem' className='me-3' />
                                        Grocery
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit.
                                    </p>
                                </MDBCol>

                                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                    <p>
                                        <a href='#!' className='text-reset list-a'>
                                            Prices Drop
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset list-a'>
                                            New Products
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset list-a'>
                                            Best Sales
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset list-a'>
                                            Stores
                                        </a>
                                    </p>
                                </MDBCol>

                                <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                    <p>
                                        <a className='text-reset list-a'>
                                            <Link to="account">Personal Info</Link>
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset list-a'>
                                            About Us
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset list-a'>
                                            Orders
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset list-a'>
                                        <Link to="delivery">Delivery</Link>
                                        </a>
                                    </p>
                                </MDBCol>

                                <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                    <p>
                                        <MDBIcon color='secondary' icon='home' className='me-2' />
                                        New York, NY 10012, US
                                    </p>
                                    <p>
                                        <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                        info@example.com
                                    </p>
                                    <p>
                                        <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                                    </p>
                                    <p>
                                        <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>

                </MDBFooter>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='text-dark' href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter>
        </>
    );
}
export default Footer;