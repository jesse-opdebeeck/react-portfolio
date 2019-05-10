import React, { Component } from "react";
import Header from "../components/header";

class Blog extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header title="Blog" />
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="card mb-4 my-4">
                <img
                  class="card-img-top"
                  src="http://placehold.it/750x300"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h2 class="card-title">Blogpost 1</h2>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                    laboriosam. Dicta expedita corporis animi vero voluptate
                    voluptatibus possimus, veniam magni quis!
                  </p>
                  <a href="#" class="btn btn-primary">
                    Verderlezen &rarr;
                  </a>
                </div>
                <div class="card-footer text-muted">
                  Gepubliceerd op 1 januari 2019
                </div>
              </div>
              <div class="card mb-4">
                <img
                  class="card-img-top"
                  src="http://placehold.it/750x300"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h2 class="card-title">Blogpost 2</h2>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                    laboriosam. Dicta expedita corporis animi vero voluptate
                    voluptatibus possimus, veniam magni quis!
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More &rarr;
                  </a>
                </div>
                <div class="card-footer text-muted">
                  Posted on January 1, 2017
                </div>
              </div>
              <div class="card mb-4">
                <img
                  class="card-img-top"
                  src="http://placehold.it/750x300"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h2 class="card-title">Blogpost 3</h2>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                    laboriosam. Dicta expedita corporis animi vero voluptate
                    voluptatibus possimus, veniam magni quis!
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More &rarr;
                  </a>
                </div>
                <div class="card-footer text-muted">
                  Posted on January 1, 2017
                </div>
              </div>
              <ul class="pagination justify-content-center mb-4">
                <li class="page-item">
                  <a class="page-link" href="#">
                    &larr; Nieuwer
                  </a>
                </li>
                <li class="page-item disabled">
                  <a class="page-link" href="#">
                    Ouder &rarr;
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <div class="card my-4">
                <h5 class="card-header">Zoeken</h5>
                <div class="card-body">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Zoek naar..."
                    />
                    <span class="input-group-btn">
                      <button class="btn btn-secondary" type="button">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div class="card my-4">
                <h5 class="card-header">Waarom?</h5>
                <div class="card-body">
                  Ieder mens heeft recht op een eigen mening, en een website
                  geeft een mens het perfect platform om die mening de wereld in
                  de sturen zodat niemand ze kan lezen.
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
