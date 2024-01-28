import React from "react";
import './about.css';
import about from '../../assets/about-background.jpeg';

const About = () => {

    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={about} alt="About background" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="subtitle">About Me</h1>
                        <p>
                            I am a Computer Science finalist who has garnered software development skills and is very
                            passionate about data.
                            I possess problem-solving, leadership, interpersonal as well as great communication skills.
                            I am self-driven and a team player that performs well in collaborative environments.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
