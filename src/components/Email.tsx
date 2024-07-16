import { useMemo } from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

import { EmailDataProps } from "@/utils/emails";

import { Avatar } from "@/components/Avatar";

type EmailProps = {
  data: EmailDataProps;
};

type StarType = {
  icon: keyof typeof MaterialIcons.glyphMap;
  color: string;
};

export const Email = ({ data }: EmailProps) => {
  const star: StarType = useMemo(() => {
    if (data.star) {
      return {
        icon: "star",
        color: colors.blue[600],
      };
    }

    return {
      icon: "star-outline",
      color: colors.gray[400],
    };
  }, [data.star]);

  return (
    <View className="w-full flex-row gap-4">
      <Avatar source={{ uri: data.avatar }} />

      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          <MaterialIcons
            name="label-important"
            size={16}
            color={colors.yellow[600]}
          />

          <Text className="text-lg font-subtitle text-gray-400 flex-1">
            {data.name}
          </Text>

          <Text className="text-sm font-body text-gray-400">{data.date}</Text>
        </View>

        <Text
          className="text-base font-body text-gray-400"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          {data.subject}
        </Text>

        <View className="flex-row items-center gap-4">
          <Text
            className="text-base font-body text-gray-400 flex-1"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {data.message}
          </Text>

          <MaterialIcons name={star.icon} size={22} color={star.color} />
        </View>
      </View>
    </View>
  );
};
