import { View, TextInput, TextInputProps } from "react-native";

import { colors } from "@/styles/colors";

type InputProps = {
  children: React.ReactNode;
};

const Input = ({ children }: InputProps) => (
  <View className="w-full h-14 bg-gray-800 rounded-lg p-4 flex-row items-center gap-4">
    {children}
  </View>
);

const InputField = (props: TextInputProps) => (
  <TextInput
    className="flex-1 font-normal text-base text-white"
    placeholderTextColor={colors.gray[400]}
    cursorColor={colors.blue[600]}
    {...props}
  />
);

Input.Field = InputField;

export { Input };
