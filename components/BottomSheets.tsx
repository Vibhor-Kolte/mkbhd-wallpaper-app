import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';

export const DownloadPicture = ({onClose, wallpaper}:{
    onClose: () => void;
    wallpaper: Wallpaper
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

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
      >
        <BottomSheetView style={styles.contentContainer}>
          <Image style={{height:"60%", width:"100%"}} source={wallpaper.path}/>
          <Button title='Download Picture'/>
        </BottomSheetView>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});