import React, { useState, useEffect } from "react";
import { colors } from "../../../utils/colors";
import {
  FlatList,
  Image,
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

const ProfileScreen = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const tab = [
    { name: "Major Arcana", id: 1 },
    { name: "Wands", id: 2 },
    { name: "Cups", id: 3 },
    { name: "Swords", id: 4 },
    { name: "Pentacles", id: 5 },
  ];

  const cardsData = [
    { img: images.love_card, id: 1 },
    { img: images.money_card, id: 2 },
    { img: images.love_card, id: 3 },
    { img: images.money_card, id: 4 },
    { img: images.love_card, id: 5 },
    { img: images.money_card, id: 6 },
  ];

  const Header = () => {
    return (
      <View
        style={[
          {
            ...appStyles.rowjustify,
            gap: scale(15),
          },
        ]}
      >
        <CustomText
          fontWeight="500"
          numberOfLines={1}
          color={colors.primary}
          // fontFam={font.WorkSans_SemiBold}
          text={"PROFILE"}
          size={24}
        />
        <TouchableOpacity onPress={() => navigation.navigate("SettingScreen")}>
          <Image
            style={{
              width: scale(30),
              height: scale(30),
            }}
            resizeMode="contain"
            source={images.setting}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScreenLayout style={styles.main}>
      <Header />

      <LinearGradient
        colors={["transparent", "#B2303060"]}
        start={{ x: 0.5, y: 0 }} // Center-top start
        end={{ x: 0.5, y: 1 }} // Center-bottom end
        style={{
          //   flex: 0.7,
          borderWidth: 1,
          borderColor: "#B2303060",
          padding: scale(15),

          borderRadius: scale(10),
          gap: verticalScale(15),
        }}
      >
        <View style={{ ...appStyles.row, gap: scale(10) }}>
          <Image
            style={{
              width: scale(60),
              height: scale(60),
              borderRadius: 999,
            }}
            resizeMode="contain"
            source={images.user}
          />
          <View style={{ gap: verticalScale(8), alignItems: "flex-start" }}>
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
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: "100%",
            height: verticalScale(35),
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: scale(8),
            borderRadius: scale(999),
            borderWidth: 1,
            borderColor: "#B2303060",
            paddingHorizontal: scale(5),
            paddingVertical: verticalScale(4),
          }}
        >
          <Image
            style={{
              width: scale(20),
              height: scale(20),
              alignSelf: "center",
            }}
            resizeMode="contain"
            source={images.edit}
          />
          <CustomText text={"Edit"} size={16} color={colors.red} />
        </TouchableOpacity>

        <Image
          style={{
            width: scale(120),
            height: scale(120),
            alignSelf: "center",
          }}
          resizeMode="contain"
          source={images.cancer}
        />
        <View style={{ ...appStyles.row, gap: scale(4), alignSelf: "center" }}>
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
      <View
                style={{
                  ...appStyles.rowjustify,
                  gap: verticalScale(10),
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
          justifyContent: "flex-end",
          alignItems: "flex-end",
          paddingRight: scale(10),
          borderWidth: 1,
          borderColor: colors.primary,
          borderRadius: scale(12),
        }}
      >
        <View style={{ gap: verticalScale(3), alignItems: "flex-end" }}>
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
          justifyContent: "flex-end",
          alignItems: "flex-end",
          paddingRight: scale(10),
          borderWidth: 1,
          borderColor: colors.primary,
          borderRadius: scale(12),
        }}
      >
        <View style={{ gap: verticalScale(3), alignItems: "flex-end" }}>
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

      <View
                  style={{
                    ...styles.infoContainer,
                    paddingLeft: scale(15),
                    width:"100%",
                    borderColor:colors.light_yellow,
                   

                  }}
                >
                  <Image
                    style={styles.infoIcon}
                    resizeMode="contain"
                    source={images.dollar}
                  />

                  <View style={{ gap: verticalScale(3) }}>
                    <CustomText
                      text={"Earth"}
                      size={16}
                      color={colors.light_yellow}
                      fontWeight="600"
                    />
                    <CustomText
                      text={"Help us keep serving for free"}
                      size={14}
                      color={colors.light_yellow + "90"}
                      fontWeight="600"
                    />
                  </View>
                </View>



     
    </ScreenLayout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: verticalScale(15),
    paddingHorizontal: scale(15),
    
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
});
