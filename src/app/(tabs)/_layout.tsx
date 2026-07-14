import { Tabs } from "expo-router";
import { Icon } from "@/components/ui/icon";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#0f172a", //clicking color
        tabBarInactiveTintColor: "#64748b", //before click color
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 60 + (insets.bottom ? insets.bottom - 10 : 10),
          paddingBottom: insets.bottom ? insets.bottom : 10,
          paddingTop: 8,
        },
      }}
    >
      {/* ၁။ Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />

      {/* ၂။ About Tab */}
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle" size={24} color={color} />
          ),
        }}
      />

      {/* ၃။ Setting Tab */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-sharp" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
