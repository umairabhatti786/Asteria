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
const FingerReading = ({ navigation }: any) => {
  const FingerData = [
    { title: "Thumb", label: "Power",progressbarTitle:"Good", progressbar: "78/100", des:"You are the kind of person who feels safe when you can keep everything under control. You like being in charge, and you aren't afraid of taking responsibility. These qualities make you a good leader, manager, and businessman. However, if you become obsessed with power you may become oppressive."},
    { title: "Index", label: "Ambition",progressbarTitle:"Good", progressbar: "80/100", des:"You are the kind of person who feels safe when you can keep everything under control. You like being in charge, and you aren't afraid of taking responsibility. These qualities make you a good leader, manager, and businessman. However, if you become obsessed with power you may become oppressive."},
    { title: "Middle", label: "identity", progressbarTitle:"Perfect",progressbar: "96/100", des:"You are the kind of person who feels safe when you can keep everything under control. You like being in charge, and you aren't afraid of taking responsibility. These qualities make you a good leader, manager, and businessman. However, if you become obsessed with power you may become oppressive."},
    { title: "Ring", label: "Creativity",progressbarTitle:"Excellent", progressbar: "86/100", des:"You are the kind of person who feels safe when you can keep everything under control. You like being in charge, and you aren't afraid of taking responsibility. These qualities make you a good leader, manager, and businessman. However, if you become obsessed with power you may become oppressive."},
    { title: "Little", label: "Relation",progressbarTitle:"Excellent", progressbar: "88/100", des:"You are the kind of person who feels safe when you can keep everything under control. You like being in charge, and you aren't afraid of taking responsibility. These qualities make you a good leader, manager, and businessman. However, if you become obsessed with power you may become oppressive."},


  ];

  return (
    <>
      <View style={{ padding: scale(15), gap: verticalScale(20) }}>
        <View style={appStyles.rowjustify}>
          <View style={{ gap: verticalScale(2) }}>
            <CustomText
              text={"Fingers"}
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
        {
            FingerData.map((item,index)=>{
                return(


                    <View 
                    key={index.toString()}
                    style={styles.box}>
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
                          width: scale(100),
                          height: verticalScale(90),
                          borderRadius: scale(15),
                        }}
                        resizeMode="contain"
                        source={images.thumb}
                      />
                      <View
                        style={{
                          gap: verticalScale(11),
                          height: verticalScale(90),
                          flex: 1,
                          paddingVertical: verticalScale(10),
                          paddingHorizontal: scale(8),
                          justifyContent: "space-between",
                        }}
                      >
                        <View style={appStyles.rowjustify}>
                          <CustomText
                            text={item.title}
                            color={colors.white}
                            size={17}
                            fontFam={font.Chillax_Medium}
                            fontWeight="600"
                          />
                          <View style={{...appStyles.row,gap:scale(7)}}>
                          <CustomText
                            text={item.label}
                            fontWeight="600"
                            color={colors.primary}
                            size={14}
                            fontFam={font.Chillax_Medium}
                          />
                          <View
                          style={{width:scale(5),height:scale(5),backgroundColor:colors.primary,borderRadius:999}}
                          />
          
                          </View>
                         
                        </View>
          
                        <AnimatedProgressBar
                          title={item.progressbarTitle}
                          percentage={item.progressbar}
                          totalSteps={10}
                          currentStep={8}
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
                          "You are the kind of person who feels safe when you can keep everything under control. You like being in charge, and you aren't afraid of taking responsibility. These qualities make you a good leader, manager, and businessman. However, if you become obsessed with power you may become oppressive."
                        }
                        size={15}
                        color={colors.white + "80"}
                      />
                    </View>
                  </View>

                )
            })
        }

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

export default FingerReading;
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
