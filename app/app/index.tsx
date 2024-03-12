import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Link, router } from 'expo-router';

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

      <ScrollView>
        {data?.data.map(listing => {
          return (
            <View
              key={listing.id}
              className="w-full mb-4 border border-gray-200 rounded-lg shadow-md"
            >
              <Pressable
                onPress={() => {
                  router.push(`/listing/${listing.id}`);
                }}
              >
                <View
                  className="w-full mb-2"
                  style={{
                    height: 200,
                    width: '100%',
                  }}
                >
                  <Image
                    className="rounded-b-none rounded-xl"
                    source={{ uri: listing.images[0] }}
                    alt=""
                    style={{ resizeMode: 'cover', height: 200, width: '100%' }}
                  />
                </View>
              </Pressable>

              <View className="p-5">
                <Link href={`/listing/${listing.id}`}>
                  <Text className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    {listing.name}
                  </Text>
                </Link>
                <Text className="mb-2 font-normal text-gray-700">
                  {listing.location}
                </Text>
                <Text className="text-xs font-normal text-gray-700">
                  {listing.bedrooms} Bedroom{listing.bedrooms > 1 ? 's' : ''},{' '}
                  {listing.bathrooms} Bathroom
                  {listing.bathrooms > 1 ? 's' : ''}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
