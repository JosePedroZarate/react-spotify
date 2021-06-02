import React, { useState } from 'react';
import {Form, Card, Image, Modal, Button } from 'react-bootstrap';
import './login.css';
import Powerslap from "./video/unica.mp4";


function Login() {

    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');
    const [signup, setSignup] = useState(false);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const showSignupDialog = () => {
        setSignup(true);
    }

    const closeSignupDialog = () => {
        setSignup(false);
    }
    const loginHeroku = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "name": email,
            "password": password
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://spotify-pedro.herokuapp.com/api/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                localStorage.setItem('user-token', result.token);
				window.location='/tutorials'
            }).catch(error => console.log('error', error));
    }

    const signupHeroku = (response) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
		myHeaders.append("mode","no-cors");

        var raw = JSON.stringify({
            "name": email,
            "pass": password,
            "pass_confirm": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://spotify-pedro.herokuapp.com/api/signup", requestOptions)
            .then(res => {
                console.log("login");
				closeSignupDialog();
            })
            .catch(error => console.log('error', error));

    }

    const handleSignup = (e) => {
e.preventDefault();
        signupHeroku();
    }

    const HandleLogin =(e) => {
e.preventDefault();
        loginHeroku();
    }

    return (
        <div class="container">
            <video
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}
            >
                <source src={Powerslap} type="video/mp4" />
            </video>
            <Card style={{
                width: '306px', position: "absolute",

                left: "40%",
                top: "35%",
            }}>
                <Card.Header>
                    {!login &&
                        <Form onSubmit={ e => HandleLogin(e)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" onClick={showSignupDialog}>
                            Signup
                        </Button>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    }
                    {login &&
                        <Image src={picture} roundedCircle />
                    }
                </Card.Header>
                <Modal show={signup} onHide={closeSignupDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Signup</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={e=>handleSignup(e)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword2">
                                <Form.Label>Repeat Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary">
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Signup
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
                {login &&
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                            {data.email}
                        </Card.Text>
                    </Card.Body>
                }
            </Card>
        </div>
    );
}

export default Login;