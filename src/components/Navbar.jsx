import { useState, useEffect } from "react";
import clsx from "clsx";

const links = ["Features", "Pricing", "Blog", "About"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur border-b border-neutral-200 shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-semibold text-neutral-900"
        >
          <span className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7L6 11L12 3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Flowlytics
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm text-neutral-500 hover:text-neutral-900 transition"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition"
          >
            Sign in
          </a>

          <a
            href="#"
            className="text-sm bg-brand-500 text-white px-4 py-2 rounded-xl hover:bg-brand-600 transition font-medium"
          >
            Get started
          </a>
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={clsx(
              "block w-5 h-0.5 bg-neutral-700 transition-all",
              open && "rotate-45 translate-y-1",
            )}
          />
          <span
            className={clsx(
              "block w-5 h-0.5 bg-neutral-700 mt-1 transition-all",
              open && "-rotate-45 -translate-y-0.5",
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-neutral-600"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#"
            className="text-sm bg-brand-500 text-white px-4 py-2 rounded-xl text-center font-medium"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
}
