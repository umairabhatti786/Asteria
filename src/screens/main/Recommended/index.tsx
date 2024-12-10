import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/colors';
import {businessBookData} from '../../../utils/Data';
import CustomSearch from '../../../components/CustomSearch';
import {appStyles} from '../../../utils/AppStyles';
import TopHeader from '../../../components/TopHeader';
import LikedCard from '../Liked/LikedCard';
const RecommendedScreen = ({navigation}: any) => {
  const renderOrdersItem = ({item}: any) => {
    return <LikedCard data={item} />;
  };
  return (
    <ScreenLayout
      style={{
        gap: verticalScale(20),
        paddingHorizontal: scale(20),
      }}>
      <TopHeader title="Recommended" />

      <View style={{gap: verticalScale(15), flex: 1}}>
        <View style={appStyles.rowjustify}>
          <CustomSearch width={'80%'} filter={true} placeholder="Search" />
        </View>
        <FlatList
          data={businessBookData}
          contentContainerStyle={{
            gap: verticalScale(15),
            paddingBottom: verticalScale(30),
          }}
          renderItem={renderOrdersItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScreenLayout>
  );
};

export default RecommendedScreen;
