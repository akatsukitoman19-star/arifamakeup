export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bridal HD' | 'Reception' | 'Engagement' | 'Traditional' | 'Party';
  image: string;
  caption: string;
  aspect?: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  eventDate: string;
  eventType: string;
  venueLocation: string;
  message: string;
}
