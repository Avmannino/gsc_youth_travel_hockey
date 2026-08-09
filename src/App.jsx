import "./App.css";
import travelHockeyLogo from "./assets/travel-hockey-logo.png";
import scoreboardImg from "./assets/scoreboard.png";
import photoOne from "./assets/photo-one.jpg";
import photoTwo from "./assets/photo-two.jpg";
import statelineTeamImg from "./assets/stateline-team.jpg";
import eraLogo from "./assets/era-logo.png";
import statelineLogo from "./assets/stateline-logo.png";

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
            <img
              src={eraLogo}
              alt="ERA"
              className="gallery__color-block-logo"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAM COPY
      ====================================================== */}

      <section className="program">
        <div className="program__inner">
          <div className="program__video-frame">
            <div
              className="program__video-accent program__video-accent--start"
              aria-hidden="true"
            />

            <div
              className="program__video-accent program__video-accent--end"
              aria-hidden="true"
            />

            <iframe
              className="program__video"
              src="https://player.vimeo.com/video/1146814668?h=782dd3f8d6"
              title="vimeo-player"
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
            />
          </div>

          <div className="program__content">
            <h2 className="program__heading">Mites to Midget</h2>

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
        </div>
      </section>

      {/* =====================================================
          STATELINE
      ====================================================== */}

      <section className="stateline">
        <div className="stateline__inner">
          <div className="stateline__image-frame">
            <div
              className="stateline__image-accent stateline__image-accent--start"
              aria-hidden="true"
            />

            <div
              className="stateline__image-accent stateline__image-accent--end"
              aria-hidden="true"
            />

            <img
              src={statelineTeamImg}
              alt="Stateline Hawks team"
              className="stateline__image"
            />
          </div>

          <div className="stateline__content">
            <img
              src={statelineLogo}
              alt="Stateline Hawks"
              className="stateline__logo"
            />

            <h2 className="stateline__heading">Stateline Hawks</h2>

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