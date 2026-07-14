import React from "react";
import { View } from "react-native";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Button, ButtonText } from "@/components/ui/button";

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
    <Card
      size="sm"
      className="p-0 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 mb-5"
    >
      <Image
        source={{ uri: imageUrl }}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <View className="p-4">
        <Heading size="md" className="text-slate-950 font-semibold mb-3">
          {title}
        </Heading>

        <Button
          size="sm"
          className="bg-blue-500 rounded-xl w-full py-2.5 active:opacity-90"
          onPress={() => onPress(id)}
        >
          <ButtonText className="text-white font-bold text-center">
            View Details →
          </ButtonText>
        </Button>
      </View>
    </Card>
  );
}