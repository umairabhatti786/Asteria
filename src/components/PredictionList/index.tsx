import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { WINDOW_HEIGHT } from "@gorhom/bottom-sheet";
import { scale } from "react-native-size-matters";
import { appStyles } from "../../utils/AppStyles";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
export interface cardData1 {
  description?: string;
  price?: number;
  image?: any;
}
type Props = {
  data?: cardData1;
  onPress?: () => void;
  Addresses: any;
  onAddressPress?:any
};

const PredictionList = ({ data, onPress, Addresses,onAddressPress }: Props) => {
  return (
    <View
      style={{
        width:"100%",
        // position: "absolute",
        backgroundColor: colors.black,
        maxHeight: 300,
        borderRadius:scale(10),
      }}
    >
      <View
                    style={{width:"100%"}}

       >
        <ScrollView horizontal={false}>
          {Addresses.map((i:any, index:any) => {
            return (
              <View key={i.toString() + index}
              style={{width:"100%"}}
              >
                <TouchableOpacity 
                onPress={()=>onAddressPress(i)}
                style={{ ...appStyles.row, padding: scale(10),borderBottomWidth:0.5,borderBottomColor:colors.white+"60",width:"100%" }}>
                 
                  <CustomText
                    text={i.description}
                    size={14}
                    // fontFam={font.montserratMedium}
                    style={{ marginLeft: 10 }}
                    color={colors.white+"70"}
                  />
                </TouchableOpacity>

              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
export default PredictionList;