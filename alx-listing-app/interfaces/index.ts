export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  id: number;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}

export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface PropertyCardProps {
  id: number;
  name: string;
  image: string;
  price: number; 
  rating: number;
}
