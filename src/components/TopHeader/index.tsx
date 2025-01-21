import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import { appStyles } from "../../utils/AppStyles";
import { images } from "../../assets/images";
import { useNavigation } from "@react-navigation/native";
import CustomText from "../CustomText";
import { font } from "../../utils/font";
import { colors } from "../../utils/colors";
type Props = {
  title?: string;
  rightTitle?: string;
  onRightPress?: any;
  rightTitleColor?: any;
  style?:any
  disableTitle?:any
  color?:any
};

const TopHeader = ({
  title,
  rightTitle,
  onRightPress,
  rightTitleColor,
  style,
  disableTitle,
  color
}: Props) => {
  const navigation: any = useNavigation();
  return (
    <View
    
      style={[
        {
          ...appStyles.row,
          gap: scale(15),
        },

        style,
      ]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()} style={{...styles.box}}>
        <Image
          style={{
            width: scale(14),
            height: scale(14),
            tintColor:color||colors.white

          }}
          resizeMode="contain"
          source={images.back}
        />
      </TouchableOpacity>
      {
        !disableTitle&&(
          <CustomText
          fontWeight="500"
          numberOfLines={1}
          color={ color|| colors.primary}
          // fontFam={font.WorkSans_SemiBold}
          text={title}
          size={24}
        />

        )
      }

    
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  box: {
    width: scale(35),
    height: scale(35),
    borderRadius:999,
    alignItems:"center",
    justifyContent: "center",
    backgroundColor:colors.white+"10"
  },
});
