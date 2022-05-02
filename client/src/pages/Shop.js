import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col className="col-md-3">
                    <TypeBar/>
                </Col>
                <Col className="col-md-9">
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;