/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import HomeScreen from '../features/home/HomeScreen';
import HomeUserBottomTab from './HomeUserBottomTab';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeUserBottomTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeUserBottomTab" component={HomeUserBottomTab} />
    </Stack.Navigator>
  );
};

export default MainStack;
