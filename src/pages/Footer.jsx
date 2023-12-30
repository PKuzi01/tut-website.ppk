import React from "react";

function Footer(){
    return(
        <div className="container">
           <div className="row">
            <div className="col-6">Made by yours truly, f.</div>
            <div className="col-2">
                <a href="https://portfolio-ppk.netlify.app/" title="Portfolio" target="_blank">
                    <i className="fa-solid fa-terminal" style={{color: "#090a0b;"}}></i>
                </a>
            </div>
            <div className="col-2">
                <a href="mailto:ilaphi@outlook.com" title="Mail" target="_blank">
                <i class="fa-regular fa-envelope" style={{color: "#090a0b;"}}></i>
                </a>
            </div>
            <div className="col-2">
                <a href="https://github.com/PKuzi01" title="Github" target="_blank">
                    <i className="fa-brands fa-github" style={{color: "#090a0b;"}}></i>
                </a>
            </div>
           </div>
        </div>
    )
}

export default Footer;