import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Hero from "./hero";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Jesse's Portfolio</title>
        </Helmet>
        <Hero />
        <section class="my-5">
          <div class="container">
            <div class="row">
              <div class="col-md-8 mx-auto text-center">
                <nav class="nav justify-content-center">
                  <li class="nav-item home-nav-item">
                    <Link to="/over">
                      <span class="nav-link home-nav-link display-4">
                        Over mij
                      </span>
                    </Link>
                  </li>
                  <li class="nav-item home-nav-item">
                    <Link to="/skills">
                      <span class="nav-link home-nav-link display-4">
                        Skills
                      </span>
                    </Link>
                  </li>
                  <li class="nav-item home-nav-item">
                    <Link to="/projecten">
                      <span class="nav-link home-nav-link display-4">
                        Projecten
                      </span>
                    </Link>
                  </li>

                  <li class="nav-item home-nav-item">
                    <Link to="/contact">
                      <span class="nav-link home-nav-link display-4">
                        Contact
                      </span>
                    </Link>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
