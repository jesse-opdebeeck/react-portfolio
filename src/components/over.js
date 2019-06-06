import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import Himym from "../img/himym.png";
import Urb from "../img/urb.png";
import Sky from "../img/sky.png";

import Oscar from "../img/oscar.png";
import Books from "../img/books.png";
import Bier from "../img/bier.png";

class Over extends Component {
  state = {
    hovered: "none"
  };
  render() {
    return (
      <React.Fragment>
        <Header title="Over Jesse" />
        <div className="container">
          <h1 className="mt-5">Maak kennis met me</h1>
          <p className="lead">
            Als je mij beter wil leren kennen is de beste manier natuurlijk om
            met me te praten in een rustig café met een fris biertje in de hand.
            Of aan de hand van deze pagina zal je ook al wel een goed idee
            krijgen van wie ik ben.
          </p>
          <p>
            Hier zie je een afbeelding van een rek met een aantal items die veel
            voor me betekenen en waar een verhaal achter zit. Kijk verder op
            deze pagina om dat verhaal te weten te komen. Waarschuwing: Jesse
            staat niet garant dat alle informatie die u zal lezen noodzakelijk
            noch gewenst zal zijn.
          </p>
          <div className="row">
            <img
              src={Himym}
              className="col-4 mx-0 px-0 h-100"
              alt="stuk foto van rek"
            />
            <img
              src={Urb}
              className="col-4 mx-0 px-0 h-100"
              alt="stuk foto van rek"
            />
            <img
              src={Sky}
              className="col-4 mx-0 px-0 h-100"
              alt="stuk foto van rek"
            />
          </div>
          <div className="row">
            <img
              src={Oscar}
              className="col-3 mx-0 px-0 h-100"
              alt="stuk foto van rek"
            />
            <img
              src={Books}
              className="col-6 mx-0 px-0 h-100"
              alt="stuk foto van rek"
            />
            <img
              src={Bier}
              className="col-3 mx-0 px-0 h-100"
              alt="stuk foto van rek"
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Over;
