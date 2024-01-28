import React from "react";
import './contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-1">
                        <h1 className="subtitle">Contact Me</h1>
                        <p><i className="fas fa-envelope"></i>muiruricynthiaaa@gmail.com</p>
                        <p><i className="fas fa-phone"></i>0702125597</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/cynthia-muiruri-0a913b19a/" target="_blank"><i
                                className="fab fa-linkedin"></i></a>
                            <a href="https://twitter.com/CynthiaMuiruri1" target="_blank"><i
                                className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="contact-2">
                        <form>
                            <input type="text" name="Name" placeholder="Your Name ..." required />
                            <input type="text" name="Email" placeholder="Your Email ..." required />
                            <textarea name="Message" rows="10" placeholder="Message ..."></textarea>
                            <button type="submit" className="btn btn2">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
            <p className="copyright">©2024 Cynthia Muiruri-Portfolio</p>
        </section>
    )
}

export default Contact;
