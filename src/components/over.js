import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import Himym from "../img/himym.png";
import Urb from "../img/urb.png";
import Sky from "../img/sky.png";

import Oscar from "../img/oscar.png";
import Books from "../img/books.png";
import Bier from "../img/bier.png";

const texts = [
  "Dit zijn de HIMYM boeken",
  "Dit is de Urbanus CD en Dishonored en Django",
  "Dit is het Skyrim boek en Zelda CD",
  "Dit is de Oscar",
  "Dit zijn de boeken",
  "Hier staan de bierflesjes"
];

class Over extends Component {
  state = {
    text: ""
  };

  changeText = i => {
    var index = i;
    if (this.state.text !== texts[index]) {
      this.setState({ text: texts[index] });
    }
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
            Hier zie je een afbeelding van een rek met een aantal items die een
            betekenis voor me hebben en waar een verhaal achter zit. Klik op een
            sectie van het rek om dat verhaal te weten te komen. Waarschuwing:
            Jesse staat niet garant dat alle informatie die u zal lezen
            noodzakelijk noch gewenst zal zijn.
          </p>
          <p className="col-8 offset-2 my-5 rek-text">{this.state.text}</p>
          <div className="row mt-5">
            <img
              src={Himym}
              className="col-4 mx-0 px-0 h-100 rek-part"
              alt="stuk foto van rek"
              onClick={this.changeText(0)}
            />
            <img
              src={Urb}
              className="col-4 mx-0 px-0 h-100 rek-part light"
              alt="stuk foto van rek"
              onClick={this.changeText}
            />
            <img
              src={Sky}
              className="col-4 mx-0 px-0 h-100 rek-part"
              alt="stuk foto van rek"
              onClick={this.changeText}
            />
          </div>
          <div className="row">
            <img
              src={Oscar}
              className="col-3 mx-0 px-0 h-100 rek-part"
              alt="stuk foto van rek"
              onClick={this.changeText}
            />
            <img
              src={Books}
              className="col-6 mx-0 px-0 h-100 rek-part"
              alt="stuk foto van rek"
              onClick={this.changeText}
            />
            <img
              src={Bier}
              className="col-3 mx-0 px-0 h-100 rek-part"
              alt="stuk foto van rek"
              onClick={this.changeText}
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Over;
