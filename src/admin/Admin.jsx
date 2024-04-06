import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Admin_Home from "./pages/Admin_Home";
import Admin_Projects from "./pages/Admin_Projects";

function Admin(navigation) {
    const route = useLocation();
    return (
        <div className="admin">
            <div className="pageContainer">
                <Routes>
                    <Route path="/" element={<Admin_Home />}></Route>
                    <Route
                        path="/projects"
                        element={<Admin_Projects />}
                    ></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Admin;
