import "./App.css";
import travelHockeyLogo from "./assets/travel-hockey-logo.png";
import scoreboardImg from "./assets/scoreboard.png";
import photoOne from "./assets/photo-one.jpg";
import photoTwo from "./assets/photo-two.jpg";
import statelineTeamImg from "./assets/stateline-team.jpg";

const STATELINE_URL =
  "https://greenwichskatingclub.com/stateline-hawks";

function ArrowIcon() {
  return (
    <svg
      className="stateline-link__arrow"
      viewBox="0 0 38 24"
      aria-hidden="true"
    >
      <path
        d="M2 12H33M24 3L33 12L24 21"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  return (
    <main className="travel-page">
      {/* =====================================================
          TYPOGRAPHIC OPENING
      ====================================================== */}

      <section className="masthead">
        <div className="masthead__inner">
          <img
            src={travelHockeyLogo}
            alt="GSC Travel Hockey"
            className="masthead__logo"
          />

          <img
            src={scoreboardImg}
            alt="GSC scoreboard"
            className="masthead__scoreboard"
          />
        </div>
      </section>

      {/* =====================================================
          MISSION
      ====================================================== */}

      <section className="mission">
        <div className="mission__inner">
          <h2 className="mission__heading">Our Mission</h2>

          <p>
            Our mission for GSC Youth Travel Hockey is to build and grow a
            competitive, community-based hockey program centered on player
            development. We provide opportunities for players to progress at
            different ages and skill levels, with our top teams competing at
            the highest levels of CHC while maintaining well-structured teams
            where every player can develop, compete, and enjoy the game.
          </p>
        </div>
      </section>

      {/* =====================================================
          IMAGE MOSAIC
      ====================================================== */}

      <section className="gallery">
        <div className="gallery__inner">
          <div className="gallery__main">
            <img
              src={photoOne}
              alt="GSC youth hockey player"
            />
          </div>

          <div className="gallery__secondary">
            <img
              src={photoTwo}
              alt="Greenwich Skating Club travel hockey team"
            />
          </div>

          <div className="gallery__color-block">
            <span>GSC</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAM COPY
      ====================================================== */}

      <section className="program">
        <div className="program__inner">
          <div className="program__marker">
            <span>About The Program</span>
          </div>

          <div className="program__copy">
            <p>
              GSC Travel Hockey is open to children of GSC members, ages 6–18.
              We typically field three teams at the Squirt (U10), Peewee (U12),
              and Bantam (U14) levels, along with 8–10 Mite teams for players
              ages 6–8. We also partner with Wings Arena to offer split-season
              Midget teams at the U16 and U18 levels.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATELINE
      ====================================================== */}

      <section className="stateline">
        <div className="stateline__inner">
          <img
            src={statelineTeamImg}
            alt="Stateline Hawks team"
            className="stateline__image"
          />

          <div className="stateline__content">
            <div className="stateline__copy">
              <p>
                After graduating from the GSC Mite Program, female players also
                have the opportunity to continue with our all-girls sister
                program, the Stateline Hawks. To learn more, visit the Stateline
                Hawks page.
              </p>
            </div>

            <div className="stateline__link-wrap">
              <a
                href={STATELINE_URL}
                className="stateline-link"
                target="_top"
              >
                <span>Stateline Girls Hockey</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;