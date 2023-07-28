import React from "react";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import About from "./About/About";


const Landing = ()=>{
    return(
        <div>
            <Nav/>
            <Hero/>
            <About/>
        </div>
    )
}
export default Landing;