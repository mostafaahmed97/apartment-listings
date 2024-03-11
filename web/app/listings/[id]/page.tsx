import Link from 'next/link';
import { Listing } from '../types';

async function getListingsData(id: string) {
  const res = await fetch(`${process.env.API_URL}/listings/${id}`);

  if (!res.ok) throw new Error('Failed to get listing');

  return res.json() as Promise<Listing>;
}

export default async function Page({ params }: { params: { id: string } }) {
  const listing = await getListingsData(params.id);

  const listingDetails = [
    { key: 'Price', value: listing.price + ' EGP' },
    { key: 'Location', value: listing.location },
    { key: 'Space', value: listing.space + ' m²' },
    { key: 'Bathrooms', value: listing.bathrooms },
    { key: 'Bedrooms', value: listing.bedrooms },
  ];

  const { amenities } = listing;

  return (
    <>
      <Link href="/listings" className="mb-2 text-sm text-gray-500">
        See All
      </Link>

      <h1 className="my-4 text-2xl font-bold">{listing.name}</h1>

      <div className="flex flex-col gap-1 md:flex-row">
        <div className="flex-1 gallery">
          <img
            className="mb-2 rounded-xl"
            src={listing.images[0]}
            alt=""
            height="100%"
            width="100%"
          />

          <small className="block mt-2 mb-1 font-bold text-gray-700">
            Amenities
          </small>
          <div className="flex flex-row flex-wrap gap-1 amenities-chips">
            {amenities.map(amenity => {
              return (
                <div
                  key={amenity}
                  className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1.5 px-3 text-gray-900"
                >
                  <span className="font-sans text-xs font-bold uppercase opacity-80">
                    {amenity}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-row flex-wrap flex-1 gap-3 p-2 details h-min">
          {listingDetails.map(detail => {
            return (
              <div
                key={detail.key}
                className="flex flex-col items-center justify-center p-4 px-6 rounded-lg shadow-xl h-min"
              >
                <small className="mb-1 text-xs text-gray-500">
                  {detail.key}
                </small>

                <div className="font-bold">{detail.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
