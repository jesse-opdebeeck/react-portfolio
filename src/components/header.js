import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
  render() {
    return (
      <Navbar>
        <span class="navbar-brand">J</span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={
                  this.props.title === "Skills" ? "nav-link active" : "nav-link"
                }
                to="/skills"
              >
                Skills
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={
                  this.props.title === "Projecten"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/projecten"
              >
                Projecten
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={
                  this.props.title === "Blog" ? "nav-link active" : "nav-link"
                }
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={
                  this.props.title === "Contact"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <span class="navbar-text text-muted">{this.props.title}</span>
        </div>
      </Navbar>
    );
  }
}

export default Header;
