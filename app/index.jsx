import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import eternaImg from "@/assets/images/MAIN LOGO 2.png"

const practiceapp = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={eternaImg}
      resizeMode="cover"
      style={styles.image}
      >
      <Text style={styles.title}>Eterna Luxe</Text>

      <Link href="/contact" style={{marginHorizontal: 'auto'}} asChild>
      <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Contact Us</Text>
      </Pressable>
      </Link>

      <Link href="/shop" style={{marginHorizontal: 'auto'}} asChild>
      <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Shop</Text>
      </Pressable>
      </Link>

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
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(230, 255, 7, 0.5)',
    marginBottom: 120,
  },
  link: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold', 
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(230, 255, 7, 0.5)',
    Padding: 4,
  },
  button: {
    height: 40,
    borderRadius: 20,
    marginBottom: 30,
    height: 50,
    width: 100,
    justifyContent: 'center',
    backgroundColor: 'rgba(230, 255, 7, 0.8)',
    padding: 6,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold', 
    textAlign: 'center',
    Padding: 4,
  },
})