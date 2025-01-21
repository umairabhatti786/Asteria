import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import { RNCamera } from "react-native-camera";
import CustomText from "../../../components/CustomText";
import LinearGradient from "react-native-linear-gradient";
import { font } from "../../../utils/font";
import AnimatedProgressBar from "../../../components/CustomProgress";
import { windowWidth } from "../../../utils/Dimensions";

const PlamReadingCapture = ({ navigation }: any) => {
  const cameraRef = useRef<any>();
  const [isScanned, setIsScanned] = useState(false);
  const [isScanComplete, setIsScanComplete] = useState(false);

    useEffect(()=>{
        if(isScanned){
            setTimeout(() => {
                navigation.navigate("ReadingResultScreen")
                
            }, 3000);

        }

    
     

    },[isScanned])

  return (
    <>
      <ScreenLayout
        style={{
          backgroundColor: colors.black,
        }}
      >
        <View style={{ flex: 1 }}>
          <RNCamera
            ref={cameraRef}
            captureAudio={false} // Disable audio capture
            style={{ flex: 1, }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            // captureAudio={true}
            onRecordingEnd={() => console.log("EndRecord")}
          />
          {!isScanned && (
            <View
              style={{
                position: "absolute",
                width: "100%",
              }}
            >
                <ImageBackground
                source={images.glow}
                style={{width:"100%"}}
                >
                <LinearGradient
                colors={["#B2AFFE60", "#0000"]}
                start={{ x: 0.5, y: 0 }} // Center-top start
                end={{ x: 0.5, y: 1 }} // Center-bottom end
                style={{
                  alignItems: "center",
                  //   flex: 0.7,

                  padding: scale(20),
                  gap: verticalScale(10),
                }}
              >
                <CustomText
                  textTransform={"uppercase"}
                  text={"Place your hand in the middle"}
                  size={22}
                  style={{ textAlign: "center" }}
                  color={colors.primary}
                />
              </LinearGradient>

                </ImageBackground>
           
              {/* <Header /> */}
            </View>
          )}

          <View
            style={{
              position: "absolute",
              bottom: 0,
              alignSelf: "center",
              width:"100%",
             

            }}
          >
            <ImageBackground
            style={{width:"100%",alignItems:"center",height:verticalScale(200),justifyContent:"flex-end",
            paddingBottom:verticalScale(30)

        }}
            source={images.glow_bottom}
            >
            {!isScanned ? (
              <>
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    onPress={() => setIsScanned(true)}
                    style={styles.btn}
                  ></TouchableOpacity>
                </View>
              </>
            ) : (
              <View style={{ gap: verticalScale(10), alignItems: "center" }}>
                <CustomText
                  text={"85%"}
                  size={35}
                  fontFam={font.Chillax_Bold}
                  fontWeight="700"
                  color={colors.primary}
                />

                <AnimatedProgressBar
                  hideDetail={true}
                  mainWidth={windowWidth - scale(30)}
                  totalSteps={10}
                  currentStep={8}
                />
                <CustomText
                  text={"Read your palm to know your fortune"}
                  size={15}
                  color={colors.white + "90"}
                />
              </View>
            )}

            </ImageBackground>
           
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};

export default PlamReadingCapture;

const styles = StyleSheet.create({
  logoContainer: {
    width: scale(250),
    height: scale(250),
    marginTop: verticalScale(70),
  },
  bottomContainer: {
    gap: verticalScale(20),
    paddingBottom: verticalScale(30),
    marginHorizontal: scale(40),
    alignItems: "center",
  },
  box: {
    width: scale(43),
    height: verticalScale(47),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DEEAF56640",
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: scale(17),
  },
  icon: {
    width: scale(13),
    height: scale(13),
  },
  cornerImage: {
    width: scale(25),
    height: scale(25),
    tintColor: colors.white,
  },

  btn: {
    height: scale(45),
    width: scale(45),

    // padding: scale(12),
 
    backgroundColor: colors.primary,
    borderRadius: 999,
  },
  btnContainer: {
    height: scale(51),
    width: scale(51),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary + "60",
    borderRadius: 999,
  },
});
