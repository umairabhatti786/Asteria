import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import LinearGradient from "react-native-linear-gradient";
import AnimatedProgressBar from "../../../components/CustomProgress";
import { windowWidth } from "../../../utils/Dimensions";
import CustomButton from "../../../components/CustomButton";
import { appStyles } from "../../../utils/AppStyles";
const TodayFortune = ({ navigation }: any) => {
  const FingerData = [
    {
      title: "Your day",
      icon: images.your_day,
      date: "October 14. 2024",
      des: "Don't be afraid to stand up for yourself today! Someone's self-centeredness may be causing your feeling of exclusion, but don't take it personally. By speaking up, you can show your strength and resilience. \n\nEven if you don't get what you want, you will feel proud of yourself for taking a stand. Find the courage to share your thoughts and express your convictions-you'll be the rebel with a cause!",
    },
    {
      title: "Love",
      icon: images.love,
      progressbar: "60% success",
      des: "There have likely been some messy spats in your relationship recently but today you should see those issues and tensions subside. Your apology will be accepted so go ahead and say sorry. \n\n Continue to use open communication with your partner and you will notice that the stress level decreases and the warmth return in your relationship. Remain on this track for harmonious relations between you.",
    },
    {
      title: "Health",
      icon: images.health,
      progressbar: "80% success",
      des: "Keeping things in balance is never a done deal: there is always another day with things that need tweeking, issues that need ironing out. Give yourself the benefit of regularly balancing what you eat, in order to satisfy that desire for equilibrium. \n\n Eating fresh, organic produce is one of the best things you can do for your health. But you don't always have to be the one who cooks! Treating yourself to a meal out with friends once in a while can have a relaxing effect.",
    },
    {
      title: "Life / Career",
      icon: images.career,
      progressbar: "30% success",
      des: "You may turn aggressive in the workplace due to rejection and will like to pour all your energies to prove your talents. \n\n You are likely to become restless yet tactless. You should decide on the pros and cons before embarking on a challenging project, as it may confuse you later.",
    },
  ];

  return (
    <>
      <View
        style={{
          paddingHorizontal: scale(15),
          gap: verticalScale(20),
          paddingBottom: verticalScale(20),
        }}
      >
        {/* <View style={appStyles.rowjustify}>
          <View style={{ gap: verticalScale(5) }}>
            <CustomText
              text={"Fingers"}
              size={20}
              color={colors.white}
              fontWeight="600"
              fontFam={font.Chillax_Medium}
            />
            <CustomText
              text={"October 14. 2024"}
              size={14}
              color={colors.white + "90"}
            />
          </View>

          <View
            style={{
              ...appStyles.row,
              paddingHorizontal: scale(10),
              paddingVertical: verticalScale(4),
              borderWidth: 1,
              borderColor: colors.white + "30",
              borderRadius: scale(8),
              gap: scale(10),
            }}
          >
            <View>
              <CustomText
                text={"RESCAN IN"}
                size={14}
                color={colors.white}
                fontWeight="600"
                fontFam={font.Chillax_Medium}
              />
              <CustomText
                text={"6 days"}
                size={14}
                color={colors.white + "90"}
              />
            </View>

            <Image
              style={{
                width: scale(25),
                height: scale(25),
              }}
              resizeMode="contain"
              source={images.fingerprint}
            />
          </View>
        </View> */}
        {FingerData.map((item, index) => {
          return (
            <LinearGradient
              colors={["#25237690", "transparent"]}
              start={{ x: 0.5, y: 0 }} // Center-top start
              end={{ x: 0.5, y: 1 }} // Center-bottom end
              style={{
                alignItems: "center",
                borderRadius: scale(10),
                padding: scale(15),
                gap: verticalScale(10),
                borderWidth: 1,
                borderColor: colors.primary,
                //   width:windowWidth
              }}
            >
              <Image
                style={{
                  width: scale(50),
                  height: scale(50),
                }}
                resizeMode="contain"
                source={item.icon}
              />
              <View style={{ gap: verticalScale(5), alignItems: "center" }}>
                <CustomText
                  text={item.title}
                  size={25}
                  color={colors.primary}
                />
                {item.date && (
                  <CustomText
                    text={item.date}
                    style={{ marginTop: verticalScale(20) }}
                    size={14}
                    color={colors.white + "50"}
                  />
                )}
                {item.progressbar && (
                  <CustomText
                    text={item.progressbar}
                    size={14}
                    color={colors.white}
                  />
                )}

                <AnimatedProgressBar
                  hideDetail={true}
                  mainWidth={windowWidth - scale(60)}
                  totalSteps={10}
                  currentStep={8}
                />
              </View>

              <CustomText
                text={item.des}
                size={15}
                color={colors.white + "80"}
              />
            </LinearGradient>

            //     <View
            //     key={index.toString()}
            //     style={styles.box}>
            //     <LinearGradient
            //       colors={["#B2AFFE13", "#B2AFFE50"]} // Properly formatted with transparency
            //       start={{ x: 0, y: 0 }} // Top-left corner
            //       end={{ x: 1, y: 1 }} // Bottom-right corner
            //       style={{
            //         ...styles.gredientBox,
            //         borderColor: colors.primary,
            //       }}
            //     >
            //       <Image
            //         style={{
            //           width: scale(100),
            //           height: verticalScale(90),
            //           borderRadius: scale(15),
            //         }}
            //         resizeMode="contain"
            //         source={images.thumb}
            //       />
            //       <View
            //         style={{
            //           gap: verticalScale(11),
            //           height: verticalScale(90),
            //           flex: 1,
            //           paddingVertical: verticalScale(10),
            //           paddingHorizontal: scale(8),
            //           justifyContent: "space-between",
            //         }}
            //       >
            //         <View style={appStyles.rowjustify}>
            //           <CustomText
            //             text={item.title}
            //             color={colors.white}
            //             size={17}
            //             fontFam={font.Chillax_Medium}
            //             fontWeight="600"
            //           />
            //           <View style={{...appStyles.row,gap:scale(7)}}>
            //           <CustomText
            //             text={item.label}
            //             fontWeight="600"
            //             color={colors.primary}
            //             size={14}
            //             fontFam={font.Chillax_Medium}
            //           />
            //           <View
            //           style={{width:scale(5),height:scale(5),backgroundColor:colors.primary,borderRadius:999}}
            //           />

            //           </View>

            //         </View>

            //         <AnimatedProgressBar
            //           title={item.progressbarTitle}
            //           percentage={item.progressbar}
            //           totalSteps={10}
            //           currentStep={8}
            //         />
            //       </View>
            //     </LinearGradient>

            //     <View
            //       style={{
            //         gap: verticalScale(20),
            //         paddingHorizontal: scale(15),
            //         paddingTop: verticalScale(5),
            //       }}
            //     >
            //       <CustomText
            //         text={
            //           "You are the kind of person who feels safe when you can keep everything under control. You like being in charge, and you aren't afraid of taking responsibility. These qualities make you a good leader, manager, and businessman. However, if you become obsessed with power you may become oppressive."
            //         }
            //         size={15}
            //         color={colors.white + "80"}
            //       />
            //     </View>
            //   </View>
          );
        })}

<View
            style={{
              ...appStyles.row,
              gap: scale(10),
              marginBottom: verticalScale(40),
              paddingHorizontal: scale(10),
              alignSelf:"center"
            }}
          >
            <View
              style={{ ...styles.dot, width: scale(7), height: scale(7) }}
            />
            <View style={styles.dot} />
            <CustomButton
              width={"75%"}
              // onPress={() => navigation.navigate("NameScreen")}
              text="BACK TO HOME"
            />
            <View style={styles.dot} />

            <View
              style={{ ...styles.dot, width: scale(7), height: scale(7) }}
            />
          </View>
      </View>
    </>
  );
};

export default TodayFortune;
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
    paddingBottom: verticalScale(10),
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
