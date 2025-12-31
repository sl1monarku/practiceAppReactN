import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

import eternaImg from "@/assets/images/MAIN LOGO 2.png"

const practiceapp = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={eternaImg}
      resizeMode="cover"
      style={styles.image}
      >
      <Text style={styles.text}>Eterna Luxe</Text>
      </ImageBackground>
    </View>
  )
}

export default practiceapp

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(230, 255, 7, 0.5)',
  },
})