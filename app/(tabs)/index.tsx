// import { DownloadPicture } from "@/components/BottomSheets";
// import { useState } from "react";
// import { View, Text, Button } from "react-native";

// export default function explore(){
//     const [pictureOpen, setPictureOpen] = useState(false);

//     return <View style={{flex:1}}>
//         <Text>Explore</Text>
//         <Button title="Open BottomSheet" onPress={()=>{
//             setPictureOpen(true)
//         }}></Button>
//         {pictureOpen && <DownloadPicture onClose={()=> setPictureOpen(false)}/>}
//     </View>
// }

/*
https://ideogram.ai/assets/progressive-image/balanced/response/Qe7xc3cpQZKvL7-8dArixQ

https://ideogram.ai/assets/progressive-image/balanced/response/W6Ua0_IETiiz8FFg2LUrQQ

https://ideogram.ai/assets/progressive-image/balanced/response/BtX8utsBRMyOGzCbc9_Xcg

https://ideogram.ai/assets/image/lossless/response/2G7PFcN-Qsi33GP8ZmpAXA

https://ideogram.ai/assets/progressive-image/balanced/response/95pj65_QTRanKU6qnUQexw

https://ideogram.ai/assets/progressive-image/balanced/response/shL2ddnbS4GjVebsOyl5FA

https://ideogram.ai/assets/progressive-image/balanced/response/CAxwMPAUT0WTPl_Rj6xQNQ
*/

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SafeAreaView, Text, Image, StyleSheet } from "react-native";

export default function explore(){
    return <SafeAreaView style={{flex:1}}>
        <ParallaxScrollView
            headerBackgroundColor={{dark:"black", light:"white"}}
            headerImage={
                <Image
                    // style={{ width: 200, height: 200 }}
                    style={styles.image}
                    source={require('../../assets/images/background-mkbhd.png')}                
                  />}
            // headerImage={<Image style={{flex:1}} source={{uri: "https://ideogram.ai/assets/progressive-image/balanced/response/Qe7xc3cpQZKvL7-8dArixQ"}}/>}
        >
            <Text>Explore</Text>
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