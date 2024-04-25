/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TextInputCustom({
  fieldName,
  iconName,
  fieldSize = 18,
}: {
  fieldName: string;
  iconName: string;
  fieldSize: number;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapInfoField}>
        {iconName && <Icon name={iconName} size={fieldSize} style={{ marginRight: 5 }} />}
        <Text style={[styles.fieldStyle, {fontSize: fieldSize}]}>
          {fieldName}
        </Text>
      </View>
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  wrapInfoField: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fieldStyle: {},
});
