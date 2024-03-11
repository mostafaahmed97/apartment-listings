import { Listing } from './model';

class ListingService {
  async create(payload: any) {
    const listing = await Listing.create(payload);

    return listing;
  }

  async all(page: number = 1) {
    const limit = 5;

    const skip = (page - 1) * limit;

    const [listings, total] = await Promise.all([
      Listing.find().limit(limit).skip(skip),
      Listing.find().countDocuments(),
    ]);

    return {
      data: listings,
      page,
      limit,
      total,
    };
  }

  async find(id: string) {
    const listing = await Listing.findById(id);

    if (!listing) throw new Error('Not found');

    return listing;
  }
}

export const listingService = new ListingService();
