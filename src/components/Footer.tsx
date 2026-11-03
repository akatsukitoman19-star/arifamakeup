import { Phone, Instagram, Mail } from 'lucide-react';
import { ARTIST_INFO } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-[#070506] border-t border-[#1F171A] text-left pt-14 pb-24 sm:pb-16 text-[#A39A94]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#1A1417]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-wider text-[#FBF9F5]">
                ARIFA
              </span>
              <span className="text-xs tracking-[0.25em] uppercase text-[#D4AF37]">
                Makeup Artist · Lucknow
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#8F8681] leading-relaxed max-w-sm">
              Luxury bridal artistry by Arifa Rizwan Siddiqui. Flawless HD Bridal, Reception, and Engagement makeovers customized to your natural elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs uppercase tracking-widest text-[#E5C378] font-semibold mb-3">
              Portfolio
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#FBF9F5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded">
                  Bridal HD & Reception Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FBF9F5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded">
                  Bridal Gallery & Looks
                </a>
              </li>
              <li>
                <a href="#artist" className="hover:text-[#FBF9F5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded">
                  Meet Arifa Rizwan Siddiqui
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FBF9F5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded">
                  Book Your Wedding Date
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Summary */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <div className="text-xs uppercase tracking-widest text-[#E5C378] font-semibold mb-3">
              Direct Contact
            </div>
            <p className="text-[#C2B7AE]">
              Bazaar Khala Chauraha, Lucknow, Uttar Pradesh 226003
            </p>
            <div className="flex flex-col space-y-2 pt-2">
              <a href={ARTIST_INFO.callUrl} className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Phone: {ARTIST_INFO.phoneDisplay}</span>
              </a>
              <a href={ARTIST_INFO.emailUrl} className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Email: {ARTIST_INFO.email}</span>
              </a>
              <a 
                href={ARTIST_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-[#E5759E] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E5759E] rounded"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E5759E]" />
                <span>Instagram: {ARTIST_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Quiet copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B615D]">
          <div>
            © {new Date().getFullYear()} Arifa Makeup Artist. All rights reserved.
          </div>
          <div>
            Bazaar Khala Chauraha, Lucknow, Uttar Pradesh
          </div>
        </div>

      </div>
    </footer>
  );
}
