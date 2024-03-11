import mongoose from 'mongoose';

interface IListing {
  name: string;
  price: number;
  location: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  space: number;
  amenities: string[];
}

const listingSchema = new mongoose.Schema<IListing>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  images: { type: [String], required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  space: { type: Number, required: true },
  amenities: { type: [String], required: true },
});

// write id instead of _id & remove __v key
listingSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export const Listing = mongoose.model<IListing>('Listing', listingSchema);
