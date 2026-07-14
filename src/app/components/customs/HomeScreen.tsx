import { RecipeSummary } from "@/types/todo";
import { useRouter } from "expo-router";
import { Spinner } from "@/components/ui/spinner";
import React, { useEffect, useState } from "react";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Heading } from "@/components/ui/heading";
import RecipeCard from "./RecipeCard";
import { Ionicons } from "@expo/vector-icons";

const CATEGORIES_LIST = [
  { id: "1", name: "Seafood", icon: "🐟" },
  { id: "2", name: "Beef", icon: "🥩" },
  { id: "3", name: "Chicken", icon: "🍗" },
  { id: "4", name: "Dessert", icon: "🍰" },
  { id: "5", name: "Vegetarian", icon: "🥗" },
  { id: "6", name: "Pasta", icon: "🍝" }
];

export default function HomeScreen() {
  const router = useRouter();

  const [receipes, setReceipes] = useState<RecipeSummary[]>([]);
  const [filteredReceipes, setFilteredReceipes] = useState<RecipeSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Seafood");

  const fetchReceipes = async (categoryName : string) => {
    setLoading(true);
    setError(null);
    setSearchQuery("")
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();
      if (!data.meals) {
        throw new Error("Can't not found Recipe");
      }
      // console.log("Recipe : ", data);
      setReceipes(data.meals || []);
      setFilteredReceipes(data.meals || []);
    } catch (err: any) {
      console.error("Error fetching:", err);
      setError(err.message || "Something is wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchReceipes(selectedCategory);
  }, []);

  const handleCategoryPress = (categoryName: string) => {
    setSelectedCategory(categoryName);
    fetchReceipes(categoryName); 
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === "") {
      setFilteredReceipes(receipes);
    } else {
      const filtered = receipes.filter((receipe) =>
        receipe.strMeal.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredReceipes(filtered);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 bg-slate-50 p-4">
        <Heading
          size="2xl"
          className="text-slate-800 mb-4 font-extrabold animate-pulse"
        >
          Loading Recipes...
        </Heading>
        {/* Skeleton UI  */}
        {[1, 2, 3].map((key) => (
          <View
            key={key}
            className="mb-4 bg-slate-200 rounded-xl h-52 animate-pulse p-4 justify-end"
          >
            <View className="h-6 bg-slate-300 w-3/4 rounded mb-2" />
            <View className="h-10 bg-slate-300 w-full rounded-lg" />
          </View>
        ))}
      </View>
    );
  }
  if (error) {
    return (
      <View className="flex-1 justify-center items-center p-6 bg-slate-50">
        <Ionicons name="cloud-offline-outline" size={64} color="#94a3b8" />
        <Text className="text-lg font-bold text-slate-700 mt-4 text-center">
          Something went wrong
        </Text>
        <Text className="text-sm text-slate-500 mt-2 mb-6 text-center">
          {error}
        </Text>
        <TouchableOpacity
          onPress={() => fetchReceipes(selectedCategory)}
          className="flex-row items-center bg-blue-600 px-6 py-3 rounded-xl active:opacity-80"
        >
          <Ionicons name="refresh" size={18} color="white" />
          <Text className="text-white font-bold ml-2">Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View className="flex-1 bg-slate-50 p-4">
      <Heading size="2xl" className="text-slate-800 mb-4 font-extrabold">
        Seafood Recipes 🐟
      </Heading>
      <Input className="bg-white rounded-xl border-slate-200 mb-4 focus:border-blue-500">
        <InputSlot className="pl-3">
          <Ionicons name="search" size={18} color="#94a3b8" />
        </InputSlot>
        <InputField
          value={searchQuery}
          onChangeText={handleSearch}
          placeholder={`Search in ${selectedCategory}...`}
          className="text-slate-600 font-bold"
        />
        {searchQuery.length > 0 && (
          <InputSlot className="pr-3" onPress={() => handleSearch("")}>
            <Ionicons name="close-circle" size={18} color="#94a3b8" />
          </InputSlot>
        )}
      </Input>

      {/* 💡 Categories Horizontal List */}
      <View className="mb-2">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES_LIST}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isSelected = item.name === selectedCategory;
            return (
              <TouchableOpacity
                onPress={() => handleCategoryPress(item.name)}
                className={`flex-row items-center px-4 py-2 mr-3 rounded-full border ${
                  isSelected 
                    ? "bg-slate-800 border-slate-800" 
                    : "bg-white border-slate-200"
                }`}
              >
                <Text className="mr-1 text-base">{item.icon}</Text>
                <Text className={`font-semibold ${isSelected ? "text-white" : "text-slate-600"}`}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {filteredReceipes.length === 0 ? (
        <View className="flex-1 justify-center items-center pt-10">
          <Ionicons name="search-outline" size={48} color="#cbd5e1" />
          <Text className="text-slate-400 mt-2 font-medium">
            Results no found
          </Text>
        </View>
      ) : (
        <FlatList
          className="mt-4"
          data={filteredReceipes}
          keyExtractor={(item: RecipeSummary) => item.idMeal}
          renderItem={({ item }: { item: RecipeSummary }) => (
            <RecipeCard
              id={item.idMeal}
              title={item.strMeal}
              imageUrl={item.strMealThumb}
              onPress={(id) => {
                // console.log("Click Recipe ID:", id);
                router.push(`/recipe/${id}`);
              }}
            />
          )}
        />
      )}
    </View>
  );
}
