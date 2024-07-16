import { View } from "react-native";

import { Input } from "@/components/Input";
import { Avatar } from "@/components/Avatar";
import { MenuButton } from "@/components/MenuButton";
import { FloatButton } from "@/components/FloatButton";
import { EmailList } from "@/components/EmailList";

const Home = () => {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar source={{ uri: "https://picsum.photos/id/91/200" }} />
      </Input>

      <EmailList />

      <FloatButton label="Entrada" icon="edit" />
    </View>
  );
};

export default Home;
