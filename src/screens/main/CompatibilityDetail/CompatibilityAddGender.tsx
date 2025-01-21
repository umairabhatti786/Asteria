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
import CustomInput from "../../../components/CustomInput";
import LinearGradient from "react-native-linear-gradient";
import Steps from "../../auth/Signup/Steps";

const CompatibilityAddGender = ({ navigation }: any) => {
  const [selectedGander, setSelectedGander] = useState("Male");
  const genderData = [
    { title: "Male", id: 1, icon: images.gender_male },
    { title: "Female", id: 2, icon: images.gender_female },
  ];
  return (
    <>
      <ScreenLayout style={styles.main}>
        <TopHeader title="ADD GENDER" />
        <Steps CurrentStep={4} />
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <LinearGradient
            colors={["#252376", "transparent"]}
            start={{ x: 0.5, y: 0 }} // Center-top start
            end={{ x: 0.5, y: 1 }} // Center-bottom end
            style={{
              alignItems: "center",
              flex: 0.5,
              borderRadius: scale(10),
              padding: scale(20),
            }}
          >
            <CustomText
              text={
                "It will reveal the balance of your masculine and feminine energy."
              }
              size={14}
              lineHeight={25}
              style={{ textAlign: "center" }}
              color={colors.white + "70"}
              fontWeight="600"
            />
            <Image
              style={{
                width: "100%",
                height: scale(170),
              }}
              resizeMode="center"
              source={images.add_gender}
            />
          </LinearGradient>
          <View style={{ marginBottom: verticalScale(30) }}>
            <View
              style={{
                ...appStyles.rowjustify,
                marginBottom: verticalScale(10),
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
                      borderColor:
                        it.title == selectedGander
                          ? colors.primary
                          : colors.primary + "90",

                      borderRadius: scale(8),
                    }}
                  >
                    <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>setSelectedGander(it?.title)}
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
                        source={images.gender_male}
                      />
                      <CustomText
                        text={it.title}
                        size={16}
                        color={
                          it.title == selectedGander
                            ? colors.primary
                            : colors.primary + "90"
                        }
                        fontWeight="600"
                      />
                    </TouchableOpacity>
                  </LinearGradient>
                );
              })}
            </View>
            <CustomInput leftSource={images.other} placeholder="Other" />

            <View
              style={{
                ...appStyles.rowjustify,
                gap: scale(10),
                marginTop: verticalScale(30),
              }}
            >
              <CustomButton
                onPress={() => navigation.navigate("CompatibilityRelationshipStatus")}
                width={"48%"}
                text="I DON’T KNOW"
                textColor={colors.white}
                bgColor={colors.primary + "40"}
              />
              <CustomButton
                onPress={() => navigation.navigate("CompatibilityRelationshipStatus")}
                width={"48%"}
                text="Next"
              />
            </View>
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};

export default CompatibilityAddGender;
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: scale(20),
    flex: 1,
    gap: verticalScale(15),
  },
});
