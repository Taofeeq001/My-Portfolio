import React, {useState} from "react";
import './Nav.css'
import {AiOutlineUnorderedList} from 'react-icons/ai'


const Nav =()=>{
    // const [deskToggle, setDeskToggle] = useState(false)
    const [mobiltog, setMobilTog] = useState(false)
    
    // const handleClick = () =>{
    //     setDeskToggle(!deskToggle)
    // }
    const handleClick = () =>{
        setMobilTog(!mobiltog)
    }
    return(
        <div className="navigator">
            <nav className="navigation">
                <div>
                    <h3>SimSuraj Dev</h3>
                </div>
                <div className="desktop-nav">
                    <div className="desktop-navs">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Portfolio</a>
                        <a href="">Contact Me</a>
                    </div>
                    <button className="toggle" onClick={handleClick}><AiOutlineUnorderedList/></button>
                </div>
            </nav>
            <div className={mobiltog? "mobile-sub":'mobile-nav'}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Portfolio</a>
                <a href="">Contact Me</a>
            </div>
            <div className="right-side">
                
            </div>
        </div>
    )
}
export default Nav;