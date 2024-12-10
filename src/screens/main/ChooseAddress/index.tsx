import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import TopHeader from "../../../components/TopHeader";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import { font } from "../../../utils/font";
import { appStyles } from "../../../utils/AppStyles";
import AddressCard from "../../../components/AddressCard";
import { ApiServices } from "../../../apis/ApiServices";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../../redux/reducers/authReducer";
import { sessionCheck } from "../../../utils/CommonHooks";
import { ChooseAddressLayout } from "../../../utils/Loyout/ChooseAddressLayout";
import CustomToast from "../../../components/CustomToast";
const ChooseAddressScreen = ({ navigation }: any) => {
  const [laoding, setlaoding] = useState(false);
  const [userAddresses, setUserAddresses] = useState<any>();
  const [message, setMessage] = useState("");
  const [isMessage, setIsMessage] = useState(false);
  const [selectedAddress,setSelectedAddress]=useState("")
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserAddresses();
    });

    return unsubscribe; // Cleanup the listener
  }, []);

  const getUserAddresses = () => {
    setlaoding(true);
    ApiServices.GetAddress(token, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        let result = JSON.parse(response);

        if (result?.data) {
          setUserAddresses(result?.data?.addresses);


          setlaoding(false);
        } else {
          if (result?.error == "Invalid token") {
            sessionCheck(dispatch, navigation);

            return;
          }
          setlaoding(false);
          if (token) {
            setMessage(result?.error);
            setIsMessage(true);
          }
        }
      } else {
        setlaoding(false);
        setMessage("Something went wrong");
        setIsMessage(true);
      }
    });
  };

  const deleteUserAddress = (id: any) => {
    let params = {
      id: id,
      token: token,
    };

    ApiServices.DeleteAddresses(
      params,
      async ({ isSuccess, response }: any) => {
        if (isSuccess) {
          let result = JSON.parse(response);
          if (result?.success) {
            setMessage(result?.message);
            let filterAddress = userAddresses?.filter((it: any) => it.id != id);
            setUserAddresses(filterAddress);
            setIsMessage(true);
          } else {
            setMessage(result?.error);
            setIsMessage(true);
          }
        } else {
          setMessage("Something went wrong");
          setIsMessage(true);
        }
      }
    );
  };

  return (
    <>
      <ScreenLayout>
        <View
          style={{
            paddingHorizontal: scale(20),
            paddingBottom: verticalScale(10),
          }}
        >
          <TopHeader title="Choose Address" />
        </View>

        {laoding ? (
          <ChooseAddressLayout />
        ) : (
          <>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                backgroundColor: colors.dull_white,
                flex: 1,
              }}
              contentContainerStyle={{
                backgroundColor: colors.dull_white,
                gap: verticalScale(20),
              }}
            >
              <View style={{ marginTop: verticalScale(10) }}>
                {userAddresses?.length > 0 && (
                  <>
                    <CustomText
                      text={"Saved Addresses"}
                      color={colors.black}
                      fontWeight="600"
                      style={{
                        marginLeft: scale(20),
                        marginBottom: verticalScale(10),
                      }}
                      fontFam={font.WorkSans_SemiBold}
                      size={18}
                    />

                    <FlatList
                      data={userAddresses}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={{ paddingLeft: scale(20) }}
                      contentContainerStyle={{
                        paddingRight: scale(40),
                        gap: scale(7),
                      }}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({ item, index }: any) => {
                        let data = {
                          Address: item?.Address,
                          City: item?.City,
                          Country: item?.Country,
                          Phone: item?.Phone,
                          PostCode: item?.PostCode,
                        };
                        return (
                          <View>
                            <AddressCard
                              isProfile={true}
                              // selectedAddress={}
                              data={data}
                              onEditAddress={()=>navigation.navigate("AddAddressScreen",{isEdit:true,data:item})}

                              onDeleteAddress={() => deleteUserAddress(item.id)}
                            />
                          </View>
                        );
                      }}
                    />
                  </>
                )}
                {/* <CustomText
            text={'Saved Addresses'}
            color={colors.black}
            fontWeight="600"
            style={{
              marginLeft: scale(20),
              marginBottom: verticalScale(10),
            }}
            fontFam={font.WorkSans_SemiBold}
            size={18}
          />

          <FlatList
            data={[1, 2, 3]}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft: scale(20)}}
            contentContainerStyle={{
              paddingRight: scale(40),
              gap: scale(7),
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}: any) => {
              return (
                <View>
                  <AddressCard />
                </View>
              );
            }}
          /> */}

                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate("AddAddressScreen")}
                  style={{
                    ...appStyles.row,
                    gap: scale(10),
                    marginHorizontal: scale(20),
                    marginTop: verticalScale(15),
                  }}
                >
                  <CustomText
                    text={"Add New Address"}
                    size={14}
                    color={colors.primary}
                    fontWeight="600"
                    fontFam={font.WorkSans_SemiBold}
                  />
                  <Image
                    source={images.plus}
                    resizeMode="contain"
                    style={{
                      width: scale(15),
                      height: scale(15),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>
        )}
      </ScreenLayout>

      <CustomToast
        isVisable={isMessage}
        setIsVisable={setIsMessage}
        message={message}
      />
    </>
  );
};
export default ChooseAddressScreen;
