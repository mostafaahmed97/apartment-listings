import { Image, StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Svg, { Path } from 'react-native-svg';

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

function HomeIcon() {
  return (
    <Svg width="30" height="30" fill="#000" viewBox="0 0 486.196 486.196">
      <Path d="M481.708 220.456l-228.8-204.6c-.4-.4-.8-.7-1.3-1-5-4.8-13-5-18.3-.3l-228.8 204.6c-5.6 5-6 13.5-1.1 19.1 2.7 3 6.4 4.5 10.1 4.5 3.2 0 6.4-1.1 9-3.4l41.2-36.9v238.6c0 18.7 15.2 34 34 34H169.908c17.6 0 31.9-14.3 31.9-31.9v-121.3c0-2.7 2.2-4.9 4.9-4.9h72.9c2.7 0 4.9 2.2 4.9 4.9v121.3c0 17.6 14.3 31.9 31.9 31.9h72.2c19 0 34-18.7 34-42.6v-228.7l41.2 36.9c2.6 2.3 5.8 3.4 9 3.4 3.7 0 7.4-1.5 10.1-4.5 4.8-5.6 4.3-14.1-1.2-19.1zm-86.2 66.7v145.1c0 9.7-4.8 15.6-7 15.6h-72.2c-2.7 0-4.9-2.2-4.9-4.9v-121.1c0-17.6-14.3-31.9-31.9-31.9h-72.9c-17.6 0-31.9 14.3-31.9 31.9v121.3c0 2.7-2.2 4.9-4.9 4.9H97.608c-3.8 0-7-3.1-7-7v-262.8l151.8-135.6 153.1 136.9v107.6z"></Path>
    </Svg>
  );
}

export default function Layout() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View className="flex flex-row items-center p-4 shadow-lg">
          <View className="mr-4">
            <HomeIcon></HomeIcon>
          </View>

          <View>
            <Text className="text-xl font-bold">Listings Hero</Text>
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
