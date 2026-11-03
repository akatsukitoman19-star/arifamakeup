import { Sparkles, Instagram, MessageCircle } from 'lucide-react';
import { ARTIST_INFO } from '../data/portfolioData';

export default function MeetArifa() {
  return (
    <section id="artist" className="py-16 sm:py-24 bg-[#0F0C0E] border-t border-[#1F171A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer gold-burgundy frame */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-tr from-[#4A0E17]/60 via-[#2A2326] to-[#D4AF37]/50 shadow-2xl shadow-black/80">
                <div className="relative aspect-[5/4] sm:aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#1E171B]">
                  <img
                    src={ARTIST_INFO.artistPortrait}
                    alt="Arifa Rizwan Siddiqui - Makeup Artist Lucknow"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (e.currentTarget.src !== ARTIST_INFO.artistPortraitDriveUrl) {
                        e.currentTarget.src = ARTIST_INFO.artistPortraitDriveUrl;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B090A]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Artist name stamp on bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-left bg-[#0B090A]/85 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#3A2D33]">
                    <div className="text-xs text-[#E5C378] font-semibold">{ARTIST_INFO.artistName}</div>
                    <div className="text-[11px] text-[#A89F99]">Bridal Makeup Artist · Lucknow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Philosophy Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Behind the Artistry</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FBF9F5] tracking-tight mb-4">
              Meet Arifa
            </h2>

            <div className="flex items-center gap-2 text-sm text-[#D4AF37] mb-6">
              <span className="font-medium text-[#F3E5AB]">{ARTIST_INFO.artistName}</span>
              <span className="text-[#6E645F]">·</span>
              <span className="text-[#A89F99]">{ARTIST_INFO.cityState}</span>
            </div>

            {/* Authentic & focused introduction (No invented awards or experience claims) */}
            <div className="space-y-4 text-sm sm:text-base text-[#C2B7AE] leading-relaxed mb-8">
              <p>
                Every bride carries a unique vision for her wedding day. Arifa Rizwan Siddiqui approaches bridal artistry with an eye for individuality—harmonizing skin tones, heritage attire, and personal style into an enduring, luminous look.
              </p>
              <p>
                Based in Lucknow, Arifa specializes in High-Definition bridal makeup, royal reception styling, and celebratory looks that feel lightweight, natural, and radiant under both festive spotlights and high-resolution cameras.
              </p>
              <p className="text-xs sm:text-sm text-[#9E948F] italic border-l-2 border-[#D4AF37]/40 pl-4 py-1">
                “My goal is simply to let your inner beauty shine, accentuating your finest features while keeping you feeling confident and truly yourself.”
              </p>
            </div>

            {/* Highlights row without fake stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#161214] border border-[#2D2327] mb-8">
              <div>
                <div className="text-[11px] sm:text-xs text-[#A89F99] uppercase tracking-wider mb-1">Focus</div>
                <div className="text-xs sm:text-sm font-serif font-medium text-[#F5F2EB]">Bridal & HD Glamour</div>
              </div>
              <div>
                <div className="text-[11px] sm:text-xs text-[#A89F99] uppercase tracking-wider mb-1">Location</div>
                <div className="text-xs sm:text-sm font-serif font-medium text-[#F5F2EB]">Bazaar Khala, Lucknow</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-[11px] sm:text-xs text-[#A89F99] uppercase tracking-wider mb-1">Service</div>
                <div className="text-xs sm:text-sm font-serif font-medium text-[#F5F2EB]">Studio & Venue Visits</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={ARTIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs tracking-wide uppercase rounded-lg transition-colors shadow-md shadow-[#25D366]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message Arifa</span>
              </a>

              <a
                href={ARTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 bg-[#251A21] hover:bg-[#34242D] text-[#F5F2EB] border border-[#4A323E] text-xs font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5759E]"
              >
                <Instagram className="w-4 h-4 text-[#E5759E]" />
                <span>{ARTIST_INFO.instagramHandle}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
