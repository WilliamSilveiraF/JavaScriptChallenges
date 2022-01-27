import React from 'react';
import { View, Image, StyleSheet } from 'react-native'

const ViewImageScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
        <Image 
          style={styles.image} 
          source={require('../assets/chair.jpg')}
          resizeMode='contain'
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "black",
      flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    closeIcon: {
      width: 50,
      height: 50,
      backgroundColor: '#fc5c65',
      position: "absolute",
      top: 50,
      left: 30,
    },
    deleteIcon: {
      width: 50,
      height: 50,
      backgroundColor: '#4ecdc4',
      position: "absolute",
      top: 50,
      right: 30,
    }
})

export default ViewImageScreen;