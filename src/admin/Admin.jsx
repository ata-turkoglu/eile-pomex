import React from "react";
import { Outlet } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Admin(navigation) {
    return (
        <div className="admin">
            <Tabs defaultActiveKey="products" id="admin-tabs" className="m-3">
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
