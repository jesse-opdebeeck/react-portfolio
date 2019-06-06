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
        <p className="lead col-10 offset-1 mb-5">
          Doorheen mijn leven heb ik vele veranderingen meegemaakt. De kleine,
          onzekere jongen die school maar rot vond veranderde in een grote, iets
          te zelfzekere man die school maar rot vond. De schoolperiode is nooit
          gemakkelijk, maar erop terugkijkend zie ik dat die vele jaren me ook
          veel hebben bijgeleerd. Zoals statistiek en hoe je een alarm moet
          hacken. Heel nuttige dingen.
        </p>
        <div className="row">
          <Fade delay={200}>
            <div className="col-12 col-xl-4 col-lg-12 col-md-12 mb-5 opleiding-wrapper">
              <div className="card mb-5 mb-lg-0 opleiding-box">
                <div className="card-body">
                  <h3 className="card-title text-muted text-uppercase text-center">
                    <small className="d-lg-inline d-xs-none d-sm-none d-md-none">
                      2006 -{" "}
                    </small>
                    Sint-Gummarus{" "}
                    <small className="d-lg-inline d-xs-none d-sm-none d-md-none">
                      {" "}
                      - 2013
                    </small>
                  </h3>
                  <span className="d-block d-lg-none d-xl-none text-center blue-text">
                    2006 - 2013
                  </span>
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
          <Fade delay={400}>
            <div className="col-12 col-xl-4 col-lg-12 col-md-12 mb-5 opleiding-wrapper">
              <div className="card mb-5 mb-lg-0 opleiding-box">
                <div className="card-body">
                  <h3 className="card-title text-muted text-uppercase text-center">
                    <small className="d-lg-inline d-xs-none d-sm-none d-md-none">
                      2013 -{" "}
                    </small>
                    Karel de Grote{" "}
                    <small className="d-lg-inline d-xs-none d-sm-none d-md-none">
                      {" "}
                      - 2018
                    </small>
                  </h3>
                  <span className="d-block d-lg-none d-xl-none text-center blue-text">
                    2013 - 2018
                  </span>
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
          <Fade delay={600}>
            <div className="col-12 col-xl-4 col-lg-12 col-md-12 mb-5 opleiding-wrapper">
              <div className="card mb-5 mb-lg-0 opleiding-box">
                <div className="card-body">
                  <h3 className="card-title text-muted text-uppercase text-center">
                    <small className="d-lg-inline d-xs-none d-sm-none d-md-none">
                      2018 -{" "}
                    </small>
                    Scheppers{" "}
                    <small className="d-lg-inline d-xs-none d-sm-none d-md-none">
                      {" "}
                      - 2019
                    </small>
                  </h3>
                  <span className="d-block d-lg-none d-xl-none text-center blue-text">
                    2018 - 2019
                  </span>
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
