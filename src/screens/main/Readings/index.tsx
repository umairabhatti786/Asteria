import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Platform, ScrollView, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import LinearGradient from "react-native-linear-gradient";
import { images } from "../../../assets/images";
const ReadingsScreen = ({ navigation }: any) => {
  const Card = ({ title, des, gradient, img,onPress }: any) => {
    return (
        
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        >
              <LinearGradient
        colors={gradient} // Properly formatted with transparency
        start={{ x: 0.3, y: 0 }} // Top-left corner
        end={{ x: 1, y: 1 }} // Bottom-right corner
        style={styles.cardContainer}
      >
        <Image
          style={{
            width: scale(75),
            height: scale(75),
          }}
          resizeMode="contain"
          source={img}
        />
        <CustomText
          text={title}
          size={21}
          color={colors.primary}
          fontWeight="600"
        />
        <CustomText text={des} size={13} color={colors.primary} />
      </LinearGradient>

        </TouchableOpacity>
    
    );
  };
  return (
    <>
      <LinearGradient
        colors={["#252376", "#000000"]} // Dark blue to transparent
        start={{ x: 0, y: 0 }} // Top-center
        end={{ x: 0, y: 0.3 }} // Bottom-center
        style={styles.main}
      >
        <CustomText text={"READINGS"} size={24} color={colors.primary} />
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
            title={"Palm Reading"}
            onPress={()=>navigation.navigate("ReadingDetailScreen")}
            img={images.palm_reading}
            des={"Read your palm to know your fortune"}
            gradient={["#000000", "#25237690"]}
          />
          <Card
            title={"Birth Chart Reading"}
            onPress={()=>navigation.navigate("BirthChartScreen")}

            img={images.birth_chart_reading}
            des={"Learn more about your birth-chart"}
            gradient={["#25237690", "#000000"]}
          />
          <Card
          onPress={()=>navigation.navigate("TarotCardsScreen")}
            img={images.tarot_card_reading}
            title={"Tarot Card Reading"}
            des={"Learn more about your birth-chart"}
            gradient={["#000000", "#25237690"]}
          />
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default ReadingsScreen;
const styles = StyleSheet.create({
  main: {
    paddingTop: verticalScale(Platform.OS == "ios" ? 50 : 10),
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
    gap: verticalScale(5),
  },
});
