import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export const MenuButton = () => {
  const navigation = useNavigation();
  const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());

  return (
    <Pressable onPress={toggleMenu}>
      <MaterialIcons name="menu" size={22} color={colors.white} />
    </Pressable>
  );
};
