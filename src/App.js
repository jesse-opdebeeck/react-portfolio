import React from "react";
import Hero from "./components/hero";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
