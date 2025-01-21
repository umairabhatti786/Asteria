import React, { useState, useEffect } from "react";
import { colors } from "../../../utils/colors";
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import { windowWidth } from "../../../utils/Dimensions";
import ScreenLayout from "../../../components/ScreenLayout";
import { font } from "../../../utils/font";
import CustomButton from "../../../components/CustomButton";
import CustomTabBar from "../../../components/CustomTopBar";
import TransitsCard from "./TransitsCard";

const YourChart = ({ navigation }: any) => {
  const YourCorePersonality = [
    {
      sun_img: images.sun_time,
      icon: images.zodiac_virgo,
      color: "#FF910C",
      gradient: ["#FFD71640", "transparent"],
      label: "House 9",
      title: "Sun in Virgo",
      des: "Your inner self",
    },
    {
      sun_img: images.moon_square,
      icon: images.zodiac_libra,
      gradient: ["#25237680", "transparent"],
      label: "House 12",
      color: "#B2AFFE",
      title: "Moon in Libra",
      des: "Your emotional side",
    },
    {
      sun_img: images.your_jupiter,
      icon: images.zodiac_capricorn,
      gradient: ["#D1613550", "transparent"],
      label: "House 1",
      color: "#D16135",

      title: "Mars in Capricorn",
      des: "Your outer self",
    },
  ];

  const YourstellarComposition = [
    {
      sun_img: images.sun_time,
      icon: images.zodiac_virgo,
      color: "#FF910C",
      gradient: ["#FFD71640", "transparent"],
      label: "House 9",
      title: "Sun in Virgo",
      des: "Your inner self",
    },
    {
      sun_img: images.moon_square,
      icon: images.zodiac_libra,
      gradient: ["#25237680", "transparent"],
      label: "House 12",
      color: "#B2AFFE",
      title: "Moon in Libra",
      des: "Your emotional side",
    },
    {
      sun_img: images.your_jupiter,
      icon: images.zodiac_capricorn,
      gradient: ["#D1613550", "transparent"],
      label: "House 1",
      color: "#D16135",

      title: "Mars in Capricorn",
      des: "Your outer self",
    },
    {
      sun_img: images.your_jupiter,
      icon: images.zodiac_capricorn,
      gradient: ["#D1613550", "transparent"],
      label: "House 1",
      color: "#D16135",

      title: "Mars in Capricorn",
      des: "Your outer self",
    },

    {
      sun_img: images.your_jupiter,
      icon: images.zodiac_capricorn,
      gradient: ["#D1613550", "transparent"],
      label: "House 1",
      color: "#D16135",

      title: "Mars in Capricorn",
      des: "Your outer self",
    },

    {
      sun_img: images.your_jupiter,
      icon: images.zodiac_capricorn,
      gradient: ["#D1613550", "transparent"],
      label: "House 1",
      color: "#D16135",

      title: "Mars in Capricorn",
      des: "Your outer self",
    },
  ];

  const Header = () => {
    return (
      <View
        style={[
          {
            ...appStyles.rowjustify,
            paddingHorizontal: scale(15),
          },
        ]}
      >
        <View style={{ ...appStyles.row, gap: scale(15) }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ ...styles.box }}
          >
            <Image
              style={{
                width: scale(14),
                height: scale(14),
              }}
              resizeMode="contain"
              source={images.back}
            />
          </TouchableOpacity>

          <CustomText
            fontWeight="500"
            numberOfLines={1}
            color={colors.primary}
            // fontFam={font.WorkSans_SemiBold}
            text={"BIRTG CHART"}
            size={24}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("TodayHoroscope")}
          style={{
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(3),
            borderWidth: 1,
            borderColor: colors.primary,
            borderRadius: 999,
            gap: scale(6),
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <CustomText
            fontWeight="500"
            color={colors.primary}
            text={"Sept 10"}
            size={14}
          />
          <Image
            style={{
              width: scale(17),
              height: scale(17),
            }}
            resizeMode="contain"
            source={images.calendar}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const Card = ({ title, des, gradient, img, cardStyle, parentColor }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("ReadingDetailScreen")}
      >
        <LinearGradient
          colors={gradient} // Properly formatted with transparency
          start={{ x: 0.3, y: 0 }} // Top-left corner
          end={{ x: 0.5, y: 1 }} // Bottom-right corner
          style={[styles.cardContainer, cardStyle]}
        >
          <CustomText
            text={title}
            size={14}
            style={{ width: "85%" }}
            color={parentColor || colors.primary}
            fontWeight="600"
            fontFam={font.Chillax_Medium}
          />

          <Image
            style={{
              width: scale(20),
              height: scale(20),
            }}
            resizeMode="contain"
            source={images.question}
          />
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const Chart = ({ item }: any) => {
    return (
      <LinearGradient
        colors={item?.gradient}
        start={{ x: 0.5, y: 0 }} // Center-top start
        end={{ x: 0.5, y: 1 }} // Center-bottom end
        style={{
          width: "100%",
          borderRadius: scale(8),
          borderWidth: 1,
          borderColor: item?.color + "50",
          height: verticalScale(130),
          gap: verticalScale(5),
          overflow: "hidden",
          justifyContent: "space-between",
          padding: scale(15),
        }}
      >
        <View
          style={{
            ...appStyles.row,
            gap: scale(10),
          }}
        >
          <Image
            style={{
              width: scale(30),
              height: scale(30),
              tintColor: item?.color,
            }}
            source={item?.icon}
            resizeMode="contain"
          />
          <View>
            <CustomText
              text={item?.title}
              size={20}
              fontWeight="600"
              fontFam={font.Chillax_Medium}
              color={item?.color}
            />

            <CustomText text={item?.label} size={13} color={item?.color} />
          </View>
        </View>
        <View
          style={{
            gap: verticalScale(10),
          }}
        >
          <View
            style={{
              ...appStyles.row,
              gap: scale(10),
            }}
          >
            <View style={{ ...appStyles.row, gap: scale(4) }}>
              <View
                style={{
                  ...styles.dot,
                  width: scale(2.5),
                  height: scale(2.5),
                  backgroundColor: item.color + "80",
                }}
              />

              <View
                style={{ ...styles.dot, backgroundColor: item.color + "80" }}
              />

              <View
                style={{
                  ...styles.dot,
                  width: scale(2.5),
                  height: scale(2.5),
                  backgroundColor: item.color + "80",
                }}
              />
            </View>

            <CustomText
              text={item?.des}
              size={15}
              fontWeight="600"
              style={{ width: scale(90) }}
              numberOfLines={1}
              fontFam={font.Chillax_Medium}
              color={item?.color}
            />

            <View style={{ ...appStyles.row, gap: scale(4) }}>
              <View
                style={{
                  ...styles.dot,
                  width: scale(2.5),
                  height: scale(2.5),
                  backgroundColor: item.color + "80",
                }}
              />

              <View
                style={{ ...styles.dot, backgroundColor: item.color + "80" }}
              />

              <View
                style={{
                  ...styles.dot,
                  width: "60%",
                  height: scale(2.5),
                  backgroundColor: item.color + "80",
                }}
              />

              <Image
                style={{
                  width: scale(12),
                  height: scale(12),
                  tintColor: item?.color,
                }}
                source={images.next}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* <View
        // style={{}}
        > */}
        <Image
          style={{
            width: scale(100),
            height: scale(100),
            right: scale(-20),
            top: verticalScale(-20),
            position: "absolute",
          }}
          source={item?.sun_img}
          resizeMode="contain"
        />

        {/* </View> */}
      </LinearGradient>
    );
  };

  return (
    <View style={{ flex: 1, gap: verticalScale(25) }}>
      <View style={{ paddingHorizontal: scale(15), gap: verticalScale(25) }}>
        <Image
        style={{width:scale(300),height:scale(300),alignSelf:"center"}}
        source={images.birth_chat}
        />
        <CustomText
          text={
            "This is your unique birth chart, based on your birth date, time, and place. With this detailed table, you'll find out the positions of the planets by sign and houses."
          }
          size={13}
          lineHeight={21}
          style={{ textAlign: "center" }}
          color={colors.white + "90"}
        />

        <Card
          title={"What can you learn from reading your birth chart?"}
          gradient={["#0000", "#B2AFFE20"]}
        />

        <LinearGradient
          colors={["transparent", "#25237695"]}
          start={{ x: 0.5, y: 0 }} // Center-top start
          end={{ x: 0.5, y: 1 }} // Center-bottom end
          style={{
            borderWidth: 1,
            borderColor: colors.primary,

            //   flex: 0.7,

            borderRadius: scale(10),
            //   padding: scale(20),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "33%" }}>
              <View style={styles.signContainer}>
                <CustomText
                  text={"Sign"}
                  size={13}
                  fontFam={font.Chillax_Medium}
                  fontWeight="600"
                  color={colors.primary}
                />
              </View>
              <View style={styles.signContainer}>
                <CustomText
                  text={"Sagittarius"}
                  size={13}
                  color={colors.white}
                />
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={images.zodiac_capricorn}
                />
              </View>

              <View style={styles.signContainer}>
                <CustomText text={"Capricorn"} size={13} color={colors.white} />
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={images.sagaittarius}
                />
              </View>

              <View style={{ ...styles.signContainer, borderBottomWidth: -1 }}>
                <CustomText text={"Aquarius"} size={13} color={colors.white} />
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={images.zodiac_aquarius}
                />
              </View>

              <View style={{ ...styles.signContainer }}>
                <CustomText text={""} size={13} color={colors.white} />
              </View>

              <View style={{ ...styles.signContainer }}>
                <CustomText text={"Gemini"} size={13} color={colors.white} />
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={images.gemini}
                />
              </View>

              <View style={{ ...styles.signContainer }}>
                <CustomText text={"Cancer"} size={13} color={colors.white} />
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={images.zodiac_cancer}
                />
              </View>

              <View style={{ ...styles.signContainer, borderBottomWidth: -1 }}>
                <CustomText text={"Virgo"} size={13} color={colors.white} />
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={images.zodiac_virgo}
                />
              </View>

              <View style={{ ...styles.signContainer }}>
                <CustomText text={""} size={13} color={colors.white} />
              </View>

              <View style={{ ...styles.signContainer }}>
                <CustomText text={"Libra"} size={13} color={colors.white} />
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={images.zodiac_libra}
                />
              </View>

              <View style={{ ...styles.signContainer, borderBottomWidth: -1 }}>
                <CustomText
                  text={"Sagittarius"}
                  size={13}
                  color={colors.white}
                />
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={images.sagaittarius}
                />
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <View
                style={{
                  ...styles.plannerContainer,
                  borderColor: "#FC016090",
                  borderWidth: 1,
                }}
              >
                <CustomText
                  text={"Planner"}
                  size={13}
                  fontFam={font.Chillax_Medium}
                  fontWeight="600"
                  color={colors.red100}
                />
              </View>

              <View
                style={{ ...styles.plannerContainer, ...styles.plannerBorder }}
              >
                <CustomText text={"Haumea"} size={13} color={colors.red100} />
                <Image
                  style={{ ...styles.icon, tintColor: colors.red100 }}
                  resizeMode="contain"
                  source={images.haumea}
                />
              </View>

              <View
                style={{ ...styles.plannerContainer, ...styles.plannerBorder }}
              >
                <CustomText text={"Mars"} size={13} color={colors.red100} />
                <Image
                  style={{ ...styles.icon, tintColor: colors.red100 }}
                  resizeMode="contain"
                  source={images.gender_male}
                />
              </View>

              <View
                style={{ ...styles.plannerContainer, ...styles.plannerBorder }}
              >
                <CustomText text={"Earch"} size={13} color={colors.red100} />
                <Image
                  style={{ ...styles.icon, tintColor: colors.red100 }}
                  resizeMode="contain"
                  source={images.planer_earth}
                />
              </View>

              <View
                style={{ ...styles.plannerContainer, ...styles.plannerBorder }}
              >
                <CustomText text={"Neptune"} size={13} color={colors.red100} />
                <Image
                  style={{ ...styles.icon, tintColor: colors.red100 }}
                  resizeMode="contain"
                  source={images.neptune}
                />
              </View>
              <View
                style={{ ...styles.plannerContainer, ...styles.plannerBorder }}
              >
                <CustomText text={"satrun"} size={13} color={colors.red100} />
                <Image
                  style={{ ...styles.icon, tintColor: colors.red100 }}
                  resizeMode="contain"
                  source={images.saturn}
                />
              </View>
              <View
                style={{ ...styles.plannerContainer, ...styles.plannerBorder }}
              >
                <CustomText text={"Jupiter"} size={13} color={colors.red100} />
                <Image
                  style={{ ...styles.icon, tintColor: colors.red100 }}
                  resizeMode="contain"
                  source={images.Jupiter}
                />
              </View>
              <View
                style={{ ...styles.plannerContainer, ...styles.plannerBorder }}
              >
                <CustomText text={"Venus"} size={13} color={colors.red100} />
                <Image
                  style={{ ...styles.icon, tintColor: colors.red100 }}
                  resizeMode="contain"
                  source={images.info_gender_female}
                />
              </View>

              <View
                style={{ ...styles.plannerContainer, ...styles.plannerBorder }}
              >
                <CustomText text={"Sun"} size={13} color={colors.red100} />
                <Image
                  style={{ ...styles.icon, tintColor: colors.red100 }}
                  resizeMode="contain"
                  source={images.sun}
                />
              </View>

              <View
                style={{ ...styles.plannerContainer, ...styles.plannerBorder }}
              >
                <CustomText text={"Moon"} size={13} color={colors.red100} />
                <Image
                  style={{ ...styles.icon, tintColor: colors.red100 }}
                  resizeMode="contain"
                  source={images.moon}
                />
              </View>
              <TouchableOpacity
              activeOpacity={0.5}
              onPress={()=>navigation.navigate("BirthChartDetailPluto")}
                style={{ ...styles.plannerContainer, ...styles.plannerBorder }}
              >
                <CustomText text={"Pluto"} size={13} color={colors.red100} />
                <Image
                  style={{ ...styles.icon, tintColor: colors.red100 }}
                  resizeMode="contain"
                  source={images.pluto}
                />
              </TouchableOpacity>
            </View>

            <View style={{ width: "33%" }}>
              <View
                style={{
                  ...styles.signContainer,
                  justifyContent: "flex-end",
                }}
              >
                <CustomText
                  text={"House"}
                  size={13}
                  fontFam={font.Chillax_Medium}
                  fontWeight="600"
                  color={colors.primary}
                />
              </View>

              <View
                style={{
                  ...styles.signContainer,
                  justifyContent: "flex-end",
                  borderBottomWidth:-1
                }}
              >
                <CustomText
                  text={"1"}
                  size={13}
                  color={colors.white}
                />
              </View>
              <View
                style={{
                  ...styles.signContainer,
                  justifyContent: "flex-end",
                }}
              >
                <CustomText
                  text={""}
                  size={13}
                  color={colors.white}
                />
              </View>

              <View
                style={{
                  ...styles.signContainer,
                  justifyContent: "flex-end",
                  borderBottomWidth:-1
                }}
              >
                <CustomText
                  text={"2"}
                  size={13}
                  color={colors.white}
                />
              </View>
              <View
                style={{
                  ...styles.signContainer,
                  justifyContent: "flex-end",
                }}
              >
                <CustomText
                  text={""}
                  size={13}
                  color={colors.white}
                />
              </View>

              <View
                style={{
                  ...styles.signContainer,
                  justifyContent: "flex-end",
                }}
              >
                <CustomText
                  text={"6"}
                  size={13}
                  color={colors.white}
                />
              </View>

              <View
                style={{
                  ...styles.signContainer,
                  justifyContent: "flex-end",
                }}
              >
                <CustomText
                  text={"7"}
                  size={13}
                  color={colors.white}
                />
              </View>
              <View
                style={{
                  ...styles.signContainer,
                  justifyContent: "flex-end",
                  borderBottomWidth:-1
                }}
              >
                <CustomText
                  text={"9"}
                  size={13}
                  color={colors.white}
                />
              </View>

              <View
                style={{
                  ...styles.signContainer,
                  justifyContent: "flex-end",
                }}
              >
                <CustomText
                  text={""}
                  size={13}
                  color={colors.white}
                />
              </View>

              <View
                style={{
                  ...styles.signContainer,
                  justifyContent: "flex-end",
                }}
              >
                <CustomText
                  text={"12"}
                  size={13}
                  color={colors.white}
                />
              </View>
              <View
                style={{
                  ...styles.signContainer,
                  justifyContent: "flex-end",
                  borderBottomWidth:-1
                }}
              >
                <CustomText
                  text={"12"}
                  size={13}
                  color={colors.white}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>

      <View
        style={{
          ...appStyles.row,
          alignSelf: "center",
          gap: scale(6),
        }}
      >
        <View
          style={{
            width: scale(10),
            height: 0.5,
            backgroundColor: colors.primary + "50",
          }}
        />

        <View
          style={{
            ...styles.dot,
            backgroundColor: colors.primary + "60",
          }}
        ></View>

        <View
          style={{
            flex: 1,
            height: 0.5,

            backgroundColor: colors.primary + "50",
          }}
        />
      </View>

      <View style={{ paddingHorizontal: scale(15), gap: verticalScale(10) }}>
        <CustomText
          text={"YOUR CORE PERSONALITY"}
          size={20}
          lineHeight={23}
          color={colors.white}
        />

        <CustomText
          text={
            "The big 3 of your birth chart encompasses your self expression, emotions and motivation."
          }
          size={15}
          lineHeight={23}
          color={colors.white + "90"}
        />
        <FlatList
          data={YourCorePersonality}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: scale(15),
            marginTop: verticalScale(15),
          }}
          renderItem={({ item, index }) => {
            return <Chart item={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View
        style={{
          ...appStyles.row,
          alignSelf: "center",
          gap: scale(6),
        }}
      >
        <View
          style={{
            width: scale(10),
            height: 0.5,
            backgroundColor: colors.primary + "50",
          }}
        />

        <View
          style={{
            ...styles.dot,
            backgroundColor: colors.primary + "60",
          }}
        ></View>

        <View
          style={{
            flex: 1,
            height: 0.5,

            backgroundColor: colors.primary + "50",
          }}
        />
      </View>

      <View style={{ paddingHorizontal: scale(15), gap: verticalScale(10) }}>
        <CustomText
          text={"YOUR STELLAR COMPOSTION"}
          size={20}
          lineHeight={23}
          color={colors.white}
        />

        <CustomText
          text={
            "Personal and social planets make a unique layers to your multifaceted being"
          }
          size={15}
          lineHeight={23}
          color={colors.white + "90"}
        />
        <FlatList
          data={YourstellarComposition}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: scale(15),
            marginTop: verticalScale(15),
          }}
          renderItem={({ item, index }) => {
            return <Chart item={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default YourChart;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: verticalScale(25),
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: 999,
    backgroundColor: colors.lightRed,
  },

  infoContainer: {
    width: "47%",
    paddingVertical: verticalScale(10),
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: scale(12),

    flexDirection: "row",
    gap: scale(10),
  },
  infoIcon: {
    width: scale(30),
    height: scale(30),
  },

  cardContainer: {
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.2,
    borderColor: colors.primary + "90",
    borderRadius: scale(10),
    gap: verticalScale(6),
  },

  todayFeatureBox: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
    borderWidth: 1.2,
    borderColor: "#252376",
    borderRadius: scale(10),
    gap: verticalScale(6),
    justifyContent: "space-between",
    height: verticalScale(85),
  },

  box: {
    width: scale(35),
    height: scale(35),
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white + "10",
  },
  signContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: verticalScale(40),
    borderBottomWidth: 1,
    borderBottomColor: colors.white + "40",
    padding: scale(10),
    flexDirection: "row",
    gap: scale(7),
  },
  plannerContainer: {
    // width: "33%",
    height: verticalScale(40),

    padding: scale(10),
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#FC016040",
    flexDirection: "row",
    gap: scale(7),
  },
  plannerBorder: {
    borderColor: "#FC016090",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  icon: {
    width: scale(14),
    height: scale(14),
    tintColor: colors.white,
  },
});
