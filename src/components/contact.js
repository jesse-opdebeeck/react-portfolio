import React, { Component } from "react";
import Header from "../components/header";
import { SocialIcon } from "react-social-icons";

class Contact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header title="Contact" />
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Contacteer mij</h1>
              <p>
                Genoeg gezien? Uiteraard staat u te popelen om met mij in
                contact te komen! Klik op deze knop om uw e-mailprogramma te
                openen, of bekijk onderaan de andere opties.
              </p>
              <a class="btn btn-primary" href="mailto:jesseodb@hotmail.com">
                Open mijn e-mail!
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-5">
              <div class="card h-100 contact-card">
                <div class="card-body">
                  <h2 class="card-title">Direct bericht</h2>
                  <p class="card-text">Geef hier een snel berichtje in!</p>
                  <form className="contact-dm-form">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Uw bericht"
                    />
                    <br />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Uw e-mailadres of telefoonnummer"
                    />
                    <small class="form-text text-muted">
                      Hoe kan ik u beantwoorden?
                    </small>
                    <br />
                    <button
                      href="#"
                      class="btn btn-primary btn-md"
                      type="submit"
                    >
                      Verstuur
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-5">
              <div class="card contact-card">
                <div class="card-body">
                  <h2 class="card-title">Social media</h2>
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
      </React.Fragment>
    );
  }
}

export default Contact;
