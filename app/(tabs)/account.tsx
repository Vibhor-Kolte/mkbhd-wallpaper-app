import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Appearance, ScrollView } from "react-native";

export default function account(){
    return <ThemedSafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
        <Header/>
        <ThemedView style={{flex:1}}>
            <LoginButton/>
            <ThemeSelector/>
            <About />
        </ThemedView>
        </ScrollView>
    </ThemedSafeAreaView>
}

function About() {
    return <ThemedView style={{padding: 20}}>
        <ThemedText style={styles.bigText}>About</ThemedText>
        <ThemedView style={{ marginTop: 10 }}>
            <Pressable>
                <ThemedText style={{margin: 10, fontSize: 18}}>Accont</ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{margin: 10, fontSize: 18}}>Privacy Policy</ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{margin: 10, fontSize: 18}}>Terms of Service</ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{margin: 10, fontSize: 18}}>Licenses</ThemedText>
            </Pressable>
        </ThemedView>
    </ThemedView>
}

function Header(){
    return <ThemedView style={styles.topBar}>
        <ThemedText style={styles.bigText}>Panels</ThemedText>
        <ThemedText>Sign in to save your data</ThemedText>
    </ThemedView>
}

function LoginButton(){
    const theme = useColorScheme() ?? 'light';

    return <>
        <AuthButton 
            label="Sign In" 
            icon={<Ionicons
                name={'logo-google'}
                size={24}
                color={theme === 'light' ? Colors.light.text : Colors.dark.icon}
                style={{paddingRight:5}}
            />}
        />

        <AuthButton 
            label="Sign In" 
            icon={<Ionicons
                name={'logo-apple'}
                size={24}
                color={theme === 'light' ? Colors.light.text : Colors.dark.icon}
                style={{paddingRight:5}}
            />}
        />
    </>
}

function AuthButton({icon, label}:{
    label: string,
    // icon: typeof Ionicons
    icon: any
}){
  const theme = useColorScheme() ?? 'light';
  return(
    <Pressable style={{backgroundColor:theme, padding:10, marginVertical:10 ,marginHorizontal:30, borderRadius:10, flexDirection: "row", justifyContent:"center", borderWidth:1, 
        borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon}}>
        {icon}
        <ThemedText style={{fontSize:20, textAlign:"center", fontWeight:"600"}}>{label}</ThemedText>
    </Pressable>
  )
}

function ThemeButton({title, selected, colorScheme}:{title: string, selected: boolean, colorScheme: 'light'|'dark'|null|undefined}){
    const theme = useColorScheme();
    return <Pressable 
        style={{padding:10, borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon, borderWidth: 1, borderRadius: 5, flex:0.3}}
        onPress={() => {Appearance.setColorScheme(colorScheme)}}
    >
        <ThemedText style={{textAlign:"center", width: "100%"}}>{title}</ThemedText>
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