import { View, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-slate-50">
      <Text className="text-xl font-bold text-slate-800">Settings Screen ⚙️</Text>
      <Text className="text-slate-500 mt-1">App Configuration & Theme options.</Text>
    </View>
  );
}