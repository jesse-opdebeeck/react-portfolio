import React, { Component } from "react";
import Header from "../components/header";
import { Fade, Zoom } from "react-reveal";
import "font-awesome/css/font-awesome.min.css";

class Skills extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header title="Skills" />
        <div className="container">
          <div className="jumbotron my-5">
            <Fade>
              <h1 className="display-3">Jesse Op de Beeck</h1>
              <p className="lead">
                Goed met websites en computers en zo van die dingen.
              </p>
              <hr className="my-4" />
              <p>
                Als u op deze pagina bent, bent u ofwel op zoek naar een
                gemotiveerd persoon om uw team op een sterke wijze aan te
                vullen, en zo bij te dragen tot een succesvolle workflow, of
                bent u hier gewoon terechtgekomen door een kennis die zei: "Kijk
                naar deze website, die gast schrijft echt de raarste dingen." In
                beide gevallen bent u op de juiste plaats.
              </p>
            </Fade>
          </div>
          <h2 className="display-1 text-muted text-center mt-5">
            Ontdek waarom
          </h2>
          <div className="arrow bounce">
            <a className="fa fa-arrow-down fa-2x" href="#" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Skills;
