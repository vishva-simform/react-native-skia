import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const PrimaryButton = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 5,
  },
  buttonTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
