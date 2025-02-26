import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./pages/body.jsx";
import AdminAuth from "./pages/adminAuth.jsx";
import Admin from "./pages/admin.jsx";
import Navigation from "./components/navigation.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Wrap the entire app inside the Router */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/adminAuth" element={<AdminAuth />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
