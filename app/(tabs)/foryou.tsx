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

const Tab = createMaterialTopTabNavigator();

export default function foryou(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Library" component={LibraryScreen}/>
            <Tab.Screen name="Liked" component={LikedScreen}/>
            <Tab.Screen name="Suggested" component={SuggestedScreen}/>
        </Tab.Navigator>
    );
}

function LibraryScreen(){
    const libraryWallpapers = useLibraryWallpapers();
    return <View style={styles.container}>
        {/* <Text>Library Screen....</Text> */}
        <SplitView wallpapers={libraryWallpapers}/>
    </View>
}

function LikedScreen(){
    const likedWallpapers = useLikedWallpapers();
    return <View style={styles.container}>
        {/* <Text>Liked Screen....</Text> */}
        <SplitView wallpapers={likedWallpapers}/>
    </View>
}

function SuggestedScreen(){
    const suggestedWallpapers = useSuggestedWallpapers();
    return <View style={styles.container}>
        {/* <Text>Suggested Screen....</Text> */}
        <SplitView wallpapers={suggestedWallpapers}/>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})