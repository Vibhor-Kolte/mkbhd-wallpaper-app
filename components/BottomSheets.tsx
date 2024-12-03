import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Wallpaper } from '@/hooks/useWallpapers';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';

export const DownloadPicture = ({onClose, wallpaper}:{
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
        handleIndicatorStyle={{height:0}}   // disable bottomsheet upper notch
        snapPoints={['99%']}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        onClose={onClose}
        handleStyle={{display: "none"}}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View style={styles.container}>
            <Image style={styles.image} source={wallpaper.path}/>
          </View>
          <View style={styles.topbar}>
            <Ionicons
                name={'close'}
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
              />
              <View style={styles.topbarleft}>
                <Ionicons
                  name={'heart'}
                  size={24}
                  color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                />
                <Ionicons
                  name={'share'}
                  size={24}
                  color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                  style={{paddingLeft:6}}
                />
              </View>
          </View>
          <View>
            <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
          </View>
          {/* <Button title='Download Picture'/> */}
          <DownloadButton/>
        </BottomSheetView>
      </BottomSheet>
  );
};

function DownloadButton(){
  const theme = useColorScheme() ?? 'light';
  return(
    <Pressable style={{backgroundColor:"black", padding:10, marginHorizontal:30, borderRadius:20, justifyContent:"center"}}>
      <View style={{ flexDirection: "row", justifyContent:"center" }}>
        <Ionicons
          name={'download'}
          size={24}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          style={{paddingLeft:6}}
        />
        <Text style={{fontSize:20, color:"white", textAlign:"center", fontWeight:"600"}}>Download Picture</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height:"50%",
    width:"100%",
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
    fontSize: 20,
    fontWeight: "600",
    padding: 10
  }
});