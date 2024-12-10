import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { appStyles } from "../../../utils/AppStyles";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import { images } from "../../../assets/images";
import CustomButton from "../../../components/CustomButton";
import CartContainer from "../Cart/CartContainer";
import { ApiServices } from "../../../apis/ApiServices";
import { sessionCheck } from "../../../utils/CommonHooks";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

interface Props {
  onSubmit?: any;
  navigation?: any;
  onDispatch?: () => void;
  onPaywith?: () => void;
  onCancel?: () => void;
  data?: any;
  token?: any;
  dispatch?: any;
}

const OrderSheetModal: React.FC<Props> = ({
  onSubmit,
  navigation,
  onPaywith,
  onDispatch,
  onCancel,
  data,
  token,
  dispatch,
}: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [userlatestAddress, setUserlatestAddress] = useState<any>();
  const [activePaymentMethod, setActivePaymentMethod] = useState();
  const [loading, setlaoding] = useState(false);

  useEffect(() => {
    getUserAddresses();
  }, []);

  console.log("userlatestAddress", userlatestAddress);

  const getUserAddresses = () => {
    setlaoding(true);
    ApiServices.GetAddress(token, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        let result = JSON.parse(response);
        // console.log("AddressRes", result);

        if (result?.data) {
          console.log("Jcjbdjcd", result?.data?.addresses);
          let data = result?.data?.addresses;
          const lastObject = data[data.length - 1];
          setUserlatestAddress(lastObject);
          setlaoding(false);
          // setUserAddresses(result?.data?.addresses);
          // setlaoding(false);
        } else {
          setlaoding(false);

          if (!token) {
            // Alert.alert("", result?.error);

            return
          }

          if (result?.error == "Invalid token") {
            sessionCheck(dispatch, navigation);

            return;
          }
         
        }
      } else {
        Alert.alert("", "Something went wrong");
        setlaoding(false);
      }
    });
  };

  const Layout = () => {
    return (
      <SkeletonPlaceholder
        // speed={00}
        highlightColor="rgb(222, 226, 230)"
        backgroundColor="#e9ecef" // Set the main background color of the skeleton
      >
        <View style={{ gap: verticalScale(8) }}>
          {[1, 2].map((item, index) => {
            return (
              <View
                key={index.toString()}
                style={styles.detailContainer}
              ></View>
            );
          })}
        </View>
      </SkeletonPlaceholder>
    );
  };

  const calculateTotal = () => {
    const newSubtotal =
      Number(data?.Discount) > 0
        ? Math.floor(
            Number(data?.PAK_PRICE) -
              Number(data?.PAK_PRICE) * (Number(data?.Discount) / 100)
          )
        : Number(data?.PAK_PRICE || 0);

    console.log("newSubtotalData", newSubtotal);

    return quantity * newSubtotal;
  };

  const DetailCard = ({
    title,
    onPress,
    des,
    fontWeight,
    fontFam,
    size,
    children,
  }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={{
          ...appStyles.rowjustify,
          ...styles.detailContainer,
        }}
      >
        <CustomText text={title} size={12} color={colors.grey} />
        <View
        style={{...appStyles.row,gap:scale(7)}}
        >
          <CustomText
          text={des}
          size={size || 12}
          fontWeight={fontWeight}
          fontFam={fontFam || font.WorkSans_Regular}
          color={colors.black}
        />
           {children}

        </View>

        
     
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: scale(20) }}>
      <View style={appStyles.rowjustify}>
        <CustomText
          text={"Buy Now"}
          color={colors.black}
          fontWeight="600"
          size={18}
          fontFam={font.WorkSans_SemiBold}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onCancel}
          style={styles.box}
        >
          <Image
            style={{
              width: scale(17),
              height: scale(17),
              tintColor: colors.black,
            }}
            resizeMode="contain"
            source={images.close}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: verticalScale(20),
          gap: verticalScale(8),
          marginBottom: verticalScale(20),
        }}
      >
        <CartContainer
          setQuantity={setQuantity}
          quantity={quantity}
          data={data}
        />

        {loading ? (
          <Layout />
        ) : (
          <View
            style={{
              gap: verticalScale(8),
            }}
          >
          <DetailCard
                onPress={onDispatch}
                title={"Dispatch"}
                des={userlatestAddress?.Address?userlatestAddress?.Address:"Add New Address"}
              >
                {
                  !userlatestAddress?.Address&&(
                    <Image
                    source={images.plus}
                    resizeMode="contain"
                    style={{
                      width: scale(12),
                      height: scale(12),
                    tintColor:colors.black
                    }}
                  />

                  )
                }
                
                </DetailCard>

            <DetailCard
              onPress={onPaywith}
              title={"Pay With"}
              des={activePaymentMethod?activePaymentMethod:"Cash On Delivery"}
            />
          </View>
        )}

        <DetailCard
          title={"Total"}
          des={`PKR ${calculateTotal()}`}
          fontFam={font.WorkSans_SemiBold}
          fontWeight={"600"}
          size={14}
        />
      </View>

      <CustomButton text="Place order" onPress={onSubmit} />

      <View style={{ marginTop: verticalScale(7) }}>
        <CustomText
          text={"By selecting this, you agree to the Readings"}
          size={14}
        />
        <View style={{ ...appStyles.row, gap: scale(4) }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("TermsAndCondirtions")}
          >
            <CustomText
              color={colors.primary}
              textDecorationLine="underline"
              text={"Terms of service"}
              size={14}
            />
          </TouchableOpacity>
          <CustomText text={"and"} size={14} />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("PrivacyPolicy")}
          >
            <CustomText
              color={colors.primary}
              textDecorationLine="underline"
              text={"privacy policy"}
              size={14}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    width: scale(30),
    height: scale(30),
    alignItems: "flex-end",
    justifyContent: "center",
  },
  detailContainer: {
    height: verticalScale(39),
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
  },
});

export default OrderSheetModal;
