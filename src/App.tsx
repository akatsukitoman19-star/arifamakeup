/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BridalGallery from './components/BridalGallery';
import MeetArifa from './components/MeetArifa';
import BookingContact from './components/BookingContact';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Bridal HD Makeup');

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B090A] text-[#F5F2EB] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onBookClick={() => scrollToBooking()} />

        {/* 2. Services Section */}
        <Services onSelectService={(svc) => scrollToBooking(svc)} />

        {/* 3. Bridal Gallery (Main Centerpiece with Lightbox) */}
        <BridalGallery />

        {/* 4. Meet Arifa Section */}
        <MeetArifa />

        {/* 5. Booking & Contact Section */}
        <BookingContact preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileActionBar onBookClick={() => scrollToBooking()} />
    </div>
  );
}
