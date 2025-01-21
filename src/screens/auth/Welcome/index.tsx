import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import CustomButton from "../../../components/CustomButton";
import { font } from "../../../utils/font";

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <>
      <ImageBackground
        source={images.welcome_layout}
        style={styles.main}
      >
        <View
          style={{ alignItems: "center", width: "80%", gap: verticalScale(10) }}
        >
          <CustomText
            text={"WELCOME"}
            fontFam={font.Chillax_SemiBold}
            size={50}
            color={colors.primary}
            fontWeight="600"
          />
          <CustomText
            text={
              "You are on the path to discovering yourself. LunaFlame will help you live in harmony with the Universe."
            }
            size={14}
            lineHeight={22}
            style={{ textAlign: "center" }}
            color={colors.primary + "90"}
          />
        </View>
        <View
          style={{
            ...appStyles.row,
            gap: scale(10),
            marginTop: verticalScale(40),
          }}
        >
          <View style={{ ...styles.dot, width: scale(7), height: scale(7) }} />
          <View style={styles.dot} />
          <CustomButton
            width={"75%"}
            onPress={() => navigation.navigate("NameScreen")}
            text="GET STARTED"
          />
          <View style={styles.dot} />

          <View style={{ ...styles.dot, width: scale(7), height: scale(7) }} />
        </View>
        <View style={{ ...appStyles.row, gap: scale(10) }}>
          <View
            style={{
              ...styles.dot,
              width: scale(40),
              height: scale(3),
              backgroundColor: colors.blue,
            }}
          />
          <View style={{ ...styles.dot, backgroundColor: colors.blue }} />
          <CustomButton
            bgColor={colors.blue}
            textColor={colors.primary}
            width={"57%"}
            text="Already have an account"
          /> 
          <View style={{ ...styles.dot, backgroundColor: colors.blue }} />

          <View
            style={{
              ...styles.dot,
              width: scale(40),
              height: scale(3),
              backgroundColor: colors.blue,
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: scale(10),
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: verticalScale(10),
    paddingBottom: verticalScale(40),
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
});
