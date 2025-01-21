import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
} from "react-native";
import {verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import ScreenLayout from "../../../components/ScreenLayout";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
const AnalysingYourDream = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DreamRevealed");
    }, 2000);
  }, []);

  return (
    <>
      <ScreenLayout style={styles.main}>
        <ImageBackground
          style={{
            width: windowWidth,
            height: windowHeight,
            alignItems: "center",
            justifyContent: "center",
          }}
          source={images.analysing_dream}
        >
          <CustomText
            text={"Analysing your dreams"}
            style={{ textAlign: "center", marginTop: "70%" }}
            color={colors.primary}
            fontWeight="600"
            fontFam={font.Chillax_Medium}
            size={22}
          />
        </ImageBackground>
      </ScreenLayout>
    </>
  );
};

export default AnalysingYourDream;
const styles = StyleSheet.create({
  main: {
    gap: verticalScale(10),
    width: "100%",
    height: "100%",
    backgroundColor: colors.black,
  },
});
