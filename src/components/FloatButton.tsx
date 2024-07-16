import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  label: string;
};

export const FloatButton = ({ icon, label, ...props }: FloatButtonProps) => (
  <TouchableOpacity
    className="px-8 py-4 bg-gray-600 rounded-full absolute bottom-4 right-5 flex-row gap-1 items-center"
    activeOpacity={0.7}
    {...props}
  >
    {icon && <MaterialIcons name={icon} size={22} color={colors.orange[500]} />}

    <Text className="font-subtitle text-orange-500">{label}</Text>
  </TouchableOpacity>
);
