import ParallaxScrollView from "@/components/ParallaxScrollView";
import SplitView from "@/components/SplitView";
import { useWallpapers } from "@/hooks/useWallpapers";
import { SafeAreaView, Text, Image, StyleSheet } from "react-native";

export default function explore(){
    const wallpapers = useWallpapers();

    return <SafeAreaView style={{flex:1}}>
        {/* <ParallaxScrollView
            headerBackgroundColor={{dark:"black", light:"white"}}
            headerImage={
                <Image
                    style={styles.image}
                    source={require('../../assets/images/background-mkbhd.png')}                
                  />}
        > */}
            {/* <Text>Explore</Text> */}
            <SplitView wallpapers={wallpapers}/>
        {/* </ParallaxScrollView> */}
    </SafeAreaView>
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 650, // Larger height will allow cropping the top
    }
});