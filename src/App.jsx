import { useEffect } from "react";

/* ─── Google Fonts ─── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --navy:   #0d1b2e;
      --navy2:  #162540;
      --cream:  #f8f5f0;
      --warm:   #fdf8f2;
      --gold:   #b8860b;
      --gold-lt:#d4a017;
      --slate:  #4a5568;
      --text:   #1a202c;
      --border: #ddd5c8;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--cream);
      color: var(--text);
      overflow-x: hidden;
    }

    .serif { font-family: 'Cormorant Garamond', serif; }

    /* ── Nav ── */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      background: rgba(13,27,46,0.96);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(184,134,11,0.3);
      padding: 0 2rem;
      height: 60px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .nav-brand {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.1rem; font-weight: 600;
      color: #fff; letter-spacing: 0.02em;
    }
    .nav-brand span { color: var(--gold-lt); }
    .nav-links { display: flex; gap: 2rem; }
    .nav-links a {
      color: rgba(255,255,255,0.75);
      text-decoration: none;
      font-size: 0.8rem; font-weight: 500;
      letter-spacing: 0.06em; text-transform: uppercase;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--gold-lt); }

    /* ── Hero ── */
    .hero {
      min-height: 100vh;
      background: linear-gradient(160deg, var(--navy) 0%, var(--navy2) 60%, #1a2d4a 100%);
      display: flex; align-items: center;
      padding: 80px 6vw 60px;
      position: relative; overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 70% 60% at 80% 40%, rgba(184,134,11,0.08) 0%, transparent 70%);
      pointer-events: none;
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 4rem; align-items: center;
      max-width: 1200px; width: 100%; margin: 0 auto;
    }
    .hero-eyebrow {
      font-size: 0.72rem; font-weight: 600;
      letter-spacing: 0.18em; text-transform: uppercase;
      color: var(--gold-lt);
      margin-bottom: 1.2rem;
      display: flex; align-items: center; gap: 0.7rem;
    }
    .hero-eyebrow::before {
      content: ''; display: block;
      width: 32px; height: 1px; background: var(--gold);
    }
    .hero-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(3rem, 6vw, 5.2rem);
      font-weight: 700; line-height: 1.05;
      color: #fff;
      margin-bottom: 0.6rem;
    }
    .hero-title em {
      font-style: italic; color: var(--gold-lt);
    }
    .hero-subtitle {
      font-size: 0.9rem; font-weight: 400;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
      margin-bottom: 1.8rem;
    }
    .hero-desc {
      font-size: 1rem; line-height: 1.75;
      color: rgba(255,255,255,0.75);
      max-width: 560px; margin-bottom: 2.5rem;
    }
    .info-tiles {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 0.8rem; margin-bottom: 2.5rem;
    }
    .info-tile {
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      padding: 0.85rem 1rem;
      background: rgba(255,255,255,0.04);
      backdrop-filter: blur(4px);
    }
    .info-tile.wide { grid-column: 1 / -1; }
    .tile-label {
      font-size: 0.65rem; font-weight: 600;
      letter-spacing: 0.12em; text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 0.3rem;
    }
    .tile-value {
      font-size: 0.95rem; font-weight: 500; color: #fff;
    }
    .btn-row { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn-primary {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 0.8rem 1.8rem;
      background: var(--gold);
      color: var(--navy);
      font-weight: 600; font-size: 0.85rem;
      letter-spacing: 0.05em; text-transform: uppercase;
      border-radius: 6px; text-decoration: none;
      transition: background 0.2s, transform 0.15s;
    }
    .btn-primary:hover { background: var(--gold-lt); transform: translateY(-1px); }
    .btn-outline {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 0.8rem 1.8rem;
      border: 1.5px solid rgba(255,255,255,0.35);
      color: rgba(255,255,255,0.85);
      font-weight: 500; font-size: 0.85rem;
      letter-spacing: 0.05em; text-transform: uppercase;
      border-radius: 6px; text-decoration: none;
      transition: border-color 0.2s, color 0.2s, background 0.2s;
    }
    .btn-outline:hover {
      border-color: var(--gold-lt);
      color: var(--gold-lt);
      background: rgba(184,134,11,0.08);
    }

    /* Quick Info Card */
    .quick-card {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      padding: 1.6rem;
      backdrop-filter: blur(8px);
    }
    .quick-card-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.2rem; font-weight: 600;
      color: #fff;
      margin-bottom: 1.2rem;
      padding-bottom: 0.8rem;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .quick-row { margin-bottom: 1rem; }
    .quick-label {
      font-size: 0.65rem; font-weight: 600;
      letter-spacing: 0.12em; text-transform: uppercase;
      color: var(--gold); margin-bottom: 0.25rem;
    }
    .quick-value {
      font-size: 0.9rem; color: rgba(255,255,255,0.85);
      line-height: 1.4;
    }

    /* ── Sections ── */
    .section { padding: 80px 6vw; }
    .section-inner { max-width: 1200px; margin: 0 auto; }
    .section-alt { background: var(--warm); }

    .section-header { margin-bottom: 3rem; }
    .section-tag {
      font-size: 0.68rem; font-weight: 600;
      letter-spacing: 0.18em; text-transform: uppercase;
      color: var(--gold); margin-bottom: 0.5rem;
    }
    .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 600; color: var(--navy);
      line-height: 1.15;
    }

    /* About */
    .about-body {
      font-size: 1.05rem; line-height: 1.85;
      color: var(--slate);
      max-width: 760px;
    }

    /* Two-col grid */
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }

    /* List cards */
    .list-card {
      background: #fff;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.85rem 1.1rem;
      margin-bottom: 0.6rem;
      font-size: 0.88rem; color: var(--text);
      display: flex; align-items: center; gap: 0.7rem;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .list-card:hover {
      border-color: var(--gold);
      box-shadow: 0 2px 12px rgba(184,134,11,0.1);
    }
    .list-card::before {
      content: '';
      width: 5px; min-width: 5px; height: 5px;
      border-radius: 50%; background: var(--gold);
    }

    /* Awards */
    .awards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; }
    .award-card {
      background: var(--navy);
      border-radius: 10px;
      padding: 1.6rem 1.2rem;
      text-align: center;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .award-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(13,27,46,0.2); }
    .award-icon { font-size: 1.8rem; margin-bottom: 0.8rem; display: block; }
    .award-name {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1rem; font-weight: 600;
      color: #fff; line-height: 1.3;
    }

    /* Organisers */
    .org-chips { display: flex; flex-wrap: wrap; gap: 0.7rem; margin-top: 1.5rem; }
    .org-chip {
      background: #fff;
      border: 1px solid var(--border);
      border-radius: 100px;
      padding: 0.45rem 1.1rem;
      font-size: 0.82rem; color: var(--navy);
      font-weight: 500;
    }

    /* Footer */
    .footer {
      background: var(--navy);
      color: rgba(255,255,255,0.6);
      padding: 40px 6vw;
      text-align: center;
    }
    .footer-inner { max-width: 1200px; margin: 0 auto; }
    .footer-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.4rem; font-weight: 600;
      color: #fff; margin-bottom: 0.5rem;
    }
    .footer-contact { font-size: 0.85rem; margin-bottom: 1.5rem; }
    .footer-contact a { color: var(--gold-lt); text-decoration: none; }
    .footer-divider {
      height: 1px; background: rgba(255,255,255,0.1);
      margin: 1.5rem 0;
    }
    .footer-copy { font-size: 0.75rem; color: rgba(255,255,255,0.3); }

    /* Responsive */
    @media (max-width: 900px) {
      .hero-grid { grid-template-columns: 1fr; }
      .quick-card { display: none; }
      .two-col { grid-template-columns: 1fr; }
      .awards-grid { grid-template-columns: 1fr 1fr; }
      .nav-links { display: none; }
    }
    @media (max-width: 480px) {
      .awards-grid { grid-template-columns: 1fr; }
      .info-tiles { grid-template-columns: 1fr; }
      .info-tile.wide { grid-column: auto; }
    }

    /* Scroll fade-in */
    .fade-in {
      opacity: 0; transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .fade-in.visible { opacity: 1; transform: translateY(0); }
  `}</style>
);

/* ── Fade-in hook ── */
function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Data ─── */
const callForPapers = [
  "Innovative Teaching Pedagogy",
  "Best Institutional Practices",
  "Research & Innovation in Higher Education",
  "Intellectual Property Rights (IPR)",
  "Start-up, Skill Orientation & Success Stories",
];

const paperTypes = [
  "Teaching innovation case studies",
  "Survey-based academic studies",
  "Field projects and action research",
  "Individual success stories in teaching or research",
  "Institutional best practice models",
  "Entrepreneurship development initiatives",
  "Start-up ecosystem in higher education institutions",
];

const awards = [
  { icon: "🏆", name: "Innovative Teaching Pedagogy Award" },
  { icon: "🌱", name: "Green Innovation Award" },
  { icon: "🏛️", name: "Innovative Institute Award" },
  { icon: "👩‍🔬", name: "Woman Innovator Award" },
];

const organisers = [
  "Ashveena Innovators LLP",
  "Maulana Azad College",
  "SB College of Science",
  "Vidyapith Vikas Manch",
  "Rajkunwar Bahuuddeshiya Shikshan Sanstha",
  "Late Wamrao Pitambare College",
  "ACTRA",
  "ELTAI-CSN",
];

/* ─── App ─── */
export default function App() {
  useFadeIn();

  return (
    <>
      <FontLink />

      {/* Nav */}
      <nav className="nav">
        <div className="nav-brand">
          NES <span>2026</span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#papers">Papers</a>
          <a href="#awards">Awards</a>
          <a href="#organisers">Organisers</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">National Conference · April 2026</div>
            <h1 className="hero-title">
              National<br />
              Educators<br />
              <em>Summit 2026</em>
            </h1>
            <p className="hero-subtitle">
              Multidisciplinary Summit on Teaching, Research, Innovation &amp; IPR
            </p>
            <p className="hero-desc">
              A national platform for educators, researchers, innovators and academic leaders
              to present best practices, showcase institutional excellence, publish achievements
              and gain national recognition.
            </p>

            <div className="info-tiles">
              <div className="info-tile">
                <div className="tile-label">Summit Date</div>
                <div className="tile-value">15 April 2026</div>
              </div>
              <div className="info-tile">
                <div className="tile-label">Venue</div>
                <div className="tile-value">Maulana Azad College, CSN</div>
              </div>
              <div className="info-tile wide">
                <div className="tile-label">Last Date for Submission</div>
                <div className="tile-value">10 April 2026</div>
              </div>
            </div>

            <div className="btn-row">
              <a
                href="https://forms.gle/tscirfvKb54wunnb7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Register Now
              </a>
              <a
                href="mailto:ashveenallp@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Submit Paper
              </a>
            </div>
          </div>

          {/* Quick Info Card */}
          <div className="quick-card">
            <div className="quick-card-title">Quick Info</div>
            <div className="quick-row">
              <div className="quick-label">Registration Fees</div>
              <div className="quick-value">
                ₹1000 (Publication)<br />₹500 (Participation)
              </div>
            </div>
            <div className="quick-row">
              <div className="quick-label">Payment</div>
              <div className="quick-value">GPay / PhonePe: 9763186574</div>
            </div>
            <div className="quick-row">
              <div className="quick-label">Submission Email</div>
              <div className="quick-value">
                <a href="mailto:ashveenallp@gmail.com" style={{ color: "var(--gold-lt)", textDecoration: "none" }}>
                  ashveenallp@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section section-alt" id="about">
        <div className="section-inner">
          <div className="section-header fade-in">
            <div className="section-tag">About</div>
            <h2 className="section-title">About the Summit</h2>
          </div>
          <p className="about-body fade-in">
            This summit celebrates innovation in teaching, research, institutional practices and
            academic entrepreneurship. It provides a national forum for educators to present
            impactful work and collaborate with peers across disciplines and institutions.
            The summit aims to bridge theory and practice, fostering a culture of continuous
            improvement and innovation in Indian higher education.
          </p>
        </div>
      </section>

      {/* Call for Papers */}
      <section className="section" id="papers">
        <div className="section-inner">
          <div className="section-header fade-in">
            <div className="section-tag">Submissions</div>
            <h2 className="section-title">Call for Papers</h2>
          </div>
          <div className="two-col">
            <div className="fade-in">
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--navy)", marginBottom: "1rem" }}>
                Theme Areas
              </h3>
              {callForPapers.map((item) => (
                <div key={item} className="list-card">{item}</div>
              ))}
            </div>
            <div className="fade-in">
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--navy)", marginBottom: "1rem" }}>
                Paper Types Accepted
              </h3>
              {paperTypes.map((item) => (
                <div key={item} className="list-card">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section section-alt" id="awards">
        <div className="section-inner">
          <div className="section-header fade-in">
            <div className="section-tag">Recognition</div>
            <h2 className="section-title">National Awards</h2>
          </div>
          <div className="awards-grid">
            {awards.map((a) => (
              <div key={a.name} className="award-card fade-in">
                <span className="award-icon">{a.icon}</span>
                <div className="award-name">{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organisers */}
      <section className="section" id="organisers">
        <div className="section-inner">
          <div className="section-header fade-in">
            <div className="section-tag">Partners</div>
            <h2 className="section-title">Organised By</h2>
          </div>
          <div className="org-chips fade-in">
            {organisers.map((o) => (
              <span key={o} className="org-chip">{o}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-title">National Educators Summit 2026</div>
          <div className="footer-contact">
            Maulana Azad College, CSN · 15 April 2026 ·{" "}
            <a href="mailto:ashveenallp@gmail.com">ashveenallp@gmail.com</a>
          </div>
          <div className="btn-row" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
            <a
              href="https://forms.gle/tscirfvKb54wunnb7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Register Now
            </a>
            <a
              href="mailto:ashveenallp@gmail.com"
              className="btn-outline"
            >
              Submit Paper
            </a>
          </div>
          <div className="footer-divider" />
          <div className="footer-copy">
            © 2026 National Educators Summit · Organised by Ashveena Innovators LLP
          </div>
        </div>
      </footer>
    </>
  );
}