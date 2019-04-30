import React, { Component } from "react";

import Hero from "./hero";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Hero />
        <section class="my-5">
          <div class="container">
            <div class="row">
              <div class="col-md-8 mx-auto text-center">
                <nav class="nav justify-content-center">
                  <li class="nav-item">
                    <a href="#" class="nav-link display-4">
                      Skills
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link display-4">
                      Projecten
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link display-4">
                      Blog
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link display-4">
                      Contact
                    </a>
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
