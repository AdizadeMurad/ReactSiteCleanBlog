import React from "react";

import "./Navbar.scss";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="general-navbar">
          <div className="navbar">
            <div className="start">
              <p className="start__text">
                Start Bootstrap
              </p>
            </div>
            <ul className="navbar__list">
            <Link className="link" to={'/'}>HOME</Link>
            <Link  className="link"  to={'/About'}>ABOUT</Link>
            <Link  className="link" to={'/SamplePost'}>SAMPLEPOST</Link>
            <Link className="link"  to={'/Contact'}>CONTACT</Link>
            </ul>
            <button className="button__menu">
              MENU<i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
