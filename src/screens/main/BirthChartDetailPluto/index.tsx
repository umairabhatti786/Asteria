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
const BirthChartDetailPluto = ({ navigation }: any) => {

  const Header = () => {
    return (
      <View
        style={[
          {
            ...appStyles.rowjustify,
            width: scale(40),
            height: verticalScale(3.5),
            backgroundColor: colors.light_green,
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
              color={colors.light_green}
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
        source={images.pluto_detail}
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
          <CustomText
            textTransform={"uppercase"}
            style={{ textAlign: "center" }}
            text={"Pluto in sagittarius"}
            size={24}
            color={colors.light_green}
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
            <CustomText
              text={"Planet Meanings"}
              fontWeight="600"
              fontFam={font.Chillax_Medium}
              size={18}
              color={colors.light_green}
            />

            <View
              style={{ ...appStyles.rowjustify, ...styles.detailContainer }}
            >
              <CustomText
                text={"Influence:"}
                size={15}
                color={colors.light_green}
                fontFam={font.Chillax_Medium}
                fontWeight="600"
              />
              <CustomText
                text={"Magic rod"}
                size={15}
                color={colors.white + "80"}
              />
            </View>

            <View
              style={{ ...appStyles.rowjustify, ...styles.detailContainer }}
            >
              <CustomText
                text={"Symbol:"}
                size={15}
                color={colors.light_green}
                fontFam={font.Chillax_Medium}
                fontWeight="600"
              />
              <CustomText
                text={"dictator"}
                size={15}
                color={colors.white + "80"}
              />
            </View>

            <View
              style={{ ...appStyles.rowjustify, ...styles.detailContainer }}
            >
              <CustomText
                text={"Expression of energy:"}
                size={15}
                color={colors.light_green}
                fontFam={font.Chillax_Medium}
                fontWeight="600"
              />
              <CustomText
                text={"power, death, evolution"}
                size={15}
                color={colors.white + "80"}
              />
            </View>
            <View
              style={{ ...appStyles.rowjustify, ...styles.detailContainer }}
            >
              <CustomText
                text={"Expression of energy:"}
                size={15}
                color={colors.light_green}
                fontFam={font.Chillax_Medium}
                fontWeight="600"
              />
              <CustomText
                text={"power, death, evolution"}
                size={15}
                color={colors.white + "80"}
              />
            </View>

            <View
              style={{ ...appStyles.rowjustify, ...styles.detailContainer }}
            >
              <CustomText
                text={"Stone:"}
                size={15}
                color={colors.light_green}
                fontFam={font.Chillax_Medium}
                fontWeight="600"
              />
              <CustomText
                text={"rauchtopaz"}
                size={15}
                color={colors.white + "80"}
              />
            </View>
            <View
              style={{ ...appStyles.rowjustify, ...styles.detailContainer }}
            >
              <CustomText
                text={"Color:"}
                size={15}
                color={colors.light_green}
                fontFam={font.Chillax_Medium}
                fontWeight="600"
              />
              <CustomText
                text={"dark shades, poppy"}
                size={15}
                color={colors.white + "80"}
              />
            </View>

            <View
              style={{ ...appStyles.rowjustify, ...styles.detailContainer }}
            >
              <CustomText
                text={"Symbol of the constellation:"}
                size={15}
                color={colors.light_green}
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

            <View style={{ gap: verticalScale(10) }}>
              <View style={{ ...appStyles.rowjustify }}>
                <CustomText
                  text={"Sign of the planet:"}
                  size={15}
                  color={colors.light_green}
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
                text={
                  "Pluto is the planet of transformation and power, representing your desire for change and growth. It reveals the areas of your life where you may experience transition and intense growth. Pluto stays in each sign for up to thirty years, meaning it rules a generation more than a person. In your birth chart, Pluto's placement can indicate areas where you may face deep emotional or psychologic"
                }
                size={15}
                lineHeight={22}
                color={colors.white + "80"}
              />

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
                      backgroundColor: colors.white + "60",
                    }}
                  />

                  <View
                    style={{
                      ...styles.dot,
                      backgroundColor: colors.white + "60",
                    }}
                  />

                  <View
                    style={{
                      ...styles.dot,
                      width: scale(2.5),
                      height: scale(2.5),
                      backgroundColor: colors.white + "60",
                    }}
                  />
                </View>

                <CustomText
                  text={"Close"}
                  size={15}
                  fontWeight="600"
                  fontFam={font.Chillax_Medium}
                  color={colors.white}
                />

                <View style={{ ...appStyles.row, gap: scale(4) }}>
                  <View
                    style={{
                      ...styles.dot,
                      width: scale(2.5),
                      height: scale(2.5),
                      backgroundColor: colors.white + "60",
                    }}
                  />

                  <View
                    style={{
                      ...styles.dot,
                      backgroundColor: colors.white + "60",
                    }}
                  />

                  <View
                    style={{
                      ...styles.dot,
                      width: "80%",
                      height: scale(2.5),
                      backgroundColor: colors.white + "60",
                    }}
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
          <CardDetail
            title="Pluto in Sagittarius"
            des={
              "With Pluto in Sagittarius, you have a desire for exploration and a thirst for knowledge and truth. Your transformational journey may involve breaking free from limiting beliefs and expanding your perspective of the world, leading to profound philosophical and spiritual growth.Your strength lies in your curiosity and willingness to explore new ideas. Use your adventurous spirit and belief in possibilities to transform your \n\n perspective and inspire others to do the same.Tip: Stay open-minded and avoid becoming too rigid or dogmatic in your beliefs. Embrace change and new experiences, and trust in your intuition and inner wisdom to guide you along your transformative journey."
            }
          />
          <CardDetail
            title="Pluto in House 12"
            des={
              "You are drawn to exploring your inner psyche and understanding others' motivations. You may have a strong intuition and a natural ability to heal and support others. However, you may keep many of your own secrets and emotions hidden, which can impact your well-being.\nLearning to open up and communicate can bring growth and prevent self-sabotage."
            }
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

export default BirthChartDetailPluto;
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
