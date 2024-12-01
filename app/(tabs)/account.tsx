import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function account(){
    return <View>
        <Text>Account</Text>
        <Link href={"/accountinfo"}><Text>Account Info</Text></Link>

    </View>
}