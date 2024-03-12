import { Listing } from './types';
import ListingCard from '@/components/ListingCard';

async function getListingsData(page: number = 1) {
  const res = await fetch(`${process.env.API_URL}/listings?page=${page}`);

  if (!res.ok) throw new Error('Failed to get listings');

  return res.json() as Promise<Listing[]>;
}

export default async function Listings() {
  const listings = await getListingsData(1);

  return (
    <div className="flex">
      <div className="grid grid-cols-1 gap-4 mx-auto xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 md:mx-0">
        {listings.map(listing => {
          return <ListingCard key={listing.id} listing={listing} />;
        })}
      </div>
    </div>
  );
}
