import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { appStyles } from "../../utils/AppStyles";
import CustomText from "../CustomText";
import { font } from "../../utils/font";
import { colors } from "../../utils/colors";
import { windowWidth } from "../../utils/Dimensions";
import { images } from "../../assets/images";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/reducers/authReducer";
import { ApiServices } from "../../apis/ApiServices";

interface data {
  title?: string;
  auther?: string;
  listPrice?: string;
  appPrice?: string;
  book?: any;
  discount?: any;
  quantity?: any;
  inStock?: any;
  isInWishlist?: any;
  book_Id?: any;
}
type Props = {
  data: data;
  onPress?: any;
};

const BooksCard = ({ data, onPress }: Props) => {
  const navigation: any = useNavigation();
  const [isWishlist, setIsWishlist] = useState(data?.isInWishlist);
  const token = useSelector(getToken);
  const onWishlist = () => {
    var raw = JSON.stringify({
      bookId: data?.book_Id,
    });

    if (isWishlist) {
      let params = {
        id: data?.book_Id,
        token: token,
      };
      ApiServices.DeleteWishlist(
        params,
        async ({ isSuccess, response }: any) => {
          if (isSuccess) {
            let result = JSON.parse(response);
            if (result?.success) {
              setIsWishlist(false);
            } else {
              Alert.alert("", result?.error);
            }
          } else {
            Alert.alert("", "Something went wrong");
          }
        }
      );
    } else {
      let params = {
        data: raw,
        token: token,
      };
      ApiServices.SaveWishlist(params, async ({ isSuccess, response }: any) => {
        if (isSuccess) {
          let result = JSON.parse(response);
          if (result?.success) {
            setIsWishlist(true);
          } else {
            Alert.alert("", result?.error);
          }
        } else {
          Alert.alert("", "Something went wrong");
        }
      });
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={{
        width: windowWidth / 1.9,
        borderRadius: scale(10),
        overflow: "hidden",
        backgroundColor: colors.white,
      }}
    >
      <ImageBackground style={styles.bookImage} source={{ uri: data?.book }}>
        <View
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: colors.white,
            opacity: 0.7,
          }}
        />
        <Image
          style={{
            width: scale(60),
            height: verticalScale(73),
            borderRadius: scale(7),
            overflow: "hidden",
          }}
          source={{ uri: data?.book }}
          resizeMode="contain"
        />
      </ImageBackground>
      <View
        style={{
          padding: scale(10),
          flex: 1,
          gap: verticalScale(5),
        }}
      >
        <View style={{ paddingTop: verticalScale(3), marginRight: scale(20) }}>
          <CustomText
            text={data?.title}
            textTransform={"capitalize"}
            color={colors.black}
            numberOfLines={1}
            fontWeight="600"
            fontFam={font.WorkSans_SemiBold}
            size={14}
          />

          <CustomText
            text={data?.auther}
            textTransform={"capitalize"}
            color={colors.grey}
            size={12}
          />
        </View>
        <View style={{ ...appStyles.rowjustify, paddingTop: verticalScale(5) }}>
          <CustomText text={"List Price"} color={colors.grey} size={12} />
          <CustomText
            textDecorationLine={data.discount > 0 ? "line-through" : "nunu"}
            text={data?.listPrice}
            color={colors.grey}
            size={12}
          />
        </View>

        <View style={appStyles?.rowjustify}>
          <CustomText text={"App Price"} color={colors.grey} size={12} />
          <CustomText
            text={`Rs ${data?.appPrice}`}
            color={colors.orange}
            fontWeight="600"
            fontFam={font.WorkSans_SemiBold}
            size={14}
          />
        </View>

        <CustomText
          text={data?.inStock}
          numberOfLines={1}
          color={data?.inStock == "In Stock" ? colors.green : colors.red}
          size={12}
        />
        <View style={{ ...appStyles.rowjustify, marginTop: verticalScale(4) }}>
          <TouchableOpacity style={styles.box} onPress={onWishlist}>
            <Image
              style={{
                ...styles.bookIcons,
                tintColor: isWishlist ? colors.red : colors.grey,
              }}
              source={isWishlist ? images.fill_heart : images.unfill_heart}
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

          <TouchableOpacity style={styles.box}>
            <Image
              style={styles.bookIcons}
              source={images.unfill_cart}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BooksCard;

const styles = StyleSheet.create({
  box: {
    width: scale(50),
    height: scale(28),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.dull_white,
    borderRadius: scale(6),
  },

  bookIcons: {
    width: scale(18),
    height: scale(18),
  },
  bookImage: {
    width: "100%",
    height: verticalScale(100),
    alignItems: "center",
    justifyContent: "center",
  },
});
