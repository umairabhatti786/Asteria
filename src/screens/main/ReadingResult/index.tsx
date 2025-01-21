import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
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
import { font } from "../../../utils/font";
import AnimatedProgressBar from "../../../components/CustomProgress";
import { windowWidth } from "../../../utils/Dimensions";
import LeftHandReading from "./LeftHandReading";
import RightHandReading from "./RightHandReading";
import FingerReading from "./FingerReading";
import TodayFortune from "./TodayFortune";
const ReadingResultScreen = ({ navigation }: any) => {
  const [selectedStep, setSelectedStep] = useState(1);

  const [selectedTab,setSelectedTab]=useState("Your Hand")
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
          <CustomTabBar 
          setSelectedTab={setSelectedTab}
          tab1={"Your Hand"} tab2="Today’s Fortune" />
        </View>

        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
         
        >
            {
                selectedTab=="Your Hand"&&(

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
                        size={12}
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
                                selectedStep == it.step
                                  ? colors.primary+"90"
                                  : "transparent",
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
                                  style={{
                                    gap: verticalScale(4),
                                    alignItems: "center",
                                  }}
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
                    {
                        selectedStep==1&&(
                            <LeftHandReading/>
                        )
        
                    }
                     {
                        selectedStep==2&&(
                            <RightHandReading/>
                        )
        
                    }
                      {
                        selectedStep==3&&(
                            <FingerReading/>
                        )
        
                    }
                  
                  </View>

                )
            }
            {
                selectedTab=="Today’s Fortune"&&(
                    <>
                    <TodayFortune/>
                    </>
                )
            }
        

       
        </ScrollView>
      </ScreenLayout>
    </>
  );
};

export default ReadingResultScreen;
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
  box: {
    borderRadius: scale(13),
    borderColor: colors.white + "50",
    borderWidth: 1,
    width: "100%",
    paddingVertical: verticalScale(10),
    gap: verticalScale(10),
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
  gredientBox: {
    padding: scale(7),
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: scale(13),
    flexDirection: "row",
  },
  ProConContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(7),
    borderWidth: 1,
    borderColor: colors.white + "50",
  },
});
