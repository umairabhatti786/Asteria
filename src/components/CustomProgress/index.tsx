// components/AnimatedProgressBar.js
import React, { useRef, useEffect } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { windowWidth } from "../../utils/Dimensions";
import { images } from "../../assets/images";
import CustomText from "../CustomText";
import { font } from "../../utils/font";
import { appStyles } from "../../utils/AppStyles";
import { useNavigation } from "@react-navigation/native";

const { width: screenWidth } = Dimensions.get("window");

const AnimatedProgressBar = ({
  totalSteps,
  currentStep,
  backgroundColor,
  progressColor,
  title,
  percentage,
  hideDetail,
  mainWidth,
  detailColor,
}: any) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  useEffect(() => {
    const progress = (currentStep / totalSteps) * 100;
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 700,
      useNativeDriver: false,
    }).start();
  }, [currentStep, totalSteps]);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={{ gap: verticalScale(4) }}>
      {!hideDetail && (
        <View style={appStyles.rowjustify}>
          <CustomText
            text={title}
            color={detailColor || colors.primary}
            size={15}
          />
          <CustomText
            text={percentage}
            fontWeight="600"
            color={detailColor|| colors.primary + "70"}
            size={14}
            fontFam={font.Chillax_Medium}
          />
        </View>
      )}

      <View
        style={{
          ...styles.container,
          backgroundColor: backgroundColor || colors.primary + "40",
          width: mainWidth || "100%",
        }}
      >
        <Animated.View
          style={[
            styles.progressBar,

            {
              width: progressWidth,
              backgroundColor: progressColor || colors.primary,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(3.5),
    alignSelf: "center",
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "center",
    position: "relative",
  },
  progressBar: {
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  text: {
    position: "absolute",
    alignSelf: "center",
    fontWeight: "bold",
    color: "#fff",
    zIndex: 1,
  },

  back: { width: "40%", height: "40%", tintColor: colors.white },
});

export default AnimatedProgressBar;
