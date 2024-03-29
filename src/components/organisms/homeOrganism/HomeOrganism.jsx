import { HomeCardMolecule } from "../../molecules/homeCardMolecule/HomeCardMolecule";
import { RoundedButton } from "../../atoms/buttons/roundedButton/RoundedButton";

import "./homeOrganism.css";

export default function HomeOrganism() {
  return (
    <section id="home">
      <div id="home__download">
        <div id="above__icons--float">
          <img
            id="green--diamond"
            src="/assets/img/decorative-green-diamond.svg"
            alt="Green diamond"
          />
          <img
            id="yellow--circle"
            src="/assets/img/decorative-yellow-circle.svg"
            alt="Yellow circle"
          />
        </div>
        <div id="home__description">
          <h1>Mobile App Landing Page</h1>
          <p className="text--full">
            Start focusing on your goals and get more things done with Sync
            mobile application. It's the first app to harness the power of
            social connections to help you stay focused and get organized
          </p>
          <div className="download__buttons">
            <RoundedButton
              href="https://femcoders.factoriaf5.org/"
              classButton="button--red"
              icon="fa-brands fa-apple"
              textButton="Download"
            />
            <RoundedButton
              href="https://www.somosf5.org/"
              classButton="button--red"
              icon="fa-brands fa-google-play"
              textButton="Download"
            />
          </div>
        </div>
      </div>
      <div id="medium__icons--float">
        <img
          id="medium__circle--white--left"
          src="/assets/img/decorative-white-circle.svg"
          alt="White left circle"
        />
        <img
          id="medium__circle--white--right"
          src="/assets/img/decorative-white-circle.svg"
          alt="White right circle"
        />
        <img
          id="medium__circle--blue--left"
          src="/assets/img/decorative-blue-circle.svg"
          alt="Blue left circle"
        />
      </div>
      <div id="header__mobile">
        <img src="/assets/img/header-iphone.png" alt="Iphone with Sync" />
      </div>
      <HomeCardMolecule />
    </section>
  );
}
