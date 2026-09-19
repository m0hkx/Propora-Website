import Icon from './Icon.tsx';
import DashboardPreview from './DashboardPreview.tsx';

const assurances = ['Free 14-day trial', 'No credit card required', 'Cancel anytime'];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-intro">
          <span className="badge badge-success hero-pill">
            <span className="dot" />
            Built for owners, landlords, and teams
          </span>
          <h1 className="hero-title" id="hero-title">
            Manage every property{' '}
            <span className="accent-underline">from one dashboard</span>
          </h1>
          <p className="hero-sub">
            Propora brings properties, tenants, rent collection, repairs, and
            financial performance together — so you always know what is
            occupied, what is paid, and what needs attention.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-teal" href="#cta">
              Get started
            </a>
            <a className="btn btn-ghost" href="#showcase">
              View demo
            </a>
          </div>
          <ul className="hero-assurances">
            {assurances.map((item) => (
              <li key={item}>
                <Icon name="check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <figure className="hero-figure hero-figure-full">
          <DashboardPreview />
        </figure>
      </div>
    </section>
  );
}
