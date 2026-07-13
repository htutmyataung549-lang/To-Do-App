import React from "react";
import { Pressable, View } from "react-native";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";

interface RecipeCardProps {
  id: string;
  title: string;
  imageUrl: string;
  onPress: (id: string) => void;
}

export default function RecipeCard({
  id,
  title,
  imageUrl,
  onPress,
}: RecipeCardProps) {
  return (
    <Pressable>
      <Card size="default"  className="p-0 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100">
        <Image
          source={{ uri: imageUrl }}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </Card>
      <View className="p-4">
        <Heading size="md" className="text-slate-950 font-semibold">
          {title}
        </Heading>
      </View>
    </Pressable>
  );
}
