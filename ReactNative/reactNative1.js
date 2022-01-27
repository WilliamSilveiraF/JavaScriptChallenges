import { StyleSheet, Text, Image, SafeAreaView, NativeModules, Platform, TouchableOpacity } from 'react-native';
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

export default function App() {
  const handlePress = () => console.log('Text Clicked')
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello React Native</Text>
      <TouchableOpacity onPress={() => console.log('image tapped')}>
        <Image 
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={{ width: 200, height: 300 }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: STATUSBAR_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
