import React, { Component } from "react";

import HQImg from "../../img/hq.png";
import OlijfImg from "../../img/olijftak.jpg";
import WorxImg from "../../img/worx.png";
import BeegoImg from "../../img/beego.png";
import PolletImg from "../../img/pollet.jpg";

class Ervaringen extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="skillsection">
          <h2 className="my-5 display-3 text-center title-bg">
            <span>Ervaringen</span>
          </h2>
          <div className="row my-5">
            <div className="col-3 offset-1">
              <img className="ervaring-foto" src={HQImg} alt="foto" />
            </div>
            <div className="col-6 offset-1">
              <h3>Stage @ HQ</h3>
              <p className="lead blue-text">Maart 2019</p>
              <p>
                Tijdens mijn Se-n-Se-opleiding had ik de kans om stage te lopen
                bij de start-up HQ, een toen nog kleine organisatie waar gewerkt
                werd aan hun webapp en website. Deze stage was ik begonnen
                zonder enige kennis van React en weinig van Javascript, maar
                tijdens die ene maand heb ik de technologie en de taal toch goed
                genoeg onder de knie gekregen om dit portfolio erin te maken.
                Daarnaast was het ook enorm aangenaam om met de collega's en
                bazen samen te werken en de meetings bij te wonen.
              </p>
            </div>
          </div>
          <div className="row my-5 text-right">
            <div className="col-6 offset-1">
              <h3>Studentenjob @ Beego</h3>
              <p className="lead blue-text">December 2018</p>
              <p>
                Beego is een start-up die studenten binnen de IT-sector
                wegstuurt om bij mensen thuis hen te helpen met allerlei
                computerproblemen. Deze klusjes varieerden bij wijze van spreken
                van een stekker inpluggen tot het herconfigureren van
                mail-servers. Het was een job waar ik vooral aanvankelijk schrik
                voor had aangezien ik nooit eerder iets soortgelijks had gedaan,
                maar dit was meteen ook één van de redenen waarom ik ermee
                begonnen was: even uit die comfort zone stappen en nieuwe dingen
                proberen om zo bij te leren.
              </p>
            </div>
            <div className="col-3 offset-1">
              <img className="ervaring-foto" src={BeegoImg} alt="foto" />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-3 offset-1">
              <img className="ervaring-foto" src={OlijfImg} alt="foto" />
            </div>
            <div className="col-6 offset-1">
              <h3>Infosessies @ De Olijftak</h3>
              <p className="lead blue-text">
                November 2018, December 2018, Januari 2019
              </p>
              <p>
                Voor het vak Helpdesk tijdens de Se-n-S-opleiding hadden we met
                z'n allen de unieke kans om infosessies te geven in het
                dienstencentrum De Olijftak in Antwerpen. Dit hebben we tot drie
                maal toe gedaan en elke keer was een succes. De eerste twee
                sessies dienden vooral om de mensen in te lichten over wie we
                zijn en wat we kwamen doen, en dan de rest van de tijd te
                benutten door hen te helpen met de problemen en onduidelijkheden
                die ze hadden met hun smartphones, tablets en laptops. Tijdens
                de derde en laatste sessie besloten we een korte presentatie te
                geven over slechte en sterke passwords en hoe je die best kan
                bijhouden, aangezien tijdens de vorige sessies bleek dat dit een
                veel voorkomend probleem was.
              </p>
            </div>
          </div>
          <div className="row my-5 text-right">
            <div className="col-6 offset-1">
              <h3>Studentenjobs @ SD Worx</h3>
              <p className="lead blue-text">September 2017, Augustus 2018</p>
              <p>
                Tijdens de grote vakanties werkte ik als student tot nu toe twee
                keer bij wereldwijd bekend HR-en consultancy-bedrijf SD Worx.
                Het eerste jaar had ik de kans om mee het dagdagelijkse
                takenpakket van een verantwoordelijke van de Facility-afdeling
                uit te voeren, en het tweede jaar hadden ze me ingezet voor
                administratieve taken op de Corporate HR-afdeling. Beide
                ervaringen waren een goede manier voor mij om te proeven van een
                echte professionele bedrijfssfeer.
              </p>
            </div>
            <div className="col-3 offset-1">
              <img className="ervaring-foto" src={WorxImg} alt="foto" />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-3 offset-1">
              <img className="ervaring-foto" src={PolletImg} alt="foto" />
            </div>
            <div className="col-6 offset-1">
              <h3>Studentenjob @ Bakkerij Pollet</h3>
              <p className="lead blue-text">2017 - 2018</p>
              <p>
                Misschien minder indrukwekkend in een ICT-setting, maar toch
                iets dat me veranderd heeft als persoon. Als mijn eerste
                serieuze studentenjob ooit op regelmatige basis heb ik gedurende
                anderhalf jaar gewerkt bij een bakkerij in Ranst die vooral
                brood produceerde voor automaten in de streek. Het waren lange
                nachten en vroege ochtenden maar ik heb er veel bijgeleerd en
                mijn baas heeft me een goede werkethiek aangeleerd.
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Ervaringen;
