import type { CSSProperties } from 'react';
import Icon from './Icon.tsx';
import Reveal from './Reveal.tsx';
import { marchRentRoll } from '../data/site.ts';
import type { RentEntry } from '../data/site.ts';

interface Fragment {
  icon: string;
  source: string;
  title: string;
  body: string;
  scatter: CSSProperties;
}

/* Scattered "before" artifacts. Each carries a resting transform for the
   settled state so the field visibly gathers itself on reveal. */
const fragments: Fragment[] = [
  {
    icon: 'banknote',
    source: 'Bank app · 09:41',
    title: 'Transfer received · $1,850',
    body: 'Amara O. — no reference number attached.',
    scatter: { '--sx': '-14px', '--sy': '10px', '--sr': '-3deg', '--tx': '-4px', '--ty': '4px', '--tr': '-1deg' } as CSSProperties,
  },
  {
    icon: 'message',
    source: 'SMS · Lena Fischer',
    title: '“Sent half today, rest Friday”',
    body: 'Cedar Grove 07 — which half, and which Friday?',
    scatter: { '--sx': '16px', '--sy': '-12px', '--sr': '2.5deg', '--tx': '6px', '--ty': '-4px', '--tr': '1deg' } as CSSProperties,
  },
  {
    icon: 'file',
    source: 'Cash envelope · Office drawer',
    title: '$1,150 in cash, no receipt yet',
    body: 'Handwritten note: “Lena — March (part?)”.',
    scatter: { '--sx': '-10px', '--sy': '-14px', '--sr': '3deg', '--tx': '-4px', '--ty': '-6px', '--tr': '1deg' } as CSSProperties,
  },
  {
    icon: 'bell',
    source: 'Phone reminder · Snoozed 2×',
    title: 'Remind Marco — rent due Friday',
    body: 'Set Sunday night. Still pending Wednesday.',
    scatter: { '--sx': '14px', '--sy': '12px', '--sr': '-2deg', '--tx': '5px', '--ty': '5px', '--tr': '-0.5deg' } as CSSProperties,
  },
  {
    icon: 'calendar',
    source: 'march-rent-final-v3.xlsx',
    title: 'Spreadsheet, row 34: “Sofia — ???”',
    body: 'Three versions. Nobody knows which is current.',
    scatter: { '--sx': '0px', '--sy': '16px', '--sr': '1.5deg', '--tx': '0px', '--ty': '6px', '--tr': '0.5deg' } as CSSProperties,
  },
];

const remainingPains = [
  {
    tone: 'danger',
    badge: <span className="badge badge-danger">3 overdue</span>,
    title: 'Overdue balances surface too late',
    body: 'Without a live view of who owes what, a missed payment becomes a 60-day problem before anyone notices.',
    evidence: (
      <div className="evidence" aria-hidden="true">
        <div className="late-line">
          <div className="late-stop">
            <i />
            <span>Mar 1<b>Rent missed</b></span>
          </div>
          <div className="late-stop">
            <i />
            <span>Apr 2<b>Still no flag</b></span>
          </div>
          <div className="late-stop late">
            <i />
            <span>May 3<b>$4,950 owed — noticed</b></span>
          </div>
        </div>
      </div>
    ),
  },
  {
    tone: 'info',
    badge: <span className="badge badge-info">17 open</span>,
    title: 'Repairs live in phone calls and sticky notes',
    body: 'Tenants text, managers forget, contractors ask twice. Urgent faults queue behind cosmetic jobs.',
    evidence: (
      <div className="evidence tickets" aria-hidden="true">
        <div className="ticket t-urgent">
          <span className="ticket-tab" />
          <div><strong>Boiler fault — Bldg C</strong><span>Urgent · 6 days old · no owner</span></div>
        </div>
        <div className="ticket t-high">
          <span className="ticket-tab" />
          <div><strong>Tap leak — Unit 204</strong><span>High · waiting on contractor</span></div>
          <span className="avatar" style={{ background: '#0369A1' }}>JR</span>
        </div>
        <div className="ticket t-low">
          <span className="ticket-tab" />
          <div><strong>Hallway repaint — Floor 2</strong><span>Low · scheduled Mar 11</span></div>
          <span className="avatar" style={{ background: '#047857' }}>TP</span>
        </div>
      </div>
    ),
  },
  {
    tone: 'neutral',
    badge: <span className="badge badge-neutral">Tax season</span>,
    title: 'Reporting means rebuilding the numbers',
    body: 'Revenue in one tool, expenses in another, occupancy in your head. Every report starts from zero.',
    evidence: (
      <div className="evidence" aria-hidden="true">
        <div className="src-chips">
          <span>Bank export</span>
          <span>rent-final-v3.xlsx</span>
          <span>Paper notebook</span>
        </div>
        <div className="converge-statement">
          <Icon name="file" />
          <strong>March owner statement</strong>
          <span className="badge badge-success">Ready</span>
        </div>
      </div>
    ),
  },
];

function statusBadge(status: RentEntry['status']) {
  if (status === 'Paid') return 'badge badge-success';
  if (status === 'Pending') return 'badge badge-warning';
  return 'badge badge-danger';
}

function ReminderGlyph({ kind }: { kind: RentEntry['reminder'] }) {
  if (kind === 'received') return <Icon name="check" />;
  if (kind === 'sent') return <Icon name="send" />;
  return <Icon name="clock" />;
}

export default function Problems() {
  return (
    <section className="section rent-story" aria-labelledby="rent-title">
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <span className="eyebrow">Rent week</span>
            <h2 className="section-title" id="rent-title">
              Rent scattered across accounts and chats
            </h2>
            <p className="section-lede">
              Bank transfers, cash, messages, reminders. Chasing March rent
              means opening five apps and a spreadsheet.
            </p>
          </div>
        </Reveal>

        <div className="rent-flow">
          <Reveal className="frag-stage">
            <div>
              <p className="flow-caption">
                <span className="flow-marker before" aria-hidden="true" />
                Rent week, today — five sources, none of them complete
              </p>
              <div className="fragments" role="list" aria-label="Fragments of rent information scattered across apps">
                {fragments.map((frag) => (
                  <article className="frag" role="listitem" key={frag.title} style={frag.scatter}>
                    <span className="frag-icon" aria-hidden="true">
                      <Icon name={frag.icon} />
                    </span>
                    <div>
                      <p className="frag-source">{frag.source}</p>
                      <p className="frag-title">{frag.title}</p>
                      <p className="frag-body">{frag.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="flow-connector" aria-hidden="true">
            <span className="flow-line" />
            <span className="flow-node">
              <Icon name="check" />
            </span>
            <span className="flow-line" />
          </div>

          <Reveal className="roll-stage">
            <div>
              <p className="flow-caption">
                <span className="flow-marker after" aria-hidden="true" />
                With Propora — one rent roll with automatic reminders
              </p>
              <div className="rent-roll">
                <div className="roll-head">
                  <div>
                    <h3>March rent roll</h3>
                    <p>5 tenants · Harbor View, Maple Court, Cedar Grove, Foundry Lofts</p>
                  </div>
                  <div className="roll-head-side">
                    <span className="badge badge-success">86% collected</span>
                    <span className="auto-pill">
                      <Icon name="bell" />
                      Auto-reminders on
                    </span>
                  </div>
                </div>
                <div className="table-scroll">
                  <table className="roll-table">
                    <thead>
                      <tr>
                        <th scope="col">Tenant</th>
                        <th scope="col">Rent</th>
                        <th scope="col">Due</th>
                        <th scope="col">Method</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marchRentRoll.map((row) => (
                        <tr key={row.tenant}>
                          <td>
                            <span className="tenant-cell">
                              <strong>{row.tenant}</strong>
                              <span>{row.place}</span>
                            </span>
                          </td>
                          <td className="num">{row.rent}</td>
                          <td className="num">{row.due}</td>
                          <td>{row.method}</td>
                          <td>
                            <span className="status-cell">
                              <span className={statusBadge(row.status)}>{row.status}</span>
                              <span className={`reminder-note ${row.reminder}`}>
                                <ReminderGlyph kind={row.reminder} />
                                {row.reminderLabel}
                              </span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="roll-toast" aria-hidden="true">
                  <Icon name="send" />
                  Reminder sent to Sofia Marino — “March rent is 4 days overdue”
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="pain-trio">
          {remainingPains.map((pain) => (
            <Reveal key={pain.title}>
              <article className={`pain-card${pain.tone ? ` ${pain.tone}` : ''}`}>
                {pain.evidence}
                <div className="pain-body">
                  <div className="chaos-top">
                    <strong>{pain.title}</strong>
                    {pain.badge}
                  </div>
                  <p>{pain.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
