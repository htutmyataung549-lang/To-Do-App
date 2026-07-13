import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function Header() {
  return (
    <View className="mt-12 mb-6">
      <Text className="text-gray-500">Good Morning 👋</Text>

      <Text className="text-3xl font-bold mt-1">My Todo</Text>

      <Text className="text-gray-500 mt-2">Today 5 Tasks</Text>
    </View>
  );
}
