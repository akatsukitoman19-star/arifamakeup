import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { ARTIST_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#0B090A]/95 backdrop-blur-md border-b border-[#2A2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
            className="group flex flex-col shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
          >
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-[#F5F2EB] group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              ARIFA
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#A39A94] -mt-0.5 whitespace-nowrap">
              Makeup Artist
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#C8C0B7]" aria-label="Main Navigation">
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); scrollTo('services'); }}
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded px-1"
            >
              Services
            </a>
            <a
              href="#gallery"
              onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }}
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded px-1"
            >
              Bridal Gallery
            </a>
            <a
              href="#artist"
              onClick={(e) => { e.preventDefault(); scrollTo('artist'); }}
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded px-1"
            >
              Meet Arifa
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded px-1"
            >
              Contact & Booking
            </a>
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide uppercase text-[#0B090A] gold-gradient-bg rounded hover:opacity-95 transition-opacity whitespace-nowrap shadow-sm shadow-[#D4AF37]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              Book Your Date
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-[#C8C0B7] hover:text-[#F5F2EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="md:hidden bg-[#120E11] border-b border-[#2A2326] px-5 py-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3">
              <button
                type="button"
                onClick={() => scrollTo('services')}
                className="text-left text-base font-medium text-[#E4DDD3] hover:text-[#D4AF37] transition-colors py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => scrollTo('gallery')}
                className="text-left text-base font-medium text-[#E4DDD3] hover:text-[#D4AF37] transition-colors py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
              >
                Bridal Gallery
              </button>
              <button
                type="button"
                onClick={() => scrollTo('artist')}
                className="text-left text-base font-medium text-[#E4DDD3] hover:text-[#D4AF37] transition-colors py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
              >
                Meet Arifa
              </button>
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="text-left text-base font-medium text-[#E4DDD3] hover:text-[#D4AF37] transition-colors py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
              >
                Contact & Booking
              </button>
            </div>

            <div className="pt-4 border-t border-[#2A2326] grid grid-cols-2 gap-3">
              <a
                href={ARTIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 rounded text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={ARTIST_INFO.callUrl}
                className="min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-3 bg-[#D4AF37]/15 text-[#E5C378] border border-[#D4AF37]/30 rounded text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Dim backdrop when mobile menu is open */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
