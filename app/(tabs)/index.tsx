import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { SafeAreaView, Text, Image, StyleSheet } from "react-native";

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
            {wallpapers.map((w : Wallpaper) => <ImageCard wallpaper={w} />)}
        </ParallaxScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden", // Ensures the image is cropped
        height: 200,        // Height of the visible part
      },
      image: {
        width: "100%",
        height: 650, // Larger height will allow cropping the top
      },
  });