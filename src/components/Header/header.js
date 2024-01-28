import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <section id="header">
            <div className="container">
                <nav>
                    <h1><span className="logo">C</span>YNTHIA</h1>
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/about" >About</Link></li>
                        <li><Link to="/services" >Services</Link></li>
                        <li><Link to="/projects" >Projects</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Header;
