import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/colors';
import TopHeader from '../../../components/TopHeader';
import CustomText from '../../../components/CustomText';
import Stars from 'react-native-stars';
import {images} from '../../../assets/images';
import {appStyles} from '../../../utils/AppStyles';
const BookReviewScreen = ({navigation}: any) => {
  return (
    <>
      <ScreenLayout
        style={{
          paddingHorizontal: scale(20),
          gap: verticalScale(20),
        }}>
        <TopHeader title="John’s Review" />
        <View style={{flex: 1, gap: verticalScale(20)}}>
          <Stars
            default={4}
            count={5}
            disabled={true}
            spacing={scale(39)}
            starSize={scale(29)}
            fullStar={images.fill_star}
            emptyStar={images.unfill_star}
          />

          <CustomText
            style={{textAlign: 'justify'}}
            lineHeight={22}
            text={
              'Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. '
            }
            size={14}
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            marginBottom: verticalScale(30),
            alignItems: 'center',
            gap: verticalScale(10),
          }}>
          <View
            style={{
              ...appStyles.row,
              gap: scale(10),
            }}>
            <CustomText
              style={{textAlign: 'justify'}}
              lineHeight={22}
              text={'123 Likes'}
              size={14}
            />
          </View>
          <TouchableOpacity style={styles.likeContainer}>
            <Image
              source={images.like}
              style={{width: scale(22), height: scale(22)}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ScreenLayout>
    </>
  );
};

export default BookReviewScreen;

const styles = StyleSheet.create({
  likeContainer: {
    width: scale(45),
    height: scale(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: colors.white,
  },
});
