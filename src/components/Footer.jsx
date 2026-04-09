const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal:   ['Privacy', 'Terms', 'Cookies', 'DPA'],
}
console.log(Object.entries(footerLinks['Product']));

const socials = [
  {
    name: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M12.6 1.5h2.3L9.9 7.2 15.5 14.5H11L7.4 9.8 3.2 14.5H.9l5.4-6.1L.5 1.5H5.1l3.2 4.3L12.6 1.5ZM11.8 13.1h1.3L4.3 2.8H2.9l8.9 10.3Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.37C3.73 14.3 3.27 12.6 3.27 12.6c-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.77-.2-3.63-.89-3.63-3.95 0-.87.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82A7.64 7.64 0 0 1 8 4.07c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.52.56.83 1.28.83 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.14.46.55.38A8 8 0 0 0 8 0Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M1.5 5.5H4V14H1.5V5.5ZM2.75 4.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM14.5 14h-2.5V9.85c0-1-.02-2.28-1.39-2.28-1.39 0-1.61 1.09-1.61 2.21V14H6.5V5.5h2.4v1.08h.03c.34-.64 1.15-1.32 2.37-1.32 2.53 0 3 1.67 3 3.84V14Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Discord',
    href: 'https://discord.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M13.55 3.07A13.2 13.2 0 0 0 10.3 2c-.14.26-.3.6-.41.88a12.27 12.27 0 0 0-3.77 0A9.38 9.38 0 0 0 5.7 2a13.24 13.24 0 0 0-3.26 1.07C1.04 5.7.63 8.27.84 10.8a13.32 13.32 0 0 0 4.07 2.06c.33-.45.62-.93.87-1.43a8.65 8.65 0 0 1-1.37-.66c.11-.08.22-.17.33-.26a9.5 9.5 0 0 0 8.12 0c.11.09.22.18.33.26-.44.26-.9.48-1.37.66.25.5.54.98.87 1.43a13.27 13.27 0 0 0 4.07-2.06c.33-3.01-.56-5.56-2.18-7.73ZM5.68 9.25c-.81 0-1.48-.75-1.48-1.67s.65-1.68 1.48-1.68c.83 0 1.49.75 1.48 1.68 0 .92-.65 1.67-1.48 1.67Zm4.64 0c-.81 0-1.48-.75-1.48-1.67s.65-1.68 1.48-1.68c.83 0 1.49.75 1.48 1.68 0 .92-.64 1.67-1.48 1.67Z" fill="currentColor"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer id="footer" className="bg-neutral-900 text-neutral-400 pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top row — brand + links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <a href="/" className="flex items-center gap-2 font-semibold text-white w-fit">
              <span className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7L6 11L12 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Flowlytics
            </a>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              Plain-English analytics for product teams who'd rather be building than querying.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 hover:text-white flex items-center justify-center transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
                {group}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link}>
                    
                     <a href="#footer"
                      className="text-sm text-neutral-500 hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <span>© {new Date().getFullYear()} Flowlytics, Inc. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span>All systems operational</span>
          </div>
        </div>

      </div>
    </footer>
  )
}