import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { FaTasks } from "react-icons/fa";

class Opleidingen extends Component {
  render() {
    return (
      <section className="skillsection">
        <h2 className="mb-5 display-3 text-center title-bg">
          <span>Opleiding</span>
        </h2>
        <div className="row">
          <Fade delay={250}>
            <div className="col-lg-4 mb-5 opleiding-wrapper">
              <div className="card mb-5 mb-lg-0 opleiding-box">
                <div className="card-body">
                  <h3 className="card-title text-muted text-uppercase text-center">
                    <small>2006 - </small>
                    Sint-Gummarus <small> - 2013</small>
                  </h3>
                  <p className="lead opleiding-naam text-center">
                    handel en bedrijfsbeheer
                  </p>
                  <hr />
                  <p className="opleiding-description text-center">
                    De jaren van de middelbare school werden voor mij
                    doorgebracht in het Sint-Gummaruscollege van Lier. Naast het
                    feit dat ik hier de puberteit doorstaan heb, heb ik hier ook
                    mijn verschillende passies ontdekt en ontwikkeld.
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-2 opleiding-icon">
                      <FaTasks />
                    </div>
                    <div className="col-10">
                      <ul className="opleiding-list list-unstyled">
                        <li>Diploma bedrijfsbeheer</li>
                        <li>Diploma Vlajo minionderneming</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade delay={1000}>
            <div className="col-lg-4 opleiding-wrapper">
              <div className="card mb-5 mb-lg-0 opleiding-box">
                <div className="card-body">
                  <h3 className="card-title text-muted text-uppercase text-center">
                    <small>2013 - </small>
                    Karel de Grote <small> - 2018</small>
                  </h3>
                  <p className="lead opleiding-naam text-center">
                    multimedia en communicatietechnologie
                  </p>
                  <hr />
                  <p className="opleiding-description text-center">
                    Onmiddellijk na de middelbare school sprong ik de hogeschool
                    in. MCT sprak me vooral aan vanwege de opleidingen binnen
                    audio en visuele kunsten, maar na vijf jaar worstelen en
                    uitzoeken waar mijn interesses echt lagen, bleek het
                    duidelijk dat dit een reis was die ik niet zo makkelijk zou
                    afmaken. Ik besloot te stoppen en mijn jaren ervaring en
                    bagage mee te nemen naar een nieuw avontuur.
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-2 opleiding-icon">
                      <FaTasks />
                    </div>
                    <div className="col-10">
                      <ul className="list-unstyled opleiding-list">
                        <li>Ervaring</li>
                        <li>Persoonlijke groei</li>
                        <li>Veel papierwerk</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade delay={1750}>
            <div className="col-lg-4 opleiding-wrapper">
              <div className="card mb-5 mb-lg-0 opleiding-box">
                <div className="card-body">
                  <h3 className="card-title text-muted text-uppercase text-center">
                    <small>2018 - </small>
                    Scheppers <small> - 2019</small>
                  </h3>
                  <p className="lead opleiding-naam text-center">
                    webontwikkeling en netwerkbeheer
                  </p>
                  <hr />
                  <p className="opleiding-description text-center">
                    Nog een jaar lang heb ik de kans gehad om me te mogen
                    inzetten in een klein klasje van drie binnen deze
                    Se-n-Se-opleiding. Hier had ik de kans om met een voorsprong
                    alles dat ik op de hogeschool geleerd had, volledig in te
                    halen en onder de knie te krijgen.
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-2 opleiding-icon">
                      <FaTasks />
                    </div>
                    <div className="col-10">
                      <ul className="list-unstyled opleiding-list">
                        <li>Certificaat Se-n-Se</li>
                        <li>Een leerrijke stage</li>
                        <li>Beheersing van webontwikkeling</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Opleidingen;
