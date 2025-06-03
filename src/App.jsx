import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import WeOffer from "./Components/Weoffer";
import TeamProcess from "./Components/Teamprocess";
import TestimonialSlider from "./Components/Testomonial";
import ContactForm from "./Components/Contact";
import Footer from "./Components/footer";

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <About/>
    <WeOffer/>
    <TeamProcess/>
    <TestimonialSlider/>
    <ContactForm/>
    <Footer/>
    </>
  );
}

export default App;