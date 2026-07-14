// import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useColorScheme } from 'react-native';

// import { AnimatedSplashOverlay } from '@/components/animated-icon';
// import AppTabs from '@/components/app-tabs';
// import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
// import '@/src/global.css';

// SplashScreen.preventAutoHideAsync();

// export default function TabLayout() {
//   const colorScheme = useColorScheme();
//   return (
    
//     <GluestackUIProvider mode="dark">
//       <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <AnimatedSplashOverlay />
//       {/* <AppTabs /> */}
//       <Stack screenOptions={{headerShown : false}}>
//         <Stack.Screen name='index' />
//         <Stack.Screen name='recipe/[id]/index' options={{headerShown: false , animation: 'slide_from_right'}} />
//       </Stack>
//     </ThemeProvider>
//     </GluestackUIProvider>
  
//   );
// }
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/src/global.css';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider mode={colorScheme === 'dark' ? 'dark' : 'light'}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AnimatedSplashOverlay />
        
        <Stack screenOptions={{ headerShown: false }}>

          <Stack.Screen name="(tabs)" />
          
          <Stack.Screen 
            name="recipe/[id]/index" 
            options={{ 
              headerShown: false, 
              animation: 'slide_from_right' 
            }} 
          />
        </Stack>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}