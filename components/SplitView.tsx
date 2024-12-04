
import { ThemedView } from "@/components/ThemedView";
import { Wallpaper } from "@/hooks/useWallpapers";
import ImageCard from "./ImageCard";
import { FlatList, View,StyleSheet } from "react-native";
import { useState } from "react";
import { DownloadPicture } from "./BottomSheets";

export default function SplitView({wallpapers}:{
    wallpapers: Wallpaper[]
}) {

    const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);

    return(
        <>
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
        {selectedWallpaper && <DownloadPicture onClose={() => {setSelectedWallpaper(null)}} wallpaper={selectedWallpaper}/>}
        </>
    )
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
    imageContainer:{
        paddingVertical: 10,
    }
});