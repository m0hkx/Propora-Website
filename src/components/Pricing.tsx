import Icon from './Icon.tsx';
import Reveal from './Reveal.tsx';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    per: 'per month, up to 10 units',
    body: 'For landlords bringing their first buildings online.',
    cta: 'Start free trial',
    featured: false,
    features: ['Rent collection + reminders', 'Tenant + lease register', 'Expense tracking', 'Email support'],
  },
  {
    name: 'Portfolio',
    price: '$79',
    per: 'per month, up to 100 units',
    body: 'For managers running serious door counts.',
    cta: 'Start free trial',
    featured: true,
    features: ['Everything in Starter', 'Repair queue with triage', 'Portfolio analytics + NOI', 'Owner statements', 'Priority support'],
  },
  {
    name: 'Team',
    price: 'Custom',
    per: 'unlimited units, roles + API',
    body: 'For real-estate teams and large operators.',
    cta: 'Talk to us',
    featured: false,
    features: ['Everything in Portfolio', 'Roles, permissions, audit log', 'Acquisition reporting', 'Dedicated manager'],
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing" aria-labelledby="pricing-title" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <h2 className="section-title" id="pricing-title">
              Pricing that scales with your doors
            </h2>
            <p className="section-lede">
              Start with a free 14-day trial. Every plan includes unlimited
              properties, bank-grade security, and cancel-anytime billing.
            </p>
          </div>
        </Reveal>
        <div className="feature-grid">
          {plans.map((plan) => (
            <Reveal key={plan.name}>
              <article
                className="feature-card"
                style={
                  plan.featured
                    ? { background: 'linear-gradient(135deg,#FFFFFF 0%,#ECFDF5 60%,#FEF9C3 100%)' }
                    : undefined
                }
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                  <h3>{plan.name}</h3>
                  {plan.featured && <span className="badge badge-success">Most popular</span>}
                </div>
                <p style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: '#134E4A' }}>
                  {plan.price}
                </p>
                <p style={{ marginTop: -8 }}>{plan.per}</p>
                <p>{plan.body}</p>
                <ul className="check-list" style={{ margin: 0 }}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Icon name="check" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 8 }}>
                  <a className={plan.featured ? 'btn btn-teal' : 'btn btn-ghost'} href="#cta" style={{ width: '100%' }}>
                    {plan.cta}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
