/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../features/home/HomeScreen';
import {COLORS} from '../utils/color';

const BottomTab = createBottomTabNavigator();

function HomeUserBottomTab() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: COLORS.main_color,
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Khám phá',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notify"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="bell-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Trip"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Chuyến',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="car-side" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Support"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Hỗ trợ',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="wechat" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Info"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default HomeUserBottomTab;
