/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {IMAGE} from '../../resources/images';
import {DIMENSION} from '../../utils/dimension';
import {COLORS} from '../../utils/color';
import SelfDrivingCar from '../../components/SelfDrivingCar';
import DriverDrivingCar from '../../components/DriverDrivingCar';
import {TYPE_DRIVE_CAR} from '../../constants/type_drive_car';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  const [tabChoose, setTabChoose] = useState<string>(TYPE_DRIVE_CAR.SELF_DRIVING_CAR);

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
        <View style={styles.wrapTabsTypeCar}>
          <TouchableOpacity
            style={[
              tabChoose === TYPE_DRIVE_CAR.SELF_DRIVING_CAR
                ? styles.tabsTypeCarChoosed
                : styles.tabsTypeCar,
              styles.borderTopLeft,
            ]}
            onPress={() => {
              setTabChoose(TYPE_DRIVE_CAR.SELF_DRIVING_CAR);
            }}
            activeOpacity={0.9}>
            <View style={styles.wrapTabLabel}>
              <Icon
                name="account-tie-outline"
                size={26}
                color={
                  tabChoose === TYPE_DRIVE_CAR.SELF_DRIVING_CAR
                    ? COLORS.white
                    : COLORS.black
                }
              />
              <Text
                style={
                  tabChoose === TYPE_DRIVE_CAR.SELF_DRIVING_CAR
                    ? styles.labelTopTapActive
                    : styles.labelTopTap
                }>
                Xe tự lái
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              tabChoose === TYPE_DRIVE_CAR.DRIVER_DRIVING_CAR
                ? styles.tabsTypeCarChoosed
                : styles.tabsTypeCar,
              styles.borderTopRight,
            ]}
            onPress={() => {
              setTabChoose(TYPE_DRIVE_CAR.DRIVER_DRIVING_CAR);
            }}
            activeOpacity={0.9}>
            <View style={styles.wrapTabLabel}>
              <Icon
                name="car"
                size={26}
                color={
                  tabChoose === TYPE_DRIVE_CAR.DRIVER_DRIVING_CAR
                    ? COLORS.white
                    : COLORS.black
                }
              />
              <Text
                style={
                  tabChoose === TYPE_DRIVE_CAR.DRIVER_DRIVING_CAR
                    ? styles.labelTopTapActive
                    : styles.labelTopTap
                }>
                Xe có tài xế
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {tabChoose === TYPE_DRIVE_CAR.SELF_DRIVING_CAR ? (
          <SelfDrivingCar />
        ) : (
          <DriverDrivingCar />
        )}
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
    top: DIMENSION.screenHeight / 3 - 60,
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

  tabsTypeCar: {
    backgroundColor: COLORS.bg_main_color,
    width: '50%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabsTypeCarChoosed: {
    backgroundColor: COLORS.main_color,
    width: '50%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapTabsTypeCar: {
    flexDirection: 'row',
    width: '100%',
  },

  borderTopLeft: {
    borderTopLeftRadius: 10,
  },

  borderTopRight: {
    borderTopRightRadius: 10,
  },

  wrapContentSelfDrivingTabs: {},
});

export default HomeScreen;
