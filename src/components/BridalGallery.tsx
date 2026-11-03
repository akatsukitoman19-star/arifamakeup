import { useState, useEffect, useCallback, useRef } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/portfolioData';
import { GalleryItem } from '../types';

export default function BridalGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const categories = ['All', 'Bridal HD', 'Reception', 'Engagement', 'Traditional', 'Party'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === null ? null : (prev === 0 ? filteredItems.length - 1 : prev - 1)));
  }, [lightboxIndex, filteredItems.length]);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === null ? null : (prev === filteredItems.length - 1 ? 0 : prev + 1)));
  }, [lightboxIndex, filteredItems.length]);

  // Clean up body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Handle keyboard events for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showPrev, showNext, closeLightbox]);

  // Handle mobile swipe gestures in lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    // Threshold of 45px for swipe
    if (Math.abs(diffX) > 45) {
      if (diffX > 0) {
        showNext();
      } else {
        showPrev();
      }
    }
    touchStartX.current = null;
  };

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    // Safely reset lightbox if open to prevent index mismatches
    if (lightboxIndex !== null) {
      closeLightbox();
    }
  };

  const currentItem: GalleryItem | null = 
    lightboxIndex !== null && lightboxIndex < filteredItems.length 
      ? filteredItems[lightboxIndex] 
      : null;

  const getLookWhatsAppUrl = (lookTitle: string) => {
    const text = encodeURIComponent(
      `Hello Arifa, I saw your "${lookTitle}" in your portfolio gallery and would love to enquire about booking this makeup style for my wedding event.`
    );
    return `https://wa.me/916307452168?text=${text}`;
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#0B090A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Title & Focus Lead */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Bridal Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FBF9F5] tracking-tight mb-4">
            Bridal Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#A89F99] leading-relaxed">
            Explore authentic transformations—from timeless Awadhi Nikah royalty to contemporary reception glamour and dewy celebrations. Tap any portrait to inspect details.
          </p>

          {/* Interactive Category Filter Tabs (Zero-pill button style) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-8 p-1.5 bg-[#161214] border border-[#2D2327] rounded-lg max-w-xl mx-auto">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategorySelect(category)}
                  className={`min-h-[38px] px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#0B090A] shadow-sm font-semibold'
                      : 'text-[#A89F99] hover:text-[#FBF9F5] hover:bg-[#221A1E]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
          {filteredItems.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View ${item.title} in full screen lightbox`}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#161214] border border-[#2D2327] hover:border-[#D4AF37]/60 focus-visible:border-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 flex flex-col"
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#20181C]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B090A] via-[#0B090A]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Stamp */}
                <div className="absolute top-3 left-3 bg-[#0B090A]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-medium tracking-wide text-[#E5C378] border border-[#D4AF37]/30">
                  {item.category}
                </div>

                {/* Enlarge Hint */}
                <div className="absolute top-3 right-3 p-2 bg-[#0B090A]/80 backdrop-blur-md text-[#E8DFC8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom title preview */}
                <div className="absolute bottom-3 left-4 right-4 text-left">
                  <h3 className="font-serif text-lg font-medium text-[#FBF9F5] group-hover:text-[#F3E5AB] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Minimal caption footer */}
              <div className="p-4 bg-[#140F12] border-t border-[#231A1E] text-left">
                <p className="text-xs text-[#9E948F] line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#D4AF37]">
                  <span className="font-medium">Tap to enlarge</span>
                  <span className="text-[#6E645F]">Arifa Makeup Artist</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged view of ${currentItem.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-2 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-4xl bg-[#140F12] border border-[#3A2D33] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-[#2A2025] bg-[#0E0B0D]">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#D4AF37] font-semibold">{currentItem.category}</span>
                <span className="text-[#6E645F]">·</span>
                <span className="text-[#9E948F]">
                  Look {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[#C8C0B7] hover:text-[#FBF9F5] hover:bg-[#2A2025] rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Main Viewport with Mobile Swipe Support */}
            <div 
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative flex-grow flex items-center justify-center bg-[#070506] overflow-hidden min-h-[280px] sm:min-h-[440px] touch-pan-y"
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[60vh] sm:max-h-[65vh] w-auto max-w-full object-contain mx-auto select-none"
                referrerPolicy="no-referrer"
              />

              {/* Prev Navigation Button */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-[#0B090A]/85 hover:bg-[#0B090A] text-[#F5F2EB] border border-[#3A2D33] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Navigation Button */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); showNext(); }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-[#0B090A]/85 hover:bg-[#0B090A] text-[#F5F2EB] border border-[#3A2D33] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer & Direct Booking Action */}
            <div className="p-4 sm:p-5 bg-[#140F12] border-t border-[#2A2025] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="text-left">
                <h3 className="font-serif text-base sm:text-xl font-medium text-[#FBF9F5] mb-1">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A89F99] max-w-xl leading-relaxed">
                  {currentItem.caption}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={getLookWhatsAppUrl(currentItem.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs tracking-wide uppercase rounded-lg transition-colors whitespace-nowrap shadow-md shadow-[#25D366]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book This Look</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
