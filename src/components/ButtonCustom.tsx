/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {COLORS} from '../utils/color';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type ButtonProps = {
  title: string;
  btnHeight: number;
  titleColor?: string;
  titleSize?: number;
  btnColor?: string;
};

export default function ButtonCustom({
  title,
  titleColor,
  titleSize,
  btnHeight,
  btnColor,
}: ButtonProps) {
  return (
    <View
      style={[
        styles.wrapButton,
        {
          backgroundColor: btnColor ? btnColor : COLORS.main_color,
          borderRadius: 5,
          padding: btnHeight ? btnHeight : 12,
        },
      ]}>
      <TouchableOpacity>
        <Text
          style={{
            color: titleColor ? titleColor : 'black',
            fontSize: titleSize ? titleSize : 17,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
