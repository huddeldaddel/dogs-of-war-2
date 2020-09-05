import React from "react";
import cn from "classnames";

import { LANDING_PAGE_SCREEN_NAME } from "../landing-page/LandingPageScreen";

import styles from "./ImprintScreen.module.css";

export interface ImprintScreenProps {
  onScreenChangeRequired: (screenName: string) => void;
}

function ImprintScreen(props: ImprintScreenProps) {
  return (
    <div className={styles.imprint}>
      <h1>Impressum</h1>
      <p>Angaben gemäß § 5 TMG</p>
      <p>
        Thomas Werner <br />
        Elsa-Brändström-Straße 8<br />
        13189 Berlin <br />
      </p>
      <p>
        <strong>Vertreten durch: </strong>
        <br />
        Thomas Werner
        <br />
      </p>
      <p>
        <strong>Kontakt:</strong> <br />
        E-Mail:{" "}
        <a href="mailto:postmaster@retro-carnage.net">
          postmaster@retro-carnage.net
        </a>
        <br />
      </p>

      <h2>Haftungsausschluss: </h2>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>

      <h2>Datenschutz</h2>
      <p>
        Die Nutzung dieser Webseite ist ohne Angabe personenbezogener Daten
        möglich.
        <br />
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
        der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich. <br />
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
        Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
        angeforderter Werbung und Informationsmaterialien wird hiermit
        ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
        ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
        Werbeinformationen, etwa durch Spam-Mails, vor.
      </p>
      <button
        type="button"
        className={cn("btn", "btn-primary", "btn-lg", styles.button)}
        onClick={() => props.onScreenChangeRequired(LANDING_PAGE_SCREEN_NAME)}
      >
        Back
      </button>
      <p>
        <br />
        Impressum vom{" "}
        <a
          href="https://www.impressum-generator.de"
          rel="noopener noreferrer"
          target="_blank"
        >
          Impressum Generator
        </a>{" "}
        der{" "}
        <a
          href="https://www.kanzlei-hasselbach.de/standorte/bonn/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Kanzlei Hasselbach, Bonn
        </a>
      </p>
    </div>
  );
}

export const IMPRINT_SCREEN_NAME = "imprint";
export default ImprintScreen;
