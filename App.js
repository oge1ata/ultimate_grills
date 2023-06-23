import React from 'react';
import "./App.css";
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import SpecialMenu from './components/SpecialMenu/specialMenu';
import ContactUs from './components/ContactUs/contactUs';
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <AboutUs/>
        <SpecialMenu/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default App