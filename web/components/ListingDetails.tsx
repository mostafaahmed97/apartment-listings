import Link from 'next/link';
import { Listing } from '@/app/listings/types';

type ListingCardProps = {
  listing: Listing;
};

export default function ListingDetails(props: ListingCardProps) {
  const { listing } = props;

  const listingDetails = [
    { key: 'Price', value: listing.price + ' EGP' },
    { key: 'Location', value: listing.location },
    { key: 'Space', value: listing.space + ' m²' },
    { key: 'Bathrooms', value: listing.bathrooms },
    { key: 'Bedrooms', value: listing.bedrooms },
  ];

  return (
    <div className="flex flex-row flex-wrap flex-1 gap-3 p-2 details h-min">
      {listingDetails.map(detail => {
        return (
          <div
            key={detail.key}
            className="flex flex-col items-center justify-center p-4 px-6 rounded-lg shadow-xl h-min"
          >
            <small className="mb-1 text-xs text-gray-500">{detail.key}</small>

            <div className="font-bold">{detail.value}</div>
          </div>
        );
      })}
    </div>
  );
}
