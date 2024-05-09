/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {COLORS} from '../utils/color';
import TextInputPres from './TextInputPres';
import ButtonCustom from './ButtonCustom';

export default function DriverDrivingCar({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleDriverDrivingCar}>Lộ trình</Text>

      <View style={styles.wrapListCheckBox}>
        <View style={styles.wrapCheckBoxItem}>
          <CheckBox
            style={styles.checkBoxItem}
            lineWidth={3}
            tintColor={COLORS.gray_3}
            onTintColor={COLORS.main_color}
            onCheckColor={COLORS.main_color}
            value={false}
            onValueChange={(newValue) => console.log(newValue)}
          />
          <Text style={styles.titleCheckbox}>Nội thành</Text>
        </View>

        <View style={styles.wrapCheckBoxItem}>
          <CheckBox
            style={styles.checkBoxItem}
            lineWidth={3}
            tintColor={COLORS.gray_3}
            onTintColor={COLORS.main_color}
            onCheckColor={COLORS.main_color}
            value={false}
            onValueChange={(newValue) => console.log(newValue)}
          />
          <Text style={styles.titleCheckbox}>Liên tỉnh</Text>
        </View>

        <View style={[styles.wrapCheckBoxItem, {paddingRight: 20}]}>
          <CheckBox
            style={styles.checkBoxItem}
            lineWidth={3}
            tintColor={COLORS.gray_3}
            onTintColor={COLORS.main_color}
            onCheckColor={COLORS.main_color}
            value={false}
            onValueChange={(newValue) => console.log(newValue)}
          />
          <Text style={styles.titleCheckbox}>Liên tỉnh (1 chiều)</Text>
        </View>
      </View>

      <Text style={styles.hintTitle}>Di chuyển nội thành hoặc lân cận, lộ trình tự do.</Text>

      <TextInputPres
        fieldName="Điểm đón"
        iconName="map-marker-radius-outline"
        fieldSize={15}
        placeholderText={'Nhập điểm đón'}
        actionField={() => console.log('SelfDrivingCar')}
        textInputPresStyle={{
          paddingHorizontal: 5,
        }}
      />

      <Text style={[styles.titleDriverDrivingCar, {marginBottom: 20}]}>Thời gian</Text>

      <TextInputPres
        fieldName="Thời gian thuê"
        iconName="map-marker-radius-outline"
        fieldSize={15}
        actionField={() => console.log('SelfDrivingCar')}
        textInputPresStyle={{
          paddingHorizontal: 5,
        }}
        isCalendarField={true}
      />

      <ButtonCustom title={'Tìm xe'} btnHeight={15} titleColor={COLORS.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    paddingBottom: 20,
    paddingHorizontal: 15,
  },

  titleDriverDrivingCar: {
    fontSize: 15,
    paddingTop: 15,
    fontWeight: '600',
  },

  wrapCheckBoxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  wrapListCheckBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },

  titleCheckbox: {
    fontSize: 12,
    fontWeight: '600',
  },

  hintTitle: {
    fontSize: 12,
    color: COLORS.gray_4,
    marginTop: 15,
    marginBottom: 25,
  },

  checkBoxItem: {
    height: 18,
  },
});
