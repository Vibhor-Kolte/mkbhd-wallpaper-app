import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout(){
    return <GestureHandlerRootView>
        {/* <Slot/> */}
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen 
                name="(nobottombar)/accountinfo" 
                options={{
                    headerShown:true,
                    headerTitle:"Account Info",
                    headerBackTitle:"Go Back"
                }} 
            />
        </Stack>
    </GestureHandlerRootView>
}