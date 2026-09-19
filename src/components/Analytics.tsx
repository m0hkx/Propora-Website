import Reveal from './Reveal.tsx';
import { occupancyDonut, propertyPerformance, revenueSeries } from '../data/site.ts';

const W = 560;
const H = 190;
const max = 200;

function linePath(): string {
  return revenueSeries
    .map((v, i) => {
      const x = (i / (revenueSeries.length - 1)) * W;
      const y = H - 18 - (v / max) * (H - 44);
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

function areaPath(): string {
  return `${linePath()} L${W},${H} L0,${H} Z`;
}

const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

export default function Analytics() {
  const d = linePath();
  const a = areaPath();
  const lastX = W;
  const lastY = H - 18 - (186 / max) * (H - 44);

  return (
    <section className="section analytics-section" id="analytics" aria-labelledby="analytics-title">
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <h2 className="section-title" id="analytics-title">
              Portfolio intelligence, not just charts
            </h2>
            <p className="section-lede">
              Revenue, occupancy, and NOI tracked month over month — so pricing,
              renovation, and acquisition decisions rest on evidence.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="analytics-shell">
            <div className="analytics-grid">
              <div className="analytics-main">
                <div className="mini-chart-head" style={{ marginBottom: 10 }}>
                  <strong style={{ fontSize: 15 }}>Net rental revenue · trailing 12 months</strong>
                  <span>$142k → $186k</span>
                </div>
                <div className="chart-legend" aria-hidden="true">
                  <span><i style={{ background: '#0F766E' }} />Collected</span>
                  <span><i style={{ background: '#E2E8F0' }} />Target $175k</span>
                </div>
                <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="220" role="img" aria-label="Line chart showing net rental revenue rising from 142 thousand to 186 thousand dollars over twelve months">
                  <defs>
                    <linearGradient id="anaFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.25" />
                    </linearGradient>
                  </defs>
                  {[150, 165, 180].map((t) => {
                    const y = H - 18 - (t / max) * (H - 44);
                    return (
                      <g key={t}>
                        <line x1="34" y1={y} x2={W} y2={y} stroke="#F1F5F9" strokeWidth="1" />
                        <text x="0" y={y + 4} fontSize="10" fill="#475569" fontWeight="700">${t}k</text>
                      </g>
                    );
                  })}
                  <line x1="34" y1={H - 18 - (175 / max) * (H - 44)} x2={W} y2={H - 18 - (175 / max) * (H - 44)} stroke="#B45309" strokeWidth="1.5" strokeDasharray="5 5" />
                  <path d={a} fill="url(#anaFill)" />
                  <path d={d} fill="none" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx={lastX - 2} cy={lastY} r="5.5" fill="#fff" stroke="#0F766E" strokeWidth="2.5" />
                  {months.map((m, i) => {
                    if (i % 2 === 1) return null;
                    const x = (i / (months.length - 1)) * W;
                    return (
                      <text key={m} x={x} y={H - 2} fontSize="10" fill="#475569" fontWeight="600" textAnchor="middle">
                        {m}
                      </text>
                    );
                  })}
                </svg>
                <div className="table-scroll" style={{ marginTop: 8 }}>
                  <table className="rent-table">
                    <thead>
                      <tr>
                        <th scope="col">Metric</th>
                        <th scope="col">March</th>
                        <th scope="col">February</th>
                        <th scope="col">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Net operating income</td>
                        <td className="num">$127,500</td>
                        <td className="num">$119,800</td>
                        <td><span className="badge badge-success">+6.4%</span></td>
                      </tr>
                      <tr>
                        <td>Collection rate</td>
                        <td className="num">86.0%</td>
                        <td className="num">81.5%</td>
                        <td><span className="badge badge-success">+4.5 pts</span></td>
                      </tr>
                      <tr>
                        <td>Operating expenses</td>
                        <td className="num">$58,900</td>
                        <td className="num">$61,300</td>
                        <td><span className="badge badge-success">−3.9%</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="analytics-side">
                <div>
                  <strong style={{ fontSize: 14 }}>Occupancy · 312 units</strong>
                  <div className="donut-wrap" style={{ marginTop: 12 }}>
                    <svg width="110" height="110" viewBox="0 0 110 110" role="img" aria-label="Donut chart: 94.2 percent occupied">
                      <circle cx="55" cy="55" r="44" fill="none" stroke="#F1F5F9" strokeWidth="14" />
                      <circle
                        cx="55"
                        cy="55"
                        r="44"
                        fill="none"
                        stroke="#0F766E"
                        strokeWidth="14"
                        strokeLinecap="round"
                        strokeDasharray="260.3 276.5"
                        transform="rotate(-90 55 55)"
                      />
                      <text x="55" y="52" textAnchor="middle" fontSize="17" fontWeight="800" fill="#134E4A">94.2%</text>
                      <text x="55" y="68" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#475569">occupied</text>
                    </svg>
                    <ul className="donut-legend">
                      {occupancyDonut.map((s) => (
                        <li key={s.label}>
                          <i style={{ background: s.color }} />
                          {s.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <strong style={{ fontSize: 14 }}>NOI by property · March</strong>
                  <ul className="perf-list" style={{ marginTop: 12 }}>
                    {propertyPerformance.map((p) => (
                      <li key={p.name}>
                        <div className="perf-top">
                          <span>{p.name}</span>
                          <span className="num">{p.noi}</span>
                        </div>
                        <div className="money-bar" aria-hidden="true">
                          <i style={{ width: p.width, background: 'linear-gradient(90deg,#14B8A6,#0F766E)' }} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
