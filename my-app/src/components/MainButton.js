import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useFonts } from 'expo-font';
import {
    AnonymousPro_400Regular,
    AnonymousPro_400Regular_Italic,
    AnonymousPro_700Bold,
    AnonymousPro_700Bold_Italic,
} from '@expo-google-fonts/anonymous-pro'




export default function AppButton ({ onPress, title, bgColor='#5441cd' }){
    const [loadFont, error] = useFonts({
        AnonymousPro_400Regular,
        AnonymousPro_400Regular_Italic,
        AnonymousPro_700Bold,
        AnonymousPro_700Bold_Italic,
    })
    
    
    const styles = StyleSheet.create({
        // ...
        appButtonContainer: {
            elevation: 8,
            backgroundColor: bgColor,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12,
            width:'60%',
            marginBottom:8,
        },
        appButtonText: {
            fontSize: 18,
            color: "#fff",
            alignSelf: "center",
            textTransform: "uppercase",
            fontFamily:'AnonymousPro_700Bold'
        }
    });
    return(

    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
    )
};