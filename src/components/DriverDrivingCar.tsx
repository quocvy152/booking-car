import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CheckBox from 'react-native-check-box';

import {COLORS} from '../utils/color';

export default function DriverDrivingCar({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleDriverDrivingCar}>Lộ trình</Text>

      <CheckBox
        style={{flex: 1, padding: 10}}
        onClick={() => console.log('Check box')}
        isChecked={true}
        leftText={'CheckBox'}
      />
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

  titleDriverDrivingCar: {
    fontSize: 15,
    paddingLeft: 15,
    paddingTop: 15,
    fontWeight: '600',
  },
});
