import "./App.css";
import travelHockeyLogo from "./assets/travel-hockey-logo.png";
import scoreboardImg from "./assets/scoreboard.png";
import photoOne from "./assets/photo-one.jpg";
import photoTwo from "./assets/photo-two.jpg";
import statelineTeamImg from "./assets/stateline-team.jpg";
import eraLogo from "./assets/era-logo.png";
import statelineLogo from "./assets/stateline-logo.png";
import gscLogo from "./assets/gsc-logo.png";

const STATELINE_URL =
  "https://greenwichskatingclub.com/stateline-hawks";

/*
  UPDATE THIS ONE VALUE when the final public GSC
  Wix domain is connected.

  Every internal footer link below is built from
  this base URL.
*/
const SITE_URL =
  "https://www.greenwichskatingclub.com";

const MEMBER_LOGIN_URL =
  "https://www.greenwichskatingclub.org/login";

const ADMISSIONS_EMAIL =
  "gscadmissions@greenwichskatingclub.org";

const ADMISSIONS_PHONE = "(203) 622-9583";

const exploreGroups = [
  {
    title: "About",
    links: [
      {
        label: "About GSC",
        href: `${SITE_URL}/about`,
      },
      {
        label: "Club History",
        href: `${SITE_URL}/history`,
      },
      {
        label: "Board of Governors",
        href: `${SITE_URL}/board`,
      },
      {
        label: "GSC Alumni",
        href: `${SITE_URL}/alumni`,
      },
    ],
  },
  {
    title: "Membership",
    links: [
      {
        label: "Admissions Process",
        href: `${SITE_URL}/admissions`,
      },
    ],
  },
  {
    title: "Programs",
    links: [
      {
        label: "Learn to Skate",
        href: `${SITE_URL}/learn-to-skate`,
      },
      {
        label: "Mini Mites",
        href: `${SITE_URL}/mini-mites`,
      },
      {
        label: "Youth Travel Hockey",
        href: `${SITE_URL}/youth-travel-hockey`,
      },
      {
        label: "Stateline Girls Hockey",
        href: `${SITE_URL}/stateline-girls-hockey`,
      },
      {
        label: "Figure Skating",
        href: `${SITE_URL}/figure-skating`,
      },
      {
        label: "Adult Hockey",
        href: `${SITE_URL}/adult-hockey`,
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "Map & Directions",
        href: `${SITE_URL}/directions`,
      },
      {
        label: "Contact Form",
        href: `${SITE_URL}/contact`,
      },
    ],
  },
];

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

function FooterArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />

      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="
          M20 10
          c0 5-8 11-8 11
          S4 15 4 10
          a8 8 0 1 1 16 0Z
        "
      />

      <circle
        cx="12"
        cy="10"
        r="2.5"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        className="icon-fill"
        cx="17.5"
        cy="6.5"
        r="1"
      />
    </svg>
  );
}

function FooterLogo() {
  return (
    <a
      className="footer-logo"
      href={`${SITE_URL}/`}
      target="_top"
      aria-label="Greenwich Skating Club home"
    >
      <img
        src={gscLogo}
        alt="Greenwich Skating Club"
      />
    </a>
  );
}

function ExploreMenu() {
  return (
    <nav
      className="footer-menu"
      aria-label="Footer navigation"
    >
      <h2>Explore</h2>

      <div className="footer-menu__groups">
        {exploreGroups.map((group) => (
          <div
            className="footer-menu__group"
            key={group.title}
          >
            <h3 className="footer-menu__group-title">
              {group.title}
            </h3>

            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_top"
                  >
                    <span>{link.label}</span>

                    <FooterArrowIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

function ConnectPanel() {
  return (
    <section
      className="footer-connect"
      aria-labelledby="connect-title"
    >
      <div className="footer-connect__info">
        <h2 id="connect-title">
          Connect
        </h2>

        <p>
          Questions about joining Greenwich Skating
          Club or visiting the rink?
        </p>

        <div className="footer-connect__details">
          <a
            href={`${SITE_URL}/directions`}
            target="_top"
          >
            <PinIcon />

            <span>
              Cardinal Road · Greenwich, Connecticut
            </span>
          </a>

          <a href={`mailto:${ADMISSIONS_EMAIL}`}>
            <EmailIcon />

            <span>
              {ADMISSIONS_EMAIL}
            </span>
          </a>

          <a
            href={`tel:+1${ADMISSIONS_PHONE.replace(/\D/g, "")}`}
          >
            <PhoneIcon />

            <span>
              Phone: {ADMISSIONS_PHONE}
            </span>
          </a>
        </div>

        <a
          className="member-button"
          href={MEMBER_LOGIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          <span>Member Login</span>

          <FooterArrowIcon />
        </a>

        <a
          className="instagram-link"
          href="https://www.instagram.com/thegreenwichskatingclub/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />

          <span>
            Follow GSC on Instagram
          </span>
        </a>
      </div>

      <div className="footer-map">
        <iframe
          title="Greenwich Skating Club location"
          src="https://www.google.com/maps?q=Greenwich+Skating+Club,+Cardinal+Road,+Greenwich,+CT&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
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

      <footer className="site-footer">
        <div
          className="site-footer__accent"
          aria-hidden="true"
        >
          <span />
          <span />
        </div>

        <div
          className="site-footer__rings"
          aria-hidden="true"
        />

        <div className="footer-container site-footer__main">
          <section
            className="footer-brand"
            aria-label="Greenwich Skating Club"
          >
            <FooterLogo />
          </section>

          <ExploreMenu />

          <ConnectPanel />
        </div>

        <div className="site-footer__bottom">
          <div className="footer-container site-footer__bottom-inner">
            <p>
              © {currentYear} Greenwich Skating Club
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;