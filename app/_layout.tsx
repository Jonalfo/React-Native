import { Stack } from 'expo-router';
import 'react-native-reanimated';
export default function RootLayout() {
  
  return (

      <Stack>
        <Stack.Screen name="(conversor)"
        options={{ headerShown:false}} />
      </Stack>

  );
}
