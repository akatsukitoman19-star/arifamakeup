import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const getWhatsAppServiceLink = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Hello Arifa, I am interested in booking your ${serviceTitle} service for an upcoming event in Lucknow. Please share availability.`
    );
    return `https://wa.me/916307452168?text=${text}`;
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#0F0C0E] border-t border-[#1F171A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Artistry & Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FBF9F5] tracking-tight mb-4">
            Services
          </h2>
          <p className="text-sm sm:text-base text-[#A89F99] leading-relaxed">
            Tailored beauty services designed for your most cherished celebrations. Every look is customized to your attire, jewelry, and individual features.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative flex flex-col bg-[#161214] border border-[#2D2327] hover:border-[#D4AF37]/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/60"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#20181C]">
                <img
                  src={service.image}
                  alt={`Arifa Makeup Artist - ${service.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161214] via-[#161214]/20 to-transparent pointer-events-none" />
                
                {/* Visual Category Label */}
                <div className="absolute top-3 left-3 bg-[#0B090A]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-medium tracking-wide text-[#E5C378] border border-[#D4AF37]/25">
                  {service.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between text-left">
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#FBF9F5] group-hover:text-[#F3E5AB] transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#D4AF37]/90 font-medium mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-[#A89F99] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Controls */}
                <div className="pt-4 border-t border-[#261E22] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="min-h-[38px] text-xs font-semibold text-[#E8DFC8] hover:text-[#D4AF37] flex items-center gap-1 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded px-1"
                  >
                    <span>Fill Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppServiceLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[38px] inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] rounded text-xs font-semibold transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                    title={`Enquire on WhatsApp about ${service.title}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Note (No invented pricing) */}
        <div className="mt-12 text-center text-xs text-[#8A817D]">
          Custom packages and venue visits available across Lucknow and surrounding destinations. 
          Enquire directly for personalized date availability and requirements.
        </div>

      </div>
    </section>
  );
}
