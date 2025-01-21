import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import { font } from "../../../utils/font";
import ScreenLayout from "../../../components/ScreenLayout";
import TopHeader from "../../../components/TopHeader";
import CustomInput from "../../../components/CustomInput";
import AnimatedProgressBar from "../../../components/CustomProgress";
import LinearGradient from "react-native-linear-gradient";
import { windowWidth } from "../../../utils/Dimensions";

const CompatibilityDetailScreen = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout style={styles.main}>
        <TopHeader title="BIRTH CHARTS" />

        <View style={{ flex: 1, gap: verticalScale(20) }}>
          <CustomText
            text={
              "This report is based on your composite birth chart, created combining your individual birth charts"
            }
            size={12}
            lineHeight={21}
            style={{ textAlign: "center" }}
            color={colors.white + "70"}
            fontWeight="600"
          />
          <Image
            style={{
              width: "100%",
              height: scale(130),
              alignSelf:"center"
            }}
            resizeMode="contain"
            source={images.cancer}
          />
          <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=>navigation.navigate("CompatibilityNameScreen")}
          >

          <LinearGradient
            colors={["#000", "#B2AFFE10"]} // Properly formatted with transparency
            start={{ x: 0, y: 0 }} // Top-left corner
            end={{ x: 1, y: 1 }} // Bottom-right corner
            style={{
              ...styles.gredientBox,
            }}
          >
            <View style={{ gap: verticalScale(15) }}>
              <AnimatedProgressBar
                title="Love"
                mainWidth={windowWidth / 2.8}
                percentage={"80%"}
                backgroundColor={"#FC016030"}
                progressColor={"#FC0160"}
                totalSteps={10}
                currentStep={8}
              />

              <AnimatedProgressBar
                title="Health"
                mainWidth={windowWidth / 2.8}
                percentage={"75%"}
                totalSteps={10}
                currentStep={7}
              />
            </View>

            <View style={{ gap: verticalScale(15) }}>
              <AnimatedProgressBar
                title="Love"
                mainWidth={windowWidth / 2.8}
                percentage={"80%"}
                totalSteps={10}
                currentStep={8}
              />

              <AnimatedProgressBar
                title="Health"
                mainWidth={windowWidth / 2.8}
                detailColor={"#FC0160"}
                backgroundColor={"#FC016030"}
                progressColor={"#FC0160"}
                percentage={"75%"}
                totalSteps={10}
                currentStep={7}
              />
            </View>
          </LinearGradient>

          </TouchableOpacity>

        

          <View style={{ gap: verticalScale(2) }}>
            <CustomText
              text={"Daily Love Horoscope"}
              size={20}
              color={colors.white}
              fontWeight="600"
              fontFam={font.Chillax_Medium}
            />
            <CustomText
              text={"Sept 22, 2024"}
              size={14}
              color={colors.white + "90"}
            />
          </View>
   
            <CustomText
              text={"Today, you can see how your daily routine has changed your life. Your physical and mental health is directly related to your personal transformation. Making sure that you are taken care of - body and mind - should be part of your schedule. That is just"}
              size={13}
              lineHeight={25}
              color={colors.white+"90"}
            />
        </View>
      </ScreenLayout>
    </>
  );
};

export default CompatibilityDetailScreen;
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: scale(20),
    flex: 1,
    gap: verticalScale(15),
  },
  gredientBox: {
    padding: scale(15),
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.white + "40",
    borderRadius: scale(13),
    flexDirection: "row",
    width: "100%",
  },
});
