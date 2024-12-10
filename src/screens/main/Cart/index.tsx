import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import CustomHeader from "../../../components/CustomHeader";
import { colors } from "../../../utils/colors";
import { cartData } from "../../../utils/Data";
import CartContainer from "./CartContainer";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import { font } from "../../../utils/font";
import CustomButton from "../../../components/CustomButton";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import { images } from "../../../assets/images";
import { useSelector } from "react-redux";
import { getToken } from "../../../redux/reducers/authReducer";
import { ApiServices } from "../../../apis/ApiServices";
import LikedCard from "../Liked/LikedCard";
import { LikedLayout } from "../../../utils/Loyout/LikedLayout";
const CartScreen = ({ navigation }: any) => {
  const [data, setData] = useState<any>([]);
  const token = useSelector(getToken);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  console.log("subtotalData", subtotal);

  const [isMessage, setIsMessage] = useState(false);
  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      getCartBooks(); // Run this function on the first visit
      console.log("subtotal");
    });

    return unsubscribe; // Clean up the listener when the screen is unmounted
  }, []);

  const getCartBooks = () => {
    let params = {
      page: 1,
      token: token,
    };
    // setHasMoreData(true);
    ApiServices.GetOrderCart(params, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        let result = JSON.parse(response);
        if (
          result?.data?.availableBooks ||
          result?.data?.outOfStockBooks ||
          result?.data?.outOfStockBooks ||
          result?.data?.preOrderBooks
        ) {
          setData([
            ...(result?.data?.availableBooks || []), // Spread availableBooks if exists, otherwise empty array
            ...(result?.data?.outOfStockBooks || []), // Spread outOfStockBooks if exists, otherwise empty array
            ...(result?.data?.preOrderBooks || []), // Spread preOrderBooks if exists, otherwise empty array
          ]);
          setLoading(false);
        } else {
          setLoading(false);
          if (token) {
            setMessage(result?.error);
            setIsMessage(true);
          }
        }
      } else {
        setLoading(false);
        setMessage("Something went wrong");
        setIsMessage(true);
      }
    });
  };

  const renderOrdersItem = ({ item }: any) => {
    return (
      <LikedCard
        isCart={true}
        setSubtotal={setSubtotal}
        subtotal={subtotal}
        onIsLiked={(id: any) => {
          let likedData = [...data];
          let filterData = data.filter((it: any) => it?.cart_item_id != id);
          console.log("filterDatalength",id);
          setData(filterData);
        }}
        // onPress={() =>
        //   navigation.navigate("BookDetailScreen", { Book_id: item?.Book_Id })
        // }
        data={item}
      />
    );
  };
  return (
    <>
      <View
        style={{
          gap: verticalScale(5),
          flex: 1,
          backgroundColor: colors.dull_white,
        }}
      >
        {loading ? (
          <View
            style={{
              paddingTop: verticalScale(35),
            }}
          >
            <LikedLayout />
          </View>
        ) : (
          <View
            style={{
              gap: verticalScale(8),
              flex: 1,
              paddingHorizontal: scale(20),
            }}
          >
            <FlatList
              data={data}
              scrollEnabled={data?.length > 0 ? true : false}
              contentContainerStyle={{
                gap: verticalScale(15),
                paddingTop: verticalScale(75),
                paddingBottom:verticalScale(185)
              }}
              renderItem={renderOrdersItem}
              ListEmptyComponent={
                <View
                  style={{
                    height: windowHeight,
                    alignItems: "center",
                    marginTop: verticalScale(50),
                  }}
                >
                  <Image
                    style={{
                      width: windowWidth / 1.1,
                      height: windowHeight / 2.2,
                    }}
                    resizeMode="contain"
                    source={images.empty_cart}
                  />
                  <CustomText
                    text={"You haven’t added any books to the cart section."}
                    size={14}
                    style={{ width: windowWidth / 1.5, textAlign: "center" }}
                    fontWeight="500"
                    color={colors.black}
                  />
                </View>
              }
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}

        {data?.length > 0 && (
          <View
            style={{
              gap: verticalScale(10),
              paddingHorizontal: scale(20),
              backgroundColor: "rgba(243, 245, 247, 0.9)", // Semi-transparent background,
              display: "flex",
              paddingVertical:verticalScale(10),
              width: "100%",
              position: "absolute",
              bottom: verticalScale(75),
              
            }}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                ...appStyles.rowjustify,
                ...styles.detailContainer,
              }}
            >
              <CustomText text={"Subtotal"} size={12} color={colors.grey} />

              <CustomText
                text={`Rs. ${subtotal}`}
                size={14}
                fontWeight={"600"}
                fontFam={font.WorkSans_SemiBold}
                color={colors.black}
              />
            </TouchableOpacity>
            <CustomButton
              text="Checkout"
              onPress={() => navigation.navigate("CheckoutScreen")}
            />
          </View>
        )}
      </View>
      {!loading && (
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
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  detailContainer: {
    height: verticalScale(39),
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
  },
});
