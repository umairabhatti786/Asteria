import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  TextInput,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import ScreenLayout from "../../../components/ScreenLayout";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import CustomText from "../../../components/CustomText";
import TopHeader from "../../../components/TopHeader";
import LinearGradient from "react-native-linear-gradient";
import { appStyles } from "../../../utils/AppStyles";
import { font } from "../../../utils/font";
import LottieView from "lottie-react-native";

import CustomButton from "../../../components/CustomButton";
const DreamExplain = ({ navigation }: any) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <ScreenLayout style={styles.main}>
        <ImageBackground
          style={{
            width: windowWidth,
            height: windowHeight / 1.7,
          }}
          source={images.dream}
        >
          <View
            style={{
              flex: 1,
              gap: verticalScale(20),
              padding: scale(15),
            }}
          >
            <TopHeader title="DREAM EXPLAIN" />

            {/* <FlatList
              data={resultData}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                gap: verticalScale(15),
              }}
              renderItem={({ item, index }) => {
                return (
                  <LinearGradient
                    colors={["transparent", "#FC016040"]}
                    start={{ x: 0.5, y: 0 }} // Center-top start
                    end={{ x: 0.5, y: 1 }} // Center-bottom end
                    style={{
                      borderRadius: scale(10),
                      padding: scale(15),
                      gap: verticalScale(10),
                      borderWidth: 1,
                      borderColor: colors.red100 + "30",
                      //   width:windowWidth
                    }}
                  >
                    <View style={{ ...appStyles.rowjustify, width: "100%" }}>
                      <CustomText
                        text={item.title}
                        size={25}
                        fontFam={font.Chillax_Medium}
                        fontWeight="600"
                        color={colors.red100}
                      />
                      <Image
                        style={{
                          width: scale(50),
                          height: scale(50),
                        }}
                        resizeMode="contain"
                        source={item.icon}
                      />
                    </View>

                    <View style={{ gap: verticalScale(5) }}>
                      <CustomText
                        text={item.label}
                        size={16}
                        fontFam={font.Chillax_Medium}
                        fontWeight="600"
                        color={"#FFC2D9"}
                      />
                    </View>

                    <CustomText
                      text={item.des}
                      size={15}
                      color={colors.white + "80"}
                    />
                  </LinearGradient>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            /> */}
          </View>
        </ImageBackground>

        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: verticalScale(40),
            flex: 1,
            gap: verticalScale(10),
            paddingHorizontal: scale(15),
          }}
        >
          <CustomText
            text={
              "Describe your dream and let Luna give you a clue about what it means"
            }
            style={{ width: "90%", textAlign: "center" }}
            color={colors.primary}
            size={15}
          />

          <LinearGradient
            colors={["#B2AFFE25", "#00000040"]}
            start={{ x: 0.3, y: 0 }} // Top-left corner
            end={{ x: 1, y: 1 }} // Bottom-right corner
            style={[styles.cardContainer]}
          >
            <TextInput
              value={value}
              allowFontScaling={false} // Disable font scaling
              style={{
                fontSize: 16,
                alignItems: "center",
                maxHeight: "70%",
                flex: 1,
                lineHeight: 22,
                height: "80%",
                // justifyContent: 'center',
                textAlign: "center",
                paddingVertical: 0, // Adjust as needed for centering
                fontFamily: font.Chillax_Regular,
                fontWeight: "500",
                color: colors.primary,
              }}
              placeholder={"Describe your dream..."}
              multiline={true}
              placeholderTextColor={colors.primary}
              onChangeText={(txt) => setValue(txt)}
              autoCapitalize="none"
            />
            {value.length > 0 && (
              <View style={appStyles.rowjustify}>
                <CustomButton
                  width={loading ? "75%" : "100%"}
                  onPress={() => {
                    setLoading(true);
                    setTimeout(() => {
                      navigation.navigate("AnalysingYourDream");
                    }, 1000);
                  }}
                  text="REVEAL DREAM"
                  fontFam={font.Chillax_Regular}
                />
                {loading && (
                  <LottieView
                    style={{ width: scale(90), height: scale(60) }}
                    resizeMode="cover"
                    source={require("../../../assets/json/loading.json")}
                    autoPlay
                  />
                )}
              </View>
            )}
          </LinearGradient>
        </View>
      </ScreenLayout>
    </>
  );
};

export default DreamExplain;
const styles = StyleSheet.create({
  main: {
    gap: verticalScale(10),
    width: "100%",
    height: "100%",
    backgroundColor: colors.black,
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: 999,
    backgroundColor: colors.red100,
  },
  cardContainer: {
    padding: scale(15),
    width: "100%",
    borderWidth: 1.2,
    borderColor: colors.primary + "90",
    borderRadius: scale(8),
    gap: verticalScale(5),
    height: verticalScale(160),
  },
});
