import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

class Over extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header title="Over Jesse" />
        <div className="container">
          <h1 className="mt-5">Over</h1>
          <p className="lead">
            Als je mij beter wil leren kennen is de beste manier natuurlijk om
            met me te praten in een rustig café met een fris biertje in de hand.
            Of aan de hand van deze pagina zal je ook al wel een goed idee
            krijgen van wie ik ben.
          </p>
          <p>
            Hieronder vind je een foto van een rek in mijn slaapkamer. Ga met je
            muis over een deel van de afbeelding om te lezen welk verhaal er
            achter zit.
          </p>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Over;
