import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Wallpaper } from '@/hooks/useWallpapers';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

export const DownloadPictureBottomsheet = ({onClose, wallpaper}:{
    onClose: () => void;
    wallpaper: Wallpaper
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? 'light';

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
      <BottomSheet
        handleIndicatorStyle={{display: "none"}}   // disable bottomsheet upper notch
        snapPoints={['95%']}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        onClose={onClose}
        handleStyle={{display: "none"}}
      >
        <BottomSheetView style={styles.contentContainer}>
          <ThemedView style={styles.container}>
          {/* <Image style={styles.image} source={wallpaper.path}/> */}
            <Image style={styles.image} source={{uri:wallpaper.path}}/>

            <View style={styles.topbar}>
              <Ionicons
                  name={'close'}
                  size={24}
                  color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
                  onPress={onClose}
                />
                <View style={styles.topbarleft}>
                  <Ionicons
                    name={'heart'}
                    size={24}
                    color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
                  />
                  <Ionicons
                    name={'share'}
                    size={24}
                    color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
                    style={{paddingLeft:6}}
                  />
                </View>
            </View>
          

            <ThemedView style={{width: "100%"}}>
              <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
            </ThemedView>
            {/* <Button title='Download Picture'/> */}

            <DownloadButton url={wallpaper.path} />

          </ThemedView>
        </BottomSheetView>
      </BottomSheet>
  );
};

function DownloadButton({ url }: { url: string }){
  const theme = useColorScheme() ?? 'light';
  return(
    <Pressable 
      onPress={async () => {
        let dateTime = new Date().getTime();
        let fileUri = FileSystem.documentDirectory + `${dateTime}.jpg`;
        
        try {
            await FileSystem.downloadAsync(url, fileUri)
            const response = await MediaLibrary.requestPermissionsAsync(true)
            if (response.granted) {
              MediaLibrary.createAssetAsync(fileUri)
              alert("Image saved")
            } else {
              console.error("permission not granted")
            }
        } catch (err) {
            console.log("FS Err: ", err)
        }
      }}
      style={{
        backgroundColor:theme === 'light' ? Colors.light.icon : 'black', padding:10, marginHorizontal:30, borderRadius:20, justifyContent:"center", flexDirection: "row", borderWidth: 1,
        borderColor: theme === 'light' ? Colors.light.text : Colors.dark.text
      }}>
        <Ionicons
          name={'download'}
          size={24}
          color={theme === 'light' ? Colors.light.text : Colors.dark.text}
          style={{paddingLeft:6}}
        />
        <ThemedText style={{fontSize:20, textAlign:"center", fontWeight:"600"}}>Download Picture</ThemedText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height:"75%",
    width:"100%",
    // flex:1
  },
  contentContainer: {
    flex: 1,
  },
  image:{
    height:"100%",
    width:"100%",
    borderRadius: 15,
  },
  topbar:{
    position: "absolute",  // makes it visible on the image
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection:"row",
    width: "100%",
  },
  topbarleft:{
    display: "flex",
    flexDirection:"row"
  },
  text:{
    textAlign:"center",
    fontSize: 30,
    fontWeight: "600",
    padding: 20
  }
});