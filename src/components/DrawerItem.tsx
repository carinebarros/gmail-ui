import { Text, View } from "react-native";

import type {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from "@react-navigation/drawer/lib/typescript/src/types";
import type { NavigationState } from "@react-navigation/native";
import type { CustomOptions } from "@/types/navigation";

import { DrawerButton } from "@/components/DrawerButton";

type Route = NavigationState["routes"][0];

type DrawerItemProps = {
  route: Route;
  index: number;
  stateIndex: number;
  descriptors: DrawerDescriptorMap;
  navigation: DrawerNavigationHelpers;
};

export const DrawerItem = ({
  descriptors,
  index,
  navigation,
  route,
  stateIndex,
}: DrawerItemProps) => {
  const isFocused = stateIndex === index;
  const options = descriptors[route.key].options as CustomOptions;

  if (options.title === undefined) {
    return null;
  }

  const onPress = () => {
    const event = navigation.emit({
      type: "drawerItemPress",
      canPreventDefault: true,
      target: route.key,
    });

    if (!isFocused && !event?.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  return (
    <View key={route.key}>
      {options.sectionTitle && (
        <Text className="text-gray-400 text-sm font-heading uppercase ml-4 mt-6">
          {options.sectionTitle}
        </Text>
      )}

      <DrawerButton
        title={options.title}
        iconName={options.iconName}
        isDivider={options.isDivider}
        isFocused={isFocused}
        notifications={options.notifications}
        onPress={onPress}
      />
    </View>
  );
};
