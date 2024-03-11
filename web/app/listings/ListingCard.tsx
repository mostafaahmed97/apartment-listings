import Link from 'next/link';
import { Listing } from './types';

type ListingCardProps = {
  listing: Listing;
};

export default function ListingCard(props: ListingCardProps) {
  const { listing } = props;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md sm:w-100 dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/listings/${listing.id}`}>
        <img className="rounded-t-lg" src={listing.images[0]} alt="" />
      </Link>

      <div className="p-5">
        <Link href={`/listings/${listing.id}`}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {listing.name}
          </h5>
        </Link>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
          {listing.location}
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-400">
          {listing.bedrooms} Bedroom{listing.bedrooms > 1 ? 's' : ''},{' '}
          {listing.bathrooms} Bathroom{listing.bathrooms > 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
}
