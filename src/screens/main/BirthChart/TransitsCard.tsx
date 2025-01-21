import React from "react";
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import { images } from "../../../assets/images";
import LinearGradient from "react-native-linear-gradient";

const TransitsCard = ({ item,onPress }: any) => {
  return (
    <TouchableOpacity
    activeOpacity={0.5}
    onPress={onPress}
    >

<ImageBackground
      source={images.sun_trine_background}
      style={{
        width: "100%",
        borderRadius: scale(8),
        borderWidth: 1,
        borderColor: colors.white + "20",
        height: verticalScale(200),
        gap: verticalScale(5),
        justifyContent: "flex-end",
        overflow: "hidden",
      }}
    >
      <View
        style={{
          ...appStyles.rowjustify,
          position: "absolute",
          top: 0,
          width: "100%",
          height: 100,
          // backgroundColor:"red"
        }}
      >
        <Image
          style={{
            width: scale(100),
            height: scale(100),
            left: scale(-25),
            top: verticalScale(-20),
          }}
          source={item?.sun_img1}
          resizeMode="contain"
        />
        <Image
          style={{
            width: scale(100),
            height: scale(100),
            right: scale(-17),
            top: verticalScale(-15),
          }}
          source={item?.sun_img2}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          ...appStyles.rowjustify,
          paddingHorizontal: scale(15),
          paddingBottom: verticalScale(5),
        }}
      >
        <CustomText
          text={item?.sun_title1}
          size={16}
          fontWeight="600"
          fontFam={font.Chillax_Medium}
          color={"#FF910C"}
        />

        <CustomText
          text={item?.sun_title2}
          size={16}
          fontWeight="600"
          fontFam={font.Chillax_Medium}
          color={"#E19358"}
        />
      </View>
      <View
        style={{
          paddingHorizontal: scale(15),
          gap: verticalScale(10),
          paddingBottom: verticalScale(15),
        }}
      >
        <CustomText text={item?.des} size={15} color={colors.white + "95"} />
        <View
          style={{
            ...appStyles.row,
            gap: scale(10),
          }}
        >
          <View style={{ ...appStyles.row, gap: scale(4) }}>
            <View
              style={{
                ...styles.dot,
                width: scale(2.5),
                height: scale(2.5),
                backgroundColor: colors.white + "80",
              }}
            />

            <View
              style={{ ...styles.dot, backgroundColor: colors.white + "80" }}
            />

            <View
              style={{
                ...styles.dot,
                width: scale(2.5),
                height: scale(2.5),
                backgroundColor: colors.white + "80",
              }}
            />
          </View>

          <CustomText
            text={"Read more"}
            size={15}
            fontWeight="600"
            fontFam={font.Chillax_Medium}
            color={colors.white}
          />

          <View style={{ ...appStyles.row, gap: scale(4) }}>
            <View
              style={{
                ...styles.dot,
                width: scale(2.5),
                height: scale(2.5),
                backgroundColor: colors.white + "80",
              }}
            />

            <View
              style={{ ...styles.dot, backgroundColor: colors.white + "80" }}
            />

            <View
              style={{
                ...styles.dot,
                width: "74%",
                height: scale(2.5),
                backgroundColor: colors.white + "80",
              }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>

    </TouchableOpacity>
    
  );
};

export default TransitsCard;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: verticalScale(20),
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: 999,
    backgroundColor: colors.lightRed,
  },
});
