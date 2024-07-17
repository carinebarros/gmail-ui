import { Pressable } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

import { colors } from "@/styles/colors";

export const MenuButton = () => {
  const navigation = useNavigation();
  const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());

  return (
    <Pressable onPress={toggleMenu}>
      <MaterialIcons name="menu" size={22} color={colors.white} />
    </Pressable>
  );
};
