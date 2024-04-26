import { colors, fontSize } from "@/constants/tokens"
import { BlurView } from "expo-blur"
import {Tabs} from "expo-router"
import {StyleSheet} from 'react-native'
import {FontAwesome, Ionicons, MaterialCommunityIcons,FontAwesome6} from '@expo/vector-icons'
const TabsNavigation = () => {
  return ( 
    <Tabs screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarLabelStyle: {
        fontSize: fontSize.xs,
	fontWeight: '500',
      },
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
	borderTopRightRadius: 20,
	borderTopLeftRadius: 20,
	borderTopWidth: 0,
	paddingTop: 8
      },
      tabBarBackground: () => {
        <BlurView 
	  intensity={95}
	  style={{
	    ...StyleSheet.absoluteFillObject,
	    overflow: 'hidden',
	    borderTopLeftRadius: 20,
	    borderTopRightRadius: 20,
	  }}
	/>
      }
    }}>
      <Tabs.Screen 
        name="favourites"
	options={{
	  title: "Favourites",
	  tabBarIcon: ({color}) => {
	    <FontAwesome name= 'heart' size={20} color={ color } />
	}}}
      />
      <Tabs.Screen name="playlists"
        
      />
      <Tabs.Screen name="(songs)" />
      <Tabs.Screen name="artists" />
    </Tabs>
  )
}

export default TabsNavigation
