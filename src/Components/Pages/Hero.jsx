import React from "react";
import './Hero.css'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import picture from '../../Images/person.png'
import Stars from "../../Images/star.png";

const Hero = ()=>{
    return(
        <div className="hero">
            <nav>
                <div>
                    <h3>SimSuraj Dev</h3>
                </div>
                <div className="desktop-nav">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Portfolio</a>
                    <a href="">Contact Me</a>
                    <AiOutlineUnorderedList/>
                </div>
            </nav>
            <div className="hero-content">
                <div className="content-paragraph">
                    <div className="content-detail">
                        <div>
                            <h4>Hello, My name is Taofeeq Olayiwola Kolapo</h4>
                            <h2>I'm a Professional Web Developer</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit perferendis dolore. Voluptas a quaerat animi veritatis illo voluptatibus similique eligendi dolorem veniam magnam. Est facilis nam aut molestiae earum!</p>
                    </div>
                    <div>
                        <button><a href="">DOWNLOAD CV</a></button>    
                    </div>
                </div>
                <img src={picture} alt="" />
            </div>
            <div className="stars">
                <img src={Stars} alt="" />
            </div>
        </div>
    )
}
export default Hero;