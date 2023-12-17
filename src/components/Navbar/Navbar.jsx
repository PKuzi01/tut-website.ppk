import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <img src="#" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
      <a class="navbar-brand" href="#">Tutorials with F.</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/" class="nav-link" aria-current="page" >Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link">About</Link>
          </li>
          <li class="nav-item">
            <Link to="/tutorials" class="nav-link">Tutorials</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;