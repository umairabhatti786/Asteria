import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import { scale, verticalScale } from 'react-native-size-matters';
import { colors } from '../../../utils/colors';
import TopHeader from '../../../components/TopHeader';
import CustomText from '../../../components/CustomText';
import { images } from '../../../assets/images';
import { font } from '../../../utils/font';
import { appStyles } from '../../../utils/AppStyles';
import PaymentCard from '../../../components/PaymentCard';
import * as Animatable from 'react-native-animatable';
import LocalPaymentCard from '../Checkout/LocalPaymentCard';
import BankTransferCard from '../Checkout/BankTransferCard';

const ChoosePaymentScreen = ({ navigation }: any) => {
  const [selectedOnlinePayment, setSelectedOnlinePayment] = useState('card');
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState('online payment');

  const paymentMethods = [
    { title: 'Cash on Delivery', label: 'cash' },
    { title: 'Online Payment (Debit, Credit, Paypak)', label: 'online payment' },
  ];
  const onlinePaymentMethods = [
    { title: 'Card', label: 'card' },
    { title: 'Bank Transfer', label: 'bank' },
    { title: 'Jazzcash / Easypaisa', label: 'local' },
  ];
  return (
    <ScreenLayout>
      <View
        style={{
          paddingHorizontal: scale(20),
          paddingBottom: verticalScale(10),
        }}>
        <TopHeader title="Choose Payment Method" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: colors.dull_white,
          flex: 1,
        }}
        contentContainerStyle={{
          backgroundColor: colors.dull_white,
          gap: verticalScale(20),
        }}>
        <View
          style={{
            marginTop: verticalScale(5),
            gap: verticalScale(15),
            paddingHorizontal: scale(20),
          }}>
          <CustomText
            text={'Payment Method'}
            size={18}
            color={colors.black}
            fontWeight="600"
            fontFam={font.WorkSans_SemiBold}
          />
          {paymentMethods.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setSelectedPaymentMethod(item.label)}
                key={index.toString()}
                style={{ ...appStyles.row, gap: scale(7) }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setSelectedPaymentMethod(item.label)}
                  style={{
                    ...styles.radioButtonConainer,
                    borderWidth: 1.2,
                    borderColor:
                      selectedPaymentMethod == item.label
                        ? colors.orange
                        : colors.dull_half_white,
                  }}>
                  {selectedPaymentMethod == item.label && (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => setSelectedPaymentMethod(item.label)}
                      style={styles.radioButtonInner}></TouchableOpacity>
                  )}
                </TouchableOpacity>

                <CustomText
                  text={item.title}
                  size={12}
                  color={colors.dark_black}
                  fontWeight="500"
                  fontFam={font.WorkSans_Regular}
                />
              </TouchableOpacity>
            );
          })}

          {selectedPaymentMethod == 'online payment' && (
            <Animatable.View
              duration={1000}
              animation={'fadeIn'}
              delay={100}
              style={{ gap: verticalScale(10) }}>
              <CustomText
                text={'Please choose an online payment method.'}
                size={14}
                style={{ marginBottom: verticalScale(5) }}
                fontFam={font.WorkSans_Regular}
              />
              {onlinePaymentMethods.map((item, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setSelectedOnlinePayment(item.label)}
                    key={index.toString()}
                    style={{ ...appStyles.row, gap: scale(7) }}>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => setSelectedOnlinePayment(item.label)}
                      style={{
                        ...styles.radioButtonConainer,
                        borderWidth: 1.2,
                        borderColor:
                          selectedOnlinePayment == item.label
                            ? colors.orange
                            : colors.dull_half_white,
                      }}>
                      {selectedOnlinePayment == item.label && (
                        <TouchableOpacity
                          activeOpacity={0.5}
                          onPress={() => setSelectedOnlinePayment(item.label)}
                          style={styles.radioButtonInner}></TouchableOpacity>
                      )}
                    </TouchableOpacity>

                    <CustomText
                      text={item.title}
                      size={12}
                      color={colors.dark_black}
                      fontWeight="500"
                      fontFam={font.WorkSans_Regular}
                    />
                  </TouchableOpacity>
                );
              })}
            </Animatable.View>
          )}
        </View>

        {selectedPaymentMethod == 'online payment' && (
          <View>
            {selectedOnlinePayment == 'card' && (
              <FlatList
                data={[1, 2, 3]}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ paddingLeft: scale(20) }}
                contentContainerStyle={{
                  paddingRight: scale(40),
                  gap: scale(15),
                }}
                keyExtractor={(item: any, index: any) => index.toString()}
                renderItem={({ item, index }: any) => {
                  return (
                    <Animatable.View
                      duration={1000}
                      animation={'fadeIn'}
                      delay={100}>
                      <PaymentCard />
                    </Animatable.View>
                  );
                }}
              />
            )}

            {selectedOnlinePayment == 'bank' && (
              <Animatable.View
                duration={1000}
                animation={'fadeIn'}
                delay={100}
                style={{ paddingHorizontal: scale(20), gap: verticalScale(15) }}>
                <CustomText
                  text={
                    'To make an online payment, please choose a convenient bank option from below. Click to copy Account No. / IBAN.'
                  }
                  color={colors.grey}
                  style={{ marginRight: scale(10) }}
                  size={12}
                />
                <BankTransferCard />
              </Animatable.View>
            )}
            {selectedOnlinePayment == 'local' && (
              <Animatable.View
                duration={1000}
                animation={'fadeIn'}
                delay={100}
                style={{ paddingHorizontal: scale(20), gap: verticalScale(15) }}>
                <CustomText
                  text={'Enter your Jazzcash/easypaisa account below.'}
                  color={colors.grey}
                  style={{
                    marginRight: scale(10),
                    marginBottom: verticalScale(15),
                  }}
                  size={12}
                />
                <LocalPaymentCard />
              </Animatable.View>
            )}
          </View>
        )}

        {selectedOnlinePayment == 'card' && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate('PaymentInfoScreen', { disableSkip: true })
            }
            style={{
              ...appStyles.row,
              gap: scale(10),
              marginHorizontal: scale(20),
            }}>
            <CustomText
              text={'Add New Card'}
              size={14}
              color={colors.primary}
              fontWeight="600"
              fontFam={font.WorkSans_SemiBold}
            />
            <Image
              source={images.plus}
              resizeMode="contain"
              style={{
                width: scale(15),
                height: scale(15),
              }}
            />
          </TouchableOpacity>
        )}
      </ScrollView>
    </ScreenLayout>
  );
};

export default ChoosePaymentScreen;

const styles = StyleSheet.create({
  radioButtonConainer: {
    width: scale(16),
    height: scale(16),
    borderRadius: 999,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonInner: {
    width: scale(8),
    height: scale(8),
    borderRadius: 999,
    backgroundColor: colors.orange,
  },
});
