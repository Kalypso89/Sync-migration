export default function DescriptionOrganism() {
  return (
    <section id="description">
      <div id="description__organize">
        <div id="organize__left">
          <img src="/assets/img/description-1-app.png" alt="Picks" />
        </div>
        <div id="organize__right">
          <h2>Organize Your Time And Start Getting Results</h2>
          <p>
            Sync is the first mobile app on the market to harness the power of
            social connections to help you stop procrastinating and start
            getting things done. Give it a try and see the changes right away
          </p>
          <ul>
            <li>Analyse and evaluate your current status and productivity</li>
            <li>Begin monitoring your day to day routine with Sync app</li>
            <li>See the improved results in no more than a couple of weeks</li>
          </ul>
          <a href="https://femcoders.factoriaf5.org/">
            <button className="button--red">LIGHTBOX</button>
          </a>
        </div>
      </div>

      <div id="description__schedule">
        <div id="schedule__left">
          <div id="schedule__buttons">
            <div id="schedule__rows">
              <div id="schedule__row1">
                <button id="schedule__button">
                  <i
                    className="fa-regular fa-clock"
                    aria-hidden="true"
                    id="schedule__clock"
                  ></i>
                  <b>Schedule</b>
                </button>
                <button>
                  <i className="fa fa-list-ul" aria-hidden="true"></i>
                  <b>Tracking</b>
                </button>
              </div>
              <div id="schedule__row2">
                <button>
                  <i className="fa fa-calendar-alt" aria-hidden="true"></i>
                  <b>Organize</b>
                </button>
              </div>
            </div>
          </div>
          <p>
            <b>Schedule tasks</b> to keep track of their completion. Sync
            provides multiple scheduling options including alarms and reminders.
          </p>
          <ul>
            <li>
              <i className="fa-regular fa-square-check"></i>You can always add
              new tasks or change the settings of existing ones in your calendar
              view or the app control panel
            </li>
            <li>
              <i className="fa-regular fa-square-check"></i>It's easy to stay
              focused on your most important daily activities that will get you
              closer to meeting your goals
            </li>
            <li>
              <i className="fa-regular fa-square-check"></i>Use phone reminders
              to free up your long term memory which will reduce stress and make
              you more productive
            </li>
          </ul>
          <div className="terms__buttons">
            <a href="https://femcoders.factoriaf5.org/">
              <button className="button--red">TERMS</button>
            </a>
            <a href="https://www.somosf5.org/">
              <button className="button--white">PRIVACY</button>
            </a>
          </div>
        </div>
        <div id="schedule__right">
          <img src="/assets/img/description-2-app.png" alt="Calendar" />
        </div>
      </div>
    </section>
  );
}
