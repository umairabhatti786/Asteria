import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import { appStyles } from "../../../utils/AppStyles";
import LinearGradient from "react-native-linear-gradient";
import { font } from "../../../utils/font";
import AnimatedProgressBar from "../../../components/CustomProgress";
import CustomButton from "../../../components/CustomButton";
const LeftHandReading = ({ navigation }: any) => {
  const ProAndCons = [
    { pros: "Analytical thinking", cons: "Indecisiveness" },
    { pros: "Responsibility", cons: "Carelessness" },
    { pros: "Vitality", cons: "Obstinacy" },
  ];
  const StrengthsWeaknesses = [
    { strength: "Responsibilityg", weakness: "Indecisiveness" },
    { strength: "Curiosity", weakness: "Impatience" },
    { strength: "Curiosity", weakness: "Carelessness" },
  ];

  return (
    <>
      <View style={{ padding: scale(15), gap: verticalScale(20) }}>
        <View style={appStyles.rowjustify}>
          <View style={{ gap: verticalScale(2) }}>
            <CustomText
              text={"Left Hand"}
              size={18}
              color={colors.white}
              fontWeight="600"
              fontFam={font.Chillax_Medium}
            />
            <CustomText
              text={"October 14. 2024"}
              size={12}
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
        </View>

        <View style={styles.box}>
          <CustomText
            text={"OVERVIEW"}
            size={24}
            style={{ textAlign: "center" }}
            color={colors.primary}
          />

          <LinearGradient
            colors={["#B2AFFE13", "#B2AFFE50"]} // Properly formatted with transparency
            start={{ x: 0, y: 0 }} // Top-left corner
            end={{ x: 1, y: 1 }} // Bottom-right corner
            style={{
              ...styles.gredientBox,
              borderColor: colors.primary,
            }}
          >
            <Image
              style={{
                width: scale(120),
                height: verticalScale(130),
                borderRadius: scale(10),
              }}
              resizeMode="contain"
              source={images.left_hand}
            />
            <View
              style={{
                gap: verticalScale(11),
                flex: 1,
                paddingVertical: verticalScale(5),
                paddingHorizontal: scale(8),
              }}
            >
              <AnimatedProgressBar
                title="Love"
                percentage={"80%"}
                totalSteps={10}
                currentStep={8}
              />
              <AnimatedProgressBar
                title="Health"
                percentage={"75%"}
                totalSteps={10}
                currentStep={7}
              />
              <AnimatedProgressBar
                title="Fate"
                percentage={"90%"}
                totalSteps={10}
                currentStep={9}
              />
              <AnimatedProgressBar
                title="Life"
                percentage={"70%"}
                totalSteps={10}
                currentStep={7}
              />
            </View>
          </LinearGradient>

          <View
            style={{
              gap: verticalScale(20),
              paddingHorizontal: scale(15),
              paddingTop: verticalScale(5),
            }}
          >
            <CustomText
              text={
                "Be careful of wearing your heart on your sleeve because sometimes you can get hurt by being open and vulnerable."
              }
              size={15}
              color={colors.white + "80"}
            />
            <CustomText
              text={
                "Giving up unhealthy habits not only improves your health but gives you more reasons to be proud of yourself."
              }
              size={15}
              color={colors.white + "80"}
            />
          </View>
        </View>

        <View style={styles.box}>
          <CustomText
            text={"LOVE"}
            size={24}
            style={{ textAlign: "center" }}
            color={colors.primary}
          />

          <View
            style={{
              paddingHorizontal: scale(15),
              gap: verticalScale(20),
            }}
          >
            <CustomText
              text={
                "You’re likely to have 2 children. You are blessed with them being healthy and strong."
              }
              size={15}
              color={colors.white + "80"}
            />

            <CustomText
              text={"Love Language"}
              size={18}
              //   style={{ textAlign: "center" }}
              color={colors.white}
            />
          </View>

          <LinearGradient
            colors={["#B2AFFE13", "#B2AFFE50"]} // Properly formatted with transparency
            start={{ x: 0, y: 0 }} // Top-left corner
            end={{ x: 1, y: 1 }} // Bottom-right corner
            style={{
              ...styles.gredientBox,
              borderColor: colors.primary,
            }}
          >
            <View
              style={{
                gap: verticalScale(11),
                flex: 1,
                paddingVertical: verticalScale(5),
                paddingHorizontal: scale(8),
              }}
            >
              <AnimatedProgressBar
                title="Quality time"
                percentage={"60%"}
                totalSteps={20}
                currentStep={17}
              />
              <AnimatedProgressBar
                title="Receiving Gifts"
                percentage={"10%"}
                totalSteps={20}
                currentStep={4}
              />
              <AnimatedProgressBar
                title="Acts of Service"
                percentage={"10%"}
                totalSteps={20}
                currentStep={4}
              />
              <AnimatedProgressBar
                title="Physical Touch"
                percentage={"20%"}
                totalSteps={20}
                currentStep={6}
              />
            </View>
          </LinearGradient>

          <View
            style={{
              paddingHorizontal: scale(15),
              paddingTop: verticalScale(5),
            }}
          >
            <CustomText
              text={
                "Your major love is Quality time which means that you are touched by time spent with your partner, whether at home or out on a date."
              }
              size={15}
              color={colors.white + "80"}
            />
          </View>
        </View>

        <View style={styles.box}>
          <CustomText
            text={"HEALTH"}
            size={24}
            style={{ textAlign: "center" }}
            color={colors.primary}
          />

          <View style={{ paddingHorizontal: scale(15) }}>
            <CustomText
              text={
                "Be careful of wearing your heart on your sleeve because sometimes you can get hurt by being open and vulnerable."
              }
              size={15}
              color={colors.white + "80"}
            />
          </View>

          <LinearGradient
            colors={["#B2AFFE13", "#B2AFFE50"]} // Properly formatted with transparency
            start={{ x: 0, y: 0 }} // Top-left corner
            end={{ x: 1, y: 1 }} // Bottom-right corner
            style={{
              ...styles.gredientBox,
              borderColor: colors.primary,
            }}
          >
            <View
              style={{
                gap: verticalScale(11),
                flex: 1,
                paddingVertical: verticalScale(5),
                paddingHorizontal: scale(8),
              }}
            >
              <AnimatedProgressBar
                title="The Risk of an Accident"
                percentage={"5%"}
                totalSteps={20}
                currentStep={2}
              />
              <AnimatedProgressBar
                title="The Risk of having Cancer"
                percentage={"2%"}
                totalSteps={20}
                currentStep={1}
              />
              <AnimatedProgressBar
                title="The Risk of Having a Stroke"
                percentage={"3%"}
                totalSteps={20}
                currentStep={1.5}
              />
              <AnimatedProgressBar
                title="Chance of other major Disease"
                percentage={"20%"}
                totalSteps={10}
                currentStep={1}
              />
            </View>
          </LinearGradient>

          <View
            style={{
              paddingHorizontal: scale(15),
              paddingTop: verticalScale(5),
            }}
          >
            <CustomText
              text={
                "Be careful of wearing your heart on your sleeve because sometimes you can get hurt by being open and vulnerable."
              }
              size={15}
              color={colors.white + "80"}
            />
          </View>
        </View>

        <View style={styles.box}>
          <CustomText
            text={"FATE"}
            size={24}
            style={{ textAlign: "center" }}
            color={colors.primary}
          />

          <View
            style={{
              paddingHorizontal: scale(15),
              gap: verticalScale(10),
            }}
          >
            <CustomText
              text={
                "Life is not only about safe choices. Sometimes you should take a risk and do something you’ve never done before."
              }
              size={15}
              color={colors.white + "80"}
            />
            <View style={appStyles.rowjustify}>
              <CustomText text={"Pros"} size={18} color={colors.primary} />

              <CustomText text={"Cons"} size={18} color={colors.white} />
            </View>
          </View>

          {ProAndCons.map((it, index) => {
            return (
              <View key={index.toString()} style={appStyles.row}>
                <View
                  style={{
                    width: scale(20),
                    height: 1,
                    backgroundColor: colors.primary,
                  }}
                />
                <LinearGradient
                  key={index.toString()}
                  colors={["#B2AFFE50", "#B2AFFE13"]} // Properly formatted with transparency
                  start={{ x: 0, y: 0 }} // Top-left corner
                  end={{ x: 1, y: 1 }} // Bottom-right corner
                  style={{
                    ...styles.ProConContainer,
                    borderColor: colors.primary,
                  }}
                >
                  <CustomText
                    text={it.pros}
                    size={14}
                    color={colors.primary}
                    fontWeight="600"
                  />
                </LinearGradient>
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: colors.white + "50",
                  }}
                />

                <View style={styles.ProConContainer}>
                  <CustomText
                    text={it.pros}
                    size={14}
                    color={colors.white + "50"}
                    fontWeight="600"
                  />
                </View>

                <View
                  style={{
                    width: scale(20),
                    height: 1,
                    backgroundColor: colors.white + "50",
                  }}
                />
              </View>
            );
          })}

          <View
            style={{
              paddingHorizontal: scale(15),
              paddingTop: verticalScale(5),
            }}
          >
            <CustomText
              text={
                "Your overall health is in really good condition, you are a healthy and present person, drinking lots of water will help increase your energy more."
              }
              size={15}
              color={colors.white + "80"}
            />
          </View>
        </View>

        <View style={styles.box}>
          <CustomText
            text={"CAREER"}
            size={24}
            style={{ textAlign: "center" }}
            color={colors.primary}
          />

          <View
            style={{
              paddingHorizontal: scale(15),
              gap: verticalScale(10),
            }}
          >
            <CustomText
              text={
                "You are blessed with a tremendous career path! Discover your natural talent and don’t be afraid of difficulties you encounter. Success awaits you."
              }
              size={15}
              color={colors.white + "80"}
            />
            <View style={appStyles.rowjustify}>
              <CustomText
                text={"Your Strengths"}
                size={18}
                color={colors.primary}
              />

              <CustomText
                text={"Your Weaknesses"}
                size={18}
                color={colors.white}
              />
            </View>
          </View>

          {StrengthsWeaknesses.map((it, index) => {
            return (
              <View key={index.toString()} style={appStyles.row}>
                <View
                  style={{
                    width: scale(20),
                    height: 1,
                    backgroundColor: colors.primary,
                  }}
                />
                <LinearGradient
                  key={index.toString()}
                  colors={["#B2AFFE50", "#B2AFFE13"]} // Properly formatted with transparency
                  start={{ x: 0, y: 0 }} // Top-left corner
                  end={{ x: 1, y: 1 }} // Bottom-right corner
                  style={{
                    ...styles.ProConContainer,
                    borderColor: colors.primary,
                  }}
                >
                  <CustomText
                    text={it.strength}
                    size={14}
                    color={colors.primary}
                    fontWeight="600"
                  />
                </LinearGradient>
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: colors.white + "50",
                  }}
                />

                <View style={styles.ProConContainer}>
                  <CustomText
                    text={it.weakness}
                    size={14}
                    color={colors.white + "50"}
                    fontWeight="600"
                  />
                </View>

                <View
                  style={{
                    width: scale(20),
                    height: 1,
                    backgroundColor: colors.white + "50",
                  }}
                />
              </View>
            );
          })}
        </View>

        <View style={styles.box}>
          <CustomText
            text={"CHARACTERISTICS"}
            size={24}
            style={{ textAlign: "center" }}
            color={colors.primary}
          />

          <Image
            style={{
              width: "100%",
              height: verticalScale(230),
              alignSelf: "center",
            }}
            resizeMode="contain"
            source={images.characteristics}
          />

          <View
            style={{ paddingHorizontal: scale(10), gap: verticalScale(20) }}
          >
            <CustomText
              text={
                "You are an ethical type, which means that you respect and act according to high moral values and tend to have deeply held beliefs. You can be compelling and inspiring with your idealism, and you're able to persuade even the hardest of skeptics."
              }
              size={15}
              color={colors.white + "80"}
            />

            <CustomText
              text={
                "You are an intuitive type, which means that you tend to imagine the past and future potential of what you encounter. You also strive to move past appearances and get to the heart of things. This can give you an almost uncanny ability to understand people's true motivations, feelings, and needs."
              }
              size={15}
              color={colors.white + "80"}
            />

            <CustomText
              text={
                "You are an extrovert, which means you find pleasure in daily communication with people. You are talkative, witty, and rarely run out of things to discuss. For you, happiness and satisfaction stem from the time you spend with the people you enjoy knowing."
              }
              size={15}
              color={colors.white + "80"}
            />
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
            <View
              style={{ ...styles.dot, width: scale(7), height: scale(7) }}
            />
            <View style={styles.dot} />
            <CustomButton
              width={"75%"}
              // onPress={() => navigation.navigate("NameScreen")}
              text="CHECK RIGHZT HAND"
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

export default LeftHandReading;
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
