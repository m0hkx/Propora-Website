import Icon from './Icon.tsx';
import Reveal from './Reveal.tsx';
import { moneySplit, rentRoll, workOrders } from '../data/site.ts';

function priorityBadge(priority: string) {
  if (priority === 'Urgent') return 'badge badge-danger';
  if (priority === 'High') return 'badge badge-warning';
  if (priority === 'Medium') return 'badge badge-info';
  return 'badge badge-neutral';
}

function statusBadge(status: string) {
  if (status === 'Completed') return 'badge badge-success';
  if (status === 'In Progress') return 'badge badge-info';
  if (status === 'Open') return 'badge badge-warning';
  return 'badge badge-neutral';
}

export default function Showcase() {
  return (
    <section className="section" id="showcase" aria-labelledby="showcase-title">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <h2 className="section-title" id="showcase-title">
              Walk through your portfolio
            </h2>
            <p className="section-lede">
              Three views managers open every morning — each one live, each one
              actionable.
            </p>
          </div>
        </Reveal>

        {/* A — portfolio glance */}
        <div className="showcase-row">
          <Reveal className="showcase-copy">
            <div>
              <span className="badge badge-success" style={{ marginBottom: 14 }}>Portfolio</span>
              <h3>See your entire portfolio at a glance</h3>
              <p>
                Total properties, live occupancy, monthly revenue, and
                outstanding rent — ranked by performance so the buildings that
                need you find you first.
              </p>
              <ul className="check-list">
                <li><Icon name="check" /> Outstanding balances flagged per property</li>
                <li><Icon name="check" /> Occupancy and collection trends side by side</li>
                <li><Icon name="check" /> One click into any building or unit</li>
              </ul>
              <a className="text-link" href="#cta">Explore the portfolio view</a>
            </div>
          </Reveal>
          <Reveal className="showcase-visual">
            <div className="panel">
              <div className="panel-head">
                <strong>Properties · March</strong>
                <span className="badge badge-neutral">4 of 24 shown</span>
              </div>
              <div className="panel-body table-scroll">
                <table className="rent-table">
                  <thead>
                    <tr>
                      <th scope="col">Property</th>
                      <th scope="col">Occupancy</th>
                      <th scope="col">Collected</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rentRoll.map((row) => (
                      <tr key={row.name}>
                        <td>
                          <span className="prop-cell">
                            <span className="prop-glyph" style={{ background: row.glyph }} aria-hidden="true">
                              {row.initials}
                            </span>
                            {row.name}
                          </span>
                        </td>
                        <td className="num">{row.occupancy}</td>
                        <td className="num">{row.collected}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>

        {/* B — maintenance */}
        <div className="showcase-row flip">
          <Reveal className="showcase-copy">
            <div>
              <span className="badge badge-warning" style={{ marginBottom: 14 }}>Operations</span>
              <h3>Keep every property running smoothly</h3>
              <p>
                Requests arrive with photos and priority, land with the right
                person, and stay visible until the tenant confirms the fix.
                Urgent faults never hide behind cosmetic jobs.
              </p>
              <ul className="check-list">
                <li><Icon name="check" /> Priority triage on every request</li>
                <li><Icon name="check" /> Assignees, due dates, and status history</li>
                <li><Icon name="check" /> Tenants notified at every step</li>
              </ul>
              <a className="text-link" href="#cta">See the repair queue</a>
            </div>
          </Reveal>
          <Reveal className="showcase-visual">
            <div className="panel">
              <div className="panel-head">
                <strong>Repair queue</strong>
                <span className="badge badge-danger">4 need attention</span>
              </div>
              <div className="panel-body">
                <ul className="queue">
                  {workOrders.map((job) => (
                    <li key={job.title}>
                      <span className="queue-title">{job.title}</span>
                      <span className="queue-meta">{job.meta}</span>
                      <span className="queue-badges">
                        <span className={priorityBadge(job.priority)}>{job.priority}</span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                          <span className={statusBadge(job.status)}>{job.status}</span>
                          <span className="avatar" style={{ background: job.color }} aria-hidden="true">
                            {job.assignee}
                          </span>
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* C — money */}
        <div className="showcase-row">
          <Reveal className="showcase-copy">
            <div>
              <span className="badge badge-info" style={{ marginBottom: 14 }}>Financials</span>
              <h3>Know where your money is going</h3>
              <p>
                Revenue, expenses, and net income post to the right property
                automatically. Compare buildings, spot drift, and send
                owner-ready statements in one click.
              </p>
              <ul className="check-list">
                <li><Icon name="check" /> Property-level profit and loss, always current</li>
                <li><Icon name="check" /> Expense categories without manual tagging</li>
                <li><Icon name="check" /> Statements owners actually read</li>
              </ul>
              <a className="text-link" href="#analytics">Dive into the numbers</a>
            </div>
          </Reveal>
          <Reveal className="showcase-visual">
            <div className="panel">
              <div className="panel-head">
                <strong>March P&amp;L · Portfolio</strong>
                <span className="badge badge-success">Reconciled</span>
              </div>
              <div className="panel-body">
                <div className="money-rows">
                  {moneySplit.map((row) => (
                    <div className="money-row" key={row.label}>
                      <div className="money-top">
                        <span>{row.label}</span>
                        <span className="num">{row.value}</span>
                      </div>
                      <div className="money-bar" aria-hidden="true">
                        <i style={{ width: row.width, background: row.bar }} />
                      </div>
                    </div>
                  ))}
                  <div className="money-foot">
                    <Icon name="shield" />
                    <span>
                      Margin <strong className="num">68.4%</strong> · up 2.1 pts
                      since February
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
