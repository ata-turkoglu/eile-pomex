import React from "react";
import { Outlet } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Accordion } from "react-bootstrap";
import "./admin.scss";
import Admin_Home_Carousel from "./tabs/home/carousel";
import Admin_Home_Metrics from "./tabs/home/metrics";

function Admin(navigation) {
    return (
        <div className="admin">
            <Tabs defaultActiveKey="home" id="admin-tabs" className="m-3">
                <Tab eventKey="home" title="Home" className="p-3">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <h6>Carousel</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Admin_Home_Carousel />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h6>Metrics</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Admin_Home_Metrics />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <h6>First Info</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <span>First Info</span>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <h6>Banner</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <span>Banner</span>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                <h6>Second Info</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <span>Second Info</span>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>
                                <h6>Projects</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <span>Projects</span>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>
                                <h6>Companies</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <span>Companies</span>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Tab>
                <Tab eventKey="products" title="Products">
                    Products
                </Tab>
                <Tab eventKey="projects" title="Projects">
                    Projects
                </Tab>
                <Tab eventKey="about" title="About">
                    About
                </Tab>
                <Tab eventKey="docs" title="Documents">
                    Documents
                </Tab>
                <Tab eventKey="refs" title="References">
                    References
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    Contact
                </Tab>
            </Tabs>
            <Outlet />
        </div>
    );
}

export default Admin;
