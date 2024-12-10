import React, { useEffect, useState } from "react";
import { View, FlatList, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomHeader from "../../../components/CustomHeader";
import LikedCard from "./LikedCard";
import { useSelector } from "react-redux";
import { getToken } from "../../../redux/reducers/authReducer";
import { ApiServices } from "../../../apis/ApiServices";
import { useIsFocused } from "@react-navigation/native";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { LikedLayout } from "../../../utils/Loyout/LikedLayout";
import CustomToast from "../../../components/CustomToast";
import { images } from "../../../assets/images";

const LikedScreen = ({ navigation }: any) => {
  const [data, setData] = useState([]);
  const token = useSelector(getToken);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [isMessage, setIsMessage] = useState(false);
  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      getWishlistBooks(); // Run this function on the first visit
    });

    return unsubscribe; // Clean up the listener when the screen is unmounted
  }, []);

  const getWishlistBooks = () => {
    let params = {
      page: 1,
      token: token,
    };
    // setHasMoreData(true);
    ApiServices.GetWishlist(params, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        let result = JSON.parse(response);
        if (result?.data?.wishList) {
          setData(result?.data?.wishList);
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
  const renderOrdersItem = ({ item, index }: any) => {
    return (
      <LikedCard
        isLiked={true}
        onIsLiked={(id: any) => {
          let likedData = [...data];
          let filterData = data.filter((it: any) => it?.Book_Id != id);
          console.log("filterDatalength", filterData?.length);
          setData(filterData);
        }}
        onPress={() =>
          navigation.navigate("BookDetailScreen", { Book_id: item?.Book_Id })
        }
        data={item}
      />
    );
  };
  return (
    <>
      <View
        style={{
          gap: verticalScale(15),
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
          <FlatList
            data={data}
            scrollEnabled={data.length > 0 ? true : false}
            contentContainerStyle={{
              gap: verticalScale(15),
              paddingBottom: verticalScale(80),
              paddingTop: verticalScale(80),
              paddingHorizontal: scale(20),
            }}
            renderItem={renderOrdersItem}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View
                style={{
                  height: windowHeight,
                  alignItems: "center",
                  marginTop: verticalScale(60),
                }}
              >
                <Image
                  style={{
                    width: windowWidth / 1.1,
                    height: windowHeight / 2.2,
                  }}
                  resizeMode="contain"
                  source={images.empty_liked}
                />
                <CustomText
                  text={"You haven’t added any books to the liked section."}
                  size={14}
                  style={{ width: windowWidth / 1.5, textAlign: "center" }}
                  fontWeight="500"
                  color={colors.black}
                />
              </View>
            }
            keyExtractor={(item, index) => index.toString()}
          />
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

      <CustomToast
        isVisable={isMessage}
        setIsVisable={setIsMessage}
        message={message}
      />
    </>
  );
};

export default LikedScreen;
