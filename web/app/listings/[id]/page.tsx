import Link from 'next/link';
import { Listing } from '../types';
import ListingDetails from '@/components/ListingDetails';
import ListingShowcase from '@/components/ListingShowcase';

async function getListingsData(id: string) {
  const res = await fetch(`${process.env.API_URL}/listings/${id}`);

  if (!res.ok) throw new Error('Failed to get listing');

  return res.json() as Promise<Listing>;
}

export default async function Page({ params }: { params: { id: string } }) {
  const listing = await getListingsData(params.id);

  return (
    <>
      <Link href="/listings" className="mb-2 text-sm text-gray-500">
        See All
      </Link>

      <h1 className="my-4 text-2xl font-bold">{listing.name}</h1>

      <div className="flex flex-col gap-1 md:flex-row">
        <ListingShowcase listing={listing}></ListingShowcase>
        <ListingDetails listing={listing}></ListingDetails>
      </div>
    </>
  );
}
