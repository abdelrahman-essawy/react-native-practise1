import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import * as Svg from 'react-native-svg';
import { useFonts } from 'expo-font';
import LandingPageImage from '../components/LandingPageImage';
import MainButton from '../components/MainButton'
import {
    LobsterTwo_400Regular,
    LobsterTwo_400Regular_Italic,
    LobsterTwo_700Bold,
    LobsterTwo_700Bold_Italic
} from '@expo-google-fonts/lobster-two'
import {
    AnonymousPro_400Regular,
    AnonymousPro_400Regular_Italic,
    AnonymousPro_700Bold,
    AnonymousPro_700Bold_Italic,
} from '@expo-google-fonts/anonymous-pro'

export default function LandingPage() {
    const [loadFont, error] = useFonts({
        LobsterTwo_400Regular,
        LobsterTwo_400Regular_Italic,
        LobsterTwo_700Bold,
        LobsterTwo_700Bold_Italic, AnonymousPro_400Regular,
        AnonymousPro_400Regular_Italic,
        AnonymousPro_700Bold,
        AnonymousPro_700Bold_Italic,
    })
    return (
        <View style={styles.everything}>

        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.title1}>Express</Text>
                <Text style={styles.title2}>Yourself</Text>
                <Text style={styles.title1}>Freely</Text>
            </View>
            <Text style={styles.desc}>You Don't Have To Worry About Your Identity Again.</Text>
            <View style={styles.svg}>
                <LandingPageImage />
            </View>
            <View style={styles.buttons}>

                <MainButton title={'Login'} bgColor={'#634df3'} />
                <MainButton title={'Sign Up'} bgColor={'#32287f'}/>
            </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flex: 1,
    }, desc: {
        fontFamily: 'AnonymousPro_700Bold',
        fontSize: '1.3rem',
        textAlign: 'center',
        color: '#2f2e41',
        fontWeight: 700,
        paddingHorizontal: 30,
        backgroundColor: '#c0c0c0',
        borderRadius: 10,
        padding: 13,

    }, title: {
        marginVertical: 60,
        marginBottom: 40,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        width: '75%',
        flexDirection: 'row',
        flexGrow: 1
    }, title1: {
        fontFamily: 'LobsterTwo_400Regular_Italic',
        fontSize: '1.7rem',
        textAlign: 'center',
        color: '#2f2e41',
        fontWeight: 700,
        alignSelf: 'flex-end',
        opacity: .6,
    }, title2: {
        fontFamily: 'LobsterTwo_700Bold',
        fontSize: '2.6rem',
        textAlign: 'center',
        color: '#5441cd',
        fontWeight: 700,
        alignSelf: 'flex-end'

    }, appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }, buttons: {
        width:'100%',
        marginTop: 50,
        justifyContent:'center',
        alignItems:'center'

    }
});

