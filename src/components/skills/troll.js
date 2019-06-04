import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Ervaringen extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="skillsection mt-5 text-center">
          <div className="my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <span className="display-4"> Loading awesomeness...</span>
          </div>
          <Fade delay={2000}>
            <div className="my-5">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <span className="display-4"> Just a while longer...</span>
            </div>
          </Fade>
          <Fade delay={5000}>
            <div className="my-5">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <span className="display-4">
                {" "}
                Wow, there's a lot of awesomeness to load...
              </span>
            </div>
          </Fade>
          <br className="my-5" />
          <Fade delay={10000}>
            <div className="my-5">
              <span className="display-4">
                You can just scroll down by the way, this is only a joke.
              </span>
            </div>
          </Fade>
          <Fade delay={15000}>
            <div className="my-5">
              <span className="display-4">
                No seriously, nothing's going to pop up or anything, just scroll
                down.
              </span>
            </div>
          </Fade>
          <Fade delay={22500}>
            <div className="my-5">
              <span className="display-4">
                ... Don't tell me you're still here. Nothing. Is going. To
                happen. Seriously. Just scroll down, please.
              </span>
            </div>
          </Fade>
        </section>
      </React.Fragment>
    );
  }
}

export default Ervaringen;
