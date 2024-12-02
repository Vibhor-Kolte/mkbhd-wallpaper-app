import { Wallpaper } from "@/hooks/useWallpapers";
import { View, Image, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { Ionicons } from "@expo/vector-icons";

export default function ImageCard({ wallpaper }: { wallpaper: Wallpaper }) {
  const theme = useColorScheme() ?? 'light';

  return (
    <View>
      <Image source={wallpaper.path} style={styles.image} />
      <View style={styles.labelContainer}>
        <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
        <View style={styles.iconContainer}>
          <Ionicons
            name={'heart'}
            size={18}
            color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
  },
  label: {
    color: "white"
  },
  labelContainer: {
    position: "absolute",
    backgroundColor:"rgba(0, 0, 0, 0.5)",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  iconContainer:{
    display: "flex",
    justifyContent: "center"
  }
});