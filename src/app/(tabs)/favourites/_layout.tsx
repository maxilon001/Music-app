import {View} from "react-native";
import { Stack } from "expo-router";
import { defaultStyles } from "@/styles";

const FavouritesScreenLayout =() => {
  return( 
    <View style={defaultStyles.container}>
      <Stack> 
        <Stack.Screen 
          name="index"
          options={{ headerTitle: "Favourites" }} />
      </Stack>
    </View>
  )
} 

export default FavouritesScreenLayout 
