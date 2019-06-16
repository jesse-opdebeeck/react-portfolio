import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

import Himym from "../img/himym.png";
import Urb from "../img/urb.png";
import Sky from "../img/sky.png";

import Oscar from "../img/oscar.png";
import Books from "../img/books.png";
import Bier from "../img/bier.png";

const texts = [
  "'The Playbook' en 'The Bro Code' zijn twee boeken uit de serie How I Met Your Mother, een sitcom die me aangenaam verrast heeft. Het bekertje is gevuld met uitgetrokken nietjes uit papieren van een vakantiewerk dat ik ooit deed en bijhoud als een herinnering, want het zijn echt wel ridicuul veel nietjes.",
  "Hier vinden we een CD van Urbanus, mijn favoriete Belgische comedian sinds mijn kindertijd. Ik heb zijn optredens gegeven tijdens lessen in de lagere school, tijdens trouwfeesten en me als zijn stripfiguur verkleed met carnaval. Daar naast staat één van mijn favoriete games, Dishonored. Helemaal rechts zie je op de voorgrond een zakje blauw snoep dat gemaakt is om te lijken op 'Blue Sky', de drugs die gemaakt worden in wat makkelijk mijn favoriete drama-serie is: Breaking Bad. Op de achtergrond staat een comic book-versie van Django Unchained, een van mijn favoriete films van mijn absoluut favoriete regisseur.",
  "Het grote zwarte boek op de achtergrond is niets lugubers, beloofd. Het is een boek vol artwork van nog één van mijn favoriete games, Skyrim. Daarvoor zien we een cd met de soundtrack van één de eerste Wii-game die ik ooit kreeg van Sinterklaas, naar schatting in 2008. Nog daarvoor staat mijn blauwe Nintendo DSi, een apparaatje dat al jaren geen gebruik meer heeft gezien maar me toch door vele lange autoreizen heeft gedragen.",
  "Het belangrijkste item hier is het Oscar standbeeldje. Dit is iets dat ik gekocht heb in 2013 en staat symbool voor mijn acteercarrière die ook al sinds dat jaar bezig is. Daarnaast zien we nog een indrukwekkend houtwerk dat vroger van mijn grootouders was, alsook een toegangspas van Digital First en een set kaarten van MNM in een Brits thema. Omdat het kan.",
  "Boeken. Veel boeken. Sinds de middelbare school lees ik geen Nederlandse boeken meer, dus zijn dit allemaal Engelstalige. De volledige series van A Song Of Ice And Fire, Lord of the Rings en Hunger Games zijn in mijn bezit, alsook enkele aparte boekjes. Ervoor zie je ook twee schattige kopjes van Friends staan.",
  "Sinds 2017 verzamel ik van elke memorabele vakantie een bierflesje. Eentje is volledig legaal meegenomen uit een restaurant in de Ardennen, eentje was meegenomen uit Spanje in een jaar waarin de Duivels speelden, één flesje is een eigen brouw van de voorzitter van mijn toneelvereniging, en het vierde flesje is gewoon lekker bier."
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
        <Helmet>
          <title>Over Jesse</title>
        </Helmet>
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
              onClick={() => this.changeText(0)}
            />
            <img
              src={Urb}
              className="col-4 mx-0 px-0 h-100 rek-part light"
              alt="stuk foto van rek"
              onClick={() => this.changeText(1)}
            />
            <img
              src={Sky}
              className="col-4 mx-0 px-0 h-100 rek-part"
              alt="stuk foto van rek"
              onClick={() => this.changeText(2)}
            />
          </div>
          <div className="row">
            <img
              src={Oscar}
              className="col-3 mx-0 px-0 h-100 rek-part"
              alt="stuk foto van rek"
              onClick={() => this.changeText(3)}
            />
            <img
              src={Books}
              className="col-6 mx-0 px-0 h-100 rek-part"
              alt="stuk foto van rek"
              onClick={() => this.changeText(4)}
            />
            <img
              src={Bier}
              className="col-3 mx-0 px-0 h-100 rek-part"
              alt="stuk foto van rek"
              onClick={() => this.changeText(5)}
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Over;
