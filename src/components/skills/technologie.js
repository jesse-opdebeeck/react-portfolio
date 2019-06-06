import React, { Component } from "react";
import ReactWordcloud from "react-wordcloud";

const words = [
  { text: "Bootstrap", value: 95 },
  { text: "Photoshop", value: 90 },

  { text: "Laravel", value: 90 },
  { text: "Premiere", value: 85 },
  { text: "Windows", value: 85 },
  { text: "Powerpoint", value: 85 },
  { text: "Word", value: 80 },
  { text: "Hardware", value: 80 },
  { text: "VS Code", value: 80 },
  { text: "Git", value: 75 },
  { text: "E-mail", value: 70 },
  { text: "VMWare", value: 70 },
  { text: "Netwerkbeheer", value: 65 },
  { text: "Audition", value: 65 },
  { text: "Excel", value: 60 },
  { text: "React", value: 60 },
  { text: "Linux", value: 55 },
  { text: "Drupal", value: 55 },
  { text: "Active Directory", value: 50 },
  { text: "Visual Studio", value: 50 },
  { text: "Grav", value: 45 }
];

class Technologie extends Component {
  /*componentDidMount() {
    const script = document.createElement("script");

    script.src = "http://cdn.wordart.com/wordart.min.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
  }*/

  render() {
    return (
      <React.Fragment>
        <section className="skillsection">
          <h2 className="my-5 display-3 text-center title-bg">
            <span>Technologie</span>
          </h2>
          <p className="lead col-10 offset-1 mb-5">
            Vooral in de ICT-sector is het dezer dagen belangrijk dat je weet
            hoe je moet omgaan met technologie. Hiermee bedoel ik zowel zowel
            harde als softe ware. En terwijl ik niet contractueel kan garanderen
            dat ik niets van uw apparaten compleet ga ruïneren, kan ik wel met
            alle trots zeggen dat ik er hier en daar wel iets van volgende
            dingen zal kennen.
          </p>
          <div className="col-10 offset-1">
            <ReactWordcloud
              words={words}
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
                fontSizes: [5, 60],
                rotations: 0
              }}
            />
          </div>
          {/*<div
            style={{ width: "500px", height: "500px" }}
            className="col-8 offset-2"
            data-wordart-src="//cdn.wordart.com/json/6llfkcbcq719"
            data-wordart-show-attribution
          /> */}
        </section>
      </React.Fragment>
    );
  }
}

export default Technologie;
