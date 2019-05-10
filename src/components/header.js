import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-lg headernavbar">
        <a className="navbar-brand" href="/">
          Jesse
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav headernav mr-auto">
            <li className="nav-item headernavitem">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item headernavitem">
              <Link
                to="/skills"
                className={
                  this.props.title === "Skills" ? "nav-link active" : "nav-link"
                }
              >
                Skills
              </Link>
            </li>
            <li className="nav-item headernavitem">
              <Link
                to="/projecten"
                className={
                  this.props.title === "Projecten"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Projecten
              </Link>
            </li>
            <li className="nav-item headernavitem">
              <Link
                to="/blog"
                className={
                  this.props.title === "Blog" ? "nav-link active" : "nav-link"
                }
              >
                Blog
              </Link>
            </li>
            <li className="nav-item headernavitem">
              <Link
                to="/contact"
                className={
                  this.props.title === "Contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
          <span className="navbar-text">Placeholder</span>
        </div>
      </header>
    );
  }
}

export default Header;
