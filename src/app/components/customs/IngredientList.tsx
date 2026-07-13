import { RecipeDetail } from "@/types/todo";
import React from "react";
import { Pressable, Text, View } from "react-native";

interface IngredientList {
  receipe: RecipeDetail;
}
export default function IngredientList({ receipe }: IngredientList) {
  const list: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = receipe[`strIngredient${i}`];
    const measure = receipe[`strMeasure${i}`]
    if (ingredient && ingredient.trim() !== "") {
      list.push(`${measure ? measure.trim() : ""} ${ingredient.trim()}`);
    }
  }
  return (
    <View>
        {list.map((item,index) => (
            <Text key={index} className="text-slate-600 my-1 text-base"> {item} </Text>
        ))}
    </View>
  )
}
