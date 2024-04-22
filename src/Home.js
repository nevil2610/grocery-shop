import React from "react";
import Header from "./Header";
import Body from "./Body";
import Container from 'react-bootstrap/Container';
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    const handlelogin = () => {
        navigate('/account')
    }
    const handlelogout = () => {
        localStorage.clear()
        navigate('/account')
    }
    return (
        <>
            <Container>
                <Header />
                <Body />
                <Footer />
                {
                    localStorage.getItem("islogin") &&
                    <button type="button" className="logout-btn" onClick={handlelogout}>logout {localStorage.getItem("email")}</button>
                }
                {
                    !localStorage.getItem("islogin") &&
                    <button type="button" onClick={handlelogin}>login</button>
                }
            </Container>
        </>
    );
}
export default Home;