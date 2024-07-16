import { FlatList, ListRenderItem, Text } from "react-native";

import { EMAILS, EmailDataProps } from "@/utils/emails";
import { Email } from "./Email";
import { useCallback } from "react";

const ListHeaderComponent = () => (
  <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
    Entrada
  </Text>
);

export const EmailList = () => {
  const renderEmail: ListRenderItem<EmailDataProps> = useCallback(
    ({ item }) => <Email data={item} />,
    []
  );

  return (
    <FlatList
      data={EMAILS}
      keyExtractor={(item) => item.id}
      renderItem={renderEmail}
      contentContainerClassName="gap-6"
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};
