import { useCallback, useMemo } from "react";
import { Drawer } from "expo-router/drawer";

import type {
  DrawerContentComponentProps,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import type { DrawerNavigationConfig } from "@react-navigation/drawer/lib/typescript/src/types";

import { drawerOptions } from "@/utils/drawer";

import { DrawerContent } from "@/components/DrawerContent";

const DrawerLayout = () => {
  const screenOptions: DrawerNavigationOptions = useMemo(
    () => ({
      headerShown: false,
      drawerStyle: {
        width: "75%",
      },
    }),
    []
  );

  const drawerContent: DrawerNavigationConfig["drawerContent"] = useCallback(
    (props: DrawerContentComponentProps) => <DrawerContent {...props} />,
    []
  );

  return (
    <Drawer
      defaultStatus="open"
      screenOptions={screenOptions}
      drawerContent={drawerContent}
    >
      {drawerOptions.map(({ name, ...option }) => (
        <Drawer.Screen key={option.title} name={name} options={option} />
      ))}
    </Drawer>
  );
};

export default DrawerLayout;
