import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {appStyles} from '../../../utils/AppStyles';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/colors';
import CustomText from '../../../components/CustomText';
import {font} from '../../../utils/font';
import {images} from '../../../assets/images';
import Stars from 'react-native-stars';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
interface Props {
  onSubmit?: any;
  onCancel?: () => void;
}
const BookReviewSheetModal: React.FC<Props> = ({onSubmit, onCancel}: Props) => {
  return (
    <View
      style={styles.main}>
      <View style={{gap: verticalScale(20)}}>
        <View>
          <View style={appStyles.rowjustify}>
            <CustomText
              text={'Hobbit'}
              color={colors.black}
              fontWeight="600"
              size={20}
              fontFam={font.WorkSans_SemiBold}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={onCancel}
              style={styles.box}>
              <Image
                style={{
                  width: scale(17),
                  height: scale(17),
                  tintColor: colors.black,
                }}
                resizeMode="contain"
                source={images.close}
              />
            </TouchableOpacity>
          </View>

          <CustomText
            text={
              'Write about your experience reading Hobbit. We discourage spoilers. '
            }
            color={colors.grey}
            size={14}
          />
        </View>
        <View>
          <Stars
            default={4}
            count={5}
            spacing={scale(39)}
            starSize={scale(29)}
            fullStar={images.fill_star}
            emptyStar={images.unfill_star}
          />
        </View>

        <CustomInput
          height={130}
          multiline={true}
          textAlignVertical={'top'}
          paddingTop={verticalScale(10)}
          placeholder="Write a review..."
        />
      </View>

      <CustomButton
        text="Submit"
        onPress={onSubmit}
        style={{marginTop: verticalScale(20)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main:{flex: 1, paddingHorizontal: scale(20), gap: verticalScale(20)},
  box: {
    width: scale(30),
    height: scale(30),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default BookReviewSheetModal;
