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
import { appStyles } from "../../../utils/AppStyles";
import ScreenLayout from "../../../components/ScreenLayout";
import TopHeader from "../../../components/TopHeader";
import { font } from "../../../utils/font";
const CompatibilityLoadingScreen = ({ navigation }: any) => {
 
    useEffect(()=>{

        setTimeout(() => {
            navigation.navigate("CompatibilityReportScreen")
            
        }, 1000);

    },[])
  const Card = ({ title, des, gradient, img, img1, plus }: any) => {
    return (
      <View
    
        style={styles.cardContainer}
      >
        <View style={appStyles.rowjustify}>
          <View style={{ alignItems: "center", gap: verticalScale(5) }}>
            <Image
              style={{
                width: scale(90),
                height: scale(90),
              }}
              resizeMode="contain"
              source={img}
            />
            <CustomText
              text={"Scorpio"}
              size={13}
              color={colors.white + "90"}
            />
          </View>

          <Image
            style={{
              width: scale(45),
              height: scale(45),
            }}
            resizeMode="contain"
            source={plus}
          />
          <View style={{ alignItems: "center", gap: verticalScale(5) }}>
            <Image
              style={{
                width: scale(90),
                height: scale(90),
              }}
              resizeMode="contain"
              source={img1}
            />
            <CustomText text={"Leo"} size={13} color={colors.white + "90"} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <ScreenLayout style={styles.main}>

          <Card
            title={"Birth Charts Compatibility"}
            img={images.cancer}
            img1={images.leo}
            plus={images.plus_primary}
            des={
              "Let’s see what planets in your charts say about your love match"
            }
            gradient={["#DE656530", "#5C408B40", "#000"]}
          />


       
        <View style={{alignItems:"center",paddingTop:"50%",gap:verticalScale(5)}}>
        <CustomText
          text={"60%"}
          size={50}
          color={colors.primary}
          fontFam={font.Chillax_Bold}
          fontWeight="700"
        />
        <CustomText
          text={"Analysing your report"}
          style={{ textAlign: "center", }}
          size={20}
          color={colors.primary}
        />
        
        </View>
      </ScreenLayout>
    </>
  );
};

export default CompatibilityLoadingScreen;
const styles = StyleSheet.create({
  main: {
    gap: verticalScale(20),
    width: "100%",
    height: "100%",
    paddingTop:verticalScale(30)
  },
  cardContainer: {
    padding: scale(20),
    justifyContent: "center",
    borderRadius: scale(8),
    gap: verticalScale(8),
  },
});
