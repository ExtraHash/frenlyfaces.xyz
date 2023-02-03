import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Verify } from "./pages/Verify";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/verify" element={<Verify />} />
            <Route element={<div>404</div>} />
        </Routes>
    );
}

export default App;
