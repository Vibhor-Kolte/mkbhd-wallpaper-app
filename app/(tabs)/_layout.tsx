import { FontAwesome } from "@expo/vector-icons";
import { Link, Slot, Tabs } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function(){
    // return <SafeAreaView>
    //     <View style={{height:"90%"}}>
    //         <Slot/>  {/* Similar to children in next js*/}
    //     </View>
    //     <View style={{backgroundColor:"red"}}>
    //         <Text>Layout</Text>
    //         <Link href={"/foryou"}><Text>foryou</Text></Link>
    //         <Link href={"/explore"}><Text>explore</Text></Link>
    //         <Link href={"/account"}><Text>account</Text></Link>
    //     </View>
    //     {/* <Slot/>   */}
    //     {/* Similar to children in next js*/}
    // </SafeAreaView>

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
          <Tabs.Screen
            name="foryou"
            options={{
              title: 'For You',
              tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }}
          />
          <Tabs.Screen
            name="index"
            options={{
              title: 'Explore',
              tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }}
          />
          <Tabs.Screen
            name="account"
            options={{
              title: 'Account',
              tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
            }}
          />
        </Tabs>
      );
}