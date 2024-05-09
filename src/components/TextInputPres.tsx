/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../utils/color';

type TextInputPresProps = {
  fieldName: string;
  iconName: string;
  fieldSize: number;
  placeholderText?: string;
  placeholderTextColor?: string;
  isCalendarField?: boolean;
  actionField: () => void;
  textInputPresStyle?: object;
};

export default function TextInputPres({
  fieldName,
  iconName,
  fieldSize = 18,
  placeholderText,
  placeholderTextColor,
  actionField,
  isCalendarField,
  textInputPresStyle,
}: TextInputPresProps) {
  return (
    <View style={[styles.container, textInputPresStyle]}>
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
          {isCalendarField ? (
            <Text
              style={[
                styles.placeholderStyle,
                {
                  color: placeholderTextColor
                    ? placeholderTextColor
                    : COLORS.black,
                  fontWeight: '600',
                },
              ]}>
              {'21h00, 30/04' + '-' + '21h00, 01/05'}
            </Text>
          ) : (
            <Text
              style={[
                styles.placeholderStyle,
                {
                  color: placeholderTextColor
                    ? placeholderTextColor
                    : COLORS.gray_4,
                },
              ]}>
              {placeholderText}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.gray_1,
    marginBottom: 15,
  },

  wrapInfoField: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fieldStyle: {},

  placeholderStyle: {
    fontWeight: '600',
  },

  wrapTextInputPres: {
    borderBottomWidth: 0.2,
    paddingVertical: 10,
    borderBottomColor: COLORS.gray_2,
  },
});
