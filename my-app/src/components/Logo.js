import { StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Satisfy_400Regular } from '@expo-google-fonts/satisfy'



export default function Logo() {
    const [loadFont, error] = useFonts({
        "Satisfy_400Regular": Satisfy_400Regular
    })
    
    return (
        <Text style={styles.title}>HushPout.</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: '#5441cd',
        fontFamily: 'Satisfy_400Regular',
        flexGrow: 1


    }
});

