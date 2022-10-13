import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Dimensions } from 'react-native'
import {
  SafeAreaView
} from 'react-native';
import LandingPage from './src/content/LandingPage';
import Navbar from './src/content/Navbar';

export default function App() {
  return (
    <View style={styles.App}>
      <SafeAreaView style={styles.safeArea} />
      <Navbar />
      <View style={styles.container}>
        <LandingPage></LandingPage>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  App: {
    paddingHorizontal: 10,
    backgroundColor: '#f3f3f3',
    height:'100%'
  }, container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    backgroundColor: 'rgb(97,74,240)',
    backgroundColor: 'transparent',
    padding: 30,
    backgroundColor: '#f3f3f3',
  }
});
