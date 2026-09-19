import Icon from './Icon.tsx';
import Reveal from './Reveal.tsx';

const audiences = [
  {
    icon: 'key',
    title: 'Landlords',
    body: 'A handful of doors, zero overhead. Collect rent online, track expenses, and see each property’s true return.',
    points: ['Online rent with reminders', 'Expense log per property', 'Year-end tax summary'],
  },
  {
    icon: 'building',
    title: 'Property managers',
    body: 'Hundreds of doors without the chaos. Triage repairs, chase arrears, and report to owners from one queue.',
    points: ['Prioritized repair queue', 'Arrears follow-up', 'Owner statements in one click'],
  },
  {
    icon: 'users',
    title: 'Real-estate teams',
    body: 'Shared portfolio truth for acquisitions, leasing, and operations — with roles and audit trails.',
    points: ['Portfolio-wide analytics', 'Roles and permissions', 'Acquisition-ready reporting'],
  },
];

export default function Solutions() {
  return (
    <section className="section" id="solutions" aria-labelledby="solutions-title" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <h2 className="section-title" id="solutions-title">
              Shaped for how you operate
            </h2>
            <p className="section-lede">
              One platform, three ways to run it — the views change, the ledger
              stays the same.
            </p>
          </div>
        </Reveal>
        <div className="feature-grid">
          {audiences.map((audience) => (
            <Reveal key={audience.title}>
              <article className="feature-card">
                <span className="icon-chip" aria-hidden="true">
                  <Icon name={audience.icon} />
                </span>
                <h3>{audience.title}</h3>
                <p>{audience.body}</p>
                <ul className="check-list" style={{ margin: 0 }}>
                  {audience.points.map((point) => (
                    <li key={point}>
                      <Icon name="check" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
