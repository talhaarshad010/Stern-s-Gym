import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Images} from '../utils/Images';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LinearGradient} from 'react-native-linear-gradient';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ButtonComp from '../Components/ButtonComp';

const InitialScreen = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={Images.primary}
      style={{flex: 1}}>
      <StatusBar hidden />
      <SafeAreaView style={{flex: 1}}>
        <LinearGradient
          colors={['transparent', '#000', '#000']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 2}}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingHorizontal: responsiveWidth(6),
            paddingBottom: responsiveHeight(2),
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: responsiveFontSize(4),
              fontWeight: 'medium',
            }}>
            Get Started with FitMatch
          </Text>
          <Text
            style={{
              marginVertical: responsiveHeight(2),
              marginBottom: responsiveHeight(4),
              fontSize: responsiveFontSize(1.8),
              color: '#d7d7d7',
            }}>
            Welcome to FitMatch! Whether you're looking to train others or find
            the perfect trainer, we have you covered. Choose your path below to
            begin.
          </Text>
          <ButtonComp text="Sign Up as Trainer" />

          <ButtonComp
            mainStyle={{
              backgroundColor: '#fff',
              marginTop: responsiveHeight(2),
            }}
            text="Sign Up as User"
          />
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({});
