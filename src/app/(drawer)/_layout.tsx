import { useCallback, useMemo } from "react";
import { Drawer } from "expo-router/drawer";

import type {
  DrawerContentComponentProps,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import type { DrawerNavigationConfig } from "@react-navigation/drawer/lib/typescript/src/types";

import { DrawerContent } from "@/components/DrawerContent";
import { CustomOptions } from "@/types/navigation";
import { drawerOptions } from "@/utils/drawer";

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

  const drawerScreenOptions: CustomOptions = useMemo(
    () => ({
      title: "Todas as caixas de entrada",
      iconName: "all-inbox",
      isDivider: true,
      notifications: 5,
    }),
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
