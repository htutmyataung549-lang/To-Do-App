import { RecipeSummary } from '@/types/todo';
import { useRouter } from 'expo-router'
import { Spinner } from '@/components/ui/spinner';
import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { Heading } from '@/components/ui/heading';
import RecipeCard from './RecipeCard';

export default async function ahomeScreen() {
    const router = useRouter();

    const [receipes , setReceipes] = useState<RecipeSummary[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchReceipes = async () => {
        setLoading(true);
        try{

          const response  = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
          const data = await response.json();

          setReceipes(data.meals || [])

        }catch(err){
          console.error("Error fetching:", err );
        }finally{
          setLoading(false);
        }
      }
      fetchReceipes();
    },[]);

    if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Spinner size="large" />
      </View>
    );
  }
  return (
    <View className='flex-1 bg-slate-50 p-4'>
      <Heading size="2xl" className="text-slate-800 mb-4 font-extrabold">Seafood Recipes 🐟</Heading>
      <FlatList data={receipes} keyExtractor={(item : RecipeSummary) => item.strMeal}
      renderItem={({item} : {item : RecipeSummary}) => (
        <RecipeCard id={item.idMeal} title={item.strMeal} imageUrl={item.strMealThumb}  onPress={(id) => router.push('/')} />
      )}
       />
    </View>
  )
}
