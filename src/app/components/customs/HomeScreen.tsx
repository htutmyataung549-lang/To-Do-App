import { RecipeSummary } from "@/types/todo";
import { useRouter } from "expo-router";
import { Spinner } from "@/components/ui/spinner";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Heading } from "@/components/ui/heading";
import RecipeCard from "./RecipeCard";

export default function HomeScreen() {
  const router = useRouter();

  const [receipes, setReceipes] = useState<RecipeSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReceipes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
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
      } catch (err : any) {
        console.error("Error fetching:", err);
        setError(err.message || "Something is wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchReceipes();
  }, []);


  if (loading) {
    return (
      <View className="flex-1 bg-slate-50 p-4">
        <Heading size="2xl" className="text-slate-800 mb-4 font-extrabold animate-pulse">
          Loading Recipes...
        </Heading>
        {/* Skeleton UI  */}
        {[1, 2, 3].map((key) => (
          <View key={key} className="mb-4 bg-slate-200 rounded-xl h-52 animate-pulse p-4 justify-end">
            <View className="h-6 bg-slate-300 w-3/4 rounded mb-2" />
            <View className="h-10 bg-slate-300 w-full rounded-lg" />
          </View>
        ))}
      </View>
    );
  }
  return (
    <View className="flex-1 bg-slate-50 p-4">
      <Heading size="2xl" className="text-slate-800 mb-4 font-extrabold">
        Seafood Recipes 🐟
      </Heading>
      <FlatList
        className="mt-4"
        data={receipes}
        keyExtractor={(item: RecipeSummary) => item.strMeal}
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
    </View>
  );
}
