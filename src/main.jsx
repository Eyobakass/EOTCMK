import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Body from './body.jsx'
import Navigation from './navigation.jsx'
import AboutUs from './aboutUs.jsx'
import Footer from './footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
    <Body />
    <AboutUs />
    <Footer />
  </StrictMode>,
)
