import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Images} from '../utils/Images';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import TrainerHome from '../Screens/trainerScreens/TrainerHome';
import Profile from '../Screens/trainerScreens/Profile';
import Story from '../Screens/trainerScreens/Story';
import Sessions from '../Screens/trainerScreens/sessions';
import Earnings from '../Screens/trainerScreens/earnings';
import CompletedTrainerHome from '../Screens/trainerScreens/trainerOld';

const TrainerBttomStack = () => {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#000000',
        },
      }}>
      <Bottom.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.home_filled : Images.home}
              resizeMode="contain"
              style={{
                height: responsiveScreenHeight(3),
                width: responsiveScreenHeight(3),
              }}
            />
          ),
        }}
        name={'CompletedTrainerHome'}
        component={CompletedTrainerHome}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused ? Images.sessions_filled : Images.sessions_outline
              }
              resizeMode="contain"
              style={{
                height: responsiveScreenHeight(3),
                width: responsiveScreenHeight(3),
              }}
            />
          ),
        }}
        name={'Sessions'}
        component={Sessions}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.story : Images.story}
              resizeMode="contain"
              style={{
                height: responsiveScreenHeight(3),
                width: responsiveScreenHeight(3),
              }}
            />
          ),
        }}
        name={'Story'}
        component={Story}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.wallet_filled : Images.wallet_outline}
              resizeMode="contain"
              style={{
                height: responsiveScreenHeight(4),
                width: responsiveScreenHeight(3.5),
              }}
            />
          ),
        }}
        name={'Earnings'}
        component={Earnings}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.profile_filled : Images.profile}
              resizeMode="contain"
              style={{
                height: responsiveScreenHeight(3),
                width: responsiveScreenHeight(3),
              }}
            />
          ),
        }}
        name={'Profile'}
        component={Profile}
      />
    </Bottom.Navigator>
  );
};

export default TrainerBttomStack;

const styles = StyleSheet.create({});
