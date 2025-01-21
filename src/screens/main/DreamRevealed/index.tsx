import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  TextInput,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import ScreenLayout from "../../../components/ScreenLayout";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import CustomText from "../../../components/CustomText";
import TopHeader from "../../../components/TopHeader";
import LinearGradient from "react-native-linear-gradient";
import { appStyles } from "../../../utils/AppStyles";
import { font } from "../../../utils/font";
import CustomButton from "../../../components/CustomButton";
const DreamRevealed = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout style={styles.main}>
        <ImageBackground
          style={{
            width: windowWidth,
            height: "100%",
          }}
          source={images.dream_revealed}
        >
          <View
            style={{
              //   flex: 1,
              gap: verticalScale(20),
              paddingHorizontal: scale(15),
              justifyContent: "space-between",
              height: "100%",
              padding: scale(15),
            }}
          >
            <TopHeader title="DREAM REVEALED" />

            <View
              style={{
                gap: verticalScale(15),
                marginBottom: verticalScale(15),
              }}
            >
              <LinearGradient
                colors={["#25237675", "#00000040"]}
                start={{ x: 0.3, y: 0 }} // Top-left corner
                end={{ x: 1, y: 1 }} // Bottom-right corner
                style={[styles.cardContainer]}
              >
                <CustomText
                  text={"Your dream revealed"}
                  fontFam={font.Chillax_Medium}
                  fontWeight="600"
                  color={colors.primary}
                  size={20}
                />

                <CustomText
                  text={
                    "Being a dinosaur suggests feeling powerful or ancient wisdom, but the rat nose and ant lips might indicate concerns about self-identity or communication. 'Go Queen' reflects support or admiration for others. This dream could highlight your struggle between self-image and social dynamics."
                  }
                  lineHeight={25}
                  color={colors.primary}
                  size={16}
                />
              </LinearGradient>

              <CustomText
                text={"Your dream"}
                fontFam={font.Chillax_Medium}
                fontWeight="600"
                // style={{ width: "90%", textAlign: "center" }}
                color={colors.primary}
                size={20}
              />

              <CustomText
                text={
                  "I was a massive dinosaur with rat nose and ant like lips that was commenting on social media “Go Queen”"
                }
                lineHeight={25}
                color={colors.primary}
                size={16}
              />

              <View
                style={{
                  ...appStyles.rowjustify,
                  marginTop: verticalScale(20),
                }}
              >
                <CustomButton
                  width={"48%"}
                  bgColor={colors.primary + "80"}
                  textColor={colors.white}
                  text="ANOTHER DREAM"
                  fontFam={font.Chillax_Regular}
                />
                <CustomButton
                  width={"48%"}
                  text="BACK TO HOME"
                  fontFam={font.Chillax_Regular}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScreenLayout>
    </>
  );
};

export default DreamRevealed;
const styles = StyleSheet.create({
  main: {
    gap: verticalScale(10),
    width: "100%",
    height: "100%",
    backgroundColor: colors.black,
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: 999,
    backgroundColor: colors.red100,
  },
  cardContainer: {
    padding: scale(15),
    width: "100%",
    borderWidth: 1.2,
    borderColor: colors.primary + "90",
    borderRadius: scale(8),
    gap: verticalScale(10),
  },
});
