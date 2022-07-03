import React from 'react';
import './homepage.css';
import {Button} from "@mui/material";
import tem from '../../images/wp9924179.jpg';
import 'animate.css';


function Homepage() {
    return (
        <div className="home-container">
            <div className="hero-section">
                <div className="hero-content">
                    <div className="animate__animated animate__lightSpeedInLeft">
                        <p >
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting.
                        </p>
                        <Button className="hero-content-button" variant="contained" color="primary">Learn More </Button>
                    </div>
                    <div className="right-div">
                      <img src={tem} className="hero-content-img animate__animated animate__wobble" alt="ninja"/>
                    </div>

                </div>


            </div>

        </div>
    );
}

export default Homepage;