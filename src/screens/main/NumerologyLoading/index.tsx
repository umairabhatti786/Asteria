import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import ScreenLayout from "../../../components/ScreenLayout";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import TopHeader from "../../../components/TopHeader";
import CustomButton from "../../../components/CustomButton";
import { appStyles } from "../../../utils/AppStyles";
import CustomInput from "../../../components/CustomInput";
import CustomText from "../../../components/CustomText";
const NumerologyLoading = ({ navigation }: any) => {
  setTimeout(() => {
    navigation.navigate("NumerologyResult");
  }, 1000);
  return (
    <>
      <ScreenLayout style={styles.main}>
        <ImageBackground
          style={{
            width: windowWidth,
            height: windowHeight,
          }}
          source={images.numerology_background}
        >
          <Image
            style={{
              width: windowWidth,
              height: windowHeight / 1.5,
              position: "absolute",
            }}
            // resizeMode="contain"
            source={images.numerology_loading}
          />
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              top: "25%",
              paddingHorizontal: scale(50),
            }}
          >
            <CustomText
              text={"The stars are aligning your numerology"}
              size={20}
              style={{ textAlign: "center" }}
              color={colors.red100}
              fontWeight="600"
            />
          </View>
        </ImageBackground>
      </ScreenLayout>
    </>
  );
};

export default NumerologyLoading;
const styles = StyleSheet.create({
  main: {
    gap: verticalScale(10),
    width: "100%",
    height: "100%",
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: 999,
    backgroundColor: colors.red100,
  },
});
