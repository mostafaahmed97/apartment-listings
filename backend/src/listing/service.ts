import { Listing } from './model';
import { NotFoundError } from '../error';

class ListingService {
  async create(payload: any) {
    const listing = await Listing.create(payload);

    return listing;
  }

  async all() {
    const listings = await Listing.find();
    return listings;
  }

  async find(id: string) {
    const listing = await Listing.findById(id);

    if (!listing) {
      throw new NotFoundError('Listing not found');
    }

    return listing;
  }
}

export const listingService = new ListingService();
