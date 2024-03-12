import { Listing } from '@/app/listings/types';

type ListingCardProps = {
  listing: Listing;
};

export default function ListingShowcase(props: ListingCardProps) {
  const { listing } = props;
  const { amenities } = listing;

  return (
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
  );
}
