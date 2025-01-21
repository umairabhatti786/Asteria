import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import CustomButton from "../../../components/CustomButton";
import { font } from "../../../utils/font";
import TopHeader from "../../../components/TopHeader";
import LinearGradient from "react-native-linear-gradient";

const TarotCardsScreen = ({ navigation }: any) => {
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
      <ImageBackground
        source={images.tarot_card_background}
        // resizeMode="contain"
        style={styles.main}
      >
        <TopHeader title="TAROT CARDS" />

        <View style={{ flex: 1 }}>
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
        </View>

        <View
          style={{ gap: verticalScale(10), paddingBottom: verticalScale(40) }}
        >
          <View style={appStyles.rowjustify}>
            <Card
              onPress={() => navigation.navigate("DailyTarotScreen")}
              title="Daily Tarot"
              img={images.daily_tarot}
            />
            <Card
              onPress={() => navigation.navigate("NearFutureScreen")}
              title="Near Future"
              img={images.near_future}
            />
          </View>

          <View style={appStyles.rowjustify}>
            <Card
              onPress={() => navigation.navigate("LoveAndRelationsScreen")}
              title="Love & Relations"
              img={images.love_relations}
            />
            <Card
              onPress={() => navigation.navigate("YesOrNoScreen")}
              title="Yes or No"
              img={images.near_future}
            />
          </View>
          <Card
          onPress={()=>navigation.navigate("CardMeaningsScreen")}
            cardStyle={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              height: verticalScale(45),
              gap: scale(10),
              width: "100%",
            }}
            title="Card Meanings"
            img={images.card_meanings}
          />
        </View>

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
      </ImageBackground>
    </>
  );
};

export default TarotCardsScreen;
const styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowHeight,
    gap: verticalScale(40),
    paddingTop: Platform.OS == "ios" ? verticalScale(40) : verticalScale(10),
    paddingHorizontal: scale(15),
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
  box: {
    height: verticalScale(70),
    paddingHorizontal: scale(13),
    justifyContent: "center",
    borderWidth: 1.2,
    borderRadius: scale(8),
  },
});
