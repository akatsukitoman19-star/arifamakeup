import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { ARTIST_INFO } from '../data/portfolioData';

interface MobileActionBarProps {
  onBookClick: () => void;
}

export default function MobileActionBar({ onBookClick }: MobileActionBarProps) {
  return (
    <aside 
      aria-label="Mobile quick booking and contact actions"
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom, 0.625rem))' }}
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B090A]/95 backdrop-blur-md border-t border-[#2D2327] px-3 pt-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call */}
        <a
          href={ARTIST_INFO.callUrl}
          className="min-h-[44px] flex items-center justify-center gap-1.5 py-2 px-2 bg-[#1C1619] text-[#E5C378] border border-[#3A2D33] rounded-lg text-xs font-semibold active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          aria-label="Call Arifa Makeup Artist"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={ARTIST_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] flex items-center justify-center gap-1.5 py-2 px-2 bg-[#25D366] text-black rounded-lg text-xs font-semibold shadow-sm shadow-[#25D366]/30 active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          aria-label="Chat on WhatsApp with Arifa"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book */}
        <button
          type="button"
          onClick={onBookClick}
          className="min-h-[44px] flex items-center justify-center gap-1.5 py-2 px-2 gold-gradient-bg text-[#0B090A] rounded-lg text-xs font-semibold active:scale-95 transition-transform cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          aria-label="Scroll to booking enquiry form"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>
      </div>
    </aside>
  );
}
