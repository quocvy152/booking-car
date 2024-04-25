import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../utils/color';
import TextInputPres from './TextInputPres';

export default function SelfDrivingCar({}) {
  return (
    <View style={styles.container}>
      <TextInputPres
        fieldName="Địa điểm"
        iconName="map-marker-outline"
        fieldSize={17}
        placeholderText={'Nhập địa điểm'}
        actionField={() => console.log('SelfDrivingCar')}
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
    padding: 15,
  },
});
