import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import { font } from "../../../utils/font";
import ScreenLayout from "../../../components/ScreenLayout";
import TopHeader from "../../../components/TopHeader";
import { appStyles } from "../../../utils/AppStyles";
import LinearGradient from "react-native-linear-gradient";
const AnalysingYourInfoScreen = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout style={styles.main}>
        <TopHeader
          style={{ marginHorizontal: scale(15) }}
          title="ANALYSING YOUR INFO"
        />
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={["#B2303060", "transparent"]}
            start={{ x: 0.5, y: 0 }} // Center-top start
            end={{ x: 0.5, y: 1 }} // Center-bottom end
            style={styles.gradientContainer}
          >
            <CustomText
              text={"Tiffany Watson"}
              size={18}
              style={{ textAlign: "center" }}
              color={colors.lightRed}
              fontFam={font.Chillax_Medium}
              fontWeight="600"
            />
            <View style={{ ...appStyles.row, gap: scale(5) }}>
              <CustomText
                text={"Sept 22, 2001"}
                size={14}
                color={colors.lightRed}
              />
              <View style={{ ...appStyles.row, gap: scale(4) }}>
                <View
                  style={{
                    ...styles.dot,
                    width: scale(2),
                    height: scale(2),
                    backgroundColor: colors.lightRed,
                  }}
                />

                <View
                  style={{ ...styles.dot, backgroundColor: colors.lightRed }}
                />

                <View
                  style={{
                    ...styles.dot,
                    width: scale(2),
                    height: scale(2),
                    backgroundColor: colors.lightRed,
                  }}
                />
              </View>
              <CustomText text={"10:30pm"} size={14} color={colors.lightRed} />
            </View>
            <Image
              style={{
                width: scale(120),
                height: scale(120),
              }}
              resizeMode="contain"
              source={images.cancer}
            />
            <View style={{ ...appStyles.row, gap: scale(4) }}>
              <CustomText
                text={"Sun sign:"}
                size={14}
                fontFam={font.Chillax_Medium}
                fontWeight="600"
                color={colors.white}
              />

              <CustomText
                text={"Cancer"}
                fontFam={font.Chillax_Medium}
                fontWeight="600"
                size={14}
                color={colors.lightRed}
              />
            </View>
          </LinearGradient>
          <View style={{ marginBottom: verticalScale(30), flex: 1 }}>
            <View
              style={{
                flex: 1,
                marginTop: verticalScale(20),
              }}
            >
              <View
                style={{
                  ...appStyles.rowjustify,
                  gap: verticalScale(10),
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: colors.primary + "20",
                }}
              >
                <View
                  style={{
                    ...styles.infoContainer,
                    paddingLeft: scale(15),
                  }}
                >
                  <Image
                    style={styles.infoIcon}
                    resizeMode="center"
                    source={images.zodiac_cancer}
                  />

                  <View style={{ gap: verticalScale(3) }}>
                    <CustomText
                      text={"Sagittarius"}
                      size={16}
                      color={colors.primary}
                      fontWeight="600"
                    />
                    <CustomText
                      text={"Ascendant"}
                      size={14}
                      color={colors.primary + "90"}
                      fontWeight="600"
                    />
                  </View>
                </View>

                <View
                  style={{
                    ...styles.infoContainer,
                    borderRightWidth: -1,
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    paddingRight: scale(15),
                  }}
                >
                  <View
                    style={{ gap: verticalScale(3), alignItems: "flex-end" }}
                  >
                    <CustomText
                      text={"Leo"}
                      size={16}
                      color={colors.primary}
                      fontWeight="600"
                    />
                    <CustomText
                      text={"Moon sign"}
                      size={14}
                      color={colors.primary + "90"}
                      fontWeight="600"
                    />
                  </View>
                  <Image
                    style={styles.infoIcon}
                    resizeMode="center"
                    source={images.zodiac_leo}
                  />
                </View>
              </View>
              <View
                style={{
                  ...appStyles.rowjustify,
                  gap: verticalScale(10),
                  borderBottomWidth: 1,
                  borderColor: colors.primary + "20",
                }}
              >
                <View
                  style={{
                    ...styles.infoContainer,
                    paddingLeft: scale(15),
                  }}
                >
                  <Image
                    style={styles.infoIcon}
                    resizeMode="center"
                    source={images.earth}
                  />

                  <View style={{ gap: verticalScale(3) }}>
                    <CustomText
                      text={"Earth"}
                      size={16}
                      color={colors.primary}
                      fontWeight="600"
                    />
                    <CustomText
                      text={"Element"}
                      size={14}
                      color={colors.primary + "90"}
                      fontWeight="600"
                    />
                  </View>
                </View>

                <View
                  style={{
                    ...styles.infoContainer,
                    borderRightWidth: -1,
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    paddingRight: scale(15),
                  }}
                >
                  <View
                    style={{ gap: verticalScale(3), alignItems: "flex-end" }}
                  >
                    <CustomText
                      text={"Feminine"}
                      size={16}
                      color={colors.primary}
                      fontWeight="600"
                    />
                    <CustomText
                      text={"Popularity"}
                      size={14}
                      color={colors.primary + "90"}
                      fontWeight="600"
                    />
                  </View>
                  <Image
                    style={styles.infoIcon}
                    resizeMode="center"
                    source={images.info_gender_female}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                ...appStyles.rowjustify,
                gap: scale(10),
                marginTop: verticalScale(30),
              }}
            >
              <CustomButton
                onPress={() => navigation.navigate("BottomTab")}
                width={"48%"}
                text="SkIP"
                textColor={colors.white}
                bgColor={colors.primary + "40"}
              />
              <CustomButton
                onPress={() => navigation.navigate("BottomTab")}
                width={"48%"}
                text="CONFIRM"
              />
            </View>
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};

export default AnalysingYourInfoScreen;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: verticalScale(15),
  },
  box: {
    width: "47%",
    height: verticalScale(70),
    paddingHorizontal: scale(13),
    justifyContent: "center",
    borderWidth: 1.2,
    borderRadius: scale(13),
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: 999,
    backgroundColor: colors.lightRed,
  },
  infoContainer: {
    width: "50%",
    paddingVertical: verticalScale(10),
    alignItems: "center",
    borderRightWidth: 1,
    justifyContent: "flex-start",
    borderColor: colors.primary + "40",

    flexDirection: "row",
    gap: scale(10),
  },
  infoIcon: {
    width: scale(30),
    height: scale(30),
  },
  gradientContainer: {
    alignItems: "center",
    marginHorizontal: scale(15),
    borderRadius: scale(10),
    padding: scale(20),
    gap: verticalScale(10),
  },
});
