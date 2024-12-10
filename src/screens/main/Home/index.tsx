import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  PanResponder,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomHeader from "../../../components/CustomHeader";
import { colors } from "../../../utils/colors";
import DiscountBooks from "./DiscountBooks";
import CustomSearch from "../../../components/CustomSearch";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import BooksCard from "../../../components/BooksCard";
import { windowWidth } from "../../../utils/Dimensions";
import { ApiServices } from "../../../apis/ApiServices";
import { HomeLayout } from "../../../utils/Loyout/HomeLayout";
import { URLS } from "../../../apis/Urls";
import { useDispatch, useSelector } from "react-redux";
import { getToken, setAuthSearch } from "../../../redux/reducers/authReducer";
import { setIsBooksAdvanceSearch } from "../../../redux/reducers/advanceSearchReducer";
import { useIsFocused } from "@react-navigation/native";
import { PanGestureHandler } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const [laoding, setlaoding] = useState(false);
  const [message, setMessage] = useState("");
  const [isMessage, setIsMessage] = useState(false);
  const [search, setSearch] = useState("");
  const fucused = useIsFocused();
  const token = useSelector(getToken);
  const [booksData, setBooksData] = useState([]);
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(0);
  const position = useRef(new Animated.Value(0)).current;
  console.log("position", position);
  useEffect(() => {
    getHomePageData(); // Run this function on the first visit
  }, []);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     getHomePageData()
  //     // Increment the mapKey to force a re-render
  //     setRefresh((prevKey) => prevKey + 1);
  //   });

  //   return unsubscribe; // Cleanup the listener
  // }, [navigation]);

  // useEffect(()=>{

  // },[booksData])

 

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) =>
      Math.abs(gestureState.dx) > Math.abs(gestureState.dy),
    onPanResponderMove: (_, gestureState) => {
      position.setValue(gestureState.dx);
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx < -windowWidth / 2.3) {
        // Swipe left
        Animated.timing(position, {
          toValue: -windowWidth,
          duration: 300,
          useNativeDriver: false,
        }).start(() => {
          navigation.navigate("Notifications");
          // setCurrentIndex((prev) => prev + 1);
          setTimeout(() => {
            position.setValue(0); // Reset position
          }, 1000);
        });
      } else if (gestureState.dx > 50) {
        // Swipe right
        Animated.timing(position, {
          toValue: windowWidth,
          duration: 300,
          useNativeDriver: false,
        }).start(() => {

          navigation.navigate("Notifications");
          // setCurrentIndex((prev) => prev + 1);
          setTimeout(() => {
            position.setValue(0); // Reset position
          }, 1000);
          // setCurrentIndex((prev) => Math.max(0, prev - 1));
          position.setValue(0); // Reset position
        });
      } else {
        // Cancel swipe
        Animated.spring(position, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const getHomePageData = async () => {
    setlaoding(true);
    ApiServices.GetHome(token, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        let result = JSON.parse(response);

        if (result?.tags_books) {
          setBooksData(result?.tags_books);
          setlaoding(false);
          console.log("GetHomePage");
        } else {
          setlaoding(false);
          setMessage(result?.error);
          setIsMessage(true);
        }
      } else {
        setlaoding(false);
        setMessage("Something went wrong");
        setIsMessage(true);
      }
    });
  };
  return (
    <>
      <PanGestureHandler>
        {/* <Animated.View
          {...panResponder.panHandlers}
          style={[
            {
              gap: verticalScale(10),
              flex: 1,
            },
            { transform: [{ translateX: position }] },
          ]}
        > */}

<View
          style={[
            {
              gap: verticalScale(10),
              flex: 1,
            },
          ]}
        >
          {laoding ? (
            <HomeLayout />
          ) : (
            <>
              <View style={{ flex: 1 }}>
                <ScrollView
                  style={{ ...appStyles.main }}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingBottom: verticalScale(80),
                    gap: verticalScale(15),
                    paddingTop: verticalScale(75),
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: scale(20),
                      gap: verticalScale(15),
                    }}
                  >
                    <DiscountBooks />
                    <View style={appStyles.rowjustify}>
                      <CustomSearch
                        onSearch={() => {
                          if (search.length > 0) {
                            dispatch(setIsBooksAdvanceSearch(false));

                            setSearch("");
                            navigation.navigate("SearchResultScreen");
                          }
                        }}
                        onSubmitEditing={() => {
                          if (search.length > 0) {
                            dispatch(setIsBooksAdvanceSearch(false));
                            setSearch("");
                            navigation.navigate("SearchResultScreen");
                          }
                        }}
                        onFilter={() => {
                          navigation.navigate("FilterScreen");
                        }}
                        value={search}
                        onChangeText={(value: any) => {
                          setSearch(value);
                          dispatch(setAuthSearch(value));
                        }}
                        placeholder="Search"
                        width={"80%"}
                        filter={true}
                      />
                    </View>
                  </View>

                  <View>
                    <FlatList
                      data={[
                        "All",
                        "Fiction",
                        "Non-fiction",
                        "Young Adults",
                        "Children",
                        "Urdu Books",
                        "Our PublicationsOur Publications",
                        "Stationery & Art Supplies",
                      ]}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={{
                        paddingLeft: scale(20),
                        marginTop: verticalScale(-5),
                      }}
                      contentContainerStyle={{
                        gap: scale(10),
                        paddingRight: scale(40),
                      }}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({ item, index }: any) => {
                        return (
                          <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => setActiveTab(index)}
                            style={{
                              ...styles.categoryContainer,
                              backgroundColor:
                                activeTab == index
                                  ? colors.black
                                  : colors.white,
                            }}
                          >
                            <CustomText
                              color={
                                activeTab == index ? colors.white : colors.grey
                              }
                              text={item}
                              size={14}
                            />
                          </TouchableOpacity>
                        );
                      }}
                    />
                  </View>

                  <View>
                    {booksData?.length > 0 ? (
                      <>
                        {booksData?.map((ite: any, index: any) => {
                          return (
                            <View
                              key={index.toString()}
                              style={{ marginBottom: verticalScale(15) }}
                            >
                              <CustomText
                                text={ite?.tag_description}
                                color={colors.black}
                                textTransform={"capitalize"}
                                fontWeight="600"
                                style={{
                                  marginLeft: scale(20),
                                  marginBottom: verticalScale(7),
                                  marginTop: verticalScale(5),
                                }}
                                fontFam={font.WorkSans_SemiBold}
                                size={14}
                              />
                              <View style={{ ...appStyles.row }}>
                                <FlatList
                                  data={ite?.books}
                                  horizontal
                                  showsHorizontalScrollIndicator={false}
                                  ListFooterComponent={({
                                    item,
                                    index,
                                  }: any) => {
                                    return (
                                      <TouchableOpacity
                                        activeOpacity={0.5}
                                        onPress={() =>
                                          navigation.navigate(
                                            "RecommendedScreen"
                                          )
                                        }
                                        style={styles.popularBox}
                                      >
                                        <View style={styles.popularContainer}>
                                          <Image
                                            source={images.add_unfill}
                                            style={{
                                              width: scale(22),
                                              height: scale(22),
                                              tintColor: colors.white,
                                            }}
                                            resizeMode="contain"
                                          />
                                        </View>

                                        <CustomText
                                          text={"View All Popular"}
                                          color={colors.white}
                                          size={14}
                                        />
                                      </TouchableOpacity>
                                    );
                                  }}
                                  style={{ paddingLeft: scale(20) }}
                                  contentContainerStyle={{
                                    paddingRight: scale(40),
                                    gap: scale(15),
                                  }}
                                  keyExtractor={(item, index) =>
                                    index.toString()
                                  }
                                  renderItem={({ item, index }: any) => {
                                    let book_data = {
                                      title: item?.BOOK_TITLE,
                                      auther: item?.authorName,
                                      listPrice:
                                        item?.currency == "Rs"
                                          ? `${item?.currency} ${item?.PRICE}`
                                          : `${item?.currency} ${item?.PRICE} = ${item?.PAK_PRICE}`,
                                      appPrice:
                                        Number(item?.Discount) > 0
                                          ? Math.floor(
                                              Number(item?.PAK_PRICE) -
                                                Number(item?.PAK_PRICE) *
                                                  (Number(item?.Discount) / 100)
                                            )
                                          : item?.PAK_PRICE,
                                      book: `${URLS.IMAGE_URL}/images/${item?.picname}.webp`,
                                      discount: Number(item?.Discount),
                                      quantity: Number(item?.QUANTITY),
                                      inStock: item?.availabilityStatus,
                                      isInWishlist: item?.isInWishlist,
                                      book_Id: item?.Book_Id,
                                    };
                                    return (
                                      <View>
                                        <BooksCard
                                          onPress={() =>
                                            navigation.navigate(
                                              "BookDetailScreen",
                                              { Book_id: item?.Book_Id }
                                            )
                                          }
                                          data={book_data}
                                        />
                                      </View>
                                    );
                                  }}
                                />
                              </View>
                            </View>
                          );
                        })}
                      </>
                    ) : (
                      <></>
                    )}
                  </View>
                </ScrollView>
              </View>
            </>
          )}

          {!laoding && (
            <CustomHeader
              containerStyle={{
                backgroundColor: "rgba(243, 245, 247, 0.9)", // Semi-transparent background,
                display: "flex",
                height: verticalScale(70),
                width: "100%",
                position: "absolute",
                top: 0,
                paddingHorizontal: scale(20),
                paddingTop: verticalScale(35),
              }}
            />
          )}
        </View>
      </PanGestureHandler>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  popularContainer: {
    width: scale(62),
    height: scale(62),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#FFFFFF20",
  },
  popularBox: {
    width: windowWidth / 1.9,
    height: verticalScale(240),
    backgroundColor: colors.primary,
    borderRadius: scale(10),
    alignItems: "center",
    paddingTop: verticalScale(55),
    gap: verticalScale(30),
  },
  categoryContainer: {
    borderRadius: 999,
    height: verticalScale(30),
    paddingHorizontal: scale(16),
    alignItems: "center",
    justifyContent: "center",
  },
});
