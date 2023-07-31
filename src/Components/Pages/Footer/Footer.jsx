import React from "react";
import './Footer.css'
import {FaLocationDot, FaInstagram} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import {BsTelephoneInbound} from 'react-icons/bs'
import {FiFacebook, FiTwitter} from 'react-icons/fi'
import {GoLocation} from 'react-icons/go'


const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="simsuraj">
                    <h2>SimSuraj Dev</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ex ?</p>
                    <div className="social-media">
                        <a href=""><FiFacebook/></a>
                        <a href=""><FiTwitter/></a>
                        <a href=""><FaInstagram/></a>
                    </div>                
                </div>
                <div className="intouch">
                    <h3>GET IN TOUCH</h3>
                    <div className="touch">
                        <GoLocation/>
                        <div>
                            <h4>Locations</h4>
                            <p>Ilorin, Nigeria</p>
                        </div>
                    </div>
                    <div className="touch">
                        <AiOutlineMail/>
                        <div>
                            <h4>Email</h4>
                            <p>taofeeqkolapo@gmail.com</p>
                        </div>
                    </div>
                    <div className="touch">
                        <BsTelephoneInbound/>
                        <div>
                            <h4>Phone</h4>
                            <p>+2348109027102</p>
                        </div>
                    </div>
                </div>
                <div className="my-services">
                    <h3>MY SERVICES</h3>
                    <a href="">Web Design</a>
                    <a href="">Web Development</a>
                    <a href="">App Design & Development</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;