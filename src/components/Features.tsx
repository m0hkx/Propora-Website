import Icon from './Icon.tsx';
import Reveal from './Reveal.tsx';

function RentMicro() {
  return (
    <div className="feature-micro" aria-hidden="true">
      <div className="progress-line">
        <i />
      </div>
      <div className="micro-row">
        <span>March collected</span>
        <span className="num">$160,400 of $186,400</span>
      </div>
    </div>
  );
}

function RepairMicro() {
  return (
    <div className="feature-micro" aria-hidden="true">
      <div className="micro-row">
        <span>Boiler fault · Bldg C</span>
        <span className="badge badge-danger">Urgent</span>
      </div>
      <div className="micro-row">
        <span>Faucet repair · Unit 204</span>
        <span className="badge badge-info">In Progress</span>
      </div>
    </div>
  );
}

const features = [
  {
    icon: 'building',
    title: 'Property management',
    body: 'Every building, unit, and lease in one register — with documents, keys, and history attached.',
    micro: null,
  },
  {
    icon: 'users',
    title: 'Tenant management',
    body: 'Applications, leases, renewals, and communication per tenant — no more searching message threads.',
    micro: null,
  },
  {
    icon: 'banknote',
    title: 'Rent collection',
    body: 'Automatic charges, reminders, and receipts. Watch collection climb without lifting a finger.',
    micro: <RentMicro />,
  },
  {
    icon: 'wrench',
    title: 'Maintenance',
    body: 'Requests arrive triaged by priority, assigned to the right person, and tracked to done.',
    micro: <RepairMicro />,
  },
  {
    icon: 'file',
    title: 'Financial tracking',
    body: 'Income and expenses post to the right property automatically. Owner statements write themselves.',
    micro: null,
  },
  {
    icon: 'chart',
    title: 'Portfolio analytics',
    body: 'Occupancy, NOI, arrears, and trends across the whole portfolio — or down to a single door.',
    micro: null,
  },
];

export default function Features() {
  return (
    <section className="section features-section" id="features" aria-labelledby="features-title">
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <h2 className="section-title" id="features-title">
              Everything a portfolio needs, nothing it does not
            </h2>
            <p className="section-lede">
              Six capabilities that cover the full lifecycle of a rental — from
              listing to lease to ledger.
            </p>
          </div>
        </Reveal>
        <div className="feature-grid">
          {features.map((feature) => (
            <Reveal key={feature.title}>
              <article className="feature-card">
                <span className="icon-chip" aria-hidden="true">
                  <Icon name={feature.icon} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
                {feature.micro}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
