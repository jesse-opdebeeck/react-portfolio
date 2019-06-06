import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

class Blog extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header title="Blog" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="mt-4">
                Post Title <small>1 januari 2019</small>
              </h1>
              <img
                className="img-fluid rounded my-4"
                src="http://placehold.it/900x300"
                alt="Foto"
              />
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe
                quibusdam sit excepturi nam quia corporis eligendi eos magni
                recusandae laborum minus inventore?
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                tenetur natus doloremque laborum quos iste ipsum rerum obcaecati
                impedit odit illo dolorum ab tempora nihil dicta earum fugiat.
                Temporibus, voluptatibus.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                doloribus, dolorem iusto blanditiis unde eius illum consequuntur
                neque dicta incidunt ullam ea hic porro optio ratione repellat
                perspiciatis. Enim, iure!
              </p>

              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
                nostrum, aliquid, animi, ut quas placeat totam sunt tempora
                commodi nihil ullam alias modi dicta saepe minima ab quo
                voluptatem obcaecati?
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
                dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore
                quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                recusandae? Qui, necessitatibus, est!
              </p>
              <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          {/*eslint-disable-next-line*/}
                          <a href="javascript:void(0)">Web Design</a>
                        </li>
                        <li>
                          {/*eslint-disable-next-line*/}
                          <a href="javascript:void(0)">HTML</a>
                        </li>
                        <li>
                          {/*eslint-disable-next-line*/}
                          <a href="javascript:void(0)">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          {/*eslint-disable-next-line*/}
                          <a href="javascript:void(0)">JavaScript</a>
                        </li>
                        <li>
                          {/*eslint-disable-next-line*/}
                          <a href="javascript:void(0)">CSS</a>
                        </li>
                        <li>
                          {/*eslint-disable-next-line*/}
                          <a href="javascript:void(0)">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card my-4">
                <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the new Bootstrap 4 card
                  containers!
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Blog;
