import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, Pressable, StyleSheet, SafeAreaView } from "react-native";

export default function account(){
    return <SafeAreaView style={{flex:1}}>
        {/* <Text>Account</Text> */}
        {/* <Link href={"/accountinfo"}><Text>Account Info</Text></Link> */}
        <Header/>
        <LoginButton/>
    </SafeAreaView>
}

function Header(){
    return <View style={styles.topBar}>
        <ThemedText style={styles.bigText}>Panels</ThemedText>
        <ThemedText>Sign in to save your data</ThemedText>
    </View>
}

function LoginButton(){
    const theme = useColorScheme() ?? 'light';

    return <>
        <AuthButton 
            label="Sign In" 
            icon={<Ionicons
                name={'logo-google'}
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                style={{paddingLeft:6}}
            />}
        />

        <AuthButton 
            label="Sign In" 
            icon={<Ionicons
                name={'logo-apple'}
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                style={{paddingLeft:6}}
            />}
        />
    </>
}

function AuthButton({icon, label}:{
    label: string,
    // icon: typeof Ionicons
    icon: any
}){
  return(
    <Pressable style={{backgroundColor:"black", padding:10, marginVertical:10 ,marginHorizontal:30, borderRadius:20, justifyContent:"center"}}>
      <View style={{ flexDirection: "row", justifyContent:"center" }}>
        {icon}
        <Text style={{fontSize:20, color:"white", textAlign:"center", fontWeight:"600"}}>{label}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    bigText:{
        fontSize: 25,
        fontWeight: 600
    },
    topBar:{
        padding: 20
    }
})