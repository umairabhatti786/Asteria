import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import TopHeader from "../../../components/TopHeader";
import LinearGradient from "react-native-linear-gradient";
import ScreenLayout from "../../../components/ScreenLayout";
import AnimatedProgressBar from "../../../components/CustomProgress";
import { font } from "../../../utils/font";

const CardResultsScreen = ({ navigation }: any) => {
  const FingerData = [
    {
      title: "Love the World",
      img: images.love_card,
      readMore: true,
      des: "The World brings forth the energy of completion and fulfilment. Todaywill bring this energy into your....",
    },
    {
      title: "Money the Moon",
      img: images.money_card,
      des: "Take it easy with your finances today, and do not make any big decisions. The Moon represents uncertainty and suggests that you do not know everything regarding certain financial opportunities that have come your way. If something appears too good to be true, it probably is. Take care of your money, and you will be fine.",
    },
    {
      title: "Mood the Fortune",
      img: images.money_card,
      readMore: true,
      des: "The Wheel of Fortune brings forth change. Today will provide you with a fresh start regarding your heal...",
    },
  ];
  const Card = ({ img, title, cardStyle, onPress }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={[
          {
            width: "48%",
            borderColor: colors.primary + "40",
            justifyContent: "center",
            gap: verticalScale(10),
          },
          cardStyle,
        ]}
      >
        <LinearGradient
          colors={["#B2AFFE16", "#B2AFFE10"]} // Properly formatted with transparency
          start={{ x: 0, y: 0 }} // Top-left corner
          end={{ x: 1, y: 1 }} // Bottom-right corner
          style={[
            {
              ...styles.box,
              borderColor: colors.primary + "40",
              justifyContent: "center",
              gap: verticalScale(10),
            },
            cardStyle,
          ]}
        >
          <Image
            style={{
              width: scale(27),
              height: scale(27),
            }}
            resizeMode="contain"
            source={img}
          />
          <CustomText
            text={title}
            size={16}
            color={colors.primary}
            fontWeight="600"
          />
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <ScreenLayout style={styles.main}>
        <TopHeader title="CARD RESULTS" />
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: verticalScale(20),
          paddingBottom:verticalScale(20)

        }}
        >


        {/* <View style={{ flex: 1 }}>
          <Image
            style={{
              width: scale(170),
              height: scale(240),
              alignSelf: "center",
              borderRadius: scale(10),
              overflow: "hidden",
            }}
            source={images.tarot_card}
          />
        </View> */}

        {FingerData.map((item, index) => {
          return (
            <LinearGradient
              colors={["#B2AFFE10", "#000"]} // Properly formatted with transparency
              start={{ x: 0, y: 0 }} // Top-left corner
              end={{ x: 1, y: 10 }} // Bottom-right corner
              style={{
                ...styles.gredientBox,
                borderColor: colors.primary+"90",
              }}
            >
              <View style={{ flexDirection: "row", gap: scale(10) }}>
                <Image
                  style={{
                    width: scale(70),
                    height: verticalScale(95),
                    borderRadius: scale(5),
                  }}
                  resizeMode="center"
                  source={item.img}
                />

                <View style={{ gap: verticalScale(5) }}>
                  <CustomText
                    text={item.title}
                    color={colors.primary}
                    size={17}
                    fontFam={font.Chillax_Medium}
                    fontWeight="600"
                  />

                  <CustomText
                    text={item.des}
                    size={14}
                    style={{ width: windowWidth / 1.7 }}
                    color={colors.primary + "90"}
                    lineHeight={25}
                    fontFam={font.Chillax_Medium}
                  />
                </View>
              </View>
              {item?.readMore && (
                <View
                  style={{
                    ...appStyles.row,
                    gap: scale(10),
                    marginTop: verticalScale(10),
                  }}
                >
                  <View style={{ ...appStyles.row, gap: scale(4) }}>
                    <View
                      style={{
                        ...styles.dot,
                        width: scale(2.5),
                        height: scale(2.5),
                        backgroundColor: colors.primary,
                      }}
                    />

                    <View
                      style={{ ...styles.dot, backgroundColor: colors.primary }}
                    />

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

                    <View
                      style={{ ...styles.dot, backgroundColor: colors.primary }}
                    />

                    <View
                      style={{
                        ...styles.dot,
                        width: windowWidth / 2,
                        height: scale(2.5),
                        backgroundColor: colors.primary,
                      }}
                    />
                  </View>
                </View>
              )}
            </LinearGradient>
          );
        })}

        {/* <View
          style={{ alignItems: "center", width: "80%", gap: verticalScale(10) }}
        >
          <CustomText
            text={"Tarot cards"}
            fontFam={font.Chillax_Regular}
            size={50}
            color={colors.primary}
            fontWeight="600"
          />
          <CustomText
            text={
              "You are on the path to discovering yourself. LunaFlame will help you live in harmony with the Universe."
            }
            size={14}
            lineHeight={25}
            style={{ textAlign: "center" }}
            color={colors.primary}
            fontFam={font.Chillax_Regular}

            // fontWeight="600"
          />
        </View> */}
        {/* <View
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
            fontFam={"Chillax-Variable"}

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
            size={15}
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
        </View> */}
                </ScrollView>

      </ScreenLayout>
    </>
  );
};

export default CardResultsScreen;
const styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowHeight,
    gap: verticalScale(20),
    paddingHorizontal: scale(15),
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
  box: {
    borderRadius: scale(13),
    borderColor: colors.white + "50",
    borderWidth: 1,
    width: "100%",
    paddingBottom: verticalScale(10),
    gap: verticalScale(10),
  },
  gredientBox: {
    padding: scale(10),
    borderWidth: 1,
    borderRadius: scale(13),
  },
});
