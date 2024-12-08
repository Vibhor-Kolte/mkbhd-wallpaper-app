import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, Pressable, StyleSheet, SafeAreaView, Appearance } from "react-native";

export default function account(){
    return <SafeAreaView style={{flex:1}}>
        {/* <Text>Account</Text> */}
        {/* <Link href={"/accountinfo"}><Text>Account Info</Text></Link> */}
        <Header/>
        <View style={{flex:1}}>
            <LoginButton/>
            <ThemeSelector/>
        </View>
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

function ThemeButton({title, selected, colorScheme}:{title: string, selected: boolean, colorScheme: 'light'|'dark'|null|undefined}){
    return <Pressable 
        style={{padding:10, borderColor:"black", borderWidth: 1, borderRadius: 5, flex:0.3}}
        onPress={() => {Appearance.setColorScheme(colorScheme)}}
    >
        <ThemedText style={{textAlign:"center"}}>{title}</ThemedText>
    </Pressable>
}

function ThemeSelector(){
    return <ThemedView style={{padding:20}}>
        <ThemedText style={styles.bigText}>Settings</ThemedText>
        <ThemedText>Theme</ThemedText>
        <ThemedView style={styles.themeSelectorContainer}>
            <ThemeButton title="Dark" selected={false} colorScheme="dark"/>
            <ThemeButton title="Light" selected={false} colorScheme="light"/>
            <ThemeButton title="System" selected={false} colorScheme={null}/>
        </ThemedView>
    </ThemedView>
}

const styles = StyleSheet.create({
    bigText:{
        fontSize: 25,
        fontWeight: 600
    },
    topBar:{
        padding: 20
    },
    themeSelectorContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    }
})