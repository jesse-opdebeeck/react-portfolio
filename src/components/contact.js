import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

import { SocialIcon } from "react-social-icons";
import callmeup from "../img/callmeup.jpg";

class Contact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Contacteer Jesse</title>
        </Helmet>
        <Header title="Contact" />
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0 callmeup"
                src={callmeup}
                alt="Bel me op!"
              />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">Contacteer mij</h1>
              <p>
                Genoeg gezien? Uiteraard staat u te popelen om met mij in
                contact te komen! Klik op deze knop om uw e-mailprogramma te
                openen, of bekijk onderaan de andere opties.
              </p>
              <a className="btn btn-primary" href="mailto:jesseodb@hotmail.com">
                Open mijn e-mail!
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="card h-100 contact-card text-center">
                <div className="card-body">
                  <h2 className="card-title">Contactgegevens</h2>
                  <p className="card-text">Hoe kan je mij best bereiken?</p>
                  <ul className="list-unstyled">
                    <li className="mt-2 my-2">
                      <b>WhatsApp: </b>+32 (0) 471 39 15 88
                    </li>
                    <li className="mt-2">
                      <b>E-mail: </b>jesseodb@hotmail.com
                    </li>
                  </ul>
                  <p>Of stuur me een snel berichtje op Messenger!</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="card contact-card">
                <div className="card-body text-center">
                  <h2 className="card-title mb-3">Social media</h2>
                  <SocialIcon
                    url="http://www.facebook.com/jesseodb"
                    target="_blank"
                    style={{ height: 40, width: 40 }}
                    className="mx-2"
                  />
                  <SocialIcon
                    url="https://www.linkedin.com/in/jesse-op-de-beeck-0b6080161/"
                    target="_blank"
                    style={{ height: 40, width: 40 }}
                    className="mx-2"
                  />
                  <SocialIcon
                    url="https://twitter.com/tisdejesse"
                    target="_blank"
                    style={{ height: 40, width: 40 }}
                    className="mx-2"
                  />
                  <SocialIcon
                    url="https://www.youtube.com/channel/UC7cPa2jx1mBavVaVzQnWCUw"
                    target="_blank"
                    style={{ height: 40, width: 40 }}
                    className="mx-2"
                  />
                  <SocialIcon
                    url="https://github.com/jesse-opdebeeck"
                    target="_blank"
                    style={{ height: 40, width: 40 }}
                    className="mx-2"
                    bgColor="#00"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
