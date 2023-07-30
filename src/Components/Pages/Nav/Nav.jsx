import React, {useEffect} from "react";
import './Nav.css'
import {AiOutlineUnorderedList} from 'react-icons/ai'


const Nav =()=>{
    return(
        <div>
            <nav className="navigation">
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
                <div className="mobile-nav">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Portfolio</a>
                    <a href="">Contact Me</a>
                    <AiOutlineUnorderedList/>
                </div>
            </nav>
        </div>
    )
}
export default Nav;