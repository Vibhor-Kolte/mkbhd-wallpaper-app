import { DownloadPicture } from "@/components/BottomSheets";
import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { View, SafeAreaView, Text, Image, StyleSheet, FlatList } from "react-native";

export default function explore(){
    const wallpapers = useWallpapers();
    const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);

    return <SafeAreaView style={{flex:1}}>
        <ParallaxScrollView
            headerBackgroundColor={{dark:"black", light:"white"}}
            headerImage={
                <Image
                    style={styles.image}
                    source={require('../../assets/images/background-mkbhd.png')}                
                  />}
        >
            <Text>Explore</Text>
            <ThemedView style={styles.container}>
                <ThemedView style={styles.innerContainer}>
                    <FlatList
                        data={wallpapers.filter((_, index) => index % 2 === 0)}
                        renderItem={({item}) => <View style={styles.imageContainer}><ImageCard wallpaper={item} onPress={() => {setSelectedWallpaper(item)}} /></View>}
                        keyExtractor={item => item.name}
                    />
                </ThemedView>

                <ThemedView style={styles.innerContainer}>
                    <FlatList
                        data={wallpapers.filter((_, index) => index % 2 === 1)}
                        renderItem={({item}) => <View style={styles.imageContainer}><ImageCard wallpaper={item} onPress={() => {setSelectedWallpaper(item)}} /></View>}
                        keyExtractor={item => item.name}
                    />
                </ThemedView>
            </ThemedView>
        </ParallaxScrollView>
        {selectedWallpaper && <DownloadPicture onClose={() => {setSelectedWallpaper(null)}} wallpaper={selectedWallpaper}/>}
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    innerContainer: {
        flex: 1,
        padding: 10,
        // overflow: "hidden", // Ensures the image is cropped
        // height: 200,        // Height of the visible part
    },
    image: {
        width: "100%",
        height: 650, // Larger height will allow cropping the top
    },
    imageContainer:{
        paddingVertical: 10,
    }
});