// import { Link } from "expo-router";
//
// export default function foryou(){
//     return <View>
//         <Link href={"/suggested"}><Text>suggested</Text></Link>
//         <Link href={"/liked"}><Text>liked</Text></Link>
//         <Link href={"/library"}><Text>library</Text></Link>
        
//         <Text>For You</Text>
//     </View>
// }

import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SplitView from "@/components/SplitView";
import { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers, useWallpapers } from "@/hooks/useWallpapers";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const Tab = createMaterialTopTabNavigator();

export default function foryou(){
    const theme = useColorScheme() ?? 'light';
    
    return(
        <View style={styles.container}>
            <Tab.Navigator style={styles.container}
                screenOptions={{
                    tabBarActiveTintColor: Colors[theme].tint,
                    tabBarStyle: {
                        backgroundColor: Colors[theme].background,
                    }, 
                    tabBarIndicatorStyle: {
                        backgroundColor: Colors[theme].indicator,
                        height: 5
                    }
                }}>
                <Tab.Screen name="Library" component={LibraryScreen}/>
                <Tab.Screen name="Liked" component={LikedScreen}/>
                <Tab.Screen name="Suggested" component={SuggestedScreen}/>
            </Tab.Navigator>
        </View>
    );
}

function LibraryScreen(){
    const libraryWallpapers = useLibraryWallpapers();
    return <ThemedView style={styles.container}>
        {/* <Text>Library Screen....</Text> */}
        <SplitView wallpapers={libraryWallpapers}/>
    </ThemedView>
}

function LikedScreen(){
    const likedWallpapers = useLikedWallpapers();
    return <ThemedView style={styles.container}>
        {/* <Text>Liked Screen....</Text> */}
        <SplitView wallpapers={likedWallpapers}/>
    </ThemedView>
}

function SuggestedScreen(){
    const suggestedWallpapers = useSuggestedWallpapers();
    return <ThemedView style={styles.container}>
        {/* <Text>Suggested Screen....</Text> */}
        <SplitView wallpapers={suggestedWallpapers}/>
    </ThemedView>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})