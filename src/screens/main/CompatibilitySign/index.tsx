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
import CustomButton from "../../../components/CustomButton";
const CompatibilitySignScreen = ({ navigation }: any) => {
  const [selectedSign, setSelectedSign] = useState("Leo");

  const signData = [
    { icon: images.cancer, name: "Cancer", date: "22 Jun - 22 Jul" },
    { icon: images.leo, name: "Leo", date: "23 Jul - 22 Aug" },
    { icon: images.girl_cancer, name: "Girl", date: "23 Aug - 22 Sep" },
  ];
  const Card = ({ title, des, gradient, img, img1, plus }: any) => {
    return (
      <LinearGradient
        colors={gradient} // Properly formatted with transparency
        start={{ x: 0.3, y: 0 }} // Top-left corner
        end={{ x: 1, y: 1 }} // Bottom-right corner
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
      </LinearGradient>
    );
  };
  return (
    <>
      <ScreenLayout style={styles.main}>
        <View style={{ paddingHorizontal: scale(15), gap: verticalScale(20) }}>
          <TopHeader title="COMPATIBILITY REPORT" />

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
        </View>
        <View style={{flex:1,gap:verticalScale(20)}}>

   

        <CustomText
          text={"SELECT A SIGN"}
          style={{ textAlign: "center", marginTop: verticalScale(20) }}
          size={25}
          color={colors.primary}
        />
        <View style={appStyles.row}>
          {signData.map((ite, ind) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setSelectedSign(ite.name)}
                key={ind.toString()}
                style={{
                  alignItems: "center",
                  gap: verticalScale(5),
                  width: "33%",
                }}
              >
                <View
                  style={{
                    height: verticalScale(80),
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <Image
                    style={{
                      width: selectedSign == ite?.name ? scale(90) : scale(60),
                      height: selectedSign == ite?.name ? scale(90) : scale(60),
                    }}
                    resizeMode="contain"
                    source={ite.icon}
                  />
                </View>

                <View
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: colors.white + "50",
                  }}
                >
                  {selectedSign == ite.name && (
                    <View
                      style={{
                        width: "100%",
                        height: 1,
                        backgroundColor: colors.primary,
                        position: "absolute",
                      }}
                    />
                  )}
                </View>
                <View
                  style={{
                    marginTop: verticalScale(5),
                    gap: verticalScale(5),
                    alignItems: "center",
                    height: verticalScale(50),
                  }}
                >
                  {selectedSign == ite?.name && (
                    <CustomText
                      text={ite.name}
                      size={18}
                      fontFam={font.Chillax_Medium}
                      fontWeight="600"
                      color={colors.primary}
                    />
                  )}
                  <CustomText
                    text={ite.date}
                    size={13}
                    color={
                      selectedSign == ite?.name
                        ? colors.primary
                        : colors.white + "90"
                    }
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        </View>

        <View
          style={{
            ...appStyles.row,
            gap: scale(10),
            marginBottom: verticalScale(40),
            paddingHorizontal:scale(10),
            alignSelf:"center"
          }}
        >
          <View style={{ ...styles.dot, width: scale(7), height: scale(7) }} />
          <View style={styles.dot} />
          <CustomButton
            width={"75%"}
            onPress={() => navigation.navigate("CompatibilityLoadingScreen")}
            text="CHECK COMPATIBILITY"
          />
          <View style={styles.dot} />

          <View style={{ ...styles.dot, width: scale(7), height: scale(7) }} />
        </View>
      </ScreenLayout>
    </>
  );
};

export default CompatibilitySignScreen;
const styles = StyleSheet.create({
  main: {
    gap: verticalScale(20),
    width: "100%",
    height: "100%",
  },
  cardContainer: {
    padding: scale(20),
    justifyContent: "center",
    borderRadius: scale(8),
    gap: verticalScale(8),
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
});
