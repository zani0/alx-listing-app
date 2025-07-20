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
  [x: string]: Key | null | undefined;
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
  price: string;
  rating: number;
}