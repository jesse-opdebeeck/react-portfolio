import React, { Component } from "react";
import Header from "./header";

import KomikImg from "../img/project-komik.jpg";
import BeegoImg from "../img/project-beego.jpg";
import HqImg from "../img/project-hq.jpg";
import SdworxImg from "../img/project-sdworx.png";
import CvImg from "../img/project-cv.png";
import PitchImg from "../img/project-pitch.jpg";
import OlijfImg from "../img/project-olijf.png";

const projects = [
  {
    title: "Website Komik Toneel",
    description:
      "De huidige website van amateur toneelgroep Komik Toneel (waar ik zelf ook bij speel) is volledig door mij gemaakt. Begonnen van nul heb ik er een volledig CMS en reservatiesysteem in gestoken.",
    details: [
      "Design en development",
      "HTML en CSS",
      "PHP (Laravel)",
      "MySQL",
      "Eigen CMS",
      "Reservatiesysteem"
    ].map(detail => <li>{detail}</li>),
    image: KomikImg // https://i.imgur.com/9KwQhgm.jpg
  },
  {
    title: "Studentenjob @ Beego",
    description:
      "Gedurende een maand heb ik bij Beego gewerkt, waar men studenten naar mensen thuis stuurt om hen te helpen met hun computerproblemen. Hier heb ik veel bijgeleerd rond zowel hardware als software.",
    details: [
      "December 2018",
      "Antwerpen en omstreken",
      "Ongeveer 20 mensen geholpen"
    ].map(detail => <li>{detail}</li>),
    image: BeegoImg // https://i.imgur.com/gOYvWIv.png
  },
  {
    title: "Stage @ HQ",
    description:
      "Bij de start-up HQ heb ik een maand lang stage gelopen en mogen meewerken aan hun website binnen de bedrijfscultuur. Een enorm leerrijke ervaring waarin ik React heb geleerd en heb kunnen genieten van hoe het eraan toe gaat in de werkwereld.",
    details: [
      "http://hq.app/",
      "Maart 2019",
      "Getuigenissen-slider",
      "React",
      "Javascript"
    ].map(detail => <li>{detail}</li>),
    image: HqImg // https://i.imgur.com/fdmzr9V.png
  },
  {
    title: "Studentenjob @ SDWorx",
    description:
      "Tweemaal werkte ik als student bij SDWorx op de Brouwersvliet in Antwerpen. Het eerste jaar was dit als medewerker op de Facility afdeling, en het tweede jaar bij Corporate HR voor administratieve taken.",
    details: [
      "Zomer 2017 en 2018",
      "Facility klusjes",
      "Administratie Corporate HR"
    ].map(detail => <li>{detail}</li>),
    image: SdworxImg // https://i.imgur.com/ZLqgcqJ.png
  },
  {
    title: "Infographic CV",
    description:
      "Een CV is natuurlijk veel interessanter in de vorm van een leuke infographic, en als thema ervoor koos ik de beroemdste fantasy-trilogie in de wereld.",
    details: ["Photoshop & Illustrator", "Volledig in thema"].map(
      detail => "<li>" + { detail } + "</li>"
    ),
    image: CvImg // https://i.imgur.com/moqdt77.png
  },
  {
    title: "Videopitch",
    description:
      "Welke betere manier om mezelf voor te stellen dan een korte video over mezelf? Het is gemaakt in het formaat van een interview en ik leg er mijn beste capaciteiten in uit.",
    details: [
      "Adobe Premiere",
      "Zelf opgenomen beelden",
      "Eigen editing",
      "Geweldige muziek"
    ].map(detail => <li>{detail}</li>),
    image: PitchImg // https://i.imgur.com/4MHSYsr.jpg
  },
  {
    title: "Helpsessies Dienstencentrum Olijftak",
    description:
      "Tijdens mijn Se-n-Se jaar in Antwerpen hielden we drie verschillende helpdesk-sessies in het dienstencentrum de Olijftak in Borgerhout. Hier hielpen we de senioren met hun vragen over technologie.",
    details: [
      "Drie sessies",
      "Helpdesk",
      "Presentatie over passwords",
      "Accounts opzetten"
    ].map(detail => <li>{detail}</li>),
    image: OlijfImg // https://i.imgur.com/dZYC3AX.png
  }
];

function ProjectList(props) {
  const projects = props.projects;
  const projectItems = projects.map(project => (
    <div class="col-3 col-md-3 col-sm-6 mb-4">
      <a href="#">
        <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
      </a>
    </div>
  ));

  return <ul>{projectItems}</ul>;
}

class Projects extends Component {
  state = {
    currentProjectIndex: 0
  };

  setProject = () => {
    console.log("clicked");
  };

  render() {
    return (
      <React.Fragment>
        <Header title="Projecten" />
        <div className="container">
          <h1 className="my-4">
            {projects[this.state.currentProjectIndex]["title"]}
          </h1>
          <div className="row">
            <div className="col-md-8">
              <img
                className="img-fluid project-img-full"
                src={projects[this.state.currentProjectIndex]["image"]}
                alt={
                  projects[this.state.currentProjectIndex]["title"] +
                  " afbeelding"
                }
              />
            </div>

            <div className="col-md-4">
              <h3 className="my-3">Projectbeschrijving</h3>
              <p>{projects[this.state.currentProjectIndex]["description"]}</p>
              <h3 className="my-3">Projectdetails</h3>
              <ul>{projects[this.state.currentProjectIndex]["details"]}</ul>
            </div>
          </div>

          <h3 className="my-4">Alle projecten</h3>

          <ProjectList projects={projects} />
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
