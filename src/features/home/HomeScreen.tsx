/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {IMAGE} from '../../resources/images';
import {DIMENSION} from '../../utils/dimension';
import {COLORS} from '../../utils/color';
import SelfDrivingCar from '../../components/SelfDrivingCar';
import DriverDrivingCar from '../../components/DriverDrivingCar';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapBgImgHeaderHome}>
        <Image source={IMAGE.bg_header_home} style={styles.bgImgHeaderHome} />
        <View style={styles.wrapInfo}>
          <View style={styles.wrapInfoCustomer}>
            <Image source={IMAGE.ic_user} style={styles.imageIconUser} />
            <View>
              <Text style={styles.nameCustomerStyle}>Phạm Quốc Vỹ</Text>
              <View style={styles.wrapInfoPoint}>
                <Image source={IMAGE.ic_star} style={styles.imageIconStar} />
                <Text style={styles.infoPointReward}>Điểm thưởng</Text>
              </View>
            </View>
          </View>
          <View style={styles.wrapBtnIcon}>
            <TouchableOpacity style={styles.btnHeart}>
              <Icon name="cards-heart-outline" size={26} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="gift-outline" size={26} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.wrapChooseTypeCar}>
        <Tab.Navigator
          initialRouteName="SelfDrivingCar"
          screenOptions={{
            tabBarActiveTintColor: COLORS.white,
            tabBarInactiveTintColor: COLORS.black,
            tabBarStyle: styles.borderTopTab,
            tabBarContentContainerStyle: styles.borderTopTab,
          }}>
          <Tab.Screen
            name="SelfDrivingCar"
            component={SelfDrivingCar}
            options={{
              tabBarIndicatorStyle: {
                height: '100%',
                borderTopLeftRadius: 20,
                backgroundColor: COLORS.main_color,
              },
              tabBarLabel: ({focused, color}) => (
                <View style={styles.wrapTabLabel}>
                  <Icon name="account-tie-outline" size={26} color={color} />
                  <Text
                    style={
                      focused ? styles.labelTopTapActive : styles.labelTopTap
                    }>
                    Xe tự lái
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="DriverDrivingCar"
            component={DriverDrivingCar}
            options={{
              tabBarIndicatorStyle: {
                height: '100%',
                borderTopRightRadius: 20,
                backgroundColor: COLORS.main_color,
              },
              tabBarLabel: ({focused, color}) => (
                <View style={styles.wrapTabLabel}>
                  <Icon name="car" size={26} color={color} />
                  <Text
                    style={
                      focused ? styles.labelTopTapActive : styles.labelTopTap
                    }>
                    Xe có tài xế
                  </Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  wrapBgImgHeaderHome: {
    height: DIMENSION.screenHeight / 3,
    width: '100%',
  },

  wrapInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: DIMENSION.screenHeight / 3 / 3 - 15,
    width: '100%',
    paddingHorizontal: 15,
  },

  wrapInfoCustomer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bgImgHeaderHome: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  imageIconUser: {
    height: 50,
    width: 50,
    marginRight: 10,
  },

  nameCustomerStyle: {
    color: COLORS.white,
    fontWeight: 'bold',
  },

  imageIconStar: {
    height: 12,
    width: 12,
    marginRight: 5,
  },

  infoPointReward: {
    color: COLORS.white,
  },

  wrapInfoPoint: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  wrapBtnIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  btnHeart: {
    marginRight: 20,
  },

  wrapChooseTypeCar: {
    position: 'absolute',
    top: DIMENSION.screenHeight / 3 - 70,
    height: 400,
    maxHeight: 400,
    width: DIMENSION.screenWidth - 30,
  },

  textInTopTap: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  wrapTabLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },

  labelTopTap: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: '600',
  },

  labelTopTapActive: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.white,
  },

  borderTopTab: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default HomeScreen;
