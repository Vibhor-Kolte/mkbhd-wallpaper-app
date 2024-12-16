
import { ThemedView } from "@/components/ThemedView";
import { Wallpaper } from "@/hooks/useWallpapers";
import ImageCard from "./ImageCard";
import { FlatList, View,StyleSheet } from "react-native";
import { useState } from "react";
import { DownloadPictureBottomsheet } from "./DownloadPictureBottomSheets";

export default function SplitView({wallpapers, onScroll}:{
    wallpapers: Wallpaper[];
    onScroll?: (yOffset: number) => void;
}) {

    const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);

    return(
        <>
            <FlatList
                onScroll={(e) => {
                    let yOffset = e.nativeEvent.contentOffset.y / 1;
                    onScroll?.(yOffset);
                }}
                data={wallpapers.reduce<[Wallpaper, Wallpaper][]>((result, _, index, array) => {
                    if (index % 2 === 0) {
                        result.push([array[index], array[index + 1]]);
                    }
                    return result;
                }, [])}
                renderItem={({item : [first, second]}) =>(
                    <ThemedView style={styles.container}>
                        <ThemedView style={styles.innerContainer}>
                            <View style={styles.imageContainer}>
                                {first && (
                                    <ImageCard
                                        onPress={() => setSelectedWallpaper(first)}
                                        wallpaper={first}
                                    />
                                )}
                            </View>
                        </ThemedView>
    
                        <ThemedView style={styles.innerContainer}>
                            <View style={styles.imageContainer}>
                                {second && (
                                    <ImageCard
                                        onPress={() => setSelectedWallpaper(second)}
                                        wallpaper={second}
                                    />
                                )}
                            </View>
                        </ThemedView>
                    </ThemedView>
                )}
                keyExtractor={(item, index) => `row-${index}`}
            />
            {selectedWallpaper && (
                <DownloadPictureBottomsheet
                    onClose={() => {
                        setSelectedWallpaper(null);
                    }}
                    wallpaper={selectedWallpaper}
                />
            )}
        </>
    );    
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