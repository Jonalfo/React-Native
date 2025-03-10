import { Stack } from 'expo-router';
import 'react-native-reanimated';
export default function Layout() {
  
  return (

      <Stack>
        <Stack.Screen name="index" options={{ headerShown:false}} />
        <Stack.Screen name="conversor" options={{ headerShown:false}} />
      </Stack>

  );
}
