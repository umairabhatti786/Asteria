import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {appStyles} from '../../../utils/AppStyles';
import CustomText from '../../../components/CustomText';
import {font} from '../../../utils/font';
import {colors} from '../../../utils/colors';
import {windowWidth} from '../../../utils/Dimensions';
import {images} from '../../../assets/images';
import Stars from 'react-native-stars';

interface data {
  title?: string;
  auther?: string;
  listPrice?: string;
  appPrice?: string;
  quantity?: string;
}
type Props = {
  data?: data;
  onPress?: any;
};

const BookReviewCard = ({data, onPress}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.main}>
      <View style={{...appStyles.rowjustify}}>
        <CustomText
          text={'John Doe'}
          style={{textAlign: 'right'}}
          fontWeight="600"
          fontFam={font.WorkSans_SemiBold}
          color={colors.black}
          size={12}
        />
        <Stars
          default={4}
          count={5}
          disabled={true}
          spacing={scale(2)}
          starSize={scale(10)}
          fullStar={images.fill_star}
          emptyStar={images.unfill_star}
        />
      </View>

      <CustomText
        numberOfLines={4}
        style={{textAlign: 'justify'}}
        text={
          'Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. '
        }
        lineHeight={22}
        color={colors.grey}
        size={13}
      />
      <View style={{...appStyles.row, gap: scale(7)}}>
        <Image
          source={images.like}
          style={{width: scale(20), height: scale(20)}}
          resizeMode="contain"
        />
        <CustomText text={'123'} color={colors.black} size={12} />
      </View>
    </TouchableOpacity>
  );
};

export default BookReviewCard;

const styles = StyleSheet.create({
  main: {
    width: windowWidth / 1.4,
    borderRadius: scale(10),
    overflow: 'hidden',
    backgroundColor: colors.white,
    padding: scale(15),
    gap: verticalScale(7),
  },
});
