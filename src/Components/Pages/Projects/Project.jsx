import React from "react";
import './Project.css'
import Data from "./ProjectMap";


const Project = ()=>{
    return(
        <div className="project">
            <div className="project-content">
                    <h1>MY PROJECT</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor vel. Totam earum exercitationem itaque nemo, voluptates?</p>
                <div className="btns">
                    <button>All</button>
                    <button>Web Design</button>
                    <button>Web Development</button>
                    <button>App development</button>
                </div>
                <div className="done-proj">
                    {
                        Data.map((data)=>{
                            return(
                                <div className="project-map">
                                    <a href=""><img src={data.Image} alt="" /></a>
                                    <div className="checker">
                                        <a href=""><h2>{data.btn1}</h2></a>
                                        <a href=""><h2>{data.btn2}</h2></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <button className="load-container">
                        <a href="">Load More</a>
                        <div className="loader"></div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Project;