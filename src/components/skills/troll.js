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
            <span className="display-4">
              {" "}
              Alle geweldigheid wordt geladen...
            </span>
          </div>
          <br className="my-5" />
          <Fade delay={1500}>
            <div className="mt-5">
              <span className="display-4">
                Mopje. Je kan gewoon naar beneden scrollen, er gaat hier niets
                verschijnen.
              </span>
            </div>
          </Fade>
        </section>
      </React.Fragment>
    );
  }
}

export default Ervaringen;
