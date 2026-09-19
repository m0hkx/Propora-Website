import Reveal from './Reveal.tsx';

/* Role-based placeholders only — no invented companies or claims. */
const quotes = [
  {
    quote:
      'March used to mean a week of reconciliation. Now I open the rent roll with coffee and know exactly who needs a reminder.',
    role: 'Property manager',
    detail: 'Manages ~120 units',
    initials: 'PM',
    glyph: 'linear-gradient(135deg,#F59E0B,#0F766E)',
  },
  {
    quote:
      'The repair queue ended the “did anyone call the plumber?” era. Every request has an owner, and tenants can see progress.',
    role: 'Landlord',
    detail: 'Owns 14 doors across 3 buildings',
    initials: 'LO',
    glyph: 'linear-gradient(135deg,#0369A1,#14B8A6)',
  },
  {
    quote:
      'Owner statements went from a Friday-night chore to a link I send in seconds. That alone pays for it.',
    role: 'Operations lead',
    detail: 'Real-estate team, 300+ units',
    initials: 'OL',
    glyph: 'linear-gradient(135deg,#7C3AED,#0369A1)',
  },
];

export default function Testimonials() {
  return (
    <section className="section" aria-labelledby="voices-title">
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <h2 className="section-title" id="voices-title">
              Managers describe the before and after
            </h2>
            <p className="section-lede">
              Illustrative examples of the jobs Propora takes over — written
              from real workflows, not customer claims.
            </p>
          </div>
        </Reveal>
        <div className="testimonial-grid">
          {quotes.map((q) => (
            <Reveal key={q.role}>
              <figure className="quote-card" style={{ margin: 0, height: '100%' }}>
                <span className="stars" aria-label="Rated 5 out of 5">★★★★★</span>
                <blockquote>“{q.quote}”</blockquote>
                <figcaption className="quote-who">
                  <span className="avatar" style={{ background: q.glyph, width: 38, height: 38 }} aria-hidden="true">
                    {q.initials}
                  </span>
                  <span>
                    <strong>{q.role}</strong>
                    <span>{q.detail}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
