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
            <a href="https://femcoders.factoriaf5.org/">
              <button className="button--red">
                <i className="fa-brands fa-apple"></i>Download
              </button>
            </a>
            <a href="https://www.somosf5.org/">
              <button className="button--red">
                <i className="fa-brands fa-google-play"></i>Download
              </button>
            </a>
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
      <div id="home__cards">
        <div className="card--colored">
          <div className="card--padding" id="icon__users--background">
            <i className="fa-solid fa-users fa-beat fa-2xl"></i>
          </div>
          <h4>Identify Goals</h4>
        </div>
        <div className="card--colored">
          <div className="card--padding" id="icon__code--background">
            <i className="fa-solid fa-code fa-beat fa-2xl"></i>
          </div>
          <h4>Situation Analysis</h4>
        </div>
        <div className="card--colored">
          <div className="card--padding" id="icon__gear--background">
            <i className="fa-solid fa-gear fa-beat fa-2xl"></i>
          </div>
          <h4>Tasks Settings</h4>
        </div>
        <div className="card--colored">
          <div className="card--padding" id="icon__comments--background">
            <i className="fa-solid fa-comments fa-beat fa-2xl"></i>
          </div>
          <h4>Social Interaction</h4>
        </div>
        <div className="card--colored">
          <div className="card--padding" id="icon__rocket--background">
            <i className="fa-solid fa-rocket fa-beat fa-2xl"></i>
          </div>
          <h4>Get Things Done</h4>
        </div>
      </div>
    </section>
  );
}
