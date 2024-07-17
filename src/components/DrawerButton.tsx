import { Pressable, PressableProps, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import clsx from "clsx";

import { colors } from "@/styles/colors";

import type { IconName } from "@/types";

type DrawerButtonProps = PressableProps & {
  title: string;
  isFocused?: boolean;
  isDivider?: boolean;
  iconName?: IconName;
  notifications?: number;
};

export const DrawerButton = ({
  isDivider,
  isFocused,
  title,
  iconName,
  notifications,
  ...props
}: DrawerButtonProps) => {
  return (
    <Pressable
      className={clsx("py-2 w-full", {
        "border-b ml-10 border-gray-500": isDivider,
      })}
      {...props}
    >
      <View
        className={clsx("flex-row items-center gap-4 h-14 px-6 ml-2 w-full", {
          "-ml-14": isDivider,
        })}
      >
        {iconName && (
          <MaterialIcons
            name={iconName}
            size={20}
            color={isFocused ? colors.orange[300] : colors.gray[400]}
          />
        )}
        <Text
          className={clsx("text-white font-subtitle text-base flex-1", {
            "text-orange-300": isFocused,
          })}
        >
          {title}
        </Text>

        <Text
          className={clsx("text-gray-400 text-sm font-body", {
            "text-orange-300": isFocused,
          })}
        >
          {notifications}
        </Text>
      </View>
    </Pressable>
  );
};
