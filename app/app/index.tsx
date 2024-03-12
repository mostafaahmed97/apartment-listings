import { FlatList, Image, Text, View } from 'react-native';

import { Link } from 'expo-router';
import { PaginatedListings } from './types';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

async function getListings() {
  try {
    const res = await axios.get<PaginatedListings>(
      'http://192.168.1.101:3000/listings'
    );

    return res.data;
  } catch (error) {
    console.log({ error });
  }
}

export default function Page() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['listings'],
    queryFn: getListings,
  });

  return (
    <View className="p-2 bg-white">
      {isLoading && <Text>Loading...</Text>}

      {isError && <Text>Error occured</Text>}

      {data?.data.map(listing => {
        return (
          <View
            key={listing.id}
            className="max-w-sm mb-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={`/listing/${listing.id}`}>
              <Image
                className="rounded-t-lg"
                source={{ uri: listing.images[0] }}
                resizeMode="contain"
                style={{
                  resizeMode: 'cover',
                  height: '100%',
                  width: '100%',
                }}
              />
            </Link>

            <View className="p-5">
              <Link href={`/listing/${listing.id}`}>
                <Text className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {listing.name}
                </Text>
              </Link>
              <Text className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                {listing.location}
              </Text>
              <Text className="text-xs font-normal text-gray-700 dark:text-gray-400">
                {listing.bedrooms} Bedroom{listing.bedrooms > 1 ? 's' : ''},{' '}
                {listing.bathrooms} Bathroom{listing.bathrooms > 1 ? 's' : ''}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
