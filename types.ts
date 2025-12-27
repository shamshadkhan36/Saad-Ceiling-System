
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  category: string;
  title: string;
}

export interface ContactDetails {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
}
