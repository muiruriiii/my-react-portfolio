import React from "react";
import './header.css';
import background from '../../assets/background.jpeg';


const Header = () => {
    const openMenu = () => {
        const sidenav = document.getElementById("sidenav");
        sidenav.style.right = "0";
    };

    const closeMenu = () => {
        const sidenav = document.getElementById("sidenav");
        sidenav.style.right = "-200px";
    };
    return (
        <section id="header">
            <div className="container">
                <nav>
                    <h1><span className="logo">C</span>YNTHIA</h1>
                    <ul id="sidenav">
                        <li><a href ="/" onClick={closeMenu}>Home</a></li>
                        <li><a href ="/about" onClick={closeMenu} >About</a></li>
                        <li><a href ="/services" onClick={closeMenu}>Services</a></li>
                        <li><a href="/projects" onClick={closeMenu}>Projects</a></li>
                        <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
                        <i className="fas fa-times" onClick={closeMenu}></i>
                    </ul>
                    <i className="fas fa-bars" onClick={openMenu}></i>
                </nav>
                <div className="row">
                    <div className="header-col-1">
                        <div className="header-info">
                            <h1 className="title">HELLO!</h1>
                            <h1>I'm <span>Cynthia <br/>Muiruri.</span> <br/></h1>
                            <p>A Full-Stack Software Engineer.</p>
                        </div>
                    </div>
                    <div className="header-col-2">
                        <img src={background} alt="Background" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Header;
