import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const App = () => {
  return <SafeAreaProvider>
      <RootNavigation/>
      <StatusBar style="auto" />
    </SafeAreaProvider>
}

const RootNavigation = () => {
  <Stack>
    <Stack.Screen 
      name="(tabs)" 
      options={{ headerShown:false }} />
  </Stack>
}

export default App