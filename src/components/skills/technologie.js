import React, { Component } from "react";
import ReactWordcloud from "react-wordcloud";
import ScrollTrigger from "react-scroll-trigger";
import Fade from "react-reveal/Fade";

const wordsArray = [
  { text: "Bootstrap", value: 95 },
  { text: "Photoshop", value: 90 },
  { text: "Laravel", value: 85 },
  { text: "Premiere", value: 80 },
  { text: "Windows", value: 80 },
  { text: "Powerpoint", value: 80 },
  { text: "Word", value: 80 },
  { text: "Hardware", value: 80 },
  { text: "VS Code", value: 80 },
  { text: "Git", value: 75 },
  { text: "E-mail", value: 70 },
  { text: "VMWare", value: 65 },
  { text: "Netwerkbeheer", value: 60 },
  { text: "Audition", value: 60 },
  { text: "Excel", value: 60 },
  { text: "React", value: 60 },
  { text: "Linux", value: 55 },
  { text: "Drupal", value: 50 },
  { text: "Active Directory", value: 45 },
  { text: "Visual Studio", value: 45 },
  { text: "Grav", value: 40 }
];

class Technologie extends Component {
  state = {
    words: []
  };

  updateWords = () => {
    this.setState({ words: wordsArray });
  };

  render() {
    return (
      <React.Fragment>
        <section className="skillsection">
          <h2 className="my-5 display-3 text-center title-bg">
            <span>Technologie</span>
          </h2>
          <Fade>
            <p className="lead col-10 offset-1 mb-5">
              Vooral in de ICT-sector is het dezer dagen belangrijk dat je weet
              hoe je moet omgaan met technologie. Hiermee bedoel ik zowel zowel
              harde als softe ware. En terwijl ik niet contractueel kan
              garanderen dat ik niets van uw apparaten compleet ga ruïneren, kan
              ik wel met alle trots zeggen dat ik er hier en daar wel iets van
              volgende dingen zal kennen.
            </p>
          </Fade>
          <div className="col-10 offset-1">
            <ScrollTrigger onEnter={this.updateWords}>
              <ReactWordcloud
                words={this.state.words}
                options={{
                  colors: [
                    "#007bff", //blue
                    "#6610f2", //indigo
                    "#6f42c1", //purple
                    "#e83e8c", //pink
                    "#dc3545", //red
                    "#fd7e14", //orange
                    "#ffc107", //yellow
                    "#28a745", //green
                    "#20c997", //teal
                    "#17a2b8" //cyan
                  ],
                  fontFamily: "Roboto Slab",
                  fontSizes: [20, 150],
                  rotations: 0
                }}
              />
            </ScrollTrigger>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Technologie;
