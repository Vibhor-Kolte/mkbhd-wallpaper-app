import { Link } from "expo-router";
import { View, Text } from "react-native";

// export default function foryou(){
//     return <View>
//         <Link href={"/suggested"}><Text>suggested</Text></Link>
//         <Link href={"/liked"}><Text>liked</Text></Link>
//         <Link href={"/library"}><Text>library</Text></Link>
        
//         <Text>For You</Text>
//     </View>
// }

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function foryou(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Library" component={HomeScreen}/>
            <Tab.Screen name="Liked" component={Settings}/>
            <Tab.Screen name="Suggested" component={Settings}/>
        </Tab.Navigator>
    );
}

function HomeScreen(){
    return <View>
        <Text>Home Screen....</Text>
    </View>
}

function Settings(){
    return <View>
        <Text>Settings</Text>
    </View>
}