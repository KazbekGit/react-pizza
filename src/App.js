import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Cart from "./components/pages/Cart";
import TestPage from "./components/pages/TestPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
