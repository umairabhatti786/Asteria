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
import DatePicker from "react-native-date-picker";

const TimeOfBirthScreen = ({ navigation }: any) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(true);
  const [birth, setBirth] = useState();
  return (
    <>
      <ScreenLayout style={styles.main}>
        <TopHeader title="TIME OF BIRTH" />
        <Steps CurrentStep={3} />

        <View style={{ alignItems: "center", flex: 1 }}>
          <CustomText
            text={
              "Time is important for determining your houses, rising sign, and exact moon position."
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
              height: scale(200),
              marginTop: verticalScale(30),
            }}
            resizeMode="center"
            source={images.birth_time}
          />
          <View
            style={{
              width: "100%",
              marginBottom: verticalScale(30),
              marginTop: verticalScale(20),
              gap: verticalScale(10),
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <DatePicker
              modal={false}
              mode="time"
              locale="en_US"
              title="lcmndlm"
              theme="dark"
              dividerColor={colors.white}
              style={{
                width: 300, // Adjust the width as per your requirement
                height: 300,
                alignSelf: "center",
              }}
              open={open}
              date={date}
              onDateChange={(date) => {
                const day = date.getDate().toString().padStart(2, "0");
                const month = date.getMonth() + 1;
                const year = date.getFullYear().toString();
                let birth: any = `${month.toString().padStart(2, "0")}/${day
                  .toString()
                  .padStart(2, "0")}/${year}`;
                setBirth(birth);
                setOpen(false);
                setDate(date);
              }}
            />
            <View
              style={{
                ...appStyles.rowjustify,
                gap: scale(10),
              }}
            >
              <CustomButton
                onPress={() => navigation.navigate("LocationOfBirthScreen")}
                width={"48%"}
                text="I DON’T KNOW"
                textColor={colors.white}
                bgColor={colors.primary + "40"}
              />
              <CustomButton
                onPress={() => navigation.navigate("LocationOfBirthScreen")}
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

export default TimeOfBirthScreen;
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: scale(20),
    flex: 1,
    gap: verticalScale(15),
  },
});
