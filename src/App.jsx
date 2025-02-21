import React from 'react'
import Body from "./pages/body.jsx";
import Navigation from "./components/navigation.jsx";
import AboutUs from "./components/aboutUs.jsx";
import Footer from "./components/footer.jsx";
const App = () => {
  return (
    <div>
      <Navigation />
      <Body />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App
