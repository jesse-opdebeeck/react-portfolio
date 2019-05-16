import React, { Component } from "react";
import Header from "./header";

class Projects extends Component {
  projects = {
    komik: {
      title: "Website Komik toneel",
      description:
        "De huidige website van amateur toneelgroep Komik toneel is volledig door mij gemaakt. Begonnen van nul heb ik er een volledig CMS en reservatiesysteem in gestoken.",
      details: new Array(
        "Design en development",
        "HTML en CSS",
        "PHP (Laravel)",
        "MySQL",
        "Eigen CMS",
        "Reservatiesysteem"
      ),
      image: "https://i.imgur.com/9KwQhgm.jpg"
    },
    beego: {
      title: "Studentenjob @ Beego",
      description:
        "Gedurende een maand heb ik bij Beego gewerkt, waar men studenten naar mensen thuis stuurt om hen te helpen met hun computerproblemen. Hier heb ik veel bijgeleerd rond zowel hardware als software.",
      details: new Array(
        "December 2018",
        "Antwerpen en omstreken",
        "Ongeveer 20 mensen geholpen"
      ),
      image: "https://i.imgur.com/gOYvWIv.png"
    },
    hqapp: {
      title: "Stage @ HQ",
      description:
        "Bij de start-up HQ heb ik een maand lang stage gelopen en mogen meewerken aan hun website binnen de bedrijfscultuur. Een enorm leerrijke ervaring waarin ik React heb geleerd en heb kunnen genieten van hoe het eraan toe gaat in de werkwereld.",
      details: new Array(
        "http://hq.app/",
        "Maart 2019",
        "Getuigenissen-slider",
        "React",
        "Javascript"
      ),
      image: "https://i.imgur.com/fdmzr9V.png"
    },
    sdworx: {
      title: "Studentenjob @ SDWorx",
      description:
        "Tweemaal werkte ik als student bij SDWorx op de Brouwersvliet in Antwerpen. Het eerste jaar was dit als medewerker op de Facility afdeling, en het tweede jaar bij Corporate HR voor administratieve taken.",
      details: new Array(
        "Zomer 2017 en 2018",
        "Facility klusjes",
        "Administratie Corporate HR"
      ),
      image: "https://i.imgur.com/ZLqgcqJ.png"
    },
    infographicCV: {
      title: "Infographic CV",
      description:
        "Een CV is natuurlijk veel interessanter in de vorm van een leuke infographic, en als thema ervoor koos ik de beroemdste fantasy-trilogie in de wereld.",
      details: new Array("Photoshop & Illustrator", "Volledig in thema"),
      image: "https://i.imgur.com/moqdt77.png"
    },
    videopitch: {
      title: "Videopitch",
      description:
        "Welke betere manier om mezelf voor te stellen dan een korte video over mezelf? Het is gemaakt in het formaat van een interview en ik leg er mijn beste capaciteiten in uit.",
      details: new Array(
        "Adobe Premiere",
        "Zelf opgenomen beelden",
        "Eigen editing",
        "Geweldige muziek"
      ),
      image: "https://i.imgur.com/4MHSYsr.jpg"
    },
    olijftak: {
      title: "Helpsessies Dienstencentrum Olijftak",
      description:
        "Tijdens mijn Se-n-Se jaar in Antwerpen hielden we drie verschillende helpdesk-sessies in het dienstencentrum de Olijftak in Borgerhout. Hier hielpen we de senioren met hun vragen over technologie.",
      details: new Array(
        "Drie sessies",
        "Helpdesk",
        "Presentatie over passwords",
        "Accounts opzetten"
      ),
      image: "https://i.imgur.com/dZYC3AX.png"
    }
  };

  state = {
    selectedProjectIndex: 0
  };

  setProject = () => {
    console.log("clicked");
  };

  render() {
    return (
      <React.Fragment>
        <Header title="Projecten" />
        <div className="container">
          <h1 className="my-4">Projectnaam</h1>
          <div className="row">
            <div className="col-md-8">
              <img
                className="img-fluid"
                src="http://placehold.it/750x500"
                alt=""
              />
            </div>

            <div className="col-md-4">
              <h3 className="my-3">Projectbeschrijving</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                viverra euismod odio, gravida pellentesque urna varius vitae.
                Sed dui lorem, adipiscing in adipiscing et, interdum nec metus.
                Mauris ultricies, justo eu convallis placerat, felis enim.
              </p>
              <h3 className="my-3">Projectdetails</h3>
              <ul>
                <li>Lorem Ipsum</li>
                <li>Dolor Sit Amet</li>
                <li>Consectetur</li>
                <li>Adipiscing Elit</li>
              </ul>
            </div>
          </div>

          <h3 className="my-4">Andere projecten</h3>

          <div className="row">
            <div
              onClick={() => this.setProject()}
              className="col-md-3 col-sm-6 mb-4"
            >
              <a href="javascript:void(0)">
                <img
                  className="img-fluid"
                  src="http://placehold.it/500x300"
                  alt=""
                />
              </a>
            </div>

            <div
              onClick={() => this.setProject()}
              className="col-md-3 col-sm-6 mb-4"
            >
              <a href="javascript:void(0)">
                <img
                  className="img-fluid"
                  src="http://placehold.it/500x300"
                  alt=""
                />
              </a>
            </div>

            <div
              onClick={() => this.setProject()}
              className="col-md-3 col-sm-6 mb-4"
            >
              <a href="javascript:void(0)">
                <img
                  className="img-fluid"
                  src="http://placehold.it/500x300"
                  alt=""
                />
              </a>
            </div>

            <div
              onClick={() => this.setProject()}
              className="col-md-3 col-sm-6 mb-4"
            >
              <a href="javascript:void(0)">
                <img
                  className="img-fluid"
                  src="http://placehold.it/500x300"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
