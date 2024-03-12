import { Image, StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { NativeWindStyleSheet } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 0 },
  },
});

export default function Layout() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View className="flex flex-row items-center p-4 shadow-lg">
          <View className="mr-4">
            <Image src="@/assets/images/house.svg"></Image>
          </View>

          <View className="font-bold">
            <Text>Listings Hero</Text>
          </View>
        </View>

        <QueryClientProvider client={queryClient}>
          <Slot />
        </QueryClientProvider>

        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
