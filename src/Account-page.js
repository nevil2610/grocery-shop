import React, { useRef } from 'react';
import Header from "./Header";
import Container from 'react-bootstrap/Container';
import Footer from "./Footer";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


const Account = () => {
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    const signin = (e) => {
        e.preventDefault()
        var params = new FormData()
        params.set("email", email.current.value)
        params.set("password", password.current.value)
        axios.post('http://localhost/lecture-php/login.php', params)
            .then(function (response) {
                console.log(response.data.userdata);
                if (response.data.status == 'yes') {
                    alert('success login...' + response.data.userdata.name)
                    localStorage.setItem("islogin", "yes")
                    localStorage.setItem("username", response.data.userdata.name)
                    navigate('/')
                }
                else {
                    alert('Fail...')
                }
            })
    }
    return (

        <>
            <Header />
            <Container>
                <div className="login-main">
                    <div class="login-container">
                        <h1>Login</h1>
                        <form onSubmit={signin}>
                            <label for="email">Email:-:</label>
                            <input type="email" id="email" name="email" ref={email} required />
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" ref={password} required />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </Container >
            <Footer />
        </>
    );
}
export default Account;