import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import { font } from "../../../utils/font";
import ScreenLayout from "../../../components/ScreenLayout";
import TopHeader from "../../../components/TopHeader";
import { appStyles } from "../../../utils/AppStyles";
import LinearGradient from "react-native-linear-gradient";
import Steps from "../../auth/Signup/Steps";

const CompatibilityRelationshipStatus = ({ navigation }: any) => {
  const [selectedGander, setSelectedGander] = useState("In a relationship");
  const genderData = [
    { title: "In a relationship", id: 1, icon: images.relationship },
    { title: "Single", id: 2, icon: images.single },
    { title: "Married", id: 3, icon: images.users },
    { title: "Engaged", id: 4, icon: images.engaged },
  ];
  return (
    <>
      <ScreenLayout style={styles.main}>
        <TopHeader title="RELATIONSHIP STATUS" />
        <Steps CurrentStep={5} />
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <LinearGradient
            colors={["#252376", "transparent"]}
            start={{ x: 0.5, y: 0 }} // Center-top start
            end={{ x: 0.5, y: 1 }} // Center-bottom end
            style={{
              alignItems: "center",
              flex: 0.6,
              borderRadius: scale(10),
              padding: scale(20),
            }}
          >
            <CustomText
              text={
                "Your current status provides insights into your love life."
              }
              size={14}
              lineHeight={25}
              style={{ textAlign: "center" }}
              color={colors.white + "70"}
              fontWeight="600"
            />
            <Image
              style={{
                width: scale(100),
                height: scale(100),
                marginTop: verticalScale(10),
              }}
              resizeMode="contain"
              source={images.relationship_status}
            />
          </LinearGradient>
          <View style={{ marginBottom: verticalScale(30) }}>
            <View style={{ gap: verticalScale(10) }}>
              <View
                style={{
                  ...appStyles.rowjustify,
                  flexWrap: "wrap",
                  gap: verticalScale(10),
                }}
              >
                {genderData.map((it, index) => {
                  return (
                    <LinearGradient
                      key={index.toString()}
                      colors={
                        it.title == selectedGander
                          ? ["#B2AFFE50", "#B2AFFE13"]
                          : ["#B2AFFE16", "#B2AFFE10"]
                      } // Properly formatted with transparency
                      start={{ x: 0, y: 0 }} // Top-left corner
                      end={{ x: 1, y: 1 }} // Bottom-right corner
                      style={{
                        width: "47%",
                        height: verticalScale(70),
                        paddingHorizontal: scale(13),
                        justifyContent: "center",
                        borderWidth: 1.2,
                        borderRadius: scale(13),
                        borderColor:
                        it.title == selectedGander
                          ? colors.primary
                          : colors.primary + "60",
                      }}
                    >
                      <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => setSelectedGander(it?.title)}
                        style={{
                          width: "100%",
                          height: "100%",
                          justifyContent: "center",

                          gap: verticalScale(5),
                        }}
                      >
                        <Image
                          style={{
                            width: scale(25),
                            height: scale(25),
                          }}
                          resizeMode="center"
                          source={it?.icon}
                        />
                        <CustomText
                          text={it.title}
                          size={16}
                          color={
                            it.title == selectedGander
                              ? colors.primary
                              : colors.primary + "60"
                          }
                          fontWeight="600"
                        />
                      </TouchableOpacity>
                    </LinearGradient>
                  );
                })}
              </View>

              <View
                style={{
                  ...appStyles.rowjustify,
                  marginBottom: verticalScale(10),
                  flexWrap: "wrap",
                  gap: verticalScale(10),
                }}
              >
                <LinearGradient
                  colors={
                    "Divorced" == selectedGander
                      ? ["#B2AFFE50", "#B2AFFE13"]
                      : ["#B2AFFE16", "#B2AFFE10"]
                  } // Properly formatted with transparency
                  start={{ x: 0, y: 0 }} // Top-left corner
                  end={{ x: 1, y: 1 }} // Bottom-right corner
                  style={{
                    ...styles.box,
                    borderColor:
                      "Divorced" == selectedGander
                        ? colors.primary
                        : colors.primary + "60",
                    height: verticalScale(45),
                  }}>

                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setSelectedGander("Divorced")}
                    style={{
                      width: "100%",
                      height: "100%",
                      flexDirection: "row",
                      alignItems: "center",

                      gap: verticalScale(5),
                    }}
                  >
                    <Image
                      style={{
                        width: scale(25),
                        height: scale(25),
                      }}
                      resizeMode="contain"
                      source={images.divorced}
                    />
                    <CustomText
                      text={"Divorced"}
                      size={16}
                      color={
                        "Divorced" == selectedGander
                          ? colors.primary
                          : colors.primary + "60"
                      }
                      fontWeight="600"
                    />
                  </TouchableOpacity>
                </LinearGradient>

                <LinearGradient
                  colors={
                    "Widow" == selectedGander
                      ? ["#B2AFFE50", "#B2AFFE13"]
                      : ["#B2AFFE16", "#B2AFFE10"]
                  } // Properly formatted with transparency
                  start={{ x: 0, y: 0 }} // Top-left corner
                  end={{ x: 1, y: 1 }} // Bottom-right corner
                  style={{
                    ...styles.box,
                    borderColor:
                      "Widow" == selectedGander
                        ? colors.primary
                        : colors.primary + "60",
                    height: verticalScale(45),
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setSelectedGander("Widow")}
                    style={{
                      width: "100%",
                      height: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: verticalScale(5),
                    }}
                  >
                    <Image
                      style={{
                        width: scale(25),
                        height: scale(25),
                      }}
                      resizeMode="contain"
                      source={images.window}
                    />
                    <CustomText
                      text={"Widow"}
                      size={16}
                      color={
                        "Widow" == selectedGander
                          ? colors.primary
                          : colors.primary + "60"
                      }
                      fontWeight="600"
                    />
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View
              style={{
                ...appStyles.rowjustify,
                gap: scale(10),
                marginTop: verticalScale(30),
              }}
            >
              <CustomButton
                onPress={() => navigation.navigate("CompatibilitySignScreen")}
                width={"48%"}
                text="SkIP"
                textColor={colors.white}
                bgColor={colors.primary + "40"}
              />
              <CustomButton
                onPress={() => navigation.navigate("CompatibilitySignScreen")}
                width={"48%"}
                text="CONFIRM"
              />
            </View>
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};

export default CompatibilityRelationshipStatus;
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: scale(20),
    flex: 1,
    gap: verticalScale(15),
  },
  box: {
    width: "47%",
    height: verticalScale(70),
    paddingHorizontal: scale(13),
    justifyContent: "center",
    borderWidth: 1.2,
    borderRadius: scale(8),
  },
});
