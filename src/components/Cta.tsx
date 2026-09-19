import Reveal from './Reveal.tsx';

export default function Cta() {
  return (
    <section className="section" id="cta" aria-labelledby="cta-title" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="cta-panel">
            <h2 id="cta-title">Your properties deserve a better command center</h2>
            <p>
              Join Propora and run properties, tenants, rent, and repairs from
              one calm dashboard — starting with this month's rent roll.
            </p>
            <div className="cta-row">
              <a className="btn btn-light" href="#top">
                Get started
              </a>
              <a className="btn btn-outline-light" href="#showcase">
                View demo
              </a>
            </div>
            <p className="cta-note">Free 14-day trial · No credit card · Set up in an afternoon</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
