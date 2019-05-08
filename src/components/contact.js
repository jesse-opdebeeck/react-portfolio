import React, { Component } from "react";
import Header from "../components/header";

class Contact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header title="Contact" />
        <div class="container">
          <h1 class="my-4">Contact</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
