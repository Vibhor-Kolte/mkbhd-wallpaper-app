import { Wallpaper } from "@/hooks/useWallpapers";
import { View, Image, StyleSheet } from "react-native";

export default function ImageCard({ wallpaper }: { wallpaper: Wallpaper }) {
  return (
    <View>
      <Image source={wallpaper.path} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
  },
});