import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
  Keyboard,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import { colors } from "../../../utils/colors";
import { windowWidth } from "../../../utils/Dimensions";
import { images } from "../../../assets/images";
import BookReviewCard from "./BookReviewCard";
import BooksCard from "../../../components/BooksCard";
import CustomButton from "../../../components/CustomButton";
import CustomBottomSheet from "../../../components/CustomBottomSheet";
import BookReviewSheetModal from "./BookReviewSheetModal";
import CustomAlertModal from "../../../components/CustomAlertModal";
import OrderSheetModal from "./OrderSheetModal";
import { ApiServices } from "../../../apis/ApiServices";
import { URLS } from "../../../apis/Urls";
import { BookDetailLayout } from "../../../utils/Loyout/BookDetailLayout";
import Stars from "react-native-stars";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../../redux/reducers/authReducer";
import { sessionCheck } from "../../../utils/CommonHooks";
import CustomToast from "../../../components/CustomToast";

const BookDetail = ({ route }: any) => {
  const navigation: any = useNavigation();
  const bottomSheetModalRef = useRef<any>(null);
  const OrderbottomSheetModalRef = useRef<any>(null);
  const OrderSheetSnapPoints = useMemo(() => ["68%", "70%"], []);
  const [isAddToCart, setIsAddToCart] = useState(false);
  let viewOrder = route?.params?.viewOrder;
  let Book_id = route?.params?.Book_id;
  const [bookId, setBookId] = useState(Book_id);
  const [isReviewAddModal, setIsReviewAddModal] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const BookReviewSnapPoints = useMemo(() => ["55%", "55%"], []);
  const BookReviewkeyboardSnap = useMemo(() => ["98%", "95%"], []);
  const [laoding, setlaoding] = useState(false);
  const [message, setMessage] = useState("");
  const [isMessage, setIsMessage] = useState(false);
  const [bookDetailData, setBookDetailData] = useState<any>();
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getBookDetailData();
  }, [bookId]);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('blur', () => {
  //     // navigation.setParams({ isBack: true });
  //   });

  //   return unsubscribe; // Clean up the listener when the component unmounts
  // }, [navigation]);

  const getBookDetailData = async () => {
    setlaoding(true);
    let params = {
      id: bookId,
      token: token,
    };
    let id = bookId;
    ApiServices.GetBookDetail(params, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        let result = JSON.parse(response);
        if (result?.book) {
          setBookDetailData(result);
          setlaoding(false);
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
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onAddToCart = () => {
    let data = {
      Book_Id: Book_id,
      cart_type: 1,
      quantity: 1,
    };
    var raw = JSON.stringify(data);
    let params = {
      data: raw,
      token: token,
    };
    ApiServices.AddToCartItem(params, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        let result = JSON.parse(response);
        if (result?.success) {
          // setlaoding(false);
          setIsAddToCart(true);
        } else {
          if (result?.error == "Invalid token") {
            sessionCheck(dispatch, navigation);

            return;
          }
          setIsAddToCart(false);

          setMessage(result?.error);
          setIsMessage(true);
          console.log("result", result);
        }
      } else {
        setIsAddToCart(false);

        setMessage("Something went wrong");
        setIsMessage(true);
        console.log("Response", response);
      }
    });
  };

  const onUpdateQuantity = (increment: any) => {
    let data = {
      quantity: increment ? quantity + 1 : quantity + 1,
    };
    var raw = JSON.stringify(data);
    let params = {
      data: raw,
      token: token,
      id: Book_id,
    };
    ApiServices.UpdateCartItem(params, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        let result = JSON.parse(response);
        if (result?.success) {
          console.log("result", result);
          setQuantity((prev) => (increment ? prev + 1 : prev - 1));
        } else {
          if (result?.error == "Invalid token") {
            sessionCheck(dispatch, navigation);

            return;
          }
          setIsAddToCart(false);

          setMessage(result?.error);
          setIsMessage(true);
          console.log("result", result);
        }
      } else {
        setIsAddToCart(false);

        setMessage("Something went wrong");
        setIsMessage(true);
        console.log("Response", response);
      }
    });
  };
  const QuantityContainer = () => {
    return (
      <View
        style={{
          ...appStyles.row,
          paddingTop: verticalScale(4),
        }}
      >
        <TouchableOpacity
        onPress={()=>{
          if(quantity!=1){
            onUpdateQuantity(false)
          }

        }}
         activeOpacity={0.5} style={styles.quantityBox}>
          <Image
            style={{
              width: scale(15),
              height: scale(15),
              tintColor: colors.white,
            }}
            source={images.decrement}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <CustomText
        style={{width:scale(35),textAlign:"center"}}
          text={quantity}
          color={colors.black}
          fontWeight="600"
          fontFam={font.WorkSans_SemiBold}
          size={15}
        />

        <TouchableOpacity
          onPress={() => onUpdateQuantity(true)}
          activeOpacity={0.5}
          style={styles.quantityBox}
        >
          <Image
            style={{
              width: scale(11),
              height: scale(11),
              tintColor: colors.white,
            }}
            source={images.increment}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };
  const BookInfo = ({ title, detail }: any) => {
    return (
      <View
        style={{
          width: "31%",
          paddingLeft: scale(10),
          paddingVertical: verticalScale(10),
          backgroundColor: colors.white,
          borderRadius: scale(10),
          gap: verticalScale(6),
        }}
      >
        <CustomText
          numberOfLines={1}
          text={title}
          color={colors.grey}
          size={12}
        />
        <CustomText
          numberOfLines={1}
          text={detail}
          textTransform={"capitalize"}
          color={colors.black}
          size={12}
        />
      </View>
    );
  };
  return laoding ? (
    <BookDetailLayout />
  ) : (
    <>
      <ScrollView
        style={{ ...appStyles.main }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: verticalScale(15),
        }}
      >
        <View
          style={{
            gap: verticalScale(20),
            flex: 1,
          }}
        >
          <View
            style={{
              width: windowWidth / 1,
              flex: 1,
              overflow: "hidden",
              backgroundColor: colors.dull_white,
            }}
          >
            <ImageBackground
              style={styles.bookImage}
              source={{
                uri: `${URLS.IMAGE_URL}/images/${bookDetailData?.book?.picname}.webp`,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  backgroundColor: colors.white,
                  opacity: 0.7,
                }}
              />

              <View
                style={{
                  ...appStyles.rowjustify,
                  width: "100%",
                  paddingHorizontal: scale(20),
                  paddingTop: verticalScale(Platform.OS == "ios" ? 50 : 30),
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.backContainer}
                >
                  <Image
                    style={{
                      width: scale(25),
                      height: scale(25),
                      tintColor: colors.primary,
                    }}
                    resizeMode="contain"
                    source={images.left_arrow}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate("Cart")}
                  style={styles.backContainer}
                >
                  <Image
                    style={{
                      width: scale(25),
                      height: scale(25),
                    }}
                    resizeMode="contain"
                    source={images.fill_cart}
                  />
                  <View style={styles.cartContainer}>
                    <CustomText
                      text={"0"}
                      color={colors.white}
                      fontWeight="600"
                      fontFam={font.WorkSans_SemiBold}
                      size={11}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{ overflow: "hidden", marginTop: verticalScale(10) }}
              >
                <Image
                  style={styles.bookContainer}
                  source={{
                    uri: `${URLS.IMAGE_URL}/images/${bookDetailData?.book?.picname}.webp`,
                  }}
                />
              </View>
            </ImageBackground>
            <View
              style={{
                paddingHorizontal: scale(20),
                paddingTop: verticalScale(20),
                flex: 1,
                gap: verticalScale(20),
              }}
            >
              <View>
                <CustomText
                  text={bookDetailData?.book?.BOOK_TITLE}
                  color={colors.black}
                  textTransform={"capitalize"}
                  fontWeight="600"
                  fontFam={font.WorkSans_SemiBold}
                  size={20}
                />

                <CustomText
                  text={bookDetailData?.book?.authorName}
                  color={colors.black}
                  textTransform={"capitalize"}
                  size={14}
                />
              </View>
              <View style={{ gap: verticalScale(7) }}>
                <View style={{ ...appStyles.rowjustify }}>
                  <CustomText
                    text={"Availability"}
                    color={colors.grey}
                    size={14}
                  />
                  <CustomText
                    text={bookDetailData?.book?.availabilityStatus}
                    color={
                      bookDetailData?.book?.availabilityStatus == "In Stock"
                        ? colors.green
                        : colors.red
                    }
                    fontWeight="600"
                    style={{ width: windowWidth / 1.5, textAlign: "right" }}
                    fontFam={font.WorkSans_SemiBold}
                    size={16}
                  />
                </View>
                <View style={{ ...appStyles.rowjustify }}>
                  <CustomText
                    text={"List Price"}
                    color={colors.grey}
                    size={14}
                  />
                  <CustomText
                    textDecorationLine={
                      Number(bookDetailData?.book?.Discount) > 0
                        ? "line-through"
                        : "none"
                    }
                    text={
                      bookDetailData?.book?.currency == "Rs"
                        ? `${bookDetailData?.book?.currency} ${bookDetailData?.book?.PRICE}`
                        : `${bookDetailData?.book?.currency} ${bookDetailData?.book?.PRICE} = ${bookDetailData?.book?.PAK_PRICE}`
                    }
                    color={colors.black}
                    size={14}
                  />
                </View>

                <View style={appStyles.rowjustify}>
                  <CustomText
                    text={
                      Number(bookDetailData?.book.Discount) > 0
                        ? `App Price (${bookDetailData?.book?.Discount}% OFF)`
                        : "App Price"
                    }
                    color={colors.grey}
                    size={14}
                  />
                  <CustomText
                    text={`Rs ${
                      Number(bookDetailData?.book?.Discount) > 0
                        ? Math.floor(
                            Number(bookDetailData?.book?.PAK_PRICE) -
                              Number(bookDetailData?.book?.PAK_PRICE) *
                                (Number(bookDetailData?.book?.Discount) / 100)
                          )
                        : bookDetailData?.book?.PAK_PRICE
                    }`}
                    color={colors.orange}
                    fontWeight="600"
                    fontFam={font.WorkSans_SemiBold}
                    size={20}
                  />
                </View>
                <View style={appStyles.rowjustify}>
                  <BookInfo
                    title={"Publication year"}
                    detail={new Date(
                      bookDetailData?.book?.PUBLISHED_DATE
                    ).getFullYear()}
                  />
                  <BookInfo
                    title={"Category"}
                    detail={
                      bookDetailData?.book?.Level1Name
                        ? bookDetailData?.book?.Level1Name
                        : "-"
                    }
                  />
                  <BookInfo
                    title={"Sub category"}
                    detail={
                      bookDetailData?.book?.CATE_DESCRIPTION
                        ? bookDetailData?.book?.CATE_DESCRIPTION
                        : "-"
                    }
                  />
                </View>
                <View style={appStyles.rowjustify}>
                  <BookInfo title={"Material"} detail={"Paperback"} />
                  <BookInfo
                    title={"ISBN"}
                    detail={
                      bookDetailData?.book?.BOOK_ISBN
                        ? bookDetailData?.book?.BOOK_ISBN
                        : "-"
                    }
                  />
                  <BookInfo
                    title={"Pages"}
                    detail={
                      bookDetailData?.book?.NO_OF_PAGES
                        ? bookDetailData?.book?.NO_OF_PAGES
                        : "-"
                    }
                  />
                </View>
                <View style={appStyles.rowjustify}>
                  <BookInfo
                    title={"Weight"}
                    detail={
                      bookDetailData?.book?.shipping_weight
                        ? bookDetailData?.book?.shipping_weight
                        : "-"
                    }
                  />
                  <BookInfo
                    title={"Publisher"}
                    detail={
                      bookDetailData?.book?.publisherName
                        ? bookDetailData?.book?.publisherName
                        : "-"
                    }
                  />
                  <BookInfo
                    title={"Dimension"}
                    detail={
                      bookDetailData?.book?.Dimensions
                        ? bookDetailData?.book?.Dimensions
                        : "-"
                    }
                  />
                </View>
              </View>

              {bookDetailData?.book?.readings_book_detail?.BOOK_DESCRIPTION && (
                <>
                  <View style={{ gap: verticalScale(3) }}>
                    <CustomText
                      text={`About ${bookDetailData?.book?.BOOK_TITLE}`}
                      color={colors.black}
                      textTransform={"capitalize"}
                      fontWeight="600"
                      fontFam={font.WorkSans_SemiBold}
                      size={18}
                    />

                    <CustomText
                      lineHeight={22}
                      style={{ textAlign: "justify" }}
                      text={bookDetailData?.book?.readings_book_detail?.BOOK_DESCRIPTION?.trim()}
                      color={colors.grey100}
                      size={14}
                    />
                  </View>
                </>
              )}

              {bookDetailData?.book?.readings_book_detail
                ?.AuthorDescription && (
                <>
                  <View style={{ gap: verticalScale(3) }}>
                    <CustomText
                      text={`About ${bookDetailData?.book?.authorName}`}
                      color={colors.black}
                      textTransform={"capitalize"}
                      fontWeight="600"
                      fontFam={font.WorkSans_SemiBold}
                      size={18}
                    />

                    <CustomText
                      lineHeight={22}
                      style={{ textAlign: "justify" }}
                      text={bookDetailData?.book?.readings_book_detail?.AuthorDescription?.trim()}
                      color={colors.grey100}
                      size={14}
                    />
                  </View>
                </>
              )}
            </View>
          </View>
          <View style={{ gap: verticalScale(5) }}>
            {bookDetailData?.Bookreview && (
              <>
                <CustomText
                  text={"Book Reviews"}
                  color={colors.black}
                  style={{ marginLeft: scale(20) }}
                  fontWeight="600"
                  fontFam={font.WorkSans_SemiBold}
                  size={18}
                />
                <FlatList
                  data={[1, 2, 3, 4, 5]}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ paddingLeft: scale(20) }}
                  contentContainerStyle={{
                    gap: scale(15),
                    paddingRight: scale(40),
                  }}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }: any) => {
                    return (
                      <BookReviewCard
                        onPress={() => navigation.navigate("BookReviewScreen")}
                      />
                    );
                  }}
                />
              </>
            )}
            <View
              style={{ ...appStyles.rowjustify, marginHorizontal: scale(20) }}
            >
              <View style={{ alignItems: "center", gap: verticalScale(6) }}>
                <Stars
                  default={0}
                  count={5}
                  spacing={scale(8)}
                  starSize={scale(23)}
                  fullStar={images.fill_star}
                  emptyStar={images.unfill_star}
                />
                <CustomText
                  text={"Rate this book"}
                  size={14}
                  color={colors.dark_black}
                  fontWeight="600"
                  fontFam={font.WorkSans_SemiBold}
                />
              </View>
              {/* <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => bottomSheetModalRef.current.present()}
              style={{
                ...appStyles.row,
                gap: scale(10),
                // marginLeft: scale(20),
                // marginTop: verticalScale(7),
              }}>
              <CustomText
                text={'Write a Review'}
                size={14}
                color={colors.primary}
                fontWeight="600"
                fontFam={font.WorkSans_SemiBold}
              />
              <Image
                source={images.edit}
                resizeMode="contain"
                style={{
                  width: scale(15),
                  height: scale(15),
                }}
              />
            </TouchableOpacity> */}
              <CustomButton
                text="Write a Review"
                width={"40%"}
                borderRadius={999}
                onPress={() => bottomSheetModalRef.current.present()}
              />
              {/* <View style={{ gap: verticalScale(10) }}>
              
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => bottomSheetModalRef.current.present()}
                  style={{
                    ...appStyles.row,
                    gap: scale(10),
                    marginLeft: scale(20),
                    marginTop: verticalScale(7),
                  }}
                >
                  <CustomText
                    text={"Write a Review"}
                    size={14}
                    color={colors.primary}
                    fontWeight="600"
                    fontFam={font.WorkSans_SemiBold}
                  />
                  <Image
                    source={images.edit}
                    resizeMode="contain"
                    style={{
                      width: scale(15),
                      height: scale(15),
                    }}
                  />
                </TouchableOpacity>
              </View> */}
            </View>
          </View>
          {bookDetailData?.bestseller.length > 0 && (
            <>
              <View style={{ marginBottom: verticalScale(15) }}>
                <CustomText
                  text={bookDetailData?.bestsellersHeading}
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
                    data={bookDetailData?.bestseller}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingLeft: scale(20) }}
                    contentContainerStyle={{
                      paddingRight: scale(40),
                      gap: scale(15),
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }: any) => {
                      // console.log("ItemDetail",item)
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
                              navigation.push("BookDetailScreen", {
                                Book_id: item?.Book_Id,
                              })
                            }
                            // onPress={() =>
                            //   BookMoreDetailScreen
                            //   // setBookId(item?.Book_Id)

                            // }
                            data={book_data}
                          />
                        </View>
                      );
                    }}
                  />
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        {viewOrder ? (
          <View style={{ ...appStyles.rowjustify, width: "100%" }}>
            <CustomButton
              width={"48%"}
              onPress={() => setIsAddToCart(true)}
              text={"Cancel"}
              bgColor={colors.white}
              textColor={colors.primary}
            />
            <CustomButton
              width={"48%"}
              onPress={() => setIsSuccessModal(true)}
              text={"Accept Price"}
              bgColor={colors.primary}
              textColor={colors.white}
            />
          </View>
        ) : (
          <>
            <CustomButton
              width={"30%"}
              text={"Buy Now"}
              onPress={() => OrderbottomSheetModalRef.current.present()}
              bgColor={colors.white}
              textColor={colors.primary}
            />

            <View style={{ width: "30%", alignItems: "center" }}>
              {isAddToCart ? (
                <QuantityContainer />
              ) : (
                <CustomButton
                  width={"100%"}
                  onPress={() => {
                    if (!token) {
                      navigation.navigate("Login");

                      return;
                    }
                    onAddToCart();
                  }}
                  text={"Add To Cart"}
                  bgColor={colors.primary}
                  textColor={colors.white}
                />
              )}
            </View>

            <TouchableOpacity style={styles.box}>
              <Image
                style={{
                  ...styles.bookIcons,
                  tintColor: bookDetailData?.book?.isInWishlist
                    ? colors.red
                    : colors.grey,
                }}
                source={
                  bookDetailData?.book?.isInWishlist
                    ? images.fill_heart
                    : images.unfill_heart
                }
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Image
                style={styles.bookIcons}
                source={images.share}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </>
        )}
      </View>

      <CustomBottomSheet
        snapPoints={
          isKeyboardVisible ? BookReviewkeyboardSnap : BookReviewSnapPoints
        }
        backgroundColor={colors.dull_white}
        bottomSheetModalRef={bottomSheetModalRef}
      >
        <BookReviewSheetModal
          onCancel={() => bottomSheetModalRef.current.dismiss()}
          onSubmit={() => setIsReviewAddModal(true)}
        />
      </CustomBottomSheet>
      <CustomBottomSheet
        snapPoints={OrderSheetSnapPoints}
        backgroundColor={colors.dull_white}
        bottomSheetModalRef={OrderbottomSheetModalRef}
      >
        <OrderSheetModal
        data={bookDetailData?.book}
        token={token}
        dispatch={dispatch}
          onCancel={() => OrderbottomSheetModalRef.current.dismiss()}
          onDispatch={() => {
            OrderbottomSheetModalRef.current.dismiss();
            setTimeout(() => {
              navigation.navigate("ChooseAddressScreen");
            }, 500);
          }}
          onPaywith={() => {
            OrderbottomSheetModalRef.current.dismiss();
            setTimeout(() => {
              navigation.navigate("ChoosePaymentScreen");
            }, 500);
          }}
          navigation={navigation}
          onSubmit={() => setIsSuccessModal(true)}
        />
      </CustomBottomSheet>

      <CustomAlertModal
        buttonTitle={"Great!"}
        modalVisible={isReviewAddModal}
        title={"Review Added"}
        des={
          "Your review for the book <bookname> has been posted successfully."
        }
        setModalVisible={setIsReviewAddModal}
        onPress={() => {
          setIsReviewAddModal(false);
          setTimeout(() => {
            bottomSheetModalRef.current.close();
          }, 500);
        }}
      />

      <CustomAlertModal
        buttonTitle={viewOrder ? "Continue" : "Back to Home"}
        icon={images.congrat}
        modalVisible={isSuccessModal}
        title={"Order Received"}
        des={
          viewOrder
            ? "Thank you for your order. For all requests, there is a requirement of 50% payment. Button: Continue to payment."
            : "Thanks for shopping with Readings. We have received your order. You can check the status of your order in the orders tab and track in real time."
        }
        setModalVisible={setIsReviewAddModal}
        onPress={() => {
          setIsSuccessModal(false);

          setTimeout(() => {
            if (viewOrder) {
              navigation.navigate("CheckoutScreen", { viewOrder: true });

              return;
            }
            navigation.goBack();
          }, 500);
        }}
      />

      <CustomToast
        isVisable={isMessage}
        setIsVisable={setIsMessage}
        message={message}
      />
    </>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  box: {
    width: scale(47),
    height: verticalScale(38),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: scale(8),
  },
  quantityBox: {
    width: scale(22),
    height: scale(22),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: scale(6),
  },

  bookIcons: {
    width: scale(20),
    height: scale(20),
  },
  bookImage: {
    width: "100%",
    height: verticalScale(295),
    alignItems: "center",
  },
  backContainer: {
    width: scale(30),
    height: scale(30),
    alignItems: "flex-start",
    justifyContent: "center",
  },
  cartContainer: {
    width: scale(15),
    height: scale(15),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: colors.orange,
    position: "absolute",
    right: scale(2),
    top: verticalScale(-2),
  },
  bookContainer: {
    width: scale(121),
    height: verticalScale(170),
    borderRadius: scale(3),
    overflow: "hidden",
  },
  bottomContainer: {
    width: "100%",
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(30),
    backgroundColor: colors.dull_white,
    borderTopWidth: 1,
    borderTopColor: colors.dull_half_white,
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
});
