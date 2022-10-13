import { Button, StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo';
import Svg, { Path } from "react-native-svg"


export default function Navbar() {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.svgLogo}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          style={{
            enableBackground: "new 0 0 32 32",
          }}
          xmlSpace="preserve"
          width={24}
          height={24}
        >
          <Path
            d="m16 16.8 13.8-9.2C29.2 5.5 27.3 4 25 4H7C4.7 4 2.8 5.5 2.2 7.6L16 16.8zM31 23h-1v-1.5c0-2.5-2-4.5-4.5-4.5S21 19 21 21.5V23h-1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1zm-8-1.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V23h-5v-1.5z"
            fill="#5441cd"
          />
          <Path
            d="M17 24c0-1.3.8-2.4 2-2.8.2-3.4 3-6.2 6.5-6.2 1.7 0 3.3.7 4.5 1.8V9.9l-13.4 9c-.2 0-.4.1-.6.1s-.4-.1-.6-.2L2 9.9V23c0 2.8 2.2 5 5 5h10v-4z"
            fill="#5441cd"
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'start',
    backgroundColor: '#f3f3f3',
  }
});

