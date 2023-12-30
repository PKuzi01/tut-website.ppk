import React from "react";
import "../assets/style/Footer.css";

function Footer(){
    return(
        <div className="container">
           <div className="row">
            <div className="col-6">
                <p className="footer-text">Made by yours truly, f.</p>
            </div>
            <div className="col-2 footer-icon">
                <a href="https://portfolio-ppk.netlify.app/" title="Portfolio" target="_blank">
                    <i className="fa-solid fa-terminal" style={{color: "#090a0b"}}></i>
                </a>
            </div>
            <div className="col-2 footer-icon">
                <a href="mailto:ilaphi@outlook.com" title="Mail" target="_blank">
                <i class="fa-regular fa-envelope" style={{color: "#090a0b;"}}></i>
                </a>
            </div>
            <div className="col-2 footer-icon">
                <a href="https://github.com/PKuzi01" title="Github" target="_blank">
                    <i className="fa-brands fa-github" style={{color: "#090a0b;"}}></i>
                </a>
            </div>
           </div>
        </div>
    )
}

export default Footer;