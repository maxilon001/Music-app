import {View} from "react-native";
import { Stack } from "expo-router";
import { defaultStyles } from "@/styles";
import SongsScreenLayout from "../favourites/_layout";

const PlaylistsScreenLayout =() => {
  return( 
    <View style={defaultStyles.container}>
      <Stack> 
        <Stack.Screen 
          name="index"
          options={{ headerTitle: "Playlists" }} />
      </Stack>
    </View>
  )
} 

export default PlaylistsScreenLayout
