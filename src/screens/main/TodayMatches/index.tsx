import React, { useState, useEffect } from "react";
import { colors } from "../../../utils/colors";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import ScreenLayout from "../../../components/ScreenLayout";
import ToggleSwitch from "toggle-switch-react-native";
import LinearGradient from "react-native-linear-gradient";
import { font } from "../../../utils/font";
const TodayMatches = ({ navigation }: any) => {
  const [isNotificaion, setIsNotificaion] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);
  

  const tab = [
    { name: "Love", id: 1 },
    { name: "Career", id: 2 },
    { name: "Friendship", id: 3 },
    { name: "Sex", id: 4 },
  ];
  const onChangeToggle = () => {
    setIsNotificaion(!isNotificaion);
  };
  const Header = () => {
    return (
      <View
        style={[
          {
            ...appStyles.rowjustify,
            width: scale(40),
            height: verticalScale(3.5),
            backgroundColor: colors.red100,
            alignSelf: "center",
            borderRadius: 999,
            marginTop: verticalScale(10),
          },
        ]}
      ></View>
    );
  };
  const DetailCard = ({ title, label, img,des1,des2 }: any) => {
    return (
      <View style={{ ...styles.infoContainer, width: "100%",paddingVertical:verticalScale(10) }}>
        <View style={{ ...appStyles.row, gap: scale(10) }}>
          <Image
            style={{ ...styles.infoIcon, tintColor: colors.red100 }}
            resizeMode="contain"
            source={img}
          />
          <CustomText
            text={title}
            size={20}
            textTransform={"uppercase"}
            color={colors.red100}
            fontFam={font.Chillax_Medium}
            fontWeight="600"
          />
        </View>
        <View style={{ borderWidth: 1,borderColor: colors.red100 + "60",borderRadius:scale(8) }}>
          <View
            style={{
              ...styles.infoContainer,
              width: "100%",
              borderRadius: scale(8),
              paddingVertical: verticalScale(10),

            }}
          >
            <View style={{ ...appStyles.row, gap: scale(10) }}>
              <Image
                style={{ ...styles.infoIcon, tintColor: colors.white }}
                resizeMode="contain"
                source={images.check_circle}
              />
              <View style={{ gap: verticalScale(3) }}>
                <CustomText
                  text={"Look For"}
                  size={14}
                  color={colors.white + "60"}
                />
                <CustomText
                  text={des1}
                  size={18}
                  fontWeight="600"
                  fontFam={font.Chillax_Medium}
                  color={colors.white}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              ...styles.infoContainer,
              width: "100%",
              borderRadius: scale(8),
              paddingVertical: verticalScale(10),
              backgroundColor:"transparent",
              borderWidth:-1

            }}
          >
            <View style={{ ...appStyles.row, gap: scale(10) }}>
              <Image
                style={{ ...styles.infoIcon, tintColor: colors.white }}
                resizeMode="contain"
                source={images.cross_circle}
              />
              <View style={{ gap: verticalScale(3) }}>
                <CustomText
                  text={"Look For"}
                  size={14}
                  color={colors.white + "60"}
                />
                <CustomText
                  text={des2}
                  size={18}
                  fontWeight="600"
                  fontFam={font.Chillax_Medium}
                  color={colors.white}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScreenLayout style={styles.main}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: scale(15),
          paddingBottom:verticalScale(20),
          // backgroundColor:"red"
        }}
      >
      <View style={{ gap: verticalScale(5), alignItems: "center" }}>
        <CustomText
          textTransform={"uppercase"}
          text={"today’s  MATCHES"}
          size={24}
          color={colors.red100}
        />
        <CustomText
          text={"Sept 22, 2024"}
          size={14}
          color={colors.red100 + "90"}
        />
      </View>
        <View style={appStyles.row}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: scale(150),
              height: verticalScale(40),
            }}
          >
            {tab.map((ite: any, ind: any) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setSelectedTab(ite.id)}
                  key={ind.toString()}
                  style={{
                    alignItems: "center",
                    width: scale(80),
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: 1,
                      backgroundColor: colors.red100 + "50",
                    }}
                  >
                    {selectedTab == ite.id && (
                      <View
                        style={{
                          width: "100%",
                          height: 1,
                          backgroundColor: colors.red100,
                          position: "absolute",
                        }}
                      />
                    )}
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      height: verticalScale(50),

                      //   backgroundColor:"red"
                    }}
                  >
                    {selectedTab == ite.id && (
                      <View
                        style={{
                          alignItems: "center",
                          gap: verticalScale(0.1),
                        }}
                      >
                        <View
                          style={{
                            width: 2,
                            height: verticalScale(9),
                            backgroundColor: colors.red100,
                          }}
                        />
                        <View
                          style={{
                            width: scale(6),
                            height: scale(6),
                            borderRadius: 999,
                            backgroundColor: colors.red100,
                          }}
                        ></View>
                      </View>
                    )}

                    <CustomText
                      text={ite.name}
                      size={14}
                      style={{
                        marginTop: verticalScale(
                          selectedTab == ite.id ? 3 : 17
                        ),
                      }}
                      color={
                        selectedTab == ite?.id
                          ? colors.red100
                          : colors.red100 + "90"
                      }
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <DetailCard
        img={images.zodiac_leo}
         title="LEO" des1={"Sex"}
         des2={"Career"} 
          />
             <DetailCard
        img={images.sagaittarius}
         title="Sagaittarius" des1={"Friendship"}
         des2={"None"} 
          />
             <DetailCard
        img={images.virgo}
         title="VIRGO" des1={"Career, Frindship"}
         des2={"Career"} 
          />

</ScrollView>

    
    </ScreenLayout>
  );
};

export default TodayMatches;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: verticalScale(15),
    paddingHorizontal: scale(15),
    backgroundColor: "#300012",
    borderRadius: 20,
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: 999,
    backgroundColor: colors.lightRed,
  },
  infoContainer: {
    paddingVertical: verticalScale(7),
    backgroundColor: "#FC016010",
    borderWidth: 1,
    borderColor: colors.red100 + "60",
    borderRadius: scale(12),
    paddingHorizontal: scale(15),
    gap: scale(10),
  },
  infoIcon: {
    width: scale(20),
    height: scale(20),
  },
  circleConatiner: {
    width: scale(35),
    height: scale(35),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: colors.primary + "60",
  },
});
