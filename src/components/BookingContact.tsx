import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Instagram, 
  MapPin, 
  Calendar, 
  User, 
  Sparkles, 
  ExternalLink,
  Send,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { ARTIST_INFO } from '../data/portfolioData';

interface BookingContactProps {
  preselectedService?: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  eventDate?: string;
}

export default function BookingContact({ preselectedService }: BookingContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    eventType: 'Bridal HD Makeup',
    venue: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [redirectingToWhatsApp, setRedirectingToWhatsApp] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  // Calculate today's date formatted as YYYY-MM-DD for min date
  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        eventType: preselectedService,
      }));
    }
  }, [preselectedService]);

  const validateField = (name: string, value: string): string | undefined => {
    if (name === 'name') {
      if (!value.trim()) return 'Please enter your name.';
      if (value.trim().length < 2) return 'Name must be at least 2 characters.';
    }
    if (name === 'phone' && value.trim()) {
      // Remove spaces, hyphens, and +
      const cleanDigits = value.replace(/[\s\-+()]/g, '');
      if (cleanDigits.length < 10) {
        return 'Please enter a valid 10-digit mobile number.';
      }
    }
    if (name === 'eventDate' && value) {
      if (value < todayStr) {
        return 'Event date cannot be in the past.';
      }
    }
    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error on change if it was resolved
    if (errors[name as keyof FormErrors]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    const nameErr = validateField('name', formData.name);
    if (nameErr) newErrors.name = nameErr;

    const phoneErr = validateField('phone', formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const dateErr = validateField('eventDate', formData.eventDate);
    if (dateErr) newErrors.eventDate = dateErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first error field
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorKey);
      if (element) element.focus();
      return;
    }

    setErrors({});

    // Generate cleanly formatted WhatsApp message
    const messageLines = [
      `*New Booking Enquiry — Arifa Makeup Artist*`,
      `-----------------------------------------`,
      `*Client Name:* ${formData.name.trim()}`,
      formData.phone.trim() ? `*Contact Phone:* ${formData.phone.trim()}` : '',
      `*Service Required:* ${formData.eventType}`,
      formData.eventDate ? `*Event Date:* ${formData.eventDate}` : '*Event Date:* Not fixed yet (discuss availability)',
      formData.venue.trim() ? `*Venue / Area:* ${formData.venue.trim()}` : '*Location:* Lucknow',
      formData.message.trim() ? `*Notes & Preferences:* ${formData.message.trim()}` : '',
      `-----------------------------------------`,
      `Sent via arifamakeup website booking inquiry.`,
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const waUrl = `https://wa.me/916307452168?text=${encodeURIComponent(fullMessage)}`;

    setLastWhatsAppUrl(waUrl);
    setRedirectingToWhatsApp(true);

    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0B090A] border-t border-[#1F171A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Reservations & Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FBF9F5] tracking-tight mb-4">
            Book Your Date
          </h2>
          <p className="text-sm sm:text-base text-[#A89F99] leading-relaxed">
            Reserve your wedding dates in advance. Complete the short enquiry form below to chat directly on WhatsApp, or call Arifa directly.
          </p>
        </div>

        {/* 2-Column Booking & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact & Location Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Direct Connect Buttons (Call & WhatsApp prominent) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#140F12] border border-[#2D2327] shadow-xl">
              <h3 className="font-serif text-xl font-medium text-[#FBF9F5] mb-2">
                Instant Connectivity
              </h3>
              <p className="text-xs text-[#A89F99] mb-5">
                For prompt replies, date checks, and immediate bridal consultations:
              </p>

              <div className="space-y-3">
                {/* WhatsApp */}
                <a
                  href={ARTIST_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[50px] flex items-center justify-between p-3.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 rounded-xl transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366] text-black flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#25D366] font-semibold uppercase tracking-wider">Chat on WhatsApp</div>
                      <div className="text-sm font-medium text-[#F5F2EB]">{ARTIST_INFO.phoneDisplay}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#25D366] opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Call Direct */}
                <a
                  href={ARTIST_INFO.callUrl}
                  className="w-full min-h-[50px] flex items-center justify-between p-3.5 bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 border border-[#D4AF37]/35 rounded-xl transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37] text-black flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#E5C378] font-semibold uppercase tracking-wider">Call Directly</div>
                      <div className="text-sm font-medium text-[#F5F2EB]">{ARTIST_INFO.phoneDisplay}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Additional verified contacts */}
              <div className="mt-5 pt-5 border-t border-[#251D21] grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={ARTIST_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-2 p-2.5 rounded-lg bg-[#1B1418] hover:bg-[#231A20] text-xs text-[#C8C0B7] hover:text-[#FBF9F5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5759E]"
                >
                  <Instagram className="w-4 h-4 text-[#E5759E] shrink-0" />
                  <span className="truncate">{ARTIST_INFO.instagramHandle}</span>
                </a>

                <a
                  href={ARTIST_INFO.emailUrl}
                  className="min-h-[44px] flex items-center gap-2 p-2.5 rounded-lg bg-[#1B1418] hover:bg-[#231A20] text-xs text-[#C8C0B7] hover:text-[#FBF9F5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="truncate">Email Artist</span>
                </a>
              </div>
            </div>

            {/* Studio Location Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#140F12] border border-[#2D2327]">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-medium text-[#FBF9F5] mb-1">
                    Studio & Visit Location
                  </h4>
                  <p className="text-xs text-[#C2B7AE] leading-relaxed mb-3">
                    {ARTIST_INFO.locationDisplay}
                  </p>
                  <a
                    href={ARTIST_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Pre-filled WhatsApp Booking Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 rounded-2xl bg-[#140F12] border border-[#2D2327] shadow-xl text-left">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-medium text-[#FBF9F5] mb-1.5">
                  Booking Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#A89F99]">
                  Pre-fills WhatsApp with your wedding event details so you can message Arifa directly.
                </p>
              </div>

              {/* Informational WhatsApp Dispatch State (No fake confirmation) */}
              {redirectingToWhatsApp && (
                <div className="mb-5 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-xs text-[#F5F2EB] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#25D366] text-sm mb-1">
                      Connecting to WhatsApp...
                    </div>
                    <p className="text-[#C2B7AE] leading-relaxed">
                      Your details were formatted into a WhatsApp message for Arifa Rizwan Siddiqui. If WhatsApp did not open automatically,{' '}
                      <a 
                        href={lastWhatsAppUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#25D366] underline font-medium hover:text-white"
                      >
                        tap here to open WhatsApp directly
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleWhatsAppSubmit} noValidate className="space-y-4">
                {/* Name & Phone in 2 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#C8C0B7] font-medium mb-1.5">
                      Your Full Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6E645F]">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Fatima Khan"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`w-full min-h-[44px] pl-9 pr-3 py-2.5 bg-[#0B090A] border rounded-lg text-sm text-[#FBF9F5] placeholder-[#5C5357] focus:outline-none transition-colors ${
                          errors.name 
                            ? 'border-rose-500/80 focus:border-rose-500 ring-1 ring-rose-500/30' 
                            : 'border-[#352A30] focus:border-[#D4AF37]'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#C8C0B7] font-medium mb-1.5">
                      Contact Phone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6E645F]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className={`w-full min-h-[44px] pl-9 pr-3 py-2.5 bg-[#0B090A] border rounded-lg text-sm text-[#FBF9F5] placeholder-[#5C5357] focus:outline-none transition-colors ${
                          errors.phone 
                            ? 'border-rose-500/80 focus:border-rose-500 ring-1 ring-rose-500/30' 
                            : 'border-[#352A30] focus:border-[#D4AF37]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Event Type & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventType" className="block text-xs uppercase tracking-wider text-[#C8C0B7] font-medium mb-1.5">
                      Service / Event Type <span className="text-[#D4AF37]">*</span>
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full min-h-[44px] px-3 py-2.5 bg-[#0B090A] border border-[#352A30] focus:border-[#D4AF37] rounded-lg text-sm text-[#FBF9F5] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Bridal HD Makeup">Bridal HD Makeup</option>
                      <option value="Reception Makeup">Reception Makeup</option>
                      <option value="Engagement Makeup">Engagement Makeup</option>
                      <option value="Party Makeup">Party Makeup</option>
                      <option value="Bridal + Reception Combo">Bridal + Reception Combo</option>
                      <option value="Multiple Wedding Events">Multiple Wedding Events</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-xs uppercase tracking-wider text-[#C8C0B7] font-medium mb-1.5">
                      Event Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6E645F]">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        min={todayStr}
                        value={formData.eventDate}
                        onChange={handleChange}
                        aria-invalid={!!errors.eventDate}
                        aria-describedby={errors.eventDate ? 'date-error' : undefined}
                        className={`w-full min-h-[44px] pl-9 pr-3 py-2.5 bg-[#0B090A] border rounded-lg text-sm text-[#FBF9F5] focus:outline-none transition-colors [color-scheme:dark] ${
                          errors.eventDate 
                            ? 'border-rose-500/80 focus:border-rose-500 ring-1 ring-rose-500/30' 
                            : 'border-[#352A30] focus:border-[#D4AF37]'
                        }`}
                      />
                    </div>
                    {errors.eventDate && (
                      <p id="date-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.eventDate}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Venue / City */}
                <div>
                  <label htmlFor="venue" className="block text-xs uppercase tracking-wider text-[#C8C0B7] font-medium mb-1.5">
                    Venue / City in Lucknow
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6E645F]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="venue"
                      name="venue"
                      value={formData.venue}
                      onChange={handleChange}
                      placeholder="e.g. Hotel / Banquet name or Home location"
                      className="w-full min-h-[44px] pl-9 pr-3 py-2.5 bg-[#0B090A] border border-[#352A30] focus:border-[#D4AF37] rounded-lg text-sm text-[#FBF9F5] placeholder-[#5C5357] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message / Details */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#C8C0B7] font-medium mb-1.5">
                    Specific Look, Attire, or Time Preferences
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell Arifa about your outfit shade (red, emerald, pastel), timing, or specific requests..."
                    className="w-full px-3 py-2.5 bg-[#0B090A] border border-[#352A30] focus:border-[#D4AF37] rounded-lg text-sm text-[#FBF9F5] placeholder-[#5C5357] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit to WhatsApp */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full min-h-[48px] py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-black font-semibold text-xs tracking-wider uppercase rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry on WhatsApp</span>
                  </button>
                  <p className="mt-2 text-center text-[11px] text-[#7E757A]">
                    Opens WhatsApp with your filled enquiry formatted directly for Arifa. No registration required.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
