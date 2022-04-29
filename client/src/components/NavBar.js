import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "darkgrey"}} to={SHOP_ROUTE}>Online Shop</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: "darkgrey"}}>
                        <Button variant={"outline-light"}>Admin</Button>
                        <Button variant={"outline-light"} className="mx-lg-2">Log Out</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: "darkgrey"}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Log In</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;