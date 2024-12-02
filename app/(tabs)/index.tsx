import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { View, SafeAreaView, Text, Image, StyleSheet } from "react-native";

export default function explore(){
    const wallpapers = useWallpapers();

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
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    {wallpapers.map((w : Wallpaper) => <ImageCard wallpaper={w} />)}
                </View>

                <View style={styles.innerContainer}>
                    {wallpapers.map((w : Wallpaper) => <ImageCard wallpaper={w} />)}
                </View>
            </View>
        </ParallaxScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    innerContainer: {
        flex: 1,
        padding: 10
        // overflow: "hidden", // Ensures the image is cropped
        // height: 200,        // Height of the visible part
    },
    image: {
        width: "100%",
        height: 650, // Larger height will allow cropping the top
    },
});