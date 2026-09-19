import Icon from './Icon.tsx';
import Reveal from './Reveal.tsx';

const resources = [
  { icon: 'file', title: 'Help center', body: 'Guides for onboarding, rent setup, and owner reporting.' },
  { icon: 'calendar', title: 'Move-in checklist', body: 'The inspection-to-lease flow top operators follow.' },
  { icon: 'banknote', title: 'Rent receipt template', body: 'A compliant receipt you can send straight from Propora.' },
  { icon: 'bell', title: 'Product updates', body: 'What shipped this month — and what it means for your doors.' },
];

export default function Resources() {
  return (
    <section className="section" id="resources" aria-labelledby="resources-title" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <h2 className="section-title" id="resources-title">
              Learn the craft, not just the tool
            </h2>
            <p className="section-lede">
              Practical resources for running a tighter portfolio — free whether
              or not you use Propora.
            </p>
          </div>
        </Reveal>
        <div className="feature-grid resource-grid">
          {resources.map((resource) => (
            <Reveal key={resource.title}>
              <article className="feature-card" style={{ padding: '22px 20px' }}>
                <span className="icon-chip" aria-hidden="true">
                  <Icon name={resource.icon} />
                </span>
                <h3 style={{ fontSize: 16.5 }}>{resource.title}</h3>
                <p style={{ fontSize: 14 }}>{resource.body}</p>
                <a className="text-link" href="#resources" style={{ fontSize: 14 }}>
                  Open resource
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
