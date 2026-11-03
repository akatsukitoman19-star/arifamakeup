import { ServiceItem, GalleryItem } from '../types';

// Bundled asset imports for Vite production deployment
import heroImage from '../assets/images/hero_bridal_portrait_1793689106925.jpg';
import serviceBridalHd from '../assets/images/service_bridal_hd_1793689107943.jpg';
import serviceReception from '../assets/images/service_reception_look_1793689108064.jpg';
import serviceEngagement from '../assets/images/service_engagement_look_1793689109829.jpg';
import artistPortrait from '../assets/images/artist_photo_downloaded.jpg';
import galleryPartyGlam from '../assets/images/gallery_party_glam_1793689131443.jpg';
import galleryTraditionalNikah from '../assets/images/gallery_traditional_nikah_1793689132037.jpg';
import galleryEyeArtistry from '../assets/images/gallery_eye_artistry_1793689131837.jpg';

export const ARTIST_INFO = {
  businessName: 'Arifa Makeup Artist',
  artistName: 'Arifa Rizwan Siddiqui',
  tagline: 'Let Your Beauty Shine on Your Big Day',
  locationDisplay: 'Bazaar Khala Chauraha, Lucknow, Uttar Pradesh 226003',
  cityState: 'Lucknow, Uttar Pradesh',
  phoneRaw: '+916307452168',
  phoneDisplay: '+91 63074 52168',
  email: 'arifarizwansiddiqui@gmail.com',
  instagramHandle: '@arifamakeup_lucknow',
  instagramUrl: 'https://www.instagram.com/arifamakeup_lucknow/',
  whatsappUrl: 'https://wa.me/916307452168',
  callUrl: 'tel:+916307452168',
  emailUrl: 'mailto:arifarizwansiddiqui@gmail.com',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bazaar+Khala+Chauraha+Lucknow+Uttar+Pradesh+226003',
  artistPortrait: artistPortrait,
  artistPortraitDriveUrl: 'https://drive.google.com/uc?export=view&id=1UH2uWGnakADDc-0pqWcyqbjR3LZbuCpl',
  heroImage: heroImage,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'bridal-hd',
    title: 'Bridal HD Makeup',
    subtitle: 'Flawless Camera-Ready Radiance',
    description: 'High-definition bridal makeup crafted for natural glow, intricate jewelry harmony, and long-lasting elegance throughout wedding rituals.',
    image: serviceBridalHd,
    category: 'Bridal HD',
  },
  {
    id: 'reception',
    title: 'Reception Makeup',
    subtitle: 'Sophisticated Evening Glamour',
    description: 'Contemporary evening bridal beauty featuring sculpted contours, soft smokey eye definition, and luminous party lighting balance.',
    image: serviceReception,
    category: 'Reception',
  },
  {
    id: 'engagement',
    title: 'Engagement Makeup',
    subtitle: 'Fresh & Romantic Glow',
    description: 'Soft pastel tones, dewy glass-skin finish, and delicate styling designed to complement your ring ceremony and celebratory attire.',
    image: serviceEngagement,
    category: 'Engagement',
  },
  {
    id: 'party',
    title: 'Party Makeup',
    subtitle: 'Celebratory Festive Elegance',
    description: 'Bespoke glamour for bridesmaids, family celebrations, and festive events with personalized color harmony and durable finish.',
    image: galleryPartyGlam,
    category: 'Party',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'look-1',
    title: 'Royal Awadhi Nikah Elegance',
    category: 'Traditional',
    image: galleryTraditionalNikah,
    caption: 'Classic Lucknowi royal bridal styling with statement jhumar passa, soft kohled eyes, and crimson velvet embroidery drape.',
  },
  {
    id: 'look-2',
    title: 'Luminous HD Bridal Glow',
    category: 'Bridal HD',
    image: serviceBridalHd,
    caption: 'Velvety high-definition bridal base with gold shimmer eyelid accents, defined brows, and soft rose undertones.',
  },
  {
    id: 'look-3',
    title: 'Emerald & Gold Reception Glam',
    category: 'Reception',
    image: serviceReception,
    caption: 'Modern luxury evening reception makeover featuring sculpted cheekbones, soft charcoal smokey eyes, and glossy nude lips.',
  },
  {
    id: 'look-4',
    title: 'Pastel Flora Engagement Look',
    category: 'Engagement',
    image: serviceEngagement,
    caption: 'Romantic soft-peach glow with delicate floral hair weave, dewy skin preparation, and lightweight finish.',
  },
  {
    id: 'look-5',
    title: 'Royal Crimson Velvet Bridal',
    category: 'Bridal HD',
    image: heroImage,
    caption: 'Regal bridal portrait in deep zardozi crimson lehenga, heritage kundan ornaments, and camera-ready HD coverage.',
  },
  {
    id: 'look-6',
    title: 'Sapphire Festive Party Makeup',
    category: 'Party',
    image: galleryPartyGlam,
    caption: 'Evening celebratory makeover with luminous champagne highlight, bronze lid gradient, and defined lash line.',
  },
  {
    id: 'look-7',
    title: 'Precision Cut-Crease & Gold Glitter',
    category: 'Bridal HD',
    image: galleryEyeArtistry,
    caption: 'Detailed eye artistry showcase featuring seamless transition shades, micro gold shimmer, and featherweight lashes.',
  },
];
