import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COLORS} from '../utils/color';

export default function DriverDrivingCar({}) {
  return (
    <View style={styles.container}>
      <Text>Hello Component DriverDrivingCar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: COLORS.gray_1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
