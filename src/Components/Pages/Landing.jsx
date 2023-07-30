import React from "react";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Work from "./Work/Work";
import Project from "./Projects/Project";
import Testimonial from "./Testimonial/Testimonial";


const Landing = ()=>{
    return(
        <div>
            <Nav/>
            <Hero/>
            <About/>
            <Services/>
            <Work/>
            <Project/>
            <Testimonial/>
        </div>
    )
}
export default Landing;