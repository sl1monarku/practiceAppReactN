import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Appearance } from 'react-native';
import { Colors } from '@/constants/theme';
export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme()

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    
     <Stack screenOptions={{headerStyle: {backgroundColor: theme.headerBackground},headerTintColor: theme.text, headerShadowVisible : false,}}>
      <Stack.Screen name="index" options={{ headerShown: false, title: 'Home' }} />
      <Stack.Screen name="shop" options={{ title: 'Shop', headerTitle: 'Our Items' }} />
      <Stack.Screen name="contact" options={{ title: 'Contact', headerTitle: 'Contact Us' }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
    </Stack>
    
  );
}
