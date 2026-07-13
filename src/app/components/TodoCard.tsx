import { Text } from "@/components/ui/text";
import { Todo } from "@/types/todo";
import { View } from "react-native";

interface Props {
  todo: Todo;
}

export default function TodoCard({ todo }: Props) {
  return (
    <View className="bg-gray-300 rounded-xl mt-4 p-4 shadow">
      <Text className="font-bold text-black text-lg">{todo.title}</Text>
      <Text className="text-gray-500 mt-1">{todo.description}</Text>
    </View>
  );
}
