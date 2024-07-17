import type { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Image, ScrollView, View } from "react-native";

import { DrawerItem } from "@/components/DrawerItem";

export const DrawerContent = ({
  state: { index: stateIndex, routes },
  descriptors,
  navigation,
}: DrawerContentComponentProps) => (
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
      <View className="mt-2">
        {routes.map((routes, index) => (
          <DrawerItem
            key={routes.key}
            descriptors={descriptors}
            index={index}
            navigation={navigation}
            route={routes}
            stateIndex={stateIndex}
          />
        ))}
      </View>
    </ScrollView>
  </View>
);
