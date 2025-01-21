import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../CustomText";

export const CustomTabBar = ({ tab1, tab2, setSelectedTab }: any) => {
  const [activeTab, setActiveTab] = useState(tab1);

  return (
    <View style={styles.container}>
      {/* Line */}
      <View>
        <View style={styles.line}>
          {/* Dot for active tab */}

          <View
            style={{
              position: "absolute",
              width: "50%",
              backgroundColor: colors.primary,
              height: 1,
              alignItems: "center",
              right: activeTab == tab2 ? 0 : null,
            }}
          >
            <View style={{ alignItems: "center", gap: verticalScale(0.1) }}>
              <View
                style={{
                  width: 2,
                  height: verticalScale(9),
                  backgroundColor: colors.primary,
                }}
              />
              <View
                style={{
                  width: scale(6),
                  height: scale(6),
                  borderRadius: 999,
                  backgroundColor: colors.primary,
                }}
              ></View>
            </View>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(tab1);
            setActiveTab(tab1);
          }}
          style={styles.tab}
        >
          <CustomText
            fontWeight="500"
            numberOfLines={1}
            color={activeTab === tab1 ? colors.primary : colors.primary + "70"}
            text={tab1}
            size={14}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedTab(tab2);
            setActiveTab(tab2);
          }}
          style={styles.tab}
        >
          <CustomText
            fontWeight="500"
            numberOfLines={1}
            color={activeTab === tab2 ? colors.primary : colors.primary + "70"}
            text={tab2}
            size={14}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000", // Black background
    paddingVertical: 10,
    gap: verticalScale(7),
  },
  line: {
    height: 1,
    backgroundColor: colors.primary + "60",
    position: "relative",
    marginHorizontal: 10,
  },
  dot: {
    position: "absolute",
    top: -4,
    left: "25%", // Position for the "Your Hand" tab
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#B2AFFE",
  },
  activeDot: {
    backgroundColor: "#B2AFFE",
  },
  inactiveDot: {
    opacity: 0,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    color: "#B2AFFE70", // Inactive text color
  },
  activeTabText: {
    color: "#B2AFFE", // Active text color
  },
});

export default CustomTabBar;
