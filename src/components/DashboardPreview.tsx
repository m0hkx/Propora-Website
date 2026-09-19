import Icon from './Icon.tsx';
import logoMark from '../assets/logo-mark-white.png';

/* Product overview preview — recreates the Propora dashboard from the
   reference: pill-tab product nav, KPI cards, revenue chart + occupancy,
   property performance + action list, revenue bars, payments + maintenance,
   activity timeline. Rendered as a non-interactive mock (role="img"). */

const tabs = ['Dashboard', 'Properties', 'Tenants', 'Leases', 'Payments', 'Maintenance', 'Documents'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
const revenue = [80, 87, 83, 92, 95, 101, 107, 113, 121];

const CW = 600;
const CH = 232;
const PAD_L = 46;
const PAD_R = 14;
const PAD_T = 12;
const PAD_B = 30;

function chartX(i: number) {
  return PAD_L + (i * (CW - PAD_L - PAD_R)) / (revenue.length - 1);
}

function chartY(v: number) {
  return PAD_T + (1 - v / 150) * (CH - PAD_T - PAD_B);
}

function linePath() {
  return revenue.map((v, i) => `${i === 0 ? 'M' : 'L'}${chartX(i).toFixed(1)},${chartY(v).toFixed(1)}`).join(' ');
}

function areaPath() {
  return `${linePath()} L${chartX(revenue.length - 1).toFixed(1)},${CH - PAD_B} L${chartX(0).toFixed(1)},${CH - PAD_B} Z`;
}

const performance = [
  { name: 'Harbor Point', occupancy: '100%', revenue: '$62,400', status: 'Excellent', cls: 'badge-success' },
  { name: 'Sunset Apartments', occupancy: '94%', revenue: '$41,200', status: 'Good', cls: 'badge-success' },
  { name: 'Palm Residence', occupancy: '82%', revenue: '$29,800', status: 'Attention', cls: 'badge-warning' },
  { name: 'Downtown Plaza', occupancy: '76%', revenue: '$18,400', status: 'Attention', cls: 'badge-warning' },
];

const actions = [
  { dot: '#DC2626', title: '2 Overdue Payments', detail: '$4,600 outstanding' },
  { dot: '#EA580C', title: '8 Leases Expiring Soon', detail: 'Within 30 days' },
  { dot: '#CA8A04', title: '12 Maintenance Requests', detail: 'Awaiting resolution' },
];

const DONUT_R = 34;
const DONUT_C = 2 * Math.PI * DONUT_R;

export default function DashboardPreview() {
  const d = linePath();
  const a = areaPath();

  return (
    <div
      className="app-window dash-window"
      role="img"
      aria-label="Preview of the Propora dashboard: portfolio KPIs, revenue chart, occupancy, property performance, and required actions"
    >
      <div className="app-chrome" aria-hidden="true">
        <span className="traffic">
          <span />
          <span />
          <span />
        </span>
        <span className="app-url">app.propora.com/dashboard</span>
        <span className="app-live">Live</span>
      </div>

      <div className="dash-nav" aria-hidden="true">
        <span className="dash-brand">
          <span className="brand-mark" style={{ width: 30, height: 30, borderRadius: 9 }}>
            <img src={logoMark} alt="" width="16" height="16" />
          </span>
          Propora
        </span>
        <span className="dash-tabs">
          {tabs.map((tab) => (
            <span key={tab} className={`dash-tab${tab === 'Dashboard' ? ' active' : ''}`}>
              {tab}
            </span>
          ))}
        </span>
        <span className="dash-icons">
          <span className="dash-icon">
            <Icon name="bell" />
            <i>3</i>
          </span>
          <span className="dash-icon">
            <Icon name="mail" />
            <i>3</i>
          </span>
          <span className="dash-avatar">JM</span>
        </span>
      </div>

      <div className="dash-page">
        <div className="dash-head">
          <div>
            <h3>Property Management Overview</h3>
            <p>Portfolio overview, rent pulse and activity</p>
          </div>
          <div className="dash-head-side">
            <span className="dash-search">
              <Icon name="search" />
              Search dashboard…
            </span>
            <span className="dash-add">
              <Icon name="plus" />
              Add Property
            </span>
          </div>
        </div>

        <div className="dash-kpis">
          <div className="dash-kpi">
            <span className="kpi-label">Total Properties</span>
            <span className="kpi-big">18 <small>Properties</small></span>
            <span className="kpi-sub">17 Active</span>
            <span className="badge badge-success">+2 this month</span>
          </div>
          <div className="dash-kpi">
            <span className="kpi-label">Total Units</span>
            <span className="kpi-big">142 <small>Units</small></span>
            <span className="kpi-sub">128 Occupied</span>
            <span className="kpi-sub">Occupancy: 90.1%</span>
          </div>
          <div className="dash-kpi">
            <span className="kpi-label">Monthly Revenue</span>
            <span className="kpi-big num">$124,850</span>
            <span className="kpi-delta up">▲ +$8,420 vs last month</span>
            <span className="kpi-sub">Small upward trend</span>
          </div>
          <div className="dash-kpi">
            <span className="kpi-label">Outstanding Payments</span>
            <span className="kpi-big num">$12,450</span>
            <span className="kpi-sub">8 Payments</span>
            <span className="badge badge-danger">3 Overdue</span>
          </div>
        </div>

        <div className="dash-grid-main">
          <div className="dash-panel">
            <div className="dash-panel-head">
              <div>
                <h4>Revenue Overview</h4>
                <p className="dash-big num">$124,850</p>
                <p className="kpi-delta up">+7.2% vs last month</p>
              </div>
              <span className="dash-range">Range <strong>Monthly</strong></span>
            </div>
            <svg viewBox={`0 0 ${CW} ${CH}`} width="100%" height="200" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="dashRevFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {[0, 50, 100, 150].map((t) => (
                <g key={t}>
                  <line x1={PAD_L} y1={chartY(t)} x2={CW - 8} y2={chartY(t)} stroke="#EDF1F4" strokeWidth="1" />
                  <text x={PAD_L - 8} y={chartY(t) + 4} fontSize="11" fill="#8A99A6" fontWeight="600" textAnchor="end">
                    {t === 0 ? '$0' : `$${t}K`}
                  </text>
                </g>
              ))}
              <path d={a} fill="url(#dashRevFill)" />
              <path d={d} fill="none" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              {revenue.map((v, i) => (
                <circle key={months[i]} cx={chartX(i)} cy={chartY(v)} r="4.5" fill="#fff" stroke="#0F766E" strokeWidth="2.5" />
              ))}
              {months.map((m, i) => (
                <text key={m} x={chartX(i)} y={CH - 10} fontSize="11" fill="#8A99A6" fontWeight="500" textAnchor="middle">
                  {m}
                </text>
              ))}
            </svg>
          </div>

          <div className="dash-panel">
            <h4 className="kpi-label" style={{ fontSize: 13 }}>Occupancy</h4>
            <p className="dash-big num">90.1%</p>
            <p className="kpi-sub">128 / 142 units occupied</p>
            <div className="occ-bar" aria-hidden="true">
              <i style={{ width: '90.1%' }} />
            </div>
            <div className="donut-wrap">
              <svg width="104" height="104" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r={DONUT_R} fill="none" stroke="#EDF1F4" strokeWidth="13" />
                <circle
                  cx="60"
                  cy="60"
                  r={DONUT_R}
                  fill="none"
                  stroke="#0F766E"
                  strokeWidth="13"
                  strokeLinecap="round"
                  strokeDasharray={`${(DONUT_C * 0.9).toFixed(1)} ${DONUT_C.toFixed(1)}`}
                  transform="rotate(-90 60 60)"
                />
                <text x="60" y="66" textAnchor="middle" fontSize="17" fontWeight="800" fill="#134E4A">90%</text>
              </svg>
              <div>
                <strong>Occupied</strong>
                <span>Portfolio occupancy</span>
              </div>
            </div>
            <div className="occ-rows">
              <span>Occupied <b className="num">128</b></span>
              <span>Vacant <b className="num">14</b></span>
            </div>
            <p className="kpi-delta up">+2.4% vs last month</p>
          </div>
        </div>

        <div className="dash-grid-main">
          <div className="dash-panel">
            <div className="dash-panel-head">
              <h4>Property Performance</h4>
              <span className="dash-view">View All Properties →</span>
            </div>
            <div className="table-scroll">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th scope="col">Property</th>
                    <th scope="col">Occupancy</th>
                    <th scope="col">Revenue</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {performance.map((row) => (
                    <tr key={row.name}>
                      <td><strong>{row.name}</strong></td>
                      <td className="num">{row.occupancy}</td>
                      <td className="num">{row.revenue}</td>
                      <td><span className={`badge ${row.cls}`}>{row.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="dash-panel dash-actions">
            <h4>Action Required</h4>
            <ul>
              {actions.map((item) => (
                <li key={item.title}>
                  <span className="action-dot" style={{ background: item.dot }} />
                  <span>{item.title}</span>
                  <b>{item.detail}</b>
                </li>
              ))}
            </ul>
            <span className="dash-view-all">View All →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
