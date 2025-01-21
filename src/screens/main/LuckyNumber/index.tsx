import React, { useState, useEffect } from "react";
import { colors } from "../../../utils/colors";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import ScreenLayout from "../../../components/ScreenLayout";
import ToggleSwitch from "toggle-switch-react-native";
import LinearGradient from "react-native-linear-gradient";
import { font } from "../../../utils/font";
const LuckyNumber = ({ navigation,route }: any) => {
  const data=route?.params?.data
  console.log("Data",data)
 
  const Header = () => {
    return (
      <View
        style={[
          {
            ...appStyles.rowjustify,
            width: scale(40),
            height: verticalScale(3.5),
            backgroundColor: colors.primary,
            alignSelf: "center",
            borderRadius: 999,
            marginVertical: verticalScale(10),
          },
        ]}
      ></View>
    );
  };
  const DetailCard = ({ title, label, isToggle }: any) => {
    return (
      <LinearGradient
        colors={["#B2AFFE40", "#B2AFFE10"]} // Properly formatted with transparency
        start={{ x: 0.3, y: 0 }} // Top-left corner
        end={{ x: 1, y: 1 }} // Bottom-right corner
        style={{ ...styles.infoContainer,}}
      >
        <CustomText
          text={label}
          size={16}
          color={colors.primary}
          fontWeight="600"
        />
        <View style={{ ...appStyles.row, gap: scale(10) }}>
          <TouchableOpacity activeOpacity={0.5} style={styles.circleConatiner}>
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
    );
  };
  return (
    <ScreenLayout style={styles.main}>
      <Header />
      <View style={{ gap: verticalScale(5), alignItems: "center" }}>
        <CustomText
          textTransform={"uppercase"}
          text={data?.title}
          size={24}
          color={colors.primary}
        />
        <CustomText
          text={"Sept 22, 2024"}
          size={14}
          color={colors.white + "90"}
        />
      </View>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={data?.gradient}
          start={{ x: 0.5, y: 0 }} // Center-top start
          end={{ x: 0.5, y: 1 }} // Center-bottom end
          style={{
            alignItems: "center",
            borderWidth: 1,
            borderColor: data?.color,
            //   flex: 0.7,

            borderRadius: scale(10),
            padding: scale(20),
            gap: verticalScale(10),
          }}
        >
          {
            data?.number&&(
              <CustomText
              textTransform={"uppercase"}
              text={data?.number}
              size={44}
              fontFam={font.Chillax_Medium}
              fontWeight="600"
              color={colors.primary}
            />

            )
          }
          {
            data?.isMoon&&(
              <View style={{...appStyles.row,gap:scale(10)}}>
                <View

                style={{...styles.infoContainer,width:scale(30),height:scale(30),borderRadius:999,backgroundColor:data?.color}}
                >
              

                </View>

                <CustomText
              text={data?.label}
              size={14}
              fontFam={font.Chillax_Medium}
              fontWeight="600"
              color={data?.color}
            />

              </View>
            )
          }
          {
            data?.time&&(
              <CustomText
              text={data?.time}
              size={20}
              fontFam={font.Chillax_Medium}
              fontWeight="600"
              color={data?.color}
            />
            )
          }
        

          <CustomText
            lineHeight={20}
            text={
              "Your lucky number for today is 29, representing closure, compassion, and humanitarianism. This number encourages you to think about how you can make a difference in the lives of others. It's a day to give back, whether through small acts of kindness or by contributing to a cause you care about.\n\n Reflect on any areas of your life that may need resolution or forgiveness. The energy of 29 supports endings that make way for new beginnings. Today is a day for healing, being of service to others, and showing empathy. Your actions can bring a sense of completion and satisfaction."
            }
            size={14}
            color={data?.color}
          />
          
        </LinearGradient>
      </View>

      <View style={{ gap: verticalScale(30), marginBottom: verticalScale(30) }}>
        <DetailCard title="ACCOUNT" label={"Delete account"} />
      </View>
    </ScreenLayout>
  );
};

export default LuckyNumber;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: verticalScale(15),
    paddingHorizontal: scale(15),
    backgroundColor: "#2A2A3C",
    borderRadius: 20,
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: 999,
    backgroundColor: colors.lightRed,
  },
  infoContainer: {
    width: "100%",
    paddingVertical: verticalScale(7),
    backgroundColor: "#1C1C29",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.primary + "60",
    borderRadius: scale(12),
    paddingHorizontal: scale(15),
    flexDirection: "row",
    gap: scale(10),
  },
  infoIcon: {
    width: scale(17),
    height: scale(17),
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
