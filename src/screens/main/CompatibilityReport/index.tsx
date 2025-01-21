import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import LinearGradient from "react-native-linear-gradient";
import { images } from "../../../assets/images";
import { appStyles } from "../../../utils/AppStyles";
import ScreenLayout from "../../../components/ScreenLayout";
import TopHeader from "../../../components/TopHeader";
import { font } from "../../../utils/font";
import { windowWidth } from "../../../utils/Dimensions";
import AnimatedProgressBar from "../../../components/CustomProgress";
const CompatibilityReportScreen = ({ navigation }: any) => {
  const Card = ({ gradient, img, img1, plus }: any) => {
    return (
      <LinearGradient
        colors={gradient} // Properly formatted with transparency
        start={{ x: 0.3, y: 0 }} // Top-left corner
        end={{ x: 1, y: 1 }} // Bottom-right corner
        style={styles.cardContainer}
      >
        <View style={appStyles.rowjustify}>
          <View style={{ alignItems: "center", gap: verticalScale(5) }}>
            <Image
              style={{
                width: scale(90),
                height: scale(90),
              }}
              resizeMode="contain"
              source={img}
            />
            <CustomText
              text={"Scorpio"}
              size={13}
              color={colors.white + "90"}
            />
          </View>
          <Image
            style={{
              width: scale(45),
              height: scale(45),
            }}
            resizeMode="contain"
            source={plus}
          />
          <View style={{ alignItems: "center", gap: verticalScale(5) }}>
            <Image
              style={{
                width: scale(90),
                height: scale(90),
              }}
              resizeMode="contain"
              source={img1}
            />
            <CustomText text={"Leo"} size={13} color={colors.white + "90"} />
          </View>
        </View>
      </LinearGradient>
    );
  };
  return (
    <>
      <ScreenLayout style={styles.main}>
        <TopHeader title="COMPATIBILITY REPORT" />
        <ScrollView
        style={{flex:1}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: verticalScale(15),

        }}
        >

        <Card
          title={"Birth Charts Compatibility"}
          img={images.cancer}
          img1={images.leo}
          plus={images.plus_primary}
          des={
            "Let’s see what planets in your charts say about your love match"}
          gradient={["#DE656530", "#5C408B40", "#000"]}/>
        <CustomText
          text={"Relationship at a glance"}
          size={16}
          fontWeight="600"
          fontFam={font.Chillax_Medium}
          color={colors.white}
        />
        <CustomText
        lineHeight={21}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
          }
          size={15}
          color={colors.white + "60"}
        />

        <View style={{ ...appStyles.row, gap: scale(10) }}>
          <View style={{ ...appStyles.row, gap: scale(4) }}>
            <View
              style={{
                ...styles.dot,
                width: scale(2.5),
                height: scale(2.5),
                backgroundColor: colors.primary,
              }}
            />

            <View style={{ ...styles.dot, backgroundColor: colors.primary }} />

            <View
              style={{
                ...styles.dot,
                width: scale(2.5),
                height: scale(2.5),
                backgroundColor: colors.primary,
              }}
            />
          </View>

          <CustomText
            text={"Read more"}
            size={15}
            fontWeight="600"
            fontFam={font.Chillax_Medium}
            color={colors.primary}
          />

          <View style={{ ...appStyles.row, gap: scale(4) }}>
            <View
              style={{
                ...styles.dot,
                width: scale(2.5),
                height: scale(2.5),
                backgroundColor: colors.primary,
              }}
            />

            <View style={{ ...styles.dot, backgroundColor: colors.primary }} />

            <View
              style={{
                ...styles.dot,
                width: windowWidth / 1.9,
                height: scale(2.5),
                backgroundColor: colors.primary,
              }}
            />
          </View>
        </View>
        <LinearGradient
          colors={["#25237690", "transparent"]}
          start={{ x: 0.5, y: 0 }} // Center-top start
          end={{ x: 0.5, y: 1 }} // Center-bottom end
          style={{
            alignItems: "center",
            borderRadius: scale(10),
            padding: scale(15),
            gap: verticalScale(15),
            borderWidth: 1,
            borderColor: colors.primary,
          }}
        >
          <View style={{ gap: verticalScale(5), alignItems: "center" }}>
            <CustomText text={"CONNECTIONS"} size={22} color={colors.primary} />

            <AnimatedProgressBar
              title={"Emotional"}
              percentage={"60%"}
              detailColor={colors.primary}
              mainWidth={windowWidth - scale(60)}
              totalSteps={10}
              currentStep={8}
            />
          </View>

          <CustomText
            text={
              "Don't be afraid to stand up for yourself today! Someone's self-centeredness may be causing your feeling of exclusion, but don't take it personally. By speaking up, you can show your strength and resilience. \n\nEven if you don't get what you want, you will feel proud of yourself for taking a stand. Find the courage to share your thoughts and express your convictions-you'll be the rebel with a cause!"
            }
            size={15}
            color={colors.white + "80"}
          />
        </LinearGradient>
        </ScrollView>

      </ScreenLayout>
    </>
  );
};

export default CompatibilityReportScreen;
const styles = StyleSheet.create({
  main: {
    gap: verticalScale(15),
    width: "100%",
    height: "100%",
    paddingHorizontal: scale(15),
  },
  cardContainer: {
    padding: scale(20),
    justifyContent: "center",
    borderRadius: scale(8),
    gap: verticalScale(8),
  },
  dot: {
    width: scale(7),
    height: scale(7),
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
});
