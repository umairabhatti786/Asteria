import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import {checkoutBooksData} from '../../../utils/Data';
import TopHeader from '../../../components/TopHeader';
import CustomText from '../../../components/CustomText';
import {font} from '../../../utils/font';
import CheckBookCard from '../Checkout/CheckBookCard';
import {colors} from '../../../utils/colors';
import {appStyles} from '../../../utils/AppStyles';
import CustomButton from '../../../components/CustomButton';
import OrderTrackingCard from './OrderTrackingCard';

const OrderDetailScreen = () => {
  return (
    <ScreenLayout
      style={{
        paddingHorizontal: scale(20),
      }}>
      <View
        style={{
          paddingBottom: verticalScale(10),
        }}>
        <TopHeader title="Order Details" />
      </View>
      <ScrollView
        style={{...appStyles.main, paddingTop: verticalScale(10)}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: verticalScale(20),
          gap: verticalScale(20),
        }}>
        <OrderTrackingCard />

        <View
          style={{
            gap: verticalScale(8),
          }}>
          <CustomText
            fontWeight="600"
            fontFam={font.WorkSans_SemiBold}
            text={'Order Content'}
            size={14}
          />

          <View style={{gap: verticalScale(10)}}>
            {checkoutBooksData.map((item, index) => {
              return <CheckBookCard key={index.toString()} data={item} />;
            })}
          </View>
          <View style={styles.subtotalContainer}>
            <View style={{...appStyles.rowjustify}}>
              <CustomText text={'Subtotal'} color={colors.black} size={14} />
              <CustomText text={'Rs.2335'} color={colors.black} size={14} />
            </View>

            <View style={{...appStyles.rowjustify}}>
              <CustomText text={'Discounts'} color={colors.black} size={14} />
              <CustomText text={'Rs.00'} color={colors.black} size={14} />
            </View>
            <View style={{...appStyles.rowjustify}}>
              <CustomText
                text={'Shipping (Standard)'}
                color={colors.black}
                size={14}
              />
              <CustomText text={'Rs.200'} color={colors.black} size={14} />
            </View>

            <View style={{...appStyles.rowjustify}}>
              <CustomText
                fontWeight="600"
                fontFam={font.WorkSans_SemiBold}
                text={'Total'}
                color={colors.black}
                size={20}
              />
              <CustomText
                fontWeight="600"
                fontFam={font.WorkSans_SemiBold}
                text={'Rs.2335'}
                color={colors.black}
                size={20}
              />
            </View>
          </View>
        </View>

        <CustomButton
          text="Apply"
          style={{marginBottom: verticalScale(30)}}
        />
      </ScrollView>
    </ScreenLayout>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({
  subtotalContainer: {
    backgroundColor: colors.white,
    padding: scale(15),
    borderRadius: scale(10),
    gap: verticalScale(12),
  },
});
