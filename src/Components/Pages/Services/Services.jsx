import React from "react";
import './Services.css'
import Data from "./Serviceprops";

const Services = () =>{
    return(
        <div className="service-container">
            <div className="service-content">
                <div>
                    <h1>My Services</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic et natus, eligendi ipsa aperiam provident possimus.</p>
                </div>
                <div className="map-container">
                    {
                        Data.map((dat)=>{
                            return(
                                <div className="mapper2">
                                    <img src={dat.image} alt="" />
                                    <h2>{dat.Heading}</h2>
                                    <p>{dat.paragraph}</p>
                                    <button><a href="/service">{dat.button}</a></button>
                                    <h1>{dat.number}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}
export default Services;