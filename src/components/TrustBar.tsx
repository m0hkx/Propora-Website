import Icon from './Icon.tsx';
import Reveal from './Reveal.tsx';

const chips = [
  { icon: 'building', text: '24 properties, one login' },
  { icon: 'banknote', text: '86% of March rent already in' },
  { icon: 'shield', text: 'Bank-grade security' },
];

export default function TrustBar() {
  return (
    <section className="trust" aria-label="Why managers trust Propora">
      <div className="wrap">
        <Reveal>
          <div className="trust-inner">
            <p className="trust-line">
              Trusted by property managers running hundreds of doors without spreadsheets
            </p>
            <div className="trust-stats">
              {chips.map((chip) => (
                <span className="trust-chip" key={chip.text}>
                  <Icon name={chip.icon} />
                  {chip.text}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
