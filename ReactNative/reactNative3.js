import { StyleSheet, SafeAreaView, NativeModules, Platform, View } from 'react-native';
const { StatusBarManager } = NativeModules;
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

export default function App() {
  const { landscape } = useDeviceOrientation()
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%"
        }}
      >

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: STATUSBAR_HEIGHT,
  },
});
