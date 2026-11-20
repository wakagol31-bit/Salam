import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_ASSETS, type Locale } from '../data/brandData';

interface HeaderProps {
  locale: Locale;
  onRequestQuote: () => void;
}

export function Header({ locale, onRequestQuote }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#tentang', label: locale === 'id' ? 'Tentang' : 'About' },
    { href: '#produk', label: locale === 'id' ? 'Produk' : 'Products' },
    { href: '#mesin', label: locale === 'id' ? 'Mesin' : 'Machinery' },
    { href: '#pabrik', label: locale === 'id' ? 'Pabrik' : 'Factory' },
    { href: '#ekspor', label: locale === 'id' ? 'Ekspor' : 'Export' },
    { href: '#investor', label: locale === 'id' ? 'Investor' : 'Investors' },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="no-print sticky top-0 z-40 bg-[#040F1E]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Official Dark-Background Brand Mark */}
        <a
          href="#top"
          className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] rounded-sm"
          aria-label="PT. Binco Global Nusantara — Beranda"
        >
          <img
            src={BRAND_ASSETS.logoDarkBg}
            alt="PT. Binco Global Nusantara"
            referrerPolicy="no-referrer"
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </a>

        {/* Zone 2: 6 Concise Single-Line Navigation Links */}
        <nav
          aria-label={locale === 'id' ? 'Navigasi Utama' : 'Primary Navigation'}
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-white transition-colors duration-150 border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Gold/Emerald CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onRequestQuote}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#040F1E] bg-[#D4AF37] hover:bg-[#E8CA64] rounded-lg shadow-xs transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#84CC16]"
          >
            {locale === 'id' ? 'Ajukan Penawaran' : 'Request Quote'}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={
              mobileOpen
                ? locale === 'id'
                  ? 'Tutup menu navigasi'
                  : 'Close navigation menu'
                : locale === 'id'
                  ? 'Buka menu navigasi'
                  : 'Open navigation menu'
            }
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/15 text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden border-t border-white/10 bg-[#07172C]/98 backdrop-blur-md px-4 py-4 space-y-1"
        >
          <nav
            aria-label={locale === 'id' ? 'Navigasi Mobile' : 'Mobile Navigation'}
            className="flex flex-col space-y-1"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-3 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3 px-4 text-sm font-semibold text-[#040F1E] bg-[#D4AF37] hover:bg-[#E8CA64] rounded-lg transition-colors cursor-pointer"
            >
              {locale === 'id' ? 'Ajukan Penawaran' : 'Request Quote'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
