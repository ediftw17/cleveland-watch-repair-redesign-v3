import './App.css'

const metrics = [
  { value: '$249-$495+', label: 'Mechanical overhaul range' },
  { value: '$35.00', label: 'Send-in evaluation option' },
  { value: '8-12 weeks', label: 'Typical turnaround window' },
  { value: '$14.95-$24.95', label: 'Published return shipping range' },
]

const serviceCards = [
  {
    title: 'Full service only',
    detail:
      'The service is focused on complete overhauls for mechanical wrist and pocket watches, not partial repairs.',
  },
  {
    title: 'Approval before shipping',
    detail:
      'The process starts by email. Watches are approved first, then sent in with tracking.',
  },
  {
    title: 'Mail-in model',
    detail:
      'No retail walk-in location is listed. Service is handled through mail-in workflow.',
  },
  {
    title: 'U.S. return shipping terms',
    detail:
      'Published return shipping is Priority Mail with a stated $14.95-$24.95 range and optional signature.',
  },
  {
    title: 'Detailed bench process',
    detail:
      'Published scope includes disassembly, cleaning, lubrication, regulation, and extended post-service testing.',
  },
]

const processSteps = [
  {
    title: 'Email first',
    detail: 'Send watch details to request service approval before shipping.',
  },
  {
    title: 'Receive direction',
    detail: 'After approval, follow packaging and shipping instructions.',
  },
  {
    title: 'Ship with tracking',
    detail: 'Use a sturdy box, include contact information, and send to the listed address.',
  },
  {
    title: 'Evaluation and estimate',
    detail: 'Watch is checked in and evaluated before full work begins.',
  },
  {
    title: 'Overhaul and return',
    detail: 'The watch is serviced, tested, and returned using published return-shipping terms.',
  },
]

const restorationPairs = [
  {
    id: 'waltham',
    title: '1916 Waltham trench watch',
    beforeSrc: '/source-photos/brianbementwalt1-768x512.jpg',
    beforeAlt: '1916 Waltham trench watch before service',
    afterSrc: '/source-photos/brianbementwalt3-768x494.jpg',
    afterAlt: '1916 Waltham trench watch after service',
  },
  {
    id: 'hamilton',
    title: '1901 Hamilton 943',
    beforeSrc: '/source-photos/honey943-927before-768x512.jpg',
    beforeAlt: '1901 Hamilton 943 before service',
    afterSrc: '/source-photos/honey943ham2-768x512.jpg',
    afterAlt: '1901 Hamilton 943 after service',
  },
  {
    id: 'rockford',
    title: '1908 Rockford grade 835',
    beforeSrc: '/source-photos/honey1908rock1-768x512.jpg',
    beforeAlt: '1908 Rockford grade 835 before service',
    afterSrc: '/source-photos/honey1908rock3-768x512.jpg',
    afterAlt: '1908 Rockford grade 835 after service',
  },
  {
    id: 'seth-thomas',
    title: '1902 Seth Thomas pocket watch',
    beforeSrc: '/source-photos/keithchevseththomas1-768x512.jpg',
    beforeAlt: '1902 Seth Thomas pocket watch before service',
    afterSrc: '/source-photos/keithchevseththomas10-768x512.jpg',
    afterAlt: '1902 Seth Thomas pocket watch after overhaul',
  },
]

const reviews = [
  {
    author: 'Aaron Rezendez',
    date: 'Mar 23, 2026',
    summary:
      'Shared that communication and photo documentation were clear throughout a 1928 Illinois restoration.',
  },
  {
    author: 'Cliff megerian',
    date: 'Feb 24, 2026',
    summary:
      'Reported strong restoration results on two family watches and consistent updates during service.',
  },
  {
    author: 'Keith',
    date: 'Jan 28, 2026',
    summary:
      'Described a restored 1945 family Elgin as a meaningful heirloom in reliable running condition.',
  },
  {
    author: 'Reid',
    date: 'Jan 25, 2026',
    summary:
      'Highlighted clear timelines and complete overhaul quality on a 1910 Howard pocket watch.',
  },
]

const faqs = [
  {
    question: 'Can I walk in with my watch?',
    answer:
      'The published model is mail-in service only, so watches are sent in after approval rather than dropped off at a retail counter.',
  },
  {
    question: 'Do I need to contact before shipping?',
    answer:
      'Yes. The process asks you to email first and receive approval before mailing your watch.',
  },
  {
    question: 'How long does service usually take?',
    answer:
      'Published turnaround is generally eight to twelve weeks, depending on queue, parts, and service requirements.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Cleveland Watch Repair',
  url: 'https://www.clevelandwatchrepair.com/',
  email: 'randall@clevelandwatchrepair.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'P.O. Box 361009',
    addressLocality: 'Strongsville',
    addressRegion: 'OH',
    postalCode: '44136',
    addressCountry: 'US',
  },
  areaServed: 'United States',
  description: 'Mail-in mechanical watch overhaul for antique and vintage wrist and pocket watches.',
}

function App() {
  return (
    <div className="site" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="nav-wrap">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="Cleveland Watch Repair home section">
            <span className="brand-main">Cleveland Watch Repair</span>
            <span className="brand-sub">Antique and Vintage Watch Repair</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#work">Work</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="btn btn-primary nav-cta" href="mailto:randall@clevelandwatchrepair.com">
            Start by Email
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Mechanical wristwatch and pocket watch overhaul</p>
              <h1 id="hero-title">
                Restore your heirloom watch with a clear, approval-first service flow.
              </h1>
              <p className="hero-lead">
                Cleveland Watch Repair provides full-service mechanical overhauls through a mail-in
                process. Start with an email, receive approval, then ship with tracking.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="mailto:randall@clevelandwatchrepair.com">
                  Request Service Approval
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Mailing Details
                </a>
              </div>
              <ul className="trust-list" aria-label="Trust highlights">
                <li>Mail-in only service</li>
                <li>Approval before shipping</li>
                <li>Recent 5-star public reviews</li>
              </ul>
            </div>

            <aside className="hero-panel reveal reveal-delay" aria-label="Contact and terms snapshot">
              <h2>Published contact and terms</h2>

              <dl className="term-list">
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:randall@clevelandwatchrepair.com">randall@clevelandwatchrepair.com</a>
                  </dd>
                </div>
                <div>
                  <dt>Address</dt>
                  <dd>CLEVELAND W. R., Randall Zadar, P.O. Box 361009, Strongsville, OH 44136</dd>
                </div>
                <div>
                  <dt>Service model</dt>
                  <dd>Full-service overhauls, mail-in only</dd>
                </div>
              </dl>

              <figure className="hero-pair" aria-label="Before and after restoration sample">
                <img
                  src="/source-photos/brianbementwalt1-768x512.jpg"
                  alt="Vintage watch before service"
                  width="768"
                  height="512"
                  loading="eager"
                  decoding="async"
                />
                <img
                  src="/source-photos/brianbementwalt3-768x494.jpg"
                  alt="Vintage watch after service"
                  width="768"
                  height="494"
                  loading="eager"
                  decoding="async"
                />
              </figure>
            </aside>
          </div>
        </section>

        <section className="metrics" aria-label="Service metrics">
          <div className="container metrics-grid">
            {metrics.map((item) => (
              <article className="metric-card reveal" key={item.label}>
                <p className="metric-value">{item.value}</p>
                <p className="metric-label">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className="section-head reveal">
              <p className="section-tag">Services</p>
              <h2 id="services-title">Real terms, organized for quick decisions</h2>
              <p>Everything below reflects currently published service and shipping terms.</p>
            </div>
            <div className="service-grid">
              {serviceCards.map((item) => (
                <article className="service-card reveal" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="process" aria-labelledby="process-title">
          <div className="container">
            <div className="section-head section-head-dark reveal">
              <p className="section-tag">How it works</p>
              <h2 id="process-title">A straightforward 5-step path</h2>
            </div>
            <ol className="process-grid">
              {processSteps.map((step, index) => (
                <li className="process-card reveal" key={step.title}>
                  <p className="step-num" aria-hidden="true">
                    {index + 1}
                  </p>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="section-head reveal">
              <p className="section-tag">Recent work photos</p>
              <h2 id="work-title">Before and after restoration pairs</h2>
            </div>

            <div className="pair-grid">
              {restorationPairs.map((pair) => (
                <article className="pair-card reveal" key={pair.id}>
                  <h3>{pair.title}</h3>
                  <div className="pair-images">
                    <figure>
                      <img
                        src={pair.beforeSrc}
                        alt={pair.beforeAlt}
                        width="768"
                        height="512"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>Before</figcaption>
                    </figure>
                    <figure>
                      <img
                        src={pair.afterSrc}
                        alt={pair.afterAlt}
                        width="768"
                        height="512"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>After</figcaption>
                    </figure>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="reviews" aria-labelledby="reviews-title">
          <div className="container">
            <div className="section-head reveal">
              <p className="section-tag">Reviews</p>
              <h2 id="reviews-title">Recent public customer feedback</h2>
            </div>

            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review-card reveal" key={`${review.author}-${review.date}`}>
                  <p className="stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </p>
                  <p className="review-text">{review.summary}</p>
                  <p className="review-meta">
                    {review.author} · {review.date}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="faq-title">
          <div className="container">
            <div className="section-head reveal">
              <p className="section-tag">FAQ</p>
              <h2 id="faq-title">Answers before you mail a watch</h2>
            </div>

            <div className="faq-grid">
              {faqs.map((faq) => (
                <details className="faq-item reveal" key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <p className="section-tag section-tag-light">Contact</p>
              <h2 id="contact-title">Ready to request approval?</h2>
              <p>
                Email with your watch details first. Once approved, ship with tracking using the
                published instructions.
              </p>
              <a className="btn btn-primary" href="mailto:randall@clevelandwatchrepair.com">
                Email Randall
              </a>
            </div>

            <aside className="contact-card reveal reveal-delay" aria-label="Mailing details">
              <h3>Mailing details</h3>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:randall@clevelandwatchrepair.com">randall@clevelandwatchrepair.com</a>
              </p>
              <p>
                <strong>Address:</strong>
                <br />
                CLEVELAND W. R.
                <br />
                Randall Zadar
                <br />
                P.O. Box 361009
                <br />
                Strongsville, OH 44136
              </p>
              <p>
                <strong>Notes:</strong> No walk-in location. U.S. service and shipping terms are
                published on the service and contact pages.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer" aria-label="Site footer">
        <div className="container footer-inner">
          <p>© 2026 Cleveland Watch Repair. All rights reserved. · Strongsville, OH 44136</p>
          <p>Mechanical watch overhaul · Mail-in service model</p>
          <p>
            A{' '}
            <a href="https://nule.io" target="_blank" rel="noreferrer">
              Nule &amp; Co.
            </a>{' '}
            website
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
