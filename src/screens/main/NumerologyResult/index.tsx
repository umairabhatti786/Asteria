import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
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
const NumerologyResult = ({ navigation }: any) => {
  const resultData = [
    {
      title: "Life Path Number",
      icon: images.numerology_result_3,
      label: "The Creative Visionary",
      des: "Those with a Life Path Number 3 are blessed with boundless creativity, charm, and an uplifting spirit. As a visionary, you are drawn to the arts, finding expression in everything from words to design. Your lighthearted approach to life inspires others, and you often find yourself in the center, brightening any gathering with warmth and laughter. Yet, like all radiant souls, you must balance your gifts. \n\nBeware of scattering your energies and not letting doubt dim your shine. Embrace this path, for it leads to deep connections and a legacy of inspiration.",
    },
    {
      title: "Expression Number",
      icon: images.numerology_result_7,
      label: "The Creative Visionary",
      des: "Those with a Life Path Number 3 are blessed with boundless creativity, charm, and an uplifting spirit. As a visionary, you are drawn to the arts, finding expression in everything from words to design. Your lighthearted approach to life inspires others, and you often find yourself in the center, brightening any gathering with warmth and laughter. Yet, like all radiant souls, you must balance your gifts. \n\nBeware of scattering your energies and not letting doubt dim your shine. Embrace this path, for it leads to deep connections and a legacy of inspiration.",
    },
    {
      title: "Expression Number",
      icon: images.numerology_result_5,
      label: "The Creative Visionary",
      des: "Those with a Life Path Number 3 are blessed with boundless creativity, charm, and an uplifting spirit. As a visionary, you are drawn to the arts, finding expression in everything from words to design. Your lighthearted approach to life inspires others, and you often find yourself in the center, brightening any gathering with warmth and laughter. Yet, like all radiant souls, you must balance your gifts. \n\nBeware of scattering your energies and not letting doubt dim your shine. Embrace this path, for it leads to deep connections and a legacy of inspiration.",
    },
  ];
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
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              //   top: "25%",
              gap: verticalScale(20),
              padding: scale(15),
            }}
          >
            <TopHeader title="YOUR RESULT" color={colors.red100} />

            <FlatList
              data={resultData}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                gap: verticalScale(15),
              }}
              renderItem={({ item, index }) => {
                return (
                  <LinearGradient
                    colors={["transparent", "#FC016040"]}
                    start={{ x: 0.5, y: 0 }} // Center-top start
                    end={{ x: 0.5, y: 1 }} // Center-bottom end
                    style={{
                      borderRadius: scale(10),
                      padding: scale(15),
                      gap: verticalScale(10),
                      borderWidth: 1,
                      borderColor: colors.red100 + "30",
                      //   width:windowWidth
                    }}
                  >
                    <View style={{ ...appStyles.rowjustify, width: "100%" }}>
                      <CustomText
                        text={item.title}
                        size={25}
                        fontFam={font.Chillax_Medium}
                        fontWeight="600"
                        color={colors.red100}
                      />
                      <Image
                        style={{
                          width: scale(50),
                          height: scale(50),
                        }}
                        resizeMode="contain"
                        source={item.icon}
                      />
                    </View>

                    <View style={{ gap: verticalScale(5) }}>
                      <CustomText
                        text={item.label}
                        size={16}
                        fontFam={font.Chillax_Medium}
                        fontWeight="600"
                        color={"#FFC2D9"}
                      />
                    </View>

                    <CustomText
                      text={item.des}
                      size={15}
                      color={colors.white + "80"}
                    />
                  </LinearGradient>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ImageBackground>
      </ScreenLayout>
    </>
  );
};

export default NumerologyResult;
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
