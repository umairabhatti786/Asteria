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
const NumerologyScreen = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout style={styles.main}>
        <ImageBackground
          style={{
            width: windowWidth,
            height: windowHeight
            // padding: scale(15),
          }}
          source={images.numerology_background}
        >
          <View style={{ padding: scale(15), zIndex: 999 }}>
            <TopHeader title="NUMEROLOGY" color={colors.red100} />
          </View>
          <Image
            style={{
              width: "100%",
              height: scale(300),
              position: "absolute",
            }}
            // resizeMode="contain"
            source={images.numerology_circle}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingHorizontal: scale(15),
              gap: verticalScale(10),
            }}
          >
            <View
            style={{              gap: verticalScale(10),
            }}
            >
            <CustomInput
              placeholderTextColor={colors.red100 + "90"}
              borderColor={colors.red100 + "60"}
              backgroundColor={"transparent"}
              placeholder="Enter your full name"
            />
            <CustomInput
              rightSourceSize={22}
              rightSource={images.numerology_calendar}
              placeholderTextColor={colors.red100 + "90"}
              borderColor={colors.red100 + "60"}
              backgroundColor={"transparent"}
              placeholder="Select your date of birth"
            />

            </View>
            
          </View>
          <View
            style={{
              ...appStyles.row,
              gap: scale(10),
              marginBottom: verticalScale(80),
              alignSelf:"center",
              paddingHorizontal:scale(10)
            }}
          >
            <View
              style={{ ...styles.dot, width: scale(7), height: scale(7) }}
            />
            <View style={styles.dot} />
            <CustomButton
            bgColor={colors.red100}
              width={"75%"}
              onPress={() => navigation.navigate("NumerologyLoading")}
              text="REVEAL MY NUMBERS"
            />
            <View style={styles.dot} />

            <View
              style={{ ...styles.dot, width: scale(7), height: scale(7) }}
            />
          </View>
        </ImageBackground>
      </ScreenLayout>
    </>
  );
};

export default NumerologyScreen;
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
