import React, { useState, useEffect } from "react";
import { colors } from "../../../utils/colors";
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import { windowWidth } from "../../../utils/Dimensions";
import ScreenLayout from "../../../components/ScreenLayout";
import { font } from "../../../utils/font";
import CustomButton from "../../../components/CustomButton";

const HoroscopeScreen = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [activeTip, setActiveTip] = useState(0);
  const [activeTodayMatchTab, setActiveTodayMatchTab] = useState(1);

  const tipsData = [
    {
      title: "Love",
      img: images.heart,
      des: "Remember, the brain is higher then the heart. Don’t let your emotions cloud your judgement.",
    },
    {
      title: "Warning",
      img: images.alert_square,
      des: "Before trusting people with all your heart, learn who they are.",
    },
    {
      title: "Work",
      img: images.work,
      des: "Amateurs sit and wait for inspiration, professionals just get up and go to work. Who do you want to be?",
    },
    {
      title: "Suggestions",
      img: images.suggestions,
      des: "Allow yourself small pleasures every day.",
    },
  ];

  const tab = [
    { name: "yesterday", id: 1 },
    { name: "today", id: 2 },
    { name: "tomorrow", id: 3 },
    { name: "month", id: 4 },
    { name: "year", id: 5 },
  ];
  const todayMatchTab = [
    { name: "Love", id: 1 },
    { name: "Career", id: 2 },
    { name: "Friendship", id: 3 },
    { name: "Sex", id: 4 },
  ];

  const LunarCalendar = [
    { date: "Sept 3", img: images.moon_step1, id: 1 },
    { date: "Sept 11", img: images.moon_step2, id: 1 },
    { date: "Sept 19", img: images.full_moon, id: 1 },
    { date: "Sept 25", img: images.moon_step3, id: 1 },
  ];

  const Header = () => {
    return (
      <View
        style={[
          {
            ...appStyles.rowjustify,
            paddingHorizontal: scale(15),
          },
        ]}
      >
        <CustomText
          fontWeight="500"
          numberOfLines={1}
          color={colors.primary}
          // fontFam={font.WorkSans_SemiBold}
          text={"HOROSCOPE"}
          size={24}
        />
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=>navigation.navigate("TodayHoroscope")}
          style={{
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(3),
            borderWidth: 1,
            borderColor: colors.primary,
            borderRadius: 999,
            gap: scale(6),
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <CustomText
            fontWeight="500"
            color={colors.primary}
            text={"Sept 02"}
            size={14}
          />
          <Image
            style={{
              width: scale(17),
              height: scale(17),
            }}
            resizeMode="contain"
            source={images.calendar}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const Card = ({ title, des, gradient, img, cardStyle, parentColor }: any) => {
    return (
      <View
        // onPress={() => navigation.navigate("ReadingDetailScreen")}
      >
        <LinearGradient
          colors={gradient} // Properly formatted with transparency
          start={{ x: 0.3, y: 0 }} // Top-left corner
          end={{ x: 1, y: 1 }} // Bottom-right corner
          style={[styles.cardContainer, cardStyle]}
        >
          <View style={{ ...appStyles.row, gap: scale(5) }}>
            {img && (
              <Image
                style={{
                  width: scale(20),
                  height: scale(20),
                  tintColor: parentColor || colors.primary,
                }}
                resizeMode="contain"
                source={img}
              />
            )}

            <CustomText
              text={title}
              size={17}
              fontFam={font.Chillax_Medium}
              color={parentColor || colors.primary}
              fontWeight="600"
            />
          </View>

          <CustomText
            text={des}
            numberOfLines={3}
            lineHeight={20}
            size={13}
            color={parentColor || colors.primary+"90"}
          />
        </LinearGradient>
      </View>
    );
  };

  const onScroll = (x: any) => {
    const xPos =
      x.nativeEvent?.contentOffset?.x < 0 ? 0 : x.nativeEvent?.contentOffset?.x;
    const current = Math.floor(xPos / 150);
    if (current > 4) {
      setActiveTip(4);
      return;
    }
    setActiveTip(current);
  };

  return (
    <ScreenLayout style={styles.main}>
      <Header />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: scale(20),
          paddingBottom:verticalScale(20),
          // backgroundColor:"red"
        }}
      >
        <View style={appStyles.row}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: scale(15),
              paddingLeft: scale(15),
              height: verticalScale(40),
              gap: scale(10),
            }}
          >
            {tab.map((ite: any, ind: any) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setSelectedTab(ite.id)}
                  style={{ ...appStyles.row, gap: scale(10) }}
                >
                  <View style={{ alignItems: "center" }}>
                    <CustomText
                      text={ite.name}
                      size={17}
                      textTransform={"uppercase"}
                      color={
                        selectedTab == ite?.id
                          ? colors.primary
                          : colors.primary + "90"
                      }
                    />

                    {selectedTab == ite.id && (
                      <View style={{ ...appStyles.row, gap: scale(3) }}>
                        <View
                          style={{
                            flex: 1,
                            borderRadius: 999,

                            height: 1,
                            backgroundColor: colors.primary,
                          }}
                        />
                        <View
                          style={{
                            ...styles.dot,
                            width: scale(2),
                            height: scale(2),
                            backgroundColor: colors.primary,
                          }}
                        />

                        <View
                          style={{
                            flex: 1,
                            borderRadius: 999,
                            height: 1,
                            backgroundColor: colors.primary,
                          }}
                        />
                      </View>
                    )}
                  </View>
                  {tab.length !== ind + 1 && (
                    <View style={{ ...appStyles.row, gap: scale(3) }}>
                      <View
                        style={{
                          ...styles.dot,
                          width: scale(2),
                          height: scale(2),
                          backgroundColor: colors.primary,
                        }}
                      />

                      <View
                        style={{
                          ...styles.dot,
                          width: scale(5),
                          height: scale(5),
                          backgroundColor: colors.primary,
                        }}
                      />

                      <View
                        style={{
                          ...styles.dot,
                          width: scale(2),
                          height: scale(2),
                          backgroundColor: colors.primary,
                        }}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View
          style={{
            padding: scale(15),
            borderRadius: scale(10),
            gap: verticalScale(15),
          }}
        >
          <View style={{ alignItems: "center", gap: verticalScale(7) }}>
            <View style={{ gap: verticalScale(5), alignItems: "center" }}>
              <CustomText
                text={"Tiffany Watson"}
                size={18}
                style={{ textAlign: "center" }}
                color={colors.lightRed}
                fontFam={font.Chillax_Medium}
                fontWeight="600"
              />
              <CustomText
                text={"You • Sept 22, 2001"}
                size={14}
                color={colors.lightRed}
              />
            </View>

            <Image
              style={{
                width: scale(55),
                height: scale(55),
                borderRadius: 999,
                borderWidth: 1,
                borderColor: colors.white + "40",
              }}
              resizeMode="contain"
              source={images.user}
            />
          </View>

          <Image
            style={{
              width: scale(150),
              height: scale(150),
              alignSelf: "center",
            }}
            resizeMode="cover"
            source={images.cancer}
          />

          <View
            style={{
              position: "absolute",
              top: verticalScale(70),
              alignSelf: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                ...appStyles.rowjustify,
              }}
            >
              <View
                style={{
                  ...styles.infoContainer,
                  borderWidth: -1,
                }}
              >
                <Image
                  style={styles.infoIcon}
                  resizeMode="center"
                  source={images.zodiac_cancer}
                />

                <View style={{ gap: verticalScale(3) }}>
                  <CustomText
                    text={"Cancer"}
                    size={16}
                    color={colors.primary}
                    fontWeight="600"
                  />
                  <CustomText
                    text={"Sun sign"}
                    size={14}
                    color={colors.primary + "90"}
                    fontWeight="600"
                  />
                </View>
              </View>

              <View
                style={{
                  ...styles.infoContainer,
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  borderWidth: -1,
                }}
              >
                <View style={{ gap: verticalScale(3), alignItems: "flex-end" }}>
                  <CustomText
                    text={"Leo"}
                    size={16}
                    color={colors.primary}
                    fontWeight="600"
                  />
                  <CustomText
                    text={"Moon sign"}
                    size={14}
                    color={colors.primary + "90"}
                    fontWeight="600"
                  />
                </View>
                <Image
                  style={styles.infoIcon}
                  resizeMode="center"
                  source={images.zodiac_leo}
                />
              </View>
            </View>
            <View
              style={{
                ...appStyles.rowjustify,
                gap: verticalScale(10),
              }}
            >
              <View
                style={{
                  ...styles.infoContainer,
                  borderWidth: -1,
                }}
              >
                <Image
                  style={styles.infoIcon}
                  resizeMode="center"
                  source={images.earth}
                />

                <View style={{ gap: verticalScale(3) }}>
                  <CustomText
                    text={"Earth"}
                    size={16}
                    color={colors.primary}
                    fontWeight="600"
                  />
                  <CustomText
                    text={"Element"}
                    size={14}
                    color={colors.primary + "90"}
                    fontWeight="600"
                  />
                </View>
              </View>

              <View
                style={{
                  ...styles.infoContainer,
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  borderRadius: scale(12),
                  borderWidth: -1,
                }}
              >
                <View style={{ gap: verticalScale(3), alignItems: "flex-end" }}>
                  <CustomText
                    text={"Feminine"}
                    size={16}
                    color={colors.primary}
                    fontWeight="600"
                  />
                  <CustomText
                    text={"Popularity"}
                    size={14}
                    color={colors.primary + "90"}
                    fontWeight="600"
                  />
                </View>
                <Image
                  style={styles.infoIcon}
                  resizeMode="center"
                  source={images.info_gender_female}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: scale(15), gap: verticalScale(15) }}>
          <Card
            title={"Affirmation"}
            // img={images.palm_reading}
            des={
              "I can be a masterpiece and a work in progress at the same time"
            }
            gradient={["#B2AFFE20", "#B2AFFE10", "#0000"]}
          />
          <View style={{ gap: verticalScale(10) }}>
            <CustomText
              text={"Your today’s horoscope"}
              size={18}
              color={colors.white}
              fontWeight="600"
            />
            <CustomText
              lineHeight={22}
              text={
                "Today, you can see how your daily routine has changed your life. Your physical and mental health is directly related to your personal transformation. Making sure that you are taken care of - body and mind - should be part of your schedule. That is just"
              }
              size={15}
              color={colors.white + "90"}
            />
            <View
              style={{
                ...appStyles.row,
                gap: scale(10),
              }}
            >
              <View style={{ ...appStyles.row, gap: scale(4) }}>
                <View
                  style={{
                    ...styles.dot,
                    width: scale(2.5),
                    height: scale(2.5),
                    backgroundColor: colors.primary,
                  }}
                />

                <View
                  style={{ ...styles.dot, backgroundColor: colors.primary }}
                />

                <View
                  style={{
                    ...styles.dot,
                    width: scale(2.5),
                    height: scale(2.5),
                    backgroundColor: colors.primary,
                  }}
                />
              </View>

              <CustomText
                text={"Read more"}
                size={15}
                fontWeight="600"
                fontFam={font.Chillax_Medium}
                color={colors.primary}
              />

              <View style={{ ...appStyles.row, gap: scale(4) }}>
                <View
                  style={{
                    ...styles.dot,
                    width: scale(2.5),
                    height: scale(2.5),
                    backgroundColor: colors.primary,
                  }}
                />

                <View
                  style={{ ...styles.dot, backgroundColor: colors.primary }}
                />

                <View
                  style={{
                    ...styles.dot,
                    width: "77%",
                    height: scale(1.5),
                    backgroundColor: colors.primary,
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{ gap: verticalScale(15), marginTop: verticalScale(10) }}>
          <CustomText
            text={"DAILY TIPS FOR VIRGO"}
            size={24}
            color={colors.primary}
            style={{ marginLeft: scale(15) }}
          />

          <FlatList
            data={tipsData}
            horizontal
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingLeft: scale(15) }}
            onScroll={onScroll}
            contentContainerStyle={{
              paddingRight: scale(30),
              gap: scale(10),
            }}
            renderItem={({ item, index }) => {
              return (
                <Card
                  cardStyle={{
                    width: windowWidth / 2.1,
                    height: verticalScale(110),
                    paddingBottom: verticalScale(30),
                  }}
                  title={item.title}
                  img={item.img}
                  des={item?.des}
                  gradient={["#B2AFFE20", "#B2AFFE10", "#0000"]}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />

          <View
            style={{
              ...appStyles.row,
              alignSelf: "center",
              gap: scale(6),
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: colors.primary + "50",
              }}
            />
            {tipsData?.map((item, ind) => {
              return (
                <View
                  key={ind.toString()}
                  style={{
                    ...styles.dot,
                    backgroundColor:
                      activeTip == ind ? colors.primary : colors.primary + "50",
                  }}
                ></View>
              );
            })}

            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: colors.primary + "50",
              }}
            />
          </View>
        </View>

        <View
          style={{
            gap: verticalScale(15),
            marginTop: verticalScale(10),
            paddingHorizontal: scale(15),
          }}
        >
          <CustomText
            text={"TODAY’s MATCHES"}
            size={24}
            color={colors.red100}
          />
          <View
            style={{
              borderWidth: 0.5,
              borderColor: colors.red100 + "50",
              borderRadius: scale(8),
              paddingBottom: verticalScale(20),
            }}
          >
            <View style={{ ...appStyles.row }}>
              {todayMatchTab.map((ite: any, ind: any) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setActiveTodayMatchTab(ite.id)}
                    key={ind.toString()}
                    style={{
                      alignItems: "center",
                      flex: 1,
                      height: verticalScale(40),
                    }}
                  >
                    <View
                      style={{
                        width: "100%",
                        height: 1,
                      }}
                    >
                      {activeTodayMatchTab == ite.id && (
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

                        //   backgroundColor:"red"
                      }}
                    >
                      {activeTodayMatchTab == ite.id && (
                        <View
                          style={{
                            alignItems: "center",
                            gap: verticalScale(0.1),
                          }}
                        >
                          <View
                            style={{
                              width: 2,
                              height: verticalScale(7),
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
                        fontWeight={
                          activeTodayMatchTab == ite.id ? "600" : "400"
                        }
                        style={{
                          marginTop: verticalScale(
                            activeTodayMatchTab == ite.id ? 3 : 17
                          ),
                        }}
                        color={
                          activeTodayMatchTab == ite?.id
                            ? colors.red100
                            : colors.red100 + "70"
                        }
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View
              style={{
                flexDirection: "row",
                height: verticalScale(100),
                borderTopWidth: 0.5,
                borderColor: colors.red100 + "50",
              }}
            >
              <View
                style={{
                  width: "50%",
                  alignItems: "center",
                  borderColor: colors.red100 + "50",
                  paddingTop: verticalScale(20),
                  gap: verticalScale(15),
                  // padding:
                }}
              >
                <View>
                  <Image
                    style={{ width: scale(40), height: scale(40) }}
                    resizeMode="contain"
                    source={images.smile}
                  />
                  <Image
                    style={{
                      width: scale(18),
                      height: scale(18),
                      position: "absolute",
                      top: verticalScale(-10),
                      right: scale(-18),
                    }}
                    // resizeMode="contain"
                    source={images.check_circle}
                  />
                </View>
                <View style={{ gap: verticalScale(5) }}>
                  <View style={{ ...appStyles.row, gap: scale(5) }}>
                    <Image
                      style={{ width: scale(20), height: scale(20) }}
                      resizeMode="contain"
                      source={images.zodiac_leo}
                    />

                    <CustomText text={"Leo"} size={14} color={colors.primary} />
                  </View>

                  <View style={{ ...appStyles.row, gap: scale(5) }}>
                    <Image
                      style={{ width: scale(20), height: scale(20) }}
                      resizeMode="contain"
                      source={images.zodiac_cancer}
                    />

                    <CustomText
                      text={"Cancer"}
                      size={14}
                      color={colors.primary}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  height: verticalScale(140),
                  width: 0.5,
                  backgroundColor: colors.red100 + "50",
                }}
              />

              <View
                style={{
                  width: "50%",
                  alignItems: "center",
                  paddingTop: verticalScale(20),
                  gap: verticalScale(15),
                  // padding:
                }}
              >
                <View>
                  <Image
                    style={{ width: scale(40), height: scale(40) }}
                    resizeMode="contain"
                    source={images.mode_off}
                  />
                  <Image
                    style={{
                      width: scale(18),
                      height: scale(18),
                      position: "absolute",
                      top: verticalScale(-10),
                      right: scale(-18),
                    }}
                    // resizeMode="contain"
                    source={images.check_circle}
                  />
                </View>
                <View style={{ gap: verticalScale(5) }}>
                  <View style={{ ...appStyles.row, gap: scale(5) }}>
                    <Image
                      style={{ width: scale(20), height: scale(20) }}
                      resizeMode="contain"
                      source={images.pisces}
                    />

                    <CustomText
                      text={"Pisces"}
                      size={14}
                      color={colors.primary}
                    />
                  </View>

                  <View style={{ ...appStyles.row, gap: scale(5) }}>
                    <Image
                      style={{ width: scale(20), height: scale(20) }}
                      resizeMode="contain"
                      source={images.gemini}
                    />

                    <CustomText
                      text={"Gemini"}
                      size={14}
                      color={colors.primary}
                    />
                  </View>
                </View>
              </View>

            </View>

            <View
              style={{
                ...appStyles.row,
                gap: scale(10),
                marginTop: verticalScale(40),
                alignSelf: "center",
              }}
            >
              <View style={{ ...styles.dot, backgroundColor: colors.red100 }} />
              <View
                style={{
                  ...styles.dot,
                  width: scale(12),
                  height: scale(12),
                  backgroundColor: colors.red100,
                }}
              />

              <CustomButton
                width={"38%"}
                height={37}
                bgColor={colors.red100}
                size={14}
                onPress={() => navigation.navigate("TodayMatches")}
                text="READ MORE"
              />
              <View
                style={{
                  ...styles.dot,
                  width: scale(12),
                  height: scale(12),
                  backgroundColor: colors.red100,
                }}
              />

              <View style={{ ...styles.dot, backgroundColor: colors.red100 }} />
            </View>
          </View>
        </View>

        <View
          style={{
            ...appStyles.row,
            alignSelf: "center",
            gap: scale(6),
          }}
        >
          <View
            style={{
              width: scale(10),
              height: 0.5,
              backgroundColor: colors.primary + "50",
            }}
          />

          <View
            style={{
              ...styles.dot,
              backgroundColor: colors.primary + "60",
            }}
          ></View>

          <View
            style={{
              flex: 1,
              height: 0.5,

              backgroundColor: colors.primary + "50",
            }}
          />
        </View>

        <View
          style={{
            gap: verticalScale(15),
            marginTop: verticalScale(10),
            paddingHorizontal: scale(15),
          }}
        >
          <CustomText
            text={"LUNAR CALENDAR"}
            size={24}
            color={colors.primary}
          />

          <View style={{ ...appStyles.row, gap: scale(20) }}>
            <View>
              <Image
                style={{ width: scale(110), height: scale(110) }}
                // resizeMode="contain"
                source={images.moon_step3}
              />
            </View>
            <View style={{ gap: verticalScale(5) }}>
              <CustomText
                text={"Waxing Gibbous"}
                fontWeight={"600"}
                fontFam={font.Chillax_Medium}
                size={18}
                color={colors.primary}
              />

              <CustomText
                text={"Sept 3 - Sept 24"}
                size={14}
                color={colors.primary}
              />

              <View style={{ ...appStyles.row, gap: scale(5) }}>
                <Image
                  style={{ width: scale(20), height: scale(20) }}
                  source={images.zodiac_aquarius}
                />

                <CustomText
                  text={"Moon in Aquarius"}
                  size={14}
                  color={colors.red100}
                />
              </View>
            </View>
          </View>

          <View style={appStyles.rowjustify}>
            {LunarCalendar.map((ite, ind) => {
              return (
                <View style={{ alignItems: "center", gap: verticalScale(5) }}>
                  <View
                    style={{
                      padding: scale(3),
                      borderRadius: 999,
                      borderWidth: 0.5,
                      borderColor: colors.white + "90",
                    }}
                  >
                    <Image
                      style={{ width: scale(35), height: scale(35) }}
                      // resizeMode="contain"
                      source={ite.img}
                    />
                  </View>

                  <CustomText
                    text={ite.date}
                    size={13}
                    color={colors.white + "90"}
                  />
                </View>
              );
            })}
          </View>
        </View>

        <View
          style={{
            gap: verticalScale(15),
            marginTop: verticalScale(10),
            paddingHorizontal: scale(15),
          }}
        >
          <CustomText
            text={"LUNAR CALENDAR"}
            size={24}
            color={colors.primary}
          />
          <View
            style={{
              borderWidth: 0.5,
              borderColor: colors.white + "50",
              borderRadius: scale(8),
              paddingBottom: verticalScale(20),
            }}
          >
            <Card
              title={"Do"}
              img={images.check_circle}
              des={
                "A good time to change your image. All the most daring ideas will be successful."
              }
              gradient={["#B2AFFE20", "#B2AFFE10", "#0000"]}
            />

            <Card
              title={"Don’t"}
              cardStyle={{ borderWidth: -1 }}
              parentColor={colors.white}
              img={images.cross_circle}
              des={
                "Most likely, money with the moon in Aquarius will be wasted. Prudence in finance is not your strong point."
              }
              gradient={["transparent", "transparent", "transparent"]}
            />

            <View
              style={{
                ...appStyles.row,
                gap: scale(10),
                alignSelf: "center",
              }}
            >
              <View
                style={{ ...styles.dot, backgroundColor: colors.primary }}
              />
              <View
                style={{
                  ...styles.dot,
                  width: scale(12),
                  height: scale(12),
                  backgroundColor: colors.primary,
                }}
              />

              <CustomButton
                width={"38%"}
                height={37}
                size={14}
                onPress={() => navigation.navigate("LunarCalendar")}
                text="READ MORE"
              />
              <View
                style={{
                  ...styles.dot,
                  width: scale(12),
                  height: scale(12),
                  backgroundColor: colors.primary,
                }}
              />

              <View
                style={{ ...styles.dot, backgroundColor: colors.primary }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            ...appStyles.row,
            alignSelf: "center",
            gap: scale(6),
          }}
        >
          <View
            style={{
              width: scale(10),
              height: 0.5,
              backgroundColor: colors.primary + "50",
            }}
          />

          <View
            style={{
              ...styles.dot,
              backgroundColor: colors.primary + "60",
            }}
          ></View>

          <View
            style={{
              flex: 1,
              height: 0.5,

              backgroundColor: colors.primary + "50",
            }}
          />
        </View>

        <View
          style={{
            gap: verticalScale(15),
            paddingHorizontal: scale(15),
          }}
        >
          <CustomText
            text={"TODAY’s FEATURES"}
            size={24}
            color={colors.primary}
          />
          <View style={{ ...appStyles.rowjustify, }}>
            <LinearGradient
              colors={["#25237615", "#000"]} // Properly formatted with transparency
              start={{ x: 0.3, y: 0 }} // Top-left corner
              end={{ x: 1, y: 1 }} // Bottom-right corner
              style={styles.todayFeatureBox}
            >
              <TouchableOpacity
              activeOpacity={0.5}
              onPress={()=>{
                let item={
                  title:'Lucky Number',
                  number:"29",
                  gradient:["#25237690", "transparent"],

                  color:colors.primary

                }
                navigation.navigate("LuckyNumber",{data:item})
              }}
              style={{
                gap: verticalScale(6),
                justifyContent: "space-between",
                width:"100%",
                height:"100%"
              }}
              >

<View style={{ ...appStyles.rowjustify, gap: scale(5) }}>
                <CustomText
                  text={"29"}
                  size={27}
                  color={colors.primary}
                  fontFam={font.Chillax_Bold}
                  fontWeight="700"
                />
                <Image
                  style={{
                    width: scale(20),
                    height: scale(20),
                  }}
                  resizeMode="contain"
                  source={images.next_circle}
                />
              </View>

              <CustomText
                text={"LUCKY NUMBER"}
                size={13}
                textTransform={ "uppercase"}
                color={colors.primary}
              />

              </TouchableOpacity>
             
            </LinearGradient>

            <LinearGradient
              colors={["#E9AA1710", "#000"]} // Properly formatted with transparency
              start={{ x: 1, y: 1 }} // Top-left corner
              end={{ x: 1, y: 1 }} // Bottom-right corner
              style={{ ...styles.todayFeatureBox, borderColor: "#543D08" }}
            >
               <TouchableOpacity
              activeOpacity={0.5}
              onPress={()=>{
                let item={
                  title:'Dark Yellow',
                  isMoon:true,
                  label:"Dark Yellow",
                  gradient:["#E9AA1730", "transparent"],
                  color:"#E9AA17"

                }
                navigation.navigate("LuckyNumber",{data:item})
              }}
              style={{
                gap: verticalScale(6),
                justifyContent: "space-between",
                width:"100%",
                height:"100%"
              }}
              >
                
              <View style={{ ...appStyles.rowjustify, gap: scale(5) }}>
                <View
                  style={{
                    width: scale(30),
                    height: scale(30),
                    backgroundColor: "#E9AA17",
                    borderRadius: 999,
                  }}
                />
                <Image
                  style={{
                    width: scale(20),
                    height: scale(20),
                    tintColor:"#E9AA17"
                  }}
                  resizeMode="contain"
                  source={images.next_circle}
                />
              </View>

              <CustomText
                text={"LUCKY NUMBER"}
                size={13}
                textTransform={ "uppercase"}
                color={"#E9AA17"}
              />


</TouchableOpacity>

            </LinearGradient>

            <LinearGradient
              colors={["#25237615", "#000"]} // Properly formatted with transparency
              start={{ x: 0.3, y: 0 }} // Top-left corner
              end={{ x: 1, y: 1 }} // Bottom-right corner
              style={styles.todayFeatureBox}
            >

<TouchableOpacity
              activeOpacity={0.5}
              onPress={()=>{
                let item={
                  title:'Lucky Time',
                  time:"7:20 am - 9:42 am",
                  
                  gradient:["#25237690", "transparent"],

                  color:colors.primary

                }
                navigation.navigate("LuckyNumber",{data:item})
              }}
              style={{
                gap: verticalScale(6),
                justifyContent: "space-between",
                width:"100%",
                height:"100%"
              }}
              >
              <View style={{ ...appStyles.rowjustify, gap: scale(5) }}>
                <View >
                <CustomText
                  text={"7:20 am"}
                  size={14}
                  fontFam={font.Chillax_Medium}
                  fontWeight="600"
                  color={colors.primary}
               
                />
                  <CustomText
                  text={"9:42 am"}
                  size={14}
                  fontFam={font.Chillax_Medium}
                  fontWeight="600"
                  color={colors.primary}
                />
                  </View>
              
                <Image
                  style={{
                    width: scale(20),
                    height: scale(20),
                  }}
                  resizeMode="contain"
                  source={images.next_circle}
                />
              </View>

              <CustomText
                text={"Lucky time"}
                size={13}
                textTransform={ "uppercase"}

                color={colors.primary}
              />
                              </TouchableOpacity>

            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default HoroscopeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: verticalScale(20),
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: 999,
    backgroundColor: colors.lightRed,
  },

  infoContainer: {
    width: "47%",
    paddingVertical: verticalScale(10),
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: scale(12),

    flexDirection: "row",
    gap: scale(10),
  },
  infoIcon: {
    width: scale(30),
    height: scale(30),
  },

  cardContainer: {
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
    justifyContent: "center",
    borderWidth: 1.2,
    borderColor: colors.primary + "90",
    borderRadius: scale(10),
    gap: verticalScale(6),
  },

  todayFeatureBox: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
    borderWidth: 1.2,
    width:"32%",
    borderColor: "#252376",
    borderRadius: scale(10),
    gap: verticalScale(6),
    justifyContent: "space-between",
    height: verticalScale(85),
  },
});
