import React, { useState, useEffect } from "react";
import { colors } from "../../../utils/colors";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import ScreenLayout from "../../../components/ScreenLayout";
import { font } from "../../../utils/font";
import LinearGradient from "react-native-linear-gradient";
const BirthChartTransitsDetails = ({ navigation }: any) => {

  const Header = () => {
    return (
      <View
        style={[
          {
            ...appStyles.rowjustify,
            width: scale(40),
            height: verticalScale(3.5),
            backgroundColor: colors.brown,
            alignSelf: "center",
            borderRadius: 999,
            marginVertical: verticalScale(10),
          },
        ]}
      ></View>
    );
  };
  const CardDetail = ({ title, des }: any) => {
    return (
      <LinearGradient
        colors={["#052F2F", "#000000"]} // Properly formatted with transparency
        start={{ x: 0.5, y: 0 }} // Center-top start
        end={{ x: 0.5, y: 1 }} // Center-bottom end
        style={{
          ...styles.infoContainer,
          width: "100%",
          padding: scale(15),
          gap: verticalScale(10),
        }}
      >
        <View style={{ gap: verticalScale(10) }}>
          <View style={{ ...appStyles.rowjustify }}>
            <CustomText
              text={title}
              size={20}
              color={colors.brown}
              fontFam={font.Chillax_Medium}
              fontWeight="600"
            />
            <Image
              style={{
                width: scale(20),
                height: scale(20),
                tintColor: colors.light_green,
              }}
              source={images.sagaittarius}
            />
          </View>

          <CustomText
            text={des}
            size={15}
            lineHeight={22}
            color={colors.white + "80"}
          />
        </View>
      </LinearGradient>
    );
  };
  return (
    <ScreenLayout style={styles.main}>
      <ImageBackground
        source={images.transits_detaill}
        style={{
          flex: 1,
          paddingHorizontal: scale(15),
          gap: verticalScale(15),
        }}
      >
        <Header />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: scale(15),
            paddingBottom: verticalScale(20),
          }}
        >
            <View style={{gap
            :verticalScale(5)}}>
            <CustomText
            style={{ textAlign: "center" }}
            text={"Oct 31, 2024 to Nov 11, 2024"}
            size={15}
            color={colors.white + "60"}
          />
          <CustomText
            textTransform={"uppercase"}
            style={{ textAlign: "center" }}
            text={"Pluto in sagittarius"}
            size={24}
            color={colors.white}
          />

            </View>
           
          <View style={{ ...appStyles.row, gap: scale(4) }}>
            <View
              style={{
                ...styles.dot,
                width: scale(10),
                height: scale(1),

                backgroundColor: colors.white + "60",
              }}
            />

            <View
              style={{ ...styles.dot, backgroundColor: colors.white + "60" }}
            />

            <View
              style={{
                ...styles.dot,
                width: "60%",
                height: scale(1),
                flex: 1,
                backgroundColor: colors.white + "60",
              }}
            />
          </View>

          <CustomText
            text={"During the Sun trine your natal Jupiter transit, expect an abundance of opportunities and personal growth. This harmonious aspect brings about optimism, joy, and a robust sense of purpose. You might find yourself open to new experiences, eager to learn, or readily sharing wisdom.\n Moreover, this transit can also bless you with good fortune and generosity, increasing your potential for wealth and prosperity. This is an ideal time to create possibilities or make big decisions as everything seems to align for your benefit.\n Tip: Harness this period's lucky energy, dare to dream big and seize opportunities that stimulate your growth and expansion. Be generous, positive and open to life's offerings."}
            size={14}
            lineHeight={21}
            color={colors.white + "80"}
          />
          <Image
          source={images.birth_transits_chart}

          style={{width:scale(300),height:scale(300),alignSelf:"center"}}
          />

<CustomText
text={"The sun is currently trine your natal jupiter. That angle (trine) is the aspect where planets support each other formed by a 120° angle on the birth chart. It brings happiness, harmony, balance, and potential for positive changes."}
            size={14}
            lineHeight={21}
            color={colors.white + "80"}
          />

        
        

          <View style={{ ...appStyles.row, gap: scale(4) }}>
            <View
              style={{
                ...styles.dot,
                width: scale(10),
                height: scale(1),

                backgroundColor: colors.white + "60",
              }}
            />

            <View
              style={{ ...styles.dot, backgroundColor: colors.white + "60" }}
            />

            <View
              style={{
                ...styles.dot,
                width: "60%",
                height: scale(1),
                flex: 1,
                backgroundColor: colors.white + "60",
              }}
            />
          </View>

          <LinearGradient
            colors={["#B2AFFE20", "#B2AFFE10"]} // Properly formatted with transparency
            start={{ x: 0.5, y: 0.5 }} // Top-left corner
            end={{ x: 1, y: 1 }} // Bottom-right corner
            style={{
              width: "100%",
              paddingVertical: verticalScale(7),
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 1,
              borderColor: colors.primary + "60",
              borderRadius: scale(12),
              paddingHorizontal: scale(15),
              flexDirection: "row",
              gap: scale(10),
            }}
          >
            <CustomText
              text={"Was that useful"}
              size={16}
              color={colors.primary}
              fontWeight="600"
            />
            <View style={{ ...appStyles.row, gap: scale(10) }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.circleConatiner}
              >
                <Image
                  style={styles.infoIcon}
                  resizeMode="contain"
                  source={images.heart}
                />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  ...styles.circleConatiner,
                  backgroundColor: colors.white + "30",
                }}
              >
                <Image
                  style={styles.infoIcon}
                  resizeMode="contain"
                  source={images.crose}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ScrollView>
      </ImageBackground>
    </ScreenLayout>
  );
};

export default BirthChartTransitsDetails;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: verticalScale(25),
    // paddingHorizontal: scale(15),
    backgroundColor: "#2A2A3C",
    borderRadius: 20,
    overflow: "hidden",
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: 999,
    backgroundColor: colors.lightRed,
  },

  infoIcon: {
    width: scale(17),
    height: scale(17),
  },
  infoContainer: {
    backgroundColor: "treansparent",
    borderWidth: 1,
    borderColor: colors.light_green + "80",
    borderRadius: scale(12),
    gap: scale(10),
  },

  detailContainer: {
    paddingBottom: verticalScale(10),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.light_green + "60",
  },

  circleConatiner: {
    width: scale(35),
    height: scale(35),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: colors.primary + "60",
  },
});
