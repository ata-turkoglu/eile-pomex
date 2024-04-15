import React from "react";
import "./css/metrics.scss";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Admin_Home_Metrics(navigation) {
    return (
        <div className="admin_home_metrics">
            <InputGroup className="mb-3 w-50">
                <InputGroup.Text id="input1" className="w-50">
                    Proje Tamamlandı
                </InputGroup.Text>
                <Form.Control
                    aria-label="projects done"
                    aria-describedby="input1"
                />
            </InputGroup>
            <InputGroup className="mb-3 w-50">
                <InputGroup.Text id="input2" className="w-50">
                    Ürün Çeşidi
                </InputGroup.Text>
                <Form.Control
                    aria-label="product variety"
                    aria-describedby="input2"
                />
            </InputGroup>
            <InputGroup className="mb-3 w-50">
                <InputGroup.Text id="input3" className="w-50">
                    Bayilik
                </InputGroup.Text>
                <Form.Control
                    aria-label="dealership"
                    aria-describedby="input13"
                />
            </InputGroup>
            <InputGroup className="mb-3 w-50">
                <InputGroup.Text id="input4" className="w-50">
                    Hammadde Üretimi
                </InputGroup.Text>
                <Form.Control
                    aria-label="raw material production"
                    aria-describedby="input4"
                />
            </InputGroup>
        </div>
    );
}

export default Admin_Home_Metrics;
