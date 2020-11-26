import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Preloader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#66B2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
