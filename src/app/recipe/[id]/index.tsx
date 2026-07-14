// import React, { useEffect, useState } from 'react';
// import { ScrollView, View } from 'react-native';
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import { Heading } from '@/components/ui/heading';
// import { Text } from '@/components/ui/text';
// import { Button, ButtonText } from '@/components/ui/button';
// import { Spinner } from '@/components/ui/spinner';
// import { MealDBDetailResponse, RecipeDetail } from '@/types/todo';
// import RecipeAccordion from '@/app/components/customs/RecipeAccordion';

// export default function RecipeDetailScreen() {
//   const { id } = useLocalSearchParams<{ id: string }>();
//   const router = useRouter();
//   const [recipe, setRecipe] = useState<RecipeDetail | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     if (!id) return;
    
//     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//       .then((res) => res.json())
//       .then((data: MealDBDetailResponse) => {
//         if (data.meals && data.meals.length > 0) {
//           setRecipe(data.meals[0]);
//         }
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [id]);

//   if (loading) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <Spinner size="large" />
//       </View>
//     );
//   }

//   if (!recipe) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <Text>Recipe not found!</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView className="flex-1 bg-white">
//       <View className="p-5">
//         <Heading size="xl" className="text-slate-900 mb-4 font-bold">{recipe.strMeal}</Heading>

//         <RecipeAccordion receipe={recipe} />

//         <Button  className="mt-8 bg-slate-900 rounded-xl" onPress={() => router.back()}>
//           <ButtonText>Go To Home</ButtonText>
//         </Button>
//       </View>
//     </ScrollView>
//   );
// }

import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { MealDBDetailResponse, RecipeDetail } from '@/types/todo';
import RecipeAccordion from '../../components/customs/RecipeAccordion'; 

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [recipe, setRecipe] = useState<RecipeDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data: MealDBDetailResponse) => {
        if (data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Spinner size="large" />
      </View>
    );
  }

  if (!recipe) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Recipe not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-5">
        <Heading size="xl" className="text-slate-900 mb-4 font-bold">{recipe.strMeal}</Heading>

        <RecipeAccordion receipe={recipe} />

        <Button className="mt-8 bg-blue-500 rounded-xl" onPress={() => router.back()}>
          <ButtonText className='font-bold text-slate-200'>Go To Home</ButtonText>
        </Button>
      </View>
    </ScrollView>
  );
}