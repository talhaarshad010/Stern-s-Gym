import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import WrapperContainer from '../../Components/Wrapper';
import Header from '../../Components/Header';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {FontFamily, Images} from '../../utils/Images';
import Button from '../../Components/Button';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import axiosBaseURL from '../../services/AxiosBaseURL';
import {useSelector} from 'react-redux';
import {useStripe} from '@stripe/stripe-react-native';

const PaymentMethod = ({route}) => {
  const [cardcheckbox, setcardcheckbox] = useState(0);
  const [CardDetails, setCardDetails] = useState([]);

  const {Data} = route.params;

  const authData = useSelector(state => state.Auth.data);
  const onPress = () => {
    const selectedCard = CardDetails.find(item => item._id === cardcheckbox);
    navigation.navigate('ReviewBooking', {Card: selectedCard, Data: Data});
  };
  useFocusEffect(
    useCallback(() => {
      axiosBaseURL
        .post('/Common/GetCardDetail', {
          token: authData,
        })
        .then(response => {
          setCardDetails(response.data.data);
          if (CardDetails.length > 0) {
            setcardcheckbox(CardDetails[0]._id);
          }
        })
        .catch(error => {});
    }, [authData])
  );

  const navigation = useNavigation();
  return (
    <WrapperContainer>
      <Header
        onPress={() => navigation.goBack()}
        style={{height: responsiveHeight(7)}}
      />
      <View>
        <Text
          style={{
            color: 'white',
            paddingHorizontal: responsiveScreenWidth(8),
            fontSize: responsiveFontSize(3),
            fontFamily: FontFamily.Bold,
          }}>
          Payment Method
        </Text>
      </View>
      <View style={styles.shipping_container}>
        <FlatList
          data={CardDetails}
          renderItem={({item}) => (
            <View style={styles.address_container}>
              <View style={styles.address_left}>
                {item.CardType === 'visa' ? (
                  <Image
                    source={Images.visa}
                    resizeMode="contain"
                    style={{
                      width: responsiveScreenWidth(9),
                      height: responsiveScreenWidth(8),
                    }}
                  />
                ) : item.CardType === 'Paypal' ? (
                  <Image
                    source={Images.paypal}
                    resizeMode="contain"
                    style={{
                      width: responsiveScreenWidth(8),
                      height: responsiveScreenWidth(10),
                    }}
                  />
                ) : item.CardType === 'mastercard' ? (
                  <Image
                    source={Images.mastercard}
                    resizeMode="contain"
                    style={{
                      width: responsiveScreenWidth(10),
                      height: responsiveScreenWidth(6),
                    }}
                  />
                ) : item.CardType === 'jcb' ? (
                  <Image
                    source={Images.JCBCard}
                    resizeMode="contain"
                    style={{
                      width: responsiveScreenWidth(10),
                      height: responsiveScreenWidth(6),
                    }}
                  />
                ) : (
                  <Image
                    source={Images.AmericanExpressCard}
                    resizeMode="contain"
                    style={{
                      width: responsiveScreenWidth(10),
                      height: responsiveScreenWidth(6),
                    }}
                  />
                )}
              </View>
              <View style={styles.address}>
                <Text numberOfLines={1} style={styles.address_top}>
                  {item.CardholderName}
                </Text>
                <Text numberOfLines={1} style={styles.address_Bottom}>
                  {item.CardNumber}
                </Text>
              </View>
              <View style={styles.address_icon}>
                <TouchableOpacity
                  onPress={() => {
                    setcardcheckbox(item._id);
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={styles.checkbox_outer}>
                    {cardcheckbox === item._id && (
                      <View style={styles.checkbox_inner} />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <View
          style={{
            ...styles.address_container,
            paddingVertical: responsiveScreenWidth(5),
          }}>
          <View style={styles.address_left}>
            <Image
              source={Images.card}
              tintColor={'white'}
              resizeMode="contain"
              style={{
                width: responsiveScreenWidth(6),
                height: responsiveScreenWidth(6),
              }}
            />
          </View>
          <Pressable
            onPress={() => navigation.navigate('AddCard')}
            style={styles.address}>
            <Text numberOfLines={1} style={styles.address_top}>
              Add New Card
            </Text>
          </Pressable>
          <View style={styles.address_icon}>
            <Image source={Images.rightarrow} />
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Button
          disabled={cardcheckbox == 0 ? true : false}
          text="Next"
          containerstyles={{
            marginTop: responsiveHeight(24),
            marginLeft: responsiveWidth(5),
            backgroundColor: cardcheckbox == 0 ? '#181818' : '#9FED3A',
            borderWidth: 1,
            borderColor: '#9FED3A',
          }}
          onPress={() => onPress()}
          textstyle={{
            fontSize: responsiveFontSize(2.3),
            fontFamily: FontFamily.Medium,
            color: cardcheckbox == 0 ? 'white' : '#181818',
          }}
        />
      </View>
    </WrapperContainer>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  total_container: {
    width: responsiveScreenWidth(80),
    alignSelf: 'center',
  },
  total_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hover_text: {
    fontSize: responsiveScreenFontSize(2.2),
    fontFamily: FontFamily.Semi_Bold,
    color: 'white',
    marginVertical: responsiveScreenWidth(1),
  },

  shipping_container: {
    width: responsiveScreenWidth(86),
    alignSelf: 'center',
    marginTop: responsiveHeight(5),
  },
  Heading: {
    fontSize: responsiveScreenFontSize(2.5),
    fontFamily: FontFamily.Bold,
    color: 'white',
    marginVertical: responsiveScreenWidth(6),
  },
  address_container: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: responsiveScreenWidth(2),
    backgroundColor: '#232323',
    borderRadius: 10,
    paddingHorizontal: responsiveScreenWidth(3),
    marginBottom: responsiveScreenWidth(6),
  },
  address_left: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: responsiveScreenWidth(3),
  },
  address: {
    width: '70%',
    gap: responsiveScreenWidth(1.5),
    justifyContent: 'center',
  },
  address_icon: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  address_Bottom: {
    fontFamily: FontFamily.Medium,
    fontSize: responsiveFontSize(1.8),
    color: 'white',
  },
  address_top: {
    fontSize: responsiveScreenFontSize(2),
    color: 'white',
    fontFamily: FontFamily.Semi_Bold,
  },
  checkbox_outer: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    borderRadius: responsiveWidth(100),
    borderWidth: responsiveWidth(0.5),
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox_inner: {
    height: responsiveWidth(3),
    width: responsiveWidth(3),
    borderRadius: responsiveWidth(100),
    backgroundColor: 'green',
  },
});
