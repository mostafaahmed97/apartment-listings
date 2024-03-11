import ListingCard from './ListingCard';
import { PaginatedListings } from './types';

async function getListingsData(page: number = 1) {
  const res = await fetch(`${process.env.API_URL}/listings?page=${page}`);

  console.log({ res });

  if (!res.ok) throw new Error('Failed to get listings');

  return res.json() as Promise<PaginatedListings>;
}

export default async function Listings() {
  const listings = await getListingsData(1);

  return (
    <div className="flex">
      <div className="grid grid-cols-1 gap-4 mx-auto xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 md:mx-0">
        {listings.data.map(listing => {
          return <ListingCard key={listing.id} listing={listing} />;
        })}
      </div>
    </div>
  );
}
