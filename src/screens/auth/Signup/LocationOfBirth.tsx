import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import ScreenLayout from "../../../components/ScreenLayout";
import TopHeader from "../../../components/TopHeader";
import Steps from "./Steps";
import { appStyles } from "../../../utils/AppStyles";
import CustomInput from "../../../components/CustomInput";
import PredictionList from "../../../components/PredictionList";

const LocationOfBirthScreen = ({ navigation }: any) => {
  const [predictionData, setPredictionData] = useState([
    { description: "New Dublin" },
    { description: "New Jersie" },
    { description: "New Saint" },
    { description: "New Mark" },
  ]);
  const [isPredictionList, setIsPredictionList] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <ScreenLayout style={styles.main}>
        <TopHeader title="LOCATION OF BIRTH" />
        <Steps CurrentStep={2} />

        <View style={{ alignItems: "center", flex: 1 }}>
          <CustomText
            text={
              "Date is important for determining your sun sign, numerology and compatibility."
            }
            size={14}
            lineHeight={25}
            style={{ textAlign: "center" }}
            color={colors.white + "70"}
            fontWeight="600"
          />
          {!isPredictionList && (
            <Image
              style={{
                width: "100%",
                height: scale(200),
                marginTop: verticalScale(30),
              }}
              resizeMode="center"
              source={images.location_img}
            />
          )}

          <View
            style={{ flex: 1, paddingTop: verticalScale(20), width: "100%" }}
          >
            <CustomInput
              value={value}
              onFocus={() => setIsPredictionList(true)}
              onChangeText={(txt:string) => {
                setValue(txt);
                setIsPredictionList(true);
              }}
              placeholder="Type in city of birth"
            />
            {isPredictionList && (
              <PredictionList
                onAddressPress={(i:any) => {
                  setIsPredictionList(false);
                  setValue(i);
                }}
                Addresses={predictionData}
              />
            )}
          </View>

          <View
            style={{
              width: "100%",
              marginBottom: verticalScale(30),
              marginTop: verticalScale(20),
              gap: verticalScale(10),
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                ...appStyles.rowjustify,
                gap: scale(10),
              }}
            >
              <CustomButton
                onPress={() => navigation.navigate("AddGenderScreen")}
                width={"48%"}
                text="Skip"
                textColor={colors.white}
                bgColor={colors.primary + "40"}
              />
              <CustomButton
                onPress={() => navigation.navigate("AddGenderScreen")}
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

export default LocationOfBirthScreen;
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: scale(20),
    flex: 1,
    gap: verticalScale(15),
  },
});
