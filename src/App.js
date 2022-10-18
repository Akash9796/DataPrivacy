import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import PricingPage from "./pages/PricingPage";
import SignupPages from "./pages/SignupPages";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router basename="DataPrivacy">
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupPages />} />
          <Route path="/price" element={<PricingPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
