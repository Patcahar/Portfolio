import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/home";
import ContactPage from "./page/contact";
import AboutPage from "./page/about";
import TestPage from "./page/test";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;
