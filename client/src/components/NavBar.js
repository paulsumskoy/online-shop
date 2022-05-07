import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {NavLink, useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'darkgrey'}} to={SHOP_ROUTE}>Online Shop</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: "darkgrey"}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE, {replace: true})}
                        >
                            Admin
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="mx-lg-2"
                        >
                            Log Out
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: "darkgrey"}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE, {replace: true})}>Log In</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;