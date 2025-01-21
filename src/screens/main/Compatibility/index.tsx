import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Platform, ScrollView, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import LinearGradient from "react-native-linear-gradient";
import { images } from "../../../assets/images";
import { appStyles } from "../../../utils/AppStyles";
const CompatibilityScreen = ({ navigation }: any) => {
  const Card = ({ title, des, gradient, img,img1,plus }: any) => {
    return (
        
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=>navigation.navigate("CompatibilityDetailScreen")}
        >
              <LinearGradient
        colors={gradient} // Properly formatted with transparency
        start={{ x: 0.3, y: 0 }} // Top-left corner
        end={{ x: 1, y: 1 }} // Bottom-right corner
        style={styles.cardContainer}
      >
        <View style={appStyles.rowjustify}>

        <Image
          style={{
            width: scale(90),
            height: scale(90),
          }}
          resizeMode="contain"
          source={img}
        />
         <Image
          style={{
            width: scale(45),
            height: scale(45),
          }}
          resizeMode="contain"
          source={plus}
        />
         <Image
          style={{
            width: scale(90),
            height: scale(90),
          }}
          resizeMode="contain"
          source={img1}
        />
        </View>
       
        <CustomText
          text={title}
          size={21}
          color={colors.primary}
          fontWeight="600"
        />
        <CustomText text={des} size={13} color={colors.primary+"90"} />
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
        <CustomText text={"COMPATIBILITY"} size={24} color={colors.primary} />
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: verticalScale(80),
            gap: verticalScale(70),
            paddingTop: verticalScale(10),
          }}
        >
          <Card
            title={"Birth Charts Compatibility"}
            img={images.birth_chart_reading}
            img1={images.birth_chart_reading}
            plus={images.plus_primary}

            des={"Let’s see what planets in your charts say about your love match"}
            gradient={["#000000", "#25237690"]}
          />
          <Card
          
              title={"Zodiac Sign Compatibility"}
              img={images.leo}
              img1={images.cancer}
              plus={images.plus}
              des={"304 Reports delivered today"}

            gradient={["#25237690", "#000000"]}
          />
        
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default CompatibilityScreen;
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
