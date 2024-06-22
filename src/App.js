import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./Components/FirstPage";
import ProductPage from "./Components/ProductPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/productpage" element={<ProductPage />} />
            </Routes>
        </Router>
    );
}

export default App;
