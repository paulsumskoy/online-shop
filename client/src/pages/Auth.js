import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    //console.log(location)

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Password"
                    />
                    <Row className="d-flex justify-content-between mt-3 px-md-5">
                        <Button
                            variant={"outline-success"}
                        >
                            {isLogin ? 'Log In' : 'Registration'}
                        </Button>
                        {isLogin ?
                            <div className="mt-3">
                                No account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                            </div>
                            :
                            <div className="mt-3">
                                Have account? <NavLink to={LOGIN_ROUTE}>Log In</NavLink>
                            </div>
                        }
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;