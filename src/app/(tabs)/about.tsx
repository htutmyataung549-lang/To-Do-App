import { View, Text } from 'react-native';

export default function AboutScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-slate-50 p-6">
      <Text className="text-xl font-bold text-slate-800">About App</Text>
      <Text className="text-slate-500 text-center mt-2 leading-relaxed">
        This app helps you discover amazing seafood recipes instantly. Powered by TheMealDB API.
      </Text>
    </View>
  );
}