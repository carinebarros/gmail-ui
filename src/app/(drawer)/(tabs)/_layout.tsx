import { useMemo } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import type { IconName } from "@/types";

import { colors } from "@/styles/colors";

type RenderTabBarIconParams = {
  color: string;
  size: number;
};

const TabBarIcon =
  (name: IconName) =>
  ({ size, color }: RenderTabBarIconParams) =>
    <MaterialIcons name={name} size={size} color={color} />;

const TabLayout = () => {
  const tabs = useMemo(
    () => [
      {
        name: "index",
        options: {
          tabBarIcon: TabBarIcon("email"),
        },
      },
      {
        name: "chat",
        options: {
          tabBarIcon: TabBarIcon("chat-bubble"),
        },
      },
      {
        name: "meeting",
        options: {
          tabBarIcon: TabBarIcon("videocam"),
        },
      },
    ],
    []
  );

  const screenOptions = useMemo(
    () => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        minHeight: 74,
      },
      tabBarItemStyle: {
        paddingBottom: 34,
        paddingTop: 14,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.orange[500],
      tabBarInactiveTintColor: colors.gray[400],
    }),
    [colors]
  );

  return (
    <Tabs screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tabs.Screen key={tab.name} {...tab} />
      ))}
    </Tabs>
  );
};

export default TabLayout;
