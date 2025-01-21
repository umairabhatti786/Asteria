import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import ScreenLayout from "../../../components/ScreenLayout";
import TopHeader from "../../../components/TopHeader";
import CustomButton from "../../../components/CustomButton";
import { appStyles } from "../../../utils/AppStyles";
import CustomTabBar from "../../../components/CustomTopBar";
import LinearGradient from "react-native-linear-gradient";
const ReadNowScreen = ({ navigation }: any) => {
  const [selectedStep, setSelectedStep] = useState(1);
  const ReadingStepsData = [
    {
      title: "1st STEP",
      des: "Left Hand",
      step: 1,
      id: 1,
    },
    {
      title: "2ND STEP",
      des: "Right Hand",
      step: 2,
      id: 2,
    },

    {
      title: "3RD STEP",
      des: "Fingers",
      step: 3,
      id: 3,
    },
  ];

  return (
    <>
      <ScreenLayout style={styles.main}>
        <View style={{ paddingHorizontal: scale(10),gap:verticalScale(15) }}>
          <TopHeader title="PLAM READING" />
          <CustomTabBar tab1={"Your Hand"} tab2="Today’s Fortune" />
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              alignSelf: "center",
              paddingBottom: verticalScale(20),
              alignItems: "center",
            }}
          >
            <View
              style={{
                ...appStyles.row,
                gap: scale(3),
                paddingHorizontal:scale(20)
              }}
            >
              {/* Scab your hands in three steps to get reports that covers all areas of life. */}
              <CustomText
                text={"Scab your hands in three steps"}
                size={12}
                color={colors.white + "60"}
              />
              <CustomText
                text={"three steps"}
                size={12}
                color={colors.primary}
              />
              <CustomText
                text={"to get reports"}
                size={12}
                color={colors.white + "60"}
              />
            </View>
            <CustomText
              text={"that covers all areas of life"}
              size={14}
              color={colors.white + "60"}
            />
          </View>

          <View
            style={{
              ...appStyles.row,
              borderBottomWidth: 1,
              borderColor: colors.primary + "50",
            }}
          >
            {ReadingStepsData.map((it, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setSelectedStep(it.step)}
                  style={{
                    ...styles.stepsContainer,

                    borderColor:
                      selectedStep == it.step ? colors.primary+"90" : "transparent",
                  }}
                >
                  <LinearGradient
                    key={index.toString()}
                    colors={
                      it.step == selectedStep
                        ? ["#B2AFFE50", "#B2AFFE13"]
                        : ["#000000", "#000000"]
                    } // Properly formatted with transparency
                    start={{ x: 0, y: 0 }} // Top-left corner
                    end={{ x: 1, y: 1 }} // Bottom-right corner
                    style={{
                      width: "100%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      borderTopLeftRadius: scale(13),
                      borderTopRightRadius: scale(13),
                    }}
                  >
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => setSelectedStep(it?.step)}
                      style={{
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: verticalScale(9),
                      }}
                    >
                      <Image
                        style={{
                          width: scale(30),
                          height: scale(30),
                        }}
                        resizeMode="center"
                        source={images.hand}
                      />
                      <View
                        style={{ gap: verticalScale(4), alignItems: "center" }}
                      >
                        <CustomText
                          text={it.title}
                          size={14}
                          color={
                            it.step == selectedStep
                              ? colors.primary
                              : colors.primary + "60"
                          }
                          fontWeight="600"
                        />
                        <CustomText
                          text={it.des}
                          size={12}
                          color={
                            it.step == selectedStep
                              ? colors.primary
                              : colors.primary + "60"
                          }
                        />
                      </View>
                    </TouchableOpacity>
                  </LinearGradient>
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
            paddingHorizontal: scale(10),
            alignSelf:"center"
          }}
        >
          <View style={{ ...styles.dot, width: scale(7), height: scale(7) }} />
          <View style={styles.dot} />
          <CustomButton
            width={"75%"}
            onPress={() => navigation.navigate("PlamReadingCapture")}
            text="CAPTURE NOW"
          />
          <View style={styles.dot} />

          <View style={{ ...styles.dot, width: scale(7), height: scale(7) }} />
        </View>
      </ScreenLayout>
    </>
  );
};

export default ReadNowScreen;
const styles = StyleSheet.create({
  main: {
    gap: verticalScale(10),
    width: "100%",
    height: "100%",
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
  stepsContainer: {
    width: "33%",
    height: verticalScale(85),
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopLeftRadius: scale(13),
    borderTopRightRadius: scale(13),
    overflow: "hidden",
    alignItems: "center",
  },
});
