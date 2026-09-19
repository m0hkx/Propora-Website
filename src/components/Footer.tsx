const columns: { title: string; links: string[] }[] = [
  { title: 'Product', links: ['Features', 'Pricing', 'Rent collection', 'Maintenance', 'Analytics'] },
  { title: 'Solutions', links: ['Landlords', 'Property managers', 'Real-estate teams', 'Owners'] },
  { title: 'Resources', links: ['Help center', 'Rent receipt template', 'Move-in checklist', 'Blog'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers', 'Press'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#top" aria-label="Propora home">
              <span className="brand-mark" aria-hidden="true">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10.5L12 3l9 7.5M5 9.5V21h5v-6h4v6h5V9.5" />
                </svg>
              </span>
              Propora
            </a>
            <p>
              The command center for property portfolios — properties,
              tenants, rent, repairs, and financials in one place.
            </p>
          </div>
          <nav className="footer-cols" aria-label="Footer">
            {columns.map((col) => (
              <div key={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#top">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-base">
          <span>© 2026 Propora. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
            <a href="#top">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
