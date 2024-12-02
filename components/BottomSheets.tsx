import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Wallpaper } from '@/hooks/useWallpapers';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

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
          <View style={styles.closeIcon}>
            <Ionicons
                name={'close'}
                size={18}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
              />
          </View>
          <Button title='Download Picture'/>
        </BottomSheetView>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    height:"50%",
    width:"100%",
  },
  contentContainer: {
    flex: 1,
    // padding: 10,
    // alignItems: 'center',
  },
  image:{
    height:"100%",
    width:"100%",
    borderRadius: 15,
  },
  closeIcon:{
    position: "absolute",  // makes it visible on the image
    padding: 10,
    display: "flex",
    justifyContent: "space-between"
  }
});