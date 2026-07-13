import { useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButton from "./FloatingButton";
import Header from "./Header";
import SearchBar from "./Search";
import TodoCard from "./TodoCard";
import ToDoModal from "./ToDoModal";

const todos = [
  {
    id: "1",
    title: "Learn React Native",
    description: "Complete NativeWind",
    completed: false,
  },
  {
    id: "2",
    title: "Go Gym",
    description: "Workout",
    completed: false,
  },
  {
    id: "3",
    title: "Buy Milk",
    description: "2 Bottles",
    completed: true,
  },
];

export default function HomeScreen() {
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <FlatList
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 100,
        }}
        data={todos}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <Header />
            <SearchBar />
          </>
        }
        renderItem={({ item }) => <TodoCard todo={item} />}
      />

      <ToDoModal open={open} onClose={() => setOpen(false)} />

      <FloatingButton
        onPress={() => {
          setOpen(true);
        }}
      />
    </SafeAreaView>
  );
}
