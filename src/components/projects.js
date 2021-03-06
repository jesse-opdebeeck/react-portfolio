import React, { Component } from "react";
import Header from "./header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

import KomikImg from "../img/komik.jpg";
import HqImg from "../img/hq.png";
import CvImg from "../img/cv.jpg";
import Cv2Img from "../img/cv.png";
import PitchImg from "../img/videopitch.jpg";
import StanImg from "../img/stan.png";

const projects = [
  {
    key: 0,
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
    ].map((detail, i) => <li key={i}>{detail}</li>),
    image: KomikImg, // https://i.imgur.com/9KwQhgm.jpg
    path: "http://komiktoneel.be"
  },
  {
    key: 1,
    title: "Stage @ HQ",
    description:
      "Bij de start-up HQ heb ik een maand lang stage gelopen en mogen meewerken aan hun website binnen de bedrijfscultuur. Een enorm leerrijke ervaring waarin ik React heb geleerd en heb kunnen genieten van hoe het eraan toe gaat in de werkwereld.",
    details: [
      "http://hq.app/",
      "Maart 2019",
      "Getuigenissen-slider",
      "React",
      "Javascript"
    ].map((detail, i) => <li key={i}>{detail}</li>),
    image: HqImg, // https://i.imgur.com/fdmzr9V.png
    path: "http://hq.app/"
  },
  {
    key: 2,
    title: "Infographic CV",
    description:
      "Een CV is natuurlijk veel interessanter in de vorm van een leuke infographic, en als thema ervoor koos ik de beroemdste fantasy-trilogie in de wereld.",
    details: ["Photoshop & Illustrator", "Volledig in thema"].map(
      (detail, i) => <li key={i}>{detail}</li>
    ),
    image: CvImg, // https://i.imgur.com/moqdt77.png
    path: "https://i.imgur.com/ZmGRAMY.jpg"
  },
  {
    key: 3,
    title: "Videopitch",
    description:
      "Welke betere manier om mezelf voor te stellen dan een korte video over mezelf? Het is gemaakt in het formaat van een interview en ik leg er mijn beste capaciteiten in uit.",
    details: [
      "Adobe Premiere",
      "Zelf opgenomen beelden",
      "Eigen editing",
      "Geweldige muziek"
    ].map((detail, i) => <li key={i}>{detail}</li>),
    image: PitchImg, // https://i.imgur.com/4MHSYsr.jpg
    path: "https://www.youtube.com/watch?v=wTZYHYRZAUk"
  },
  {
    key: 4,
    title: "Student Antwerpen",
    description:
      "Een website om de jonge student door Antwerpen te leiden. Dit was tijdens mijn KdG-jaren een opdracht van Stad Antwerpen en heb ik samen met een teamgenoot gebouwd. Hier kwam ook een app bij kijken.",
    details: [
      "Eerste confrontatie met Laravel",
      "Admin Dashboard",
      "Database met migrations"
    ].map((detail, i) => <li key={i}>{detail}</li>),
    image: StanImg,
    path: "https://github.com/Vincentdc94/Project_Antwerpen/"
  },
  {
    key: 5,
    title: "Infographic CV 2.0",
    description:
      "Omdat de andere cv misschien iets te... extravagant is, besloot ik om nog een tweede infographic cv te maken die iets meer overeenkomt met de professionele standaard. Daarnaast blijf ik trots op de andere creatie en blijf ik hem ook op deze website houden.",
    details: [
      "Photoshop",
      "Infographic formaat",
      "Blauw kleurenschema",
      "Juni 2019"
    ].map((detail, i) => <li key={i}>{detail}</li>),
    image: Cv2Img,
    path: Cv2Img
  }
];

function ProjectList(props) {
  const projects = props.projects;
  const projectItems = projects.map(project => (
    <div className="col-md-3 col-sm-6 mb-4" key={project.key}>
      {/* eslint-disable-next-line */}
      <a
        href="#"
        onClick={event => {
          props.setProject(event, project.key);
        }}
      >
        <img className="img-fluid" src={project.image} alt={project.title} />
      </a>
    </div>
  ));

  return <div className="row">{projectItems}</div>;
}

class Projects extends Component {
  state = {
    currentProjectIndex: 0
  };

  setProject = (event, index) => {
    event.preventDefault();
    this.setState({ currentProjectIndex: index });
  };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Jesse's Projecten</title>
        </Helmet>
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
                alt={projects[this.state.currentProjectIndex]["title"]}
              />
            </div>

            <div className="col-md-4">
              <h3 className="my-3">Projectbeschrijving</h3>
              <p>{projects[this.state.currentProjectIndex]["description"]}</p>
              <h3 className="my-3">Projectdetails</h3>
              <ul>{projects[this.state.currentProjectIndex]["details"]}</ul>
              <a
                href={projects[this.state.currentProjectIndex]["path"]}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bekijk
              </a>
            </div>
          </div>

          <h3 className="my-4">Alle projecten</h3>
          <ProjectList projects={projects} setProject={this.setProject} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Projects;
