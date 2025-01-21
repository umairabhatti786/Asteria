import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import LinearGradient from "react-native-linear-gradient";
import { images } from "../../../assets/images";
import ScreenLayout from "../../../components/ScreenLayout";
const GuidanceScreen = ({ navigation }: any) => {
  const Card = ({
    title,
    des,
    gradient,
    img,
    cardStyle,
    color,
    onPress,
  }: any) => {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <LinearGradient
          colors={gradient} // Properly formatted with transparency
          start={{ x: 0.3, y: 0 }} // Top-left corner
          end={{ x: 1, y: 1 }} // Bottom-right corner
          style={[styles.cardContainer, cardStyle]}
        >
          <Image
            style={{
              width: scale(100),
              height: scale(100),
            }}
            resizeMode="contain"
            source={img}
          />
          <CustomText text={title} size={23} color={color} fontWeight="600" />
          <CustomText text={des} size={13} color={color} />
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <ScreenLayout style={styles.main}>
        <CustomText
          textTransform={"uppercase"}
          text={"Guidance"}
          size={24}
          color={colors.primary}
        />
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: verticalScale(80),
            gap: verticalScale(10),
            paddingTop: verticalScale(10),
          }}
        >
          <Card
            onPress={() => navigation.navigate("CrystalBall")}
            cardStyle={{ borderColor: "#E9AA1780" }}
            title={"Palm Reading"}
            color={"#E9AA17"}
            img={images.crystal_ball}
            des={"Read your palm to know your fortune"}
            gradient={["#E9AA1710", "#E9AA1740"]}
          />
          <Card
          onPress={()=>navigation.navigate("NumerologyScreen")}
            title={"Birth Chart Reading"}
            img={images.numerology}
            color={"#FC0160"}
            cardStyle={{ borderColor: "#FC016060" }}
            des={"Learn more about your birth-chart"}
            gradient={["#FC016040", "#FC016010"]}
          />

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("DreamExplain")}
          >
            <LinearGradient
              colors={["#000000", "#25237690"]} // Properly formatted with transparency
              start={{ x: 0.3, y: 0 }} // Top-left corner
              end={{ x: 1, y: 1 }} // Bottom-right corner
              style={{ ...styles.cardContainer, justifyContent: "flex-end" }}
            >
              <CustomText
                text={"Dream Explain"}
                size={23}
                color={colors.primary}
                fontWeight="600"
              />
              <CustomText
                text={"Let Luna explain your dream"}
                size={13}
                color={colors.primary + "80"}
              />
            </LinearGradient>
            <Image
              style={{
                width: "100%",
                height: verticalScale(150),
                position: "absolute",
                zIndex: -1,
              }}
              resizeMode="stretch"
              source={images.dream}
            />
          </TouchableOpacity>
          {/* <Card
            img={images.tarot_card_reading}
            title={"Tarot Card Reading"}
            des={"Learn more about your birth-chart"}
            gradient={["#000000", "#25237690"]}
          /> */}
        </ScrollView>
      </ScreenLayout>
    </>
  );
};

export default GuidanceScreen;
const styles = StyleSheet.create({
  main: {
    gap: verticalScale(10),
    width: "100%",
    height: "100%",

    paddingHorizontal: scale(15),
  },
  cardContainer: {
    padding: scale(20),
    justifyContent: "center",
    borderWidth: 1.2,
    borderColor: colors.primary + "90",
    borderRadius: scale(8),
    // gap: verticalScale(5),
    height: verticalScale(170),
  },
});
