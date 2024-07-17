import type { DrawerContentComponentProps } from "@react-navigation/drawer";
import { NavigationState } from "@react-navigation/native";
import { useCallback } from "react";
import { Image, ScrollView, View } from "react-native";
import { DrawerButton } from "@/components/DrawerButton";
import { CustomOptions } from "@/types/navigation";

type Route = NavigationState["routes"][0];

export const DrawerContent = ({
  state: { index: stateIndex, routes },
  descriptors,
}: DrawerContentComponentProps) => {
  const renderRoute = useCallback(
    (route: Route, index: number) => {
      const isFocused = stateIndex === index;
      const options = descriptors[route.key].options as CustomOptions;

      if (options.title === undefined) {
        return null;
      }

      return (
        <View key={route.key}>
          <DrawerButton
            title={options.title}
            iconName={options.iconName}
            isDivider={options.isDivider}
            isFocused={isFocused}
            notifications={options.notifications}
          />
        </View>
      );
    },
    [descriptors, stateIndex]
  );

  return (
    <View className="flex-1 bg-gray-600 overflow-hidden">
      <View className="mt-20 w-full border-b pb-6 border-gray-500">
        <Image
          source={require("@/assets/logo.png")}
          resizeMode="contain"
          className="w-28 ml-5"
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        <View className="mt-2">{routes.map(renderRoute)}</View>
      </ScrollView>
    </View>
  );
};
