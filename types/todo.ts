export interface RecipeSummary {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCountry: string;
}

export interface MealDBListResponse {
  meals: RecipeSummary[] | null;
}

export interface RecipeDetail extends Record<string, string | undefined> {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strCategory?: string;
  strArea?: string;
  [key: string]: string | undefined; 
}

export interface MealDBDetailResponse {
  meals: RecipeDetail[] | null;
}