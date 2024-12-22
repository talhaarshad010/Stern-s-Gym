import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/Wrapper';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
  useResponsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {FontFamily, Images} from '../../utils/Images';
import ButtonComp from '../../Components/ButtonComp';
import {useNavigation} from '@react-navigation/native';

const BookingConfirmed = ({route, closeModal = () => {}}) => {
  console.log('Boookinnnggg', route);
  const navigation = useNavigation();

  return (
    <WrapperContainer>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: responsiveScreenWidth(6),
            alignItems: 'center',
            gap: responsiveScreenHeight(2),
            marginTop: responsiveScreenHeight(5),
          }}>
          <Image
            source={Images.success}
            style={{
              width: responsiveScreenWidth(16),
              height: responsiveWidth(16),
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: responsiveFontSize(5),
              fontFamily: FontFamily.Semi_Bold,
            }}>
            Success!
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: responsiveFontSize(2),
              fontFamily: FontFamily.Medium,
              textAlign: 'center',
            }}>
            Thank you for choosing our service and trusting our trainer to help
            you achieve your health goals.
          </Text>
          <View
            style={{
              width: '100%',
              backgroundColor: '#9FED3A',
              paddingVertical: responsiveScreenHeight(3),
              gap: responsiveScreenHeight(3),
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <View
              style={{
                width: '70%',
                gap: responsiveScreenHeight(1),
                alignItems: 'center',
              }}>
              <Image
                source={{uri: route?.data?.profileImage}}
                style={{
                  width: responsiveScreenWidth(20),
                  height: useResponsiveScreenWidth(20),
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  fontFamily: FontFamily.Extra_Bold,
                  fontSize: responsiveScreenFontSize(2.7),
                  color: 'black',
                }}>
                {route?.data?.fullName}
              </Text>
              <Text
                style={{color: 'black', fontSize: responsiveScreenFontSize(2)}}>
                {route?.data?.Speciality?.[0]?.value || 'Not available'}
              </Text>
            </View>

            <View
              style={{
                width: '70%',
                gap: responsiveScreenHeight(1),
                alignItems: 'center',
              }}>
              <Text
                style={{color: 'black', fontSize: responsiveScreenFontSize(2)}}>
                Date & Time
              </Text>
              <Text
                style={{
                  fontFamily: FontFamily.Extra_Bold,
                  fontSize: responsiveScreenFontSize(2.4),
                  color: 'black',
                }}>
                {route?.Date}
              </Text>
              <Text
                style={{color: 'black', fontSize: responsiveScreenFontSize(2)}}>
                {route?.time}
              </Text>
            </View>
            <View
              style={{
                width: '70%',
                gap: responsiveScreenHeight(1),
                alignItems: 'center',
              }}>
              <Text
                style={{color: 'black', fontSize: responsiveScreenFontSize(2)}}>
                Address
              </Text>
              <Text
                style={{
                  fontFamily: FontFamily.Extra_Bold,
                  fontSize: responsiveScreenFontSize(2.4),
                  color: 'black',
                }}>
                {route?.data?.Address.length > 15
                  ? route?.data?.Address.slice(0, 10) +
                    '...' +
                    route?.data?.Address.split(',')[1].trim()
                  : route?.data?.Address}
              </Text>
              <Text
                style={{color: 'black', fontSize: responsiveScreenFontSize(2)}}>
                0.31 mi away
              </Text>
            </View>
          </View>
          <ButtonComp
            mainStyle={{width: '100%', marginBottom: responsiveScreenWidth(5)}}
            text="Check Details"
            onPress={() => {
              closeModal();
              // navigation.navigate('BookingDetails', {data: route});
            }}
          />
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default BookingConfirmed;

const styles = StyleSheet.create({});
