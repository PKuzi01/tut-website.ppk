import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/style/Navbar.css";
import fIconLight from '../assets/media/f-icon-light.png';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <img src={fIconLight} alt="F Icon Light" width="30" height="24" class="d-inline-block align-text-top"></img>
      <a className="navbar-brand" href="#">Tutorials with F.</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page" >Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/tutorials" className="nav-link">Tutorials</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;