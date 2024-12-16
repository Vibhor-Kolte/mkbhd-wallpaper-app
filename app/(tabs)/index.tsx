import SplitView from "@/components/SplitView";
import { useWallpapers } from "@/hooks/useWallpapers";
import { Text, Image, StyleSheet, View, Dimensions } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import { useState } from "react";
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useCarousel } from "@/hooks/useCarousel";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";

import {configureReanimatedLogger,ReanimatedLogLevel} from 'react-native-reanimated';
configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false,
  });

const TOPBAR_HEIGHT = 250;

export default function explore(){
    const wallpapers = useWallpapers();
    const width = Dimensions.get('window').width;
    const [yOffset, setScrollY] = useState(0);
    const carouselItems = useCarousel();

    const textAnimatedStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(yOffset, [-TOPBAR_HEIGHT, TOPBAR_HEIGHT / 2, TOPBAR_HEIGHT], [1, 1, 0]),
      };
    });

    return <ThemedSafeAreaView style={{flex: 1}}>
    <View style={{height:TOPBAR_HEIGHT - yOffset}}>
      <Carousel
        width={width}
        data={carouselItems}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
          <>
            <View
              style={{
                  flex: 1,
                  borderWidth: 1,
                  justifyContent: 'center',
              }}
            >
              <Image source={{uri: carouselItems[index].image}} style={{height: TOPBAR_HEIGHT}} />
            </View>

            <LinearGradient colors={['transparent', 'black']} style={{flex: 1, position: "absolute", zIndex: 10, height: TOPBAR_HEIGHT / 2, width: "100%", bottom: 0}}>
              <Animated.View style={textAnimatedStyle}>
                <Text style={[{color: "white", paddingTop: TOPBAR_HEIGHT / 3, textAlign: "center", fontSize: 30, fontWeight: "600"}]}>{carouselItems[index].title}</Text>
              </Animated.View>
            </LinearGradient>
          </>
        )}
      />
    </View>
    
    <SplitView onScroll={(yOffset) => {setScrollY(yOffset)}} wallpapers={wallpapers} />
  </ThemedSafeAreaView>
}