import { Image, ScrollView, Text, View } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

import { Listing } from '../types';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

async function getListing(id: string) {
  try {
    const res = await axios.get<Listing>(
      `http://192.168.1.101:5000/listings/${id}`
    );

    return res.data;
  } catch (error) {
    console.log({ error });
  }
}

export default function Page() {
  const { id } = useLocalSearchParams();

  const {
    data: listing,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['listing'],
    queryFn: () => getListing(id as string),
  });

  const listingDetails = [
    { key: 'Price', value: listing?.price + ' EGP' },
    { key: 'Location', value: listing?.location },
    { key: 'Space', value: listing?.space + ' m²' },
    { key: 'Bathrooms', value: listing?.bathrooms },
    { key: 'Bedrooms', value: listing?.bedrooms },
  ];

  const amenities = listing?.amenities || [];

  return (
    <ScrollView className="p-4">
      <Link href="/" className="mb-2 text-sm text-gray-500">
        <Text>See All</Text>
      </Link>

      {isLoading && <Text className="mb-2">Loading...</Text>}

      {isError && <Text className="mb-2">Error occured</Text>}

      <Text className="my-4 text-2xl font-bold">{listing?.name}</Text>

      <View className="flex flex-col gap-1">
        <View className="flex gallery">
          <View
            style={{
              height: 200,
              width: '100%',
            }}
          >
            <Image
              className="mb-2 rounded-xl"
              source={{ uri: listing?.images[0] }}
              style={{
                resizeMode: 'cover',
                height: 200,
                width: '100%',
              }}
            />
          </View>

          <Text className="block mt-2 mb-1 font-bold text-gray-700">
            Amenities
          </Text>
          <View className="flex flex-row flex-wrap gap-1 amenities-chips">
            {amenities.map(amenity => {
              return (
                <View
                  key={amenity}
                  className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1.5 px-3 text-gray-900"
                >
                  <Text className="font-sans text-xs font-bold uppercase opacity-80">
                    {amenity}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        <View className="flex flex-row flex-wrap gap-3 p-2 details h-min">
          {listingDetails.map(detail => {
            return (
              <View
                key={detail.key}
                className="flex flex-col items-center justify-center p-8 rounded-lg shadow-xl h-min"
              >
                <Text className="mb-1 text-xs text-gray-500">{detail.key}</Text>

                <View>
                  <Text className="font-bold">{detail.value}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
