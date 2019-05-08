import React, { Component } from "react";
import Header from "../components/header";

class Blog extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header title="Blog" />
        <div class="container">
          <h1 class="my-4">Blog</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
