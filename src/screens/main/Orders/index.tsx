import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/CustomText";
import { scale, verticalScale } from "react-native-size-matters";
import CustomHeader from "../../../components/CustomHeader";
import { colors } from "../../../utils/colors";
import OrderCard from "./OrderCard";
import { ordersHistoryData } from "../../../utils/Data";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import { images } from "../../../assets/images";

const OrdersScreen = ({ navigation }: any) => {
  const [data,setData]=useState([])

  const [activeTab, setActiveTab] = useState<any>("Active");
  const activeOrdersData = [
    {
      orderId: "ORDER123456",
      amount: "4000",
      orderStatus: "Order Received",
      orderDetail: "Details",
      onPress: () => navigation.navigate("OrderDetailScreen"),
    },
    {
      orderId: "ORDER123456",
      amount: "4000",
      orderStatus: "Out for Delivery",
      orderDetail: "Details",
      onPress: () => navigation.navigate("OrderDetailScreen"),
    },
    {
      orderId: "REQ123",
      orderStatus: "Request Received",
      title: "Title: Love, Poverty and War",
    },
    {
      orderId: "REQ123",
      orderStatus: "Processed",
      orderDetail: "View",
      title: "Title: Paradise Regain",
      onPress: () =>
        navigation.navigate("BookDetailScreen", { viewOrder: true }),
    },
  ];

  const Tabs = () => {
    return (
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setActiveTab("Active")}
          activeOpacity={0.5}
          style={{
            ...styles.tabBox,
            backgroundColor:
              activeTab == "Active" ? colors.primary : "transparent",
          }}
        >
          <CustomText
            text={"Active"}
            color={activeTab == "Active" ? colors.white : colors.grey}
            size={14}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setActiveTab("History")}
          style={{
            ...styles.tabBox,
            backgroundColor:
              activeTab == "History" ? colors.primary : "transparent",
          }}
        >
          <CustomText
            text={"History"}
            size={14}
            color={activeTab == "History" ? colors.white : colors.grey}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderOrdersItem = ({ item }: any) => {
    return <OrderCard onPress={item.onPress} data={item} />;
  };
  return (
    <>
      <View
    style={{
      gap: verticalScale(15),
      flex: 1,
      backgroundColor: colors.dull_white,
      paddingTop:verticalScale(75),
      paddingHorizontal:scale(20)
    }}
  >
      <Tabs />

      <View style={{ gap: verticalScale(8), flex: 1 }}>
        <FlatList
          // data={activeTab == 'Active' ? activeOrdersData : ordersHistoryData}
     
          data={data}
          scrollEnabled={data?.length > 0 ? true : false}
          contentContainerStyle={{ gap: verticalScale(8) }}
          renderItem={renderOrdersItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <View
              style={{
                height: windowWidth,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  width: windowWidth / 1.1,
                  height: windowHeight / 2.2,
                  marginTop: verticalScale(20),
                }}
                resizeMode="contain"
                source={images.empty_order}
              />
              <CustomText
                text={"You don’t have any active orders at this moment."}
                size={14}
                style={{ width: windowWidth / 1.5, textAlign: "center" }}
                fontWeight="500"
                color={colors.black}
              />
            </View>
          }
        />
      </View>
    </View>

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
    </>
  
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  tabBox: {
    height: "100%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  tabContainer: {
    height: verticalScale(40),
    width: "100%",
    borderRadius: scale(10),
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.white,
  },
});
