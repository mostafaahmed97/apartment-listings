export type Listing = {
  id: string;
  name: string;
  price: number;
  location: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  space: number;
  amenities: string[];
};

export type PaginatedListings = {
  data: Listing[];
  page: number;
  total: number;
  limit: number;
};
