import { TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { font } from "../../utils/font";
import { scale, verticalScale } from "react-native-size-matters";
import LottieView from "lottie-react-native";

type Props = {
  text?: string;
  onPress?: () => void;
  width?: any;
  height?: number;
  size?: number;
  fontFam?: any;
  borderRadius?: number;
  style?: any;
  bgColor?: any;
  textColor?: any;
  borderColor?: any;
  disable?: boolean;
  borderWidth?: number;
  paddingHorizontal?: number;
  isLoading?: any;
};

const CustomButton = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  disable,
  borderWidth,
  paddingHorizontal,
  isLoading,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.5}
      style={{
        ...style,
        width: width || "100%",
        height: verticalScale(height || 43),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: scale(borderRadius || 999),
        borderWidth: borderWidth || 1,
        borderColor: bgColor|| colors.primary+"60",
        paddingHorizontal: scale(5),
        paddingVertical: verticalScale(4),
        // padding:scale(10)
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: bgColor || colors.primary,
          width: "100%",
          height: "100%",
          borderRadius: 999,
        }}
      >
        <CustomText
          text={text}
          color={textColor || colors.black}
          size={size || 15}
          fontWeight="600"
          fontFam={fontFam || font.Chillax_SemiBold}
        />
      </View>
    </TouchableOpacity>
  );
};
export default CustomButton;
