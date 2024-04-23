import {View} from "react-native"

const SongsScreenLayout =() => {
  return <View style="{defaultStyles.container}">
    <Stack> 
      <Stack.Screen 
        name="index"
        options={{ headerTitles: "Songs" }} />
    </Stack>
  </View>
}

export default SongsScreenLayout 