import React, { Component } from "react";
import Header from "../components/header";
import { Bounce, Fade } from "react-reveal";
import "font-awesome/css/font-awesome.min.css";

import Opleidingen from "./skills/opleidingen";
import Ervaringen from "./skills/ervaringen";
import Hobbys from "./skills/hobbys";
import Technologie from "./skills/technologie";
import Code from "./skills/code";
import Troll from "./skills/troll";

class Skills extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header title="Skills" />
        <div className="container-fluid">
          <div className="my-5 text-center col-6 mx-auto">
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
          <Fade delay={750}>
            <h2 className="display-1 text-muted text-center my-5">
              Ontdek waarom
            </h2>
          </Fade>
          <Bounce delay={1000} top={true}>
            <div className="arrow bounce">
              <p className="fa fa-arrow-down fa-2x my-5" href="#" />
            </div>
          </Bounce>
          <br className="my-5" />
          <Troll />
          <br className="my-5" />
          <Opleidingen />
          <br className="my-5" />
          <Ervaringen />
          <br className="my-5" />
          <Code />
          <br className="my-5" />
          <Technologie />
          <br className="my-5" />
          <Hobbys />
        </div>
      </React.Fragment>
    );
  }
}

export default Skills;
