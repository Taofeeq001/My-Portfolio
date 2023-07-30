import React, {useEffect} from "react";
import './Hero.css'
import Stars from "../../../Images/star.png";
import picture from '../../../Images/person.png'
import 'aos/dist/aos.css';
import AOS from 'aos';


const Hero = ()=>{
    useEffect(()=>{
        AOS.init({
            offset: 200,
            duration: 800,
            easing:'ease-in-out',
            delay: 0,
        });
    },[])
    return(
        <div className="hero">
            <div className="hero-content">
                <div className="content-paragraph">
                    <div className="content-detail">
                        <div data-aos="fade-right">
                            <h4>Hello, My name is Taofeeq Olayiwola Kolapo</h4>
                            <h2>I'm a Professional Web Developer</h2>
                        </div>
                        <p data-aos = "fade-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit perferendis dolore. Voluptas a quaerat animi veritatis illo voluptatibus similique eligendi dolorem veniam magnam. Est facilis nam aut molestiae earum!</p>
                    </div>
                    <div data-aos = "slide-up">
                        <button><a href="">DOWNLOAD CV</a></button>    
                    </div>
                </div>
                <img data-aos = "zoom-in" src={picture} alt="" />
            </div>
            <div className="stars">
                <img src={Stars} alt="" />
            </div>
        </div>
    )
}
export default Hero;