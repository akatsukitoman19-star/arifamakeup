import { MessageCircle, Phone, MapPin, Sparkles } from 'lucide-react';
import { ARTIST_INFO } from '../data/portfolioData';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24 bg-[#0B090A]">
      {/* Subtle deep burgundy atmospheric glow */}
      <div 
        className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-[#4A0E17]/25 rounded-full blur-3xl -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-0 left-10 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Typographic Column */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-left">
            
            {/* Unboxed Location and Artist Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#D4AF37] tracking-widest uppercase font-medium mb-4">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{ARTIST_INFO.cityState}</span>
              </div>
              <span aria-hidden="true" className="text-[#6E645F]">·</span>
              <span className="text-[#C8C0B7] tracking-normal capitalize">{ARTIST_INFO.artistName}</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#FBF9F5] leading-[1.15] mb-5">
              Arifa — <span className="gold-gradient-text italic font-normal">Makeup Artist</span>
            </h1>

            {/* Tagline */}
            <p className="font-serif text-lg sm:text-2xl text-[#E8DFC8] font-normal italic tracking-wide mb-6">
              “{ARTIST_INFO.tagline}”
            </p>

            {/* Clean Editorial Summary */}
            <p className="text-sm sm:text-base text-[#A89F99] leading-relaxed max-w-xl mb-8">
              Bespoke luxury bridal transformations crafted in Lucknow. Specializing in radiant High-Definition 
              bridal beauty, regal reception looks, and personalized wedding aesthetics.
            </p>

            {/* Action Buttons (Responsive on 320px+) */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <button
                type="button"
                onClick={onBookClick}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0B090A] gold-gradient-bg rounded hover:brightness-105 active:scale-[0.99] transition-all shadow-lg shadow-[#D4AF37]/25 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                Book Your Date
              </button>

              <a
                href={ARTIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={ARTIST_INFO.callUrl}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-medium text-[#D5CECE] hover:text-[#FBF9F5] hover:border-[#D4AF37]/50 border border-[#3A3135] rounded transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Call Artist</span>
              </a>
            </div>

            {/* Clean unboxed service highlights */}
            <div className="pt-6 border-t border-[#261E22] flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-[#A89F99]">
              <span className="text-[#E5C378] font-medium">Bridal HD</span>
              <span aria-hidden="true" className="text-[#4A3D42]">·</span>
              <span>Reception</span>
              <span aria-hidden="true" className="text-[#4A3D42]">·</span>
              <span>Engagement</span>
              <span aria-hidden="true" className="text-[#4A3D42]">·</span>
              <span>Party Glamour</span>
              <span aria-hidden="true" className="text-[#4A3D42]">·</span>
              <span className="text-[#C8C0B7]">Lucknow Studio & Venue</span>
            </div>
          </div>

          {/* Large Bridal Portrait Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer decorative gold hairline frame */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-[#D4AF37]/40 via-[#4A0E17]/40 to-[#2A2326] shadow-2xl shadow-black/80">
                <div className="relative overflow-hidden rounded-xl bg-[#161214] aspect-[3/4]">
                  <img
                    src={ARTIST_INFO.heroImage}
                    alt="Arifa Makeup Artist Royal Indian Bridal Look"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark vignette overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B090A]/90 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating subtle badge at bottom right */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-xs text-[#F5F2EB]/90 bg-[#161214]/85 backdrop-blur-md px-3 sm:px-3.5 py-2 rounded-lg border border-[#D4AF37]/30">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span className="font-serif text-xs sm:text-sm tracking-wide text-[#F3E5AB]">Signature Bridal Look</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-[#A89F99]">Lucknow, UP</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
