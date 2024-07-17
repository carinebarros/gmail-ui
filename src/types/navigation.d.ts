import type { DrawerNavigationOptions } from "@react-navigation/drawer";
import type { IconName } from "@/types";

interface CustomOptions extends DrawerNavigationOptions {
  iconName: IconName;
  isDivider?: boolean;
  notifications?: number;
  sectionTitle?: string;
}
