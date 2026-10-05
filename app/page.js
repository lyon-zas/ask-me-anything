import RegistrationForm from "../components/RegistrationForm";

const FORM_URL = "https://forms.gle/kJfmzGLr8kRFn8rHA";
const LOGO_ALT = "Next Gen Africa Talks. Driving Change From Within";

const chapters = [
  ["0:00", "The Open", "One question to start the room thinking."],
  ["0:05", "This or That", "A quick game. You vote with a card, the speakers defend their side."],
  ["0:10", "The Conversation", "The host and three speakers on the 4Ps of networking."],
  ["0:30", "Ask Me Anything", "The microphone comes to you."],
  ["0:55", "The Hot Seat", "A guest draws one surprise question for each speaker."],
  ["1:03", "The One Thing", "Each speaker shares the one lesson they wish they had heard earlier."],
  ["1:10", "Opportunity Corner", "Jobs, fellowships, grants and events that are open right now."],
  ["1:15", "The Connection Room", "Cameras off. Connection Bingo, then open networking."],
];

const faqs = [
  ["What does it cost?", "Nothing. Episode 01 is free. We only ask that you show up if you take a seat."],
  ["Who can come?", "Young people who are starting out or building: students, graduates, young professionals, founders and creatives."],
  ["How do I know I have a seat?", "We send a confirmation on WhatsApp. Reply YES within 24 hours to hold it. Seats not confirmed go to the waitlist."],
  ["Is it recorded?", "Yes. It is a live podcast recording, filmed and published as an episode and as short clips. By attending you agree to appear in it."],
  ["Can I bring a friend?", "Each person needs their own registration, because seats are limited."],
  ["I can't make it. Can I still watch?", "Yes. The full episode goes out the week after. Follow Next Gen Africa to see it first."],
];

export default function Home() {
  return (
    <>
      <div className="rail" aria-hidden="true" />

      <header className="top">
        <div className="wrap">
          <img src="/logo-white.png" alt={LOGO_ALT} />
          <a className="btn small" href={FORM_URL} target="_blank" rel="noopener noreferrer">
            Register
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <div className="hero-copy">
              <div className="live">
                <span className="tally">
                  <i />
                  LIVE PODCAST RECORDING
                </span>
                <span className="label">Episode 01 · A birthday project by Goodness Alabi</span>
              </div>
              <h1>
                <span>Ask Me</span>
                <span>Anything</span>
              </h1>
              <p className="tagline">Young people. Real questions. Honest conversations.</p>
              <p className="hero-lede">
                A live podcast session where young Africans ask the questions that shape careers and lives, and three
                people who have walked the road answer honestly.
              </p>
              <div className="facts">
                <div>
                  <span className="label">Date</span>
                  <b>Sat 17 October 2026</b>
                </div>
                <div>
                  <span className="label">Time</span>
                  <b>To be announced</b>
                </div>
                <div>
                  <span className="label">Venue</span>
                  <b>To be announced</b>
                </div>
                <div>
                  <span className="label">Room</span>
                  <b>40 seats</b>
                </div>
              </div>
              <div className="cta-row">
                <a className="btn" href={FORM_URL} target="_blank" rel="noopener noreferrer">
                  Register for a seat
                </a>
                <small>Free. Seats are curated. Registration closes Tuesday 13 October.</small>
              </div>
            </div>
            <div className="hero-photo">
              <picture>
                <source media="(min-width: 960px)" srcSet="/studio.jpg" />
                <img
                  src="/studio-set.jpg"
                  alt="The open studio set: two cream armchairs, podcast microphones and a red side table"
                />
              </picture>
            </div>
          </div>
        </section>

        <section className="promise">
          <div className="wrap">
            <h2>You may just be one answer away from your next big break.</h2>
            <p>
              We all have questions. Career questions. Money questions. &quot;Am I doing this right?&quot; questions. Most
              of us work them out alone. Ask Me Anything is the room where you get to ask, with the people who might have
              the answers sitting across from you.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="section-head">
              <span className="label">Why this room</span>
              <h2>No speeches. No slides. A conversation.</h2>
            </div>
            <div className="pillars">
              <div>
                <h3>Real questions</h3>
                <p>Yours. Sent in before the day or asked live from your seat. No question is too basic.</p>
              </div>
              <div>
                <h3>Honest answers</h3>
                <p>
                  Three speakers telling the truth about how it actually happened for them, and what they would do
                  differently.
                </p>
              </div>
              <div>
                <h3>Real connections</h3>
                <p>
                  The session ends in the Connection Room, where you meet the speakers and the people sitting beside you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="episode">
          <div className="wrap">
            <div className="section-head">
              <span className="label">Episode 01</span>
              <h2>Getting It Right With Networking</h2>
              <p>How to build and sustain long-term relationships when you&apos;re just starting out.</p>
            </div>
            <div className="episode-grid">
              <p className="quote">
                Networking isn&apos;t about knowing everyone. <em>It&apos;s about becoming someone worth knowing.</em>
              </p>
              <div className="episode-body">
                <p>
                  Networking doesn&apos;t start with networking. It starts with who you are becoming. Before you ask
                  &quot;who do I know?&quot;, ask &quot;who am I becoming?&quot;
                </p>
                <p>
                  Then it gets intentional: the people you build with, the places you position yourself, and how you show
                  up once you are in the room.
                </p>
              </div>
              <div className="ps">
                <div>
                  <h3>Person</h3>
                  <p>Who are you becoming?</p>
                </div>
                <div>
                  <h3>People</h3>
                  <p>Who are you building relationships with?</p>
                </div>
                <div>
                  <h3>Places</h3>
                  <p>Where are you positioning yourself?</p>
                </div>
                <div>
                  <h3>Participation</h3>
                  <p>How are you showing up and contributing?</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="section-head">
              <span className="label">In the room</span>
              <h2>90 minutes. Eight moments.</h2>
              <p>The episode rundown, start to finish. Cameras roll for the first 75 minutes.</p>
            </div>
            <div className="room-grid">
              <ol className="chapters">
                {chapters.map(([time, title, text]) => (
                  <li key={time}>
                    <time>{time}</time>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </li>
                ))}
              </ol>
              <aside className="corner">
                <span className="label">New every episode</span>
                <h3>Opportunity Corner</h3>
                <p>Every episode ends with openings you can act on that week.</p>
                <ul>
                  <li>Live opportunities shared from the stage by the host and speakers</li>
                  <li>An Asks and Offers board where you pin what you need and what you can give</li>
                  <li>The full list sent to your WhatsApp the next day</li>
                </ul>
                <p>And the best question of the day wins a one-on-one call with a speaker.</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="episode">
          <div className="wrap">
            <div className="section-head">
              <span className="label">What you leave with</span>
              <h2>Four things, and possibly one answer that changes something.</h2>
            </div>
            <div className="leave">
              <div>
                <b>ONE</b>
                <span>new idea</span>
              </div>
              <div>
                <b>ONE</b>
                <span>practical action</span>
              </div>
              <div>
                <b>ONE</b>
                <span>new perspective</span>
              </div>
              <div>
                <b>ONE</b>
                <span>meaningful connection</span>
              </div>
            </div>
            <p className="who">
              <strong>Who it&apos;s for:</strong> students, graduates, young professionals, founders, freelancers and
              creatives who are building themselves and want to build the right relationships along the way.
            </p>
          </div>
        </section>

        <section className="people">
          <div className="wrap">
            <div className="people-grid">
              <div className="host-note">
                <span className="label">A note from the host</span>
                <h2
                  style={{
                    fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Why I&apos;m doing this for my birthday
                </h2>
                <p>
                  Every year, a birthday gives us a reason to celebrate another year of life. This year I wanted to do
                  something different. I wanted to create a room.
                </p>
                <p>
                  A room where young people can ask the questions they are figuring out alone, about careers,
                  relationships, networking, life and becoming, and sit across from people who have walked some of those
                  roads before them.
                </p>
                <p>So for my birthday, I&apos;m launching Ask Me Anything by Next Gen Africa.</p>
                <p className="sign">
                  Goodness Alabi<small>Host, and founder of Next Gen Africa</small>
                </p>
              </div>
              <div className="speakers">
                <span className="label">The people behind the conversation</span>
                <div className="seats">
                  <div>
                    <b>SPEAKER 1</b>
                    <span>Revealed Sat 10 Oct</span>
                  </div>
                  <div>
                    <b>SPEAKER 2</b>
                    <span>Revealed Sun 11 Oct</span>
                  </div>
                  <div>
                    <b>SPEAKER 3</b>
                    <span>Revealed Mon 12 Oct</span>
                  </div>
                </div>
                <p>Three speakers, revealed one a day from Saturday 10 October.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="register on-cream" id="register">
          <div className="wrap">
            <div className="reg-grid">
              <div className="reg-side">
                <div className="section-head" style={{ marginBottom: 0 }}>
                  <span className="label">Registration</span>
                  <h2>Ask for your seat</h2>
                  <p>
                    There are 40 seats. Tell us who you are and what you want to ask. We confirm seats on WhatsApp within
                    48 hours.
                  </p>
                </div>
                <ul>
                  <li>
                    <span>Date</span>
                    <b>Saturday 17 October 2026</b>
                  </li>
                  <li>
                    <span>Cost</span>
                    <b>Free</b>
                  </li>
                  <li>
                    <span>Registration closes</span>
                    <b>Tuesday 13 October</b>
                  </li>
                  <li>
                    <span>Venue and time</span>
                    <b>Sent with your confirmation</b>
                  </li>
                </ul>
              </div>
              <RegistrationForm />
            </div>
          </div>
        </section>

        <section className="faq">
          <div className="wrap">
            <div className="section-head">
              <span className="label">Questions</span>
              <h2>Before you register</h2>
            </div>
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <img src="/logo-white.png" alt={LOGO_ALT} />
          <p>
            Ask Me Anything is Next Gen Africa&apos;s monthly conversation series, launched as Goodness Alabi&apos;s 2026
            birthday project.
          </p>
        </div>
      </footer>
    </>
  );
}
