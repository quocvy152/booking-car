/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../utils/color';

export default function TextInputPres({
  fieldName,
  iconName,
  fieldSize = 18,
  placeholderText,
  placeholderTextColor,
  actionField,
}: {
  fieldName: string;
  iconName: string;
  fieldSize: number;
  placeholderText: string;
  placeholderTextColor: string;
  actionField: Function;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapInfoField}>
        {iconName && (
          <Icon name={iconName} size={fieldSize} style={{marginRight: 5}} />
        )}
        <Text style={[styles.fieldStyle, {fontSize: fieldSize}]}>
          {fieldName}
        </Text>
      </View>
      <View style={styles.wrapTextInputPres}>
        <TouchableOpacity activeOpacity={1} onPress={() => actionField()}>
          <Text
            style={[
              styles.placeholderStyle,
              {
                color: placeholderTextColor
                  ? placeholderTextColor
                  : COLORS.gray_2,
              },
            ]}>
            {placeholderText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  wrapInfoField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  fieldStyle: {},

  placeholderStyle: {},

  wrapTextInputPres: {
    borderBottomWidth: 0.2,
    paddingVertical: 10,
    borderBottomColor: COLORS.gray_2,
  },
});
