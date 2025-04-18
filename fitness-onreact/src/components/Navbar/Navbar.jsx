import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/homepage.css';
import {FaFacebook , FaInstagram, FaTwitter} from 'react-icons/fa'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <a className="navbar-brand" href="#home">Wizztech Programs</a>

      <button className="navbar-toggler togg" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <i className="fas fa-bars menu"></i>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav navbar-t">
          <li className="nav-item">
            
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li id="classes" className="nav-item">
            <Link className="nav-link" to="/womenfitness">Classes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/transformations">Transformations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/spa-center">Spa Center</Link>
          </li>
        </ul>
        <ul className="navbar-nav navbar-social">
          <i className="fab fa-facebook-f"><FaFacebook/></i>
          <i className="fab fa-instagram"><FaInstagram/></i>
          <i className="fab fa-twitter"><FaTwitter/></i>
        </ul>
      </div>
    </nav>
  );
}