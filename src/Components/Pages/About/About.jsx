import React from "react";
import './About.css';
import {FiFacebook, FiTwitter} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'
import person from '../../../Images/Image 2.jpg'



const About = () =>{
    return(
        <div className="about">    
            <div className="about-content">
                <img src={person} alt="" />
                <div className="about-contentright">
                    <div className="about-text">
                        <h3>Taofeeq Olayiwiola Kolapo</h3>
                        <h2>A Professional Web designer and developer</h2>
                        <p>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio</p>
                    </div>
                    <div className="social-media">
                        <a href=""><FiFacebook/></a>
                        <a href=""><FiTwitter/></a>
                        <a href=""><FaInstagram/></a>
                        <a href=""><AiOutlineLinkedin/></a>
                    </div>
                    <div>
                        <button><a href="">Hire Me</a></button>
                        <button><a href="">Learn More</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;