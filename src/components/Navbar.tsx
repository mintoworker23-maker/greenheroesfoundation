/**
 * Navbar — responsive navigation bar with mobile hamburger menu.
 * Marked as a Client Component because it uses state for the mobile menu
 * and adds a scroll listener for the sticky-shadow effect.
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import DonateModal from '@/components/DonateModal';


const NAV_LINKS = [
  { href: '/about',   label: 'About'   },
  { href: '/programs', label: 'Programs'},
  {href: '/dreamfund', label: 'DreamFund'},
  { href: '/gallery',    label: 'Gallery'},
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const navRef   = useRef<HTMLElement>(null);

  // Add subtle shadow and update the navbar progress border while scrolling.
  useEffect(() => {
    const updateScrollState = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      setScrolled(window.scrollY > 10);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    updateScrollState();
    const onScroll = () => updateScrollState();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-[#fbfbf7]/95 backdrop-blur-sm border-b border-neutral-200/80
        ${scrolled ? 'shadow-lg shadow-neutral-900/10' : ''}`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-24">
          {/* ── Logo / Brand ── */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Dreamlife Africa Home"
          >
            <Image
              src="/images/logo.webp"
              alt="Dreamlife Africa"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />

            
          </Link>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(href);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative px-4 py-2 font-heading font-medium uppercase tracking-widest
                                text-sm transition-colors duration-200 rounded
                                ${
                                  isActive
                                    ? 'text-mil-black-800'
                                    : 'text-neutral-700 hover:text-neutral-950'
                                }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                    {/* Active underline indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-mil-black-800 rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:block">
            <DonateModal triggerText="Get Involved" triggerClassName="btn-primary text-xs" />
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded text-neutral-700 hover:text-neutral-950
                       hover:bg-neutral-100 transition-colors duration-200"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            {/* Hamburger / X icon */}
            <svg
              className="w-6 h-6" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ── Mobile menu ── */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <ul
            className="flex flex-col py-4 border-t border-neutral-200/80 space-y-1"
            role="list"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-4 py-3 font-heading font-medium uppercase tracking-widest
                                text-sm rounded transition-colors duration-200
                                ${
                                  isActive
                                    ? 'text-mil-black-800 bg-mil-green-500/10'
                                    : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
                                }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 px-4">
              <DonateModal
                triggerText="Get Involved"
                triggerClassName="btn-primary w-full justify-center text-xs"
                onOpen={() => setMenuOpen(false)}
              />
            </li>
          </ul>
        </div>
      </nav>

      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-neutral-200/80" aria-hidden="true">
        <div
          className="h-full origin-left bg-gold-500 transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
    </header>
  );
}
