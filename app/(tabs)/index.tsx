import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
const practiceapp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>System practice</Text>
    </View>
  )
}
export default practiceapp

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})