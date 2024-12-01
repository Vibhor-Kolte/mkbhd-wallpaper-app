import { DownloadPicture } from "@/components/BottomSheets";
import { useState } from "react";
import { View, Text, Button } from "react-native";

export default function explore(){
    const [pictureOpen, setPictureOpen] = useState(false);

    return <View style={{flex:1}}>
        <Text>Explore</Text>
        <Button title="Open BottomSheet" onPress={()=>{
            setPictureOpen(true)
        }}></Button>
        {pictureOpen && <DownloadPicture onClose={()=> setPictureOpen(false)}/>}
    </View>
}